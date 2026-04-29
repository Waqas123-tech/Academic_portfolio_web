import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Supervisor from './components/Supervisor';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Skills />
      <Projects />
      <Publications />
      <Supervisor />
      <Contact />
    </div>
  );
}

export default App;