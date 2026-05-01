import React from 'react';
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
import Supervisor from './components/Supervisor';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Quotes />
      <TestimonialsSection />
      <Research />
      <Skills />
      <Projects />
      <Publications />
      <BlogSection />
      <Supervisor />
      <Contact />
    </div>
  );
}

export default App;