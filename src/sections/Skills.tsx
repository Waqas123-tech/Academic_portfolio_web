import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Brain, 
  Search,
  Layers
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, color: '#00F0FF' },
      { name: 'JavaScript', level: 75, color: '#F59E0B' },
      { name: 'HTML & CSS', level: 80, color: '#EC4899' },
    ],
    icon: Code,
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'Supervised & Unsupervised Learning', level: 85, color: '#00F0FF' },
      { name: 'Deep Learning (Neural Networks)', level: 70, color: '#A78BFA' },
      { name: 'Explainable AI (XAI)', level: 75, color: '#4ECDC4' },
      { name: 'Model Evaluation & Optimization', level: 80, color: '#FF6B6B' },
    ],
    icon: Brain,
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'Scikit-learn', level: 90, color: '#00F0FF' },
      { name: 'TensorFlow / PyTorch', level: 65, color: '#F59E0B' },
      { name: 'Pandas, NumPy, Matplotlib', level: 88, color: '#4ECDC4' },
      { name: 'React (Frontend)', level: 70, color: '#61DAFB' },
    ],
    icon: Layers,
  },
  {
    title: 'Research & Methodology',
    skills: [
      { name: 'Systematic Literature Review (SLR)', level: 85, color: '#00F0FF' },
      { name: 'Data Analysis & Preprocessing', level: 90, color: '#A78BFA' },
      { name: 'Scientific Writing & Publication', level: 80, color: '#4ECDC4' },
    ],
    icon: Search,
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skills animation on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        onEnter: () => {
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              gsap.to({}, {
                duration: 1.2,
                ease: 'power2.out',
                onUpdate: function() {
                  const progress = this.progress();
                  setAnimatedSkills(prev => ({
                    ...prev,
                    [skill.name]: Math.round(skill.level * progress),
                  }));
                },
              });
            });
          });
        },
        once: true,
      });

      // Categories entrance animation
      const categories = categoriesRef.current?.querySelectorAll('.skill-category');
      if (categories) {
        gsap.fromTo(
          categories,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: 'top 80%',
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
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan text-sm tracking-[0.2em] uppercase mb-4 block">
            Technical Proficiency
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight mb-6">
            Skills & Tools
          </h2>
          <p className="text-distant max-w-2xl mx-auto text-lg">
            A comprehensive toolkit developed through academic research and hands-on projects, 
            combining programming expertise with domain knowledge in AI and machine learning.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div
          ref={categoriesRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category glass rounded-3xl p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="font-display text-xl text-starlight">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-distant text-sm">{skill.name}</span>
                      <span className="text-cyan font-display text-sm">
                        {animatedSkills[skill.name] || 0}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-space-lighter/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${animatedSkills[skill.name] || 0}%`,
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}50`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-display text-cyan mb-2">9+</div>
            <div className="text-distant text-sm">Research Papers</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-display text-cyan mb-2">3+</div>
            <div className="text-distant text-sm">Active Projects</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-display text-cyan mb-2">2+</div>
            <div className="text-distant text-sm">Years Experience</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-display text-cyan mb-2">100%</div>
            <div className="text-distant text-sm">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
