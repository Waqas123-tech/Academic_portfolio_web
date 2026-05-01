import React, { useState } from 'react';
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
    <div className="app">
      <Navbar onNavigate={navigate} />
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
