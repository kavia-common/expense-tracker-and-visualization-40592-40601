import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

/**
 * PUBLIC_INTERFACE
 * Layout composes the app shell with sidebar, header, and main area.
 * It renders children in the main content area.
 */
export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <Header />
      <main className="app-main">
        {children}
      </main>
    </div>
  );
}
