import React from 'react';
import ThemeToggle from './ThemeToggle';

/**
 * PUBLIC_INTERFACE
 * Header renders the top bar with search, filter area, and theme toggle.
 */
export default function Header() {
  return (
    <header className="app-header">
      <div className="header-row">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <input
            className="input"
            placeholder="Search expenses..."
            aria-label="Search expenses"
            style={{ width: 260 }}
          />
          <span className="mono-label" aria-hidden="true">···</span>
          <div className="mono-label" title="Filters placeholder">filters: none</div>
        </div>
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
