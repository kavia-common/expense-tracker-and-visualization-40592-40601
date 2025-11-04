import React from 'react';
import './index.css';
import Dashboard from './pages/Dashboard';

/**
 * PUBLIC_INTERFACE
 * App is retained for compatibility; it currently renders Dashboard.
 * Primary routing is handled by Router.jsx.
 */
function App() {
  return <Dashboard />;
}

export default App;
