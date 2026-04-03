import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animation
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate heading characters
      if (headingRef.current) {
        const chars = headingRef.current.querySelectorAll('.char');
        tl.fromTo(
          chars,
          { y: 100, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power3.out',
          }
        );
      }

      // Animate tagline
      tl.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );

      // Animate scroll hint
      tl.fromTo(
        scrollHintRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      );

      // Scroll-triggered exit animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress > 0.5) {
            const exitProgress = (progress - 0.5) * 2;
            gsap.to(headingRef.current, {
              scale: 1 + exitProgress * 2,
              opacity: 1 - exitProgress,
              filter: `blur(${exitProgress * 20}px)`,
              duration: 0.1,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Particle animation
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const particles = particlesRef.current.querySelectorAll('.particle');
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        y: '-=100',
        x: `+=${Math.sin(i) * 50}`,
        opacity: 0,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        delay: i * 0.3,
        ease: 'none',
      });
    });
  }, []);

  const headingText = 'WAQAS AHMAD';

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-cyan/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${80 + Math.random() * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-space pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Decorative Element */}
        <div className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-fade-in">
          <Sparkles className="w-5 h-5 text-cyan animate-pulse-glow" />
          <span className="text-sm tracking-[0.3em] text-distant uppercase">
            Undergraduate Researcher
          </span>
          <Sparkles className="w-5 h-5 text-cyan animate-pulse-glow" />
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="font-display font-bold text-starlight mb-6 perspective-1000"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          {headingText.split('').map((char, i) => (
            <span
              key={i}
              className="char inline-block"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-lg md:text-xl text-cyan/80 max-w-2xl mx-auto mb-12 opacity-0"
        >
          Dedicated AI and Machine Learning Researcher Committed to Solving Complex Real-World Problems
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in stagger-3">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-3 bg-cyan text-space font-semibold rounded-full overflow-hidden transition-all hover:shadow-glow"
          >
            <span className="relative z-10">Discover My Work</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#publications"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border border-space-lighter text-starlight rounded-full hover:border-cyan hover:text-cyan transition-all"
          >
            View Publications
          </a>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <span className="text-xs text-distant tracking-wider">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-5 h-5 text-cyan animate-bounce" />
      </div>

      {/* Side Decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-space-lighter to-transparent" />
        <span className="text-xs text-distant tracking-wider rotate-180" style={{ writingMode: 'vertical-rl' }}>
          AWKUM
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-space-lighter to-transparent" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-space-lighter to-transparent" />
        <span className="text-xs text-distant tracking-wider rotate-180" style={{ writingMode: 'vertical-rl' }}>
          AI & ML RESEARCH
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-space-lighter to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
