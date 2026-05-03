import React from 'react';
import { Moon, Sun } from 'lucide-react';

function Navbar({ theme = 'light', onToggleTheme = () => {}, onNavigate = () => {} }) {
  const linkClass = "text-sm font-medium text-slate-700 transition hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400";

  return (
    <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-xl py-4 shadow-lg shadow-slate-800/5 dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-teal-600 dark:text-white"
        >
          Waqas Ahmad
        </button>
        <div className="flex flex-wrap items-center gap-4">
          <nav className="flex flex-wrap items-center gap-5">
            <button type="button" className={linkClass} onClick={() => onNavigate('about')}>About</button>
            <button type="button" className={linkClass} onClick={() => onNavigate('research')}>Research</button>
            <button type="button" className={linkClass} onClick={() => onNavigate('projects')}>Projects</button>
            <button type="button" className={linkClass} onClick={() => onNavigate('blogs')}>Blogs</button>
          </nav>
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
