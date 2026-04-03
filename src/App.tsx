import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Sections
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import ResearchInterests from './sections/ResearchInterests';
import Publications from './sections/Publications';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Supervisor from './sections/Supervisor';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CustomCursor from './components/CustomCursor';
import StarField from './components/StarField';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scroll behavior
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger on load
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-space overflow-x-hidden">
      {/* Background Effects */}
      <StarField />
      
      {/* Custom Cursor (desktop only) */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <ResearchInterests />
        <Publications />
        <Skills />
        <Projects />
        <Supervisor />
        <Team />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
