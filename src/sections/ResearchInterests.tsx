import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Network, Eye, Activity } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

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
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.research-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
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

        {/* Research Areas Accordion */}
        <div
          ref={cardsRef}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4" onValueChange={setActiveCard}>
            {researchAreas.map((area, index) => {
              const itemValue = `item-${index}`;
              const isActive = activeCard === itemValue;
              return (
                <AccordionItem key={index} value={itemValue} className="research-card glass rounded-2xl px-6 border-0 overflow-hidden">
                  <AccordionTrigger className="hover:no-underline py-6 px-0 group">
                    <div className="flex items-start gap-4 text-left">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${area.color}15` }}
                      >
                        <area.icon
                          className="w-6 h-6"
                          style={{ color: area.color }}
                        />
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <h3 
                          className="font-display text-xl md:text-2xl text-starlight group-hover:text-cyan transition-colors duration-300"
                          style={{
                            color: isActive ? area.color : undefined,
                          }}
                        >
                          {area.title}
                        </h3>
                        <p className="text-distant text-sm mt-1">Click to expand...</p>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-0 pb-6">
                    <div className="pl-16">
                      <p className="text-distant leading-relaxed text-base">
                        {area.description}
                      </p>
                    </div>
                  </AccordionContent>

                  {/* Animated Border Accent */}
                  <div
                    className="absolute top-0 left-0 h-full w-1 transition-all duration-300 group-hover:bg-opacity-100"
                    style={{
                      background: `linear-gradient(to bottom, ${area.color}, transparent)`,
                      opacity: isActive ? 1 : 0.3,
                    }}
                  />
                </AccordionItem>
              );
            })}
          </Accordion>
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
