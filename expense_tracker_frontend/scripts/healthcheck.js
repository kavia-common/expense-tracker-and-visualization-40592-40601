#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * Healthcheck script for CI/preview environments.
 *
 * Purpose:
 * - Verifies that a production build completes successfully.
 * - Emits warnings if recommended environment variables are missing, but does not fail the build due to env absence.
 * - Ensures the process exits with 0 on success so CI does not treat long-lived servers (or kills) as failures.
 *
 * Usage:
 *   npm run healthcheck
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
  } else {
    console.log('[healthcheck] All recommended env vars are present or optional.');
  }
}

// Run CRA production build and exit 0 on success
function runBuild() {
  console.log('[healthcheck] Running CRA production build (non-interactive)...');
  const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      CI: 'true',
      // Ensure predictable non-interactive build
      BROWSER: 'none',
      // Avoid telemetry or extra noise if present in env list
      REACT_APP_NEXT_TELEMETRY_DISABLED:
        process.env.REACT_APP_NEXT_TELEMETRY_DISABLED ?? '1'
    }
  });

  child.on('exit', (code, signal) => {
    if (signal) {
      // In some CI environments, processes may be killed due to time/resource limits.
      // If we received SIGKILL/SIGTERM (commonly logged as 137), we conservatively fail,
      // but provide guidance so CI logs are clearer.
      console.log(
        `[healthcheck] Build received signal: ${signal}. This likely indicates external termination (e.g., CI timeout or memory limit).`
      );
      // Exit non-zero to signal CI, but use a generic code 1.
      process.exit(1);
    }
    if (code === 0) {
      console.log('[healthcheck] Build succeeded. Healthcheck OK.');
      process.exit(0);
    }
    // Some CI wrappers map resource kills to code 137; surface a helpful hint.
    if (code === 137) {
      console.error(
        '[healthcheck] Build exited with code 137 (SIGKILL). This usually indicates the runner killed the process due to resource limits. Consider increasing memory/time or using start:preview for preview checks.'
      );
    } else {
      console.error(`[healthcheck] Build failed with code ${code}.`);
    }
    process.exit(code || 1);
  });
}

console.log('[healthcheck] CI:', process.env.CI ? 'true' : 'false');
warnMissingEnv();
runBuild();
