# expense-tracker-and-visualization-40592-40601

This workspace contains the expense_tracker_frontend container.

CI-safe usage for expense_tracker_frontend:
- To verify builds: cd expense_tracker_frontend && npm ci && npm run healthcheck
- For preview start checks that must exit immediately: npm run start:preview
- In CI, `npm start` is CI-aware and will no-op when CI=true to avoid long-lived dev servers. Prefer `npm run start:ci` if your CI checks for a start script specifically.

Notes:
- The development server binds to HOST=0.0.0.0 and defaults to port 3000 unless REACT_APP_PORT is set.
- "Browserslist data is old" and webpack-dev-server deprecation warnings during dev are non-fatal and can be ignored in CI.
- Use `npm test` for non-interactive tests (already configured with CI=true).
