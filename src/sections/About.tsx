import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BookOpen, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: BookOpen, value: '9+', label: 'Research Papers' },
  { icon: FileText, value: '3', label: 'Published' },
  { icon: Award, value: '6', label: 'Under Review' },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation with circular mask
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        {
          clipPath: 'circle(100% at 50% 50%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content slide up animation
      const contentElements = contentRef.current?.querySelectorAll('.animate-item');
      if (contentElements) {
        gsap.fromTo(
          contentElements,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Stats counter animation
      const statCards = statsRef.current?.querySelectorAll('.stat-card');
      if (statCards) {
        gsap.fromTo(
          statCards,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-cyan text-sm tracking-[0.2em] uppercase mb-4 block">
            Introduction
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight">
            About Me
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden"
          >
            <img
              src="/profile_waqas.png"
              alt="Waqas Ahmad"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-cyan/20 rounded-3xl pointer-events-none" />
            <div className="absolute -inset-4 border border-space-lighter/30 rounded-[2rem] pointer-events-none -z-10" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-full">
              <span className="text-cyan text-sm font-medium">CS Undergraduate</span>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="animate-item text-xl md:text-2xl text-starlight leading-relaxed">
              I am <span className="text-cyan font-semibold">Waqas Ahmad</span>, a final-year Computer Science student at Abdul Wali Khan University Mardan and an emerging researcher focused on Artificial Intelligence and Machine Learning.
            </p>
            
            <p className="animate-item text-distant leading-relaxed">
              My work is centered on developing intelligent, data-driven solutions for real-world problems, particularly in healthcare and neuroscience. I have contributed to multiple research articles, with several currently under review in reputable journals.
            </p>
            
            <p className="animate-item text-distant leading-relaxed">
              My research interests include Explainable AI, predictive modeling, and computational approaches to understanding brain-related disorders. I aim to pursue advanced research in AI-driven healthcare systems and contribute to impactful scientific innovations.
            </p>

            {/* Quote */}
            <blockquote className="animate-item relative pl-6 border-l-2 border-cyan/50 my-8">
              <p className="text-starlight/80 italic text-lg">
                "Research is not just about knowledge, but about creating solutions that impact society."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card glass rounded-2xl p-8 text-center group hover:border-cyan/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-display text-4xl md:text-5xl text-starlight mb-2">
                {stat.value}
              </div>
              <div className="text-distant text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
