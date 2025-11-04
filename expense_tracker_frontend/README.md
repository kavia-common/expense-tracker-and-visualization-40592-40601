# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- Lightweight: No heavy UI frameworks - uses only vanilla CSS and React
- Modern UI: Clean, responsive design with KAVIA brand styling
- Fast: Minimal dependencies for quick loading times
- Simple: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### Local development
- `npm start` — runs the app in development mode (dev server).  
  Open http://localhost:3000 to view it in your browser.

Environment suggestions for local dev:
- `BROWSER=none` to avoid auto-opening
- `HOST=0.0.0.0` to bind to all interfaces
- `PORT` or `REACT_APP_PORT` to adjust port (defaults to 3000)

### CI/Preview environments

Some CI systems terminate long-running foreground processes (which can appear as exit code 137/kill -9) and mistakenly treat that as a build failure. To avoid this:
- Prefer `npm run start:ci` or `npm run start:preview` — both are intentional no-ops that immediately exit with code 0. They are safe for CI systems that probe for a “start” script but do not want a long-running process.
- If you need to validate that the project builds successfully in CI, use `npm run healthcheck` — it performs a production build and exits 0 on success.
- Do NOT run `npm start` in CI unless your environment expects a long-lived dev server and can keep it running. Otherwise, your CI may send SIGKILL leading to exit code 137.

Tip: You may see warnings like “browserslist data is old” or deprecation messages from webpack-dev-server; these are non-fatal and do not affect the build. They can be ignored safely for CI.

### Recommended CI steps

- Install deps: `npm ci` (or `npm install`)
- Build once for verification: `npm run healthcheck`
- For preview checks that require a zero-duration “start”: `npm run start:preview`
- Optional: update Browserslist DB if needed (non-blocking): `npx update-browserslist-db@latest`

### Tests
- `npm test` — Launches the test runner in non-watch CI mode.

### Production build
- `npm run build` — Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build.

## Environment Variables

Set via CI/CD or a local `.env`:
- REACT_APP_API_BASE
- REACT_APP_BACKEND_URL
- REACT_APP_FRONTEND_URL
- REACT_APP_WS_URL
- REACT_APP_NODE_ENV
- REACT_APP_NEXT_TELEMETRY_DISABLED
- REACT_APP_ENABLE_SOURCE_MAPS
- REACT_APP_PORT
- REACT_APP_TRUST_PROXY
- REACT_APP_LOG_LEVEL
- REACT_APP_HEALTHCHECK_PATH
- REACT_APP_FEATURE_FLAGS
- REACT_APP_EXPERIMENTS_ENABLED

Note: The healthcheck will warn if recommended variables are missing but will not fail CI for absent values.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`.

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

- Code Splitting: https://facebook.github.io/create-react-app/docs/code-splitting
- Analyzing the Bundle Size: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
- Making a Progressive Web App: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
- Advanced Configuration: https://facebook.github.io/create-react-app/docs/advanced-configuration
- Deployment: https://facebook.github.io/create-react-app/docs/deployment
- `npm run build` fails to minify: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
