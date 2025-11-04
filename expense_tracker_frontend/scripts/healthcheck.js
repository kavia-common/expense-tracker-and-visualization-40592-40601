#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * Healthcheck script for CI/preview environments.
 *
 * - Verifies that a production build completes successfully.
 * - Emits warnings if recommended environment variables are missing, but does not fail the build.
 * - Ensures the process exits with 0 on success so CI does not treat long-lived servers (or kills) as failures.
 *
 * Environment variables this project recognizes (non-fatal if absent):
 * REACT_APP_API_BASE, REACT_APP_BACKEND_URL, REACT_APP_FRONTEND_URL, REACT_APP_WS_URL,
 * REACT_APP_NODE_ENV, REACT_APP_NEXT_TELEMETRY_DISABLED, REACT_APP_ENABLE_SOURCE_MAPS,
 * REACT_APP_PORT, REACT_APP_TRUST_PROXY, REACT_APP_LOG_LEVEL, REACT_APP_HEALTHCHECK_PATH,
 * REACT_APP_FEATURE_FLAGS, REACT_APP_EXPERIMENTS_ENABLED
 */

const { spawn } = require('child_process');

const recommendedEnv = [
  'REACT_APP_API_BASE',
  'REACT_APP_BACKEND_URL',
  'REACT_APP_FRONTEND_URL',
  'REACT_APP_WS_URL',
  'REACT_APP_NODE_ENV',
  'REACT_APP_NEXT_TELEMETRY_DISABLED',
  'REACT_APP_ENABLE_SOURCE_MAPS',
  'REACT_APP_PORT',
  'REACT_APP_TRUST_PROXY',
  'REACT_APP_LOG_LEVEL',
  'REACT_APP_HEALTHCHECK_PATH',
  'REACT_APP_FEATURE_FLAGS',
  'REACT_APP_EXPERIMENTS_ENABLED'
];

function warnMissingEnv() {
  const missing = recommendedEnv.filter((k) => !process.env[k]);
  if (missing.length) {
    console.log('[healthcheck] Warning: missing recommended env vars:', missing.join(', '));
  }
}

// Run CRA production build and exit 0 if successful
function runBuild() {
  console.log('[healthcheck] Running CRA production build...');
  const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      CI: 'true',
      // Ensure predictable non-interactive build
      BROWSER: 'none'
    }
  });

  child.on('exit', (code, signal) => {
    if (signal) {
      console.log(`[healthcheck] Build received signal: ${signal}. Treating as failure for healthcheck.`);
      process.exit(1);
    }
    if (code === 0) {
      console.log('[healthcheck] Build succeeded. Healthcheck OK.');
      process.exit(0);
    }
    console.error(`[healthcheck] Build failed with code ${code}.`);
    process.exit(code || 1);
  });
}

warnMissingEnv();
runBuild();
