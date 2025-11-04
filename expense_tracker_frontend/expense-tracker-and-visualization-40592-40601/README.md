# expense-tracker-and-visualization-40592-40601

This workspace contains the expense_tracker_frontend container.

CI-safe usage for expense_tracker_frontend:
- To verify builds: cd expense_tracker_frontend && npm ci && npm run healthcheck
- For preview start checks that must exit immediately: npm run start:preview
- In CI, `npm start` exits immediately with code 0 when CI=true to avoid long-lived dev servers and false failures due to forced termination (137). Prefer `npm run start:ci` if your CI checks for a start script specifically.

Notes:
- The development server binds to HOST=0.0.0.0 and uses REACT_APP_PORT (default 3000) for local runs.
- "Browserslist data is old" and webpack-dev-server deprecation warnings during dev are non-fatal and can be ignored in CI.
- Use `npm test` for non-interactive tests (already configured with CI=true).
