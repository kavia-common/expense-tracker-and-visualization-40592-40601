import React, { useEffect, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * ThemeToggle toggles between light and dark mode by setting data-theme on the documentElement.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  // Initialize from prefers-color-scheme or saved value
  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  const icon = theme === 'light' ? '🌙' : '☀️';

  return (
    <button type="button" className="btn" onClick={toggle} aria-label={label} title={label}>
      <span aria-hidden="true">{icon}</span>
      <span className="mono-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
