import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Quotes from './components/Quotes';
import TestimonialsSection from './components/TestimonialsSection';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import BlogSection from './components/BlogSection';
import BlogPage from './components/BlogPage';
import Supervisor from './components/Supervisor';
import Contact from './components/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const preferredTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferredTheme);
    document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const navigate = (target, blogId = null) => {
    if (target === 'blogs') {
      setActivePage('blogs');
      setSelectedBlogId(blogId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setActivePage('home');
    setSelectedBlogId(null);
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="app min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} onNavigate={navigate} />
      {activePage === 'home' ? (
        <>
          <Hero />
          <About />
          <Quotes />
          <Research />
          <Skills />
          <Projects />
          <Publications />
          <BlogSection onOpenBlog={(id) => navigate('blogs', id)} />
          <Supervisor />
          <TestimonialsSection />
          <Contact />
        </>
      ) : (
        <BlogPage selectedBlogId={selectedBlogId} onNavigate={navigate} />
      )}
    </div>
  );
}

export default App;
