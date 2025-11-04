# expense-tracker-and-visualization-40592-40601

This workspace contains the expense_tracker_frontend container.

CI-safe usage for expense_tracker_frontend:
- To verify builds: cd expense_tracker_frontend && npm ci && npm run healthcheck
- For preview start checks that must exit immediately: npm run start:preview
- Do not run `npm start` in CI; it launches a long-lived dev server and may be terminated (exit 137) by CI watchdogs. Use `npm run start:ci` instead if a start script is required to exist.

Notes:
- The development server binds to HOST=0.0.0.0 and defaults to port 3000 unless REACT_APP_PORT is set.
- "Browserslist data is old" and webpack-dev-server deprecation warnings during dev are non-fatal and can be ignored in CI.
- Use `npm test` for non-interactive tests (already configured with CI=true).
