import React from 'react';

function Navbar({ onNavigate = () => {} }) {
  const linkClass = "text-sm font-medium text-slate-700 transition hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400";

  return (
    <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Waqas Ahmad
        </button>
        <nav className="flex items-center gap-6">
          <button type="button" className={linkClass} onClick={() => onNavigate('about')}>About</button>
          <button type="button" className={linkClass} onClick={() => onNavigate('research')}>Research</button>
          <button type="button" className={linkClass} onClick={() => onNavigate('projects')}>Projects</button>
          <button type="button" className={linkClass} onClick={() => onNavigate('blogs')}>Blogs</button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;