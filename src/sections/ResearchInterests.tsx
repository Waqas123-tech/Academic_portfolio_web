import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Network, Eye, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const researchAreas = [
  {
    icon: Brain,
    title: 'Machine Learning & Predictive Modeling',
    description: 'Designing and implementing advanced machine learning algorithms for predictive analytics and intelligent decision-making. Skilled in classification, pattern recognition, and extracting meaningful insights from complex, real-world datasets. Experienced in building data-driven solutions with a strong emphasis on accuracy, performance, and scalability. Focused on applying AI techniques to healthcare and scientific domains to solve critical, real-world problems.',
    color: '#00F0FF',
  },
  {
    icon: Network,
    title: 'Deep Learning & Neural Networks',
    description: 'Designing and implementing advanced neural network architectures to solve complex, real-world problems. Experienced in building and optimizing deep learning models for high-dimensional and unstructured data. Skilled in applications such as medical imaging, signal processing, and natural language understanding. Focused on developing robust, scalable, and high-performance AI solutions for impactful domains.',
    color: '#A78BFA',
  },
  {
    icon: Eye,
    title: 'Explainable Artificial Intelligence (XAI)',
    description: 'Developing transparent and interpretable AI models that reveal the reasoning behind predictions. Skilled in applying XAI techniques to enhance trust, fairness, and accountability in machine learning systems. Focused on translating complex model behavior into clear, human-understandable insights. Dedicated to enabling reliable AI solutions for healthcare and other high-stakes, regulated domains.',
    color: '#4ECDC4',
  },
  {
    icon: Activity,
    title: 'Computational Neuroscience & Brain Disorders',
    description: 'Developing AI-driven computational models to understand and analyze complex neurological and brain-related conditions. Focused on leveraging machine learning to support early detection and prediction of disorders such as Autism Spectrum Disorder (ASD) and epileptic seizures. Designing data-driven systems that uncover hidden patterns in neurological signals and behavioral data. Committed to building intelligent solutions that improve early diagnosis, intervention, and clinical decision support. Driven by the goal of creating impactful AI systems that contribute to better outcomes for children affected by ASD and seizure disorders.',
    color: '#FF6B6B',
  },
];

const ResearchInterests = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.research-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
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
      id="research"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-8"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan text-sm tracking-[0.2em] uppercase mb-4 block">
            Areas of Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight mb-6">
            Research Interests
          </h2>
          <p className="text-distant max-w-2xl mx-auto text-lg">
            My research spans the intersection of artificial intelligence and healthcare, 
            focusing on developing intelligent systems that can make a real-world impact.
          </p>
        </div>

        {/* Research Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="research-card group relative glass rounded-3xl p-8 cursor-pointer perspective-1000"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${area.color}15, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${area.color}15` }}
              >
                <area.icon
                  className="w-7 h-7 transition-colors duration-300"
                  style={{ color: area.color }}
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-starlight mb-4 group-hover:text-cyan transition-colors">
                {area.title}
              </h3>
              <p className="text-distant leading-relaxed">
                {area.description}
              </p>

              {/* Animated Border */}
              <div
                className="absolute inset-0 rounded-3xl border border-space-lighter/50 group-hover:border-cyan/30 transition-colors duration-300 pointer-events-none"
              />

              {/* Corner Accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${area.color}10 50%)`,
                  borderRadius: '0 1.5rem 0 0',
                }}
              />

              {/* Active Indicator */}
              {activeCard === index && (
                <div className="absolute bottom-4 right-4 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{
                        backgroundColor: area.color,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-distant mb-6">
            Interested in collaborating on research in these areas?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan/50 text-cyan rounded-full hover:bg-cyan hover:text-space transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
