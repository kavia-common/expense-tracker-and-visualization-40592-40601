import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Sidebar displays primary navigation for the app using react-router NavLink.
 */
export default function Sidebar() {
  const nav = [
    { key: 'dashboard', label: 'Dashboard', to: '/dashboard', icon: '📊' },
    { key: 'expenses', label: 'Expenses', to: '/expenses', icon: '💸' },
    { key: 'categories', label: 'Categories', to: '/categories', icon: '🏷️' },
  ];

  return (
    <aside className="app-sidebar" role="navigation" aria-label="Primary">
      <div style={{ padding: '16px', borderBottom: '1px dotted var(--color-border)' }}>
        <div style={{ fontWeight: 700, color: 'var(--color-text)' }}>
          Ocean Tracker
        </div>
        <div className="mono-label">v0.1 • Retro+</div>
      </div>
      <nav style={{ paddingTop: '8px' }}>
        {nav.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span aria-hidden="true" style={{ width: 20, textAlign: 'center' }}>{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div style={{ marginTop: 'auto', padding: '12px', borderTop: '1px dotted var(--color-border)' }}>
        <div className="mono-label">ENV</div>
        <div className="text-muted" style={{ fontSize: 12 }}>
          {process.env.REACT_APP_NODE_ENV || 'development'}
        </div>
      </div>
    </aside>
  );
}
