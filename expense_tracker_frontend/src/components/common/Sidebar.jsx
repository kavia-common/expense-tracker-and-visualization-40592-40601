import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Sidebar displays primary navigation for the app.
 * For now, uses anchor links with hashes. Can be wired to react-router later.
 */
export default function Sidebar() {
  const nav = [
    { key: 'dashboard', label: 'Dashboard', href: '#/dashboard', icon: '📊' },
    { key: 'expenses', label: 'Expenses', href: '#/expenses', icon: '💸' },
    { key: 'categories', label: 'Categories', href: '#/categories', icon: '🏷️' },
  ];

  const activeKey = (typeof window !== 'undefined' && window.location.hash.replace('#/', '')) || 'dashboard';

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
          <a
            key={item.key}
            href={item.href}
            className={`nav-item ${activeKey === item.key ? 'active' : ''}`}
          >
            <span aria-hidden="true" style={{ width: 20, textAlign: 'center' }}>{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </a>
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
