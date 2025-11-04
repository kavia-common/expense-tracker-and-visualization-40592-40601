import React from 'react';

/**
 * PUBLIC_INTERFACE
 * NotFound renders when no route matches.
 */
export default function NotFound() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '60vh', textAlign: 'center' }}>
      <div>
        <div className="mono-label">404</div>
        <h1 style={{ margin: '8px 0' }}>Page not found</h1>
        <a href="/dashboard" className="btn">Go to Dashboard</a>
      </div>
    </div>
  );
}
