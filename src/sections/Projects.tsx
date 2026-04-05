import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Loader2, Brain, Activity, Bot } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Autism Detection in Female Children using Explainable ML',
    description: 'This work focuses on developing an intelligent and interpretable machine learning system to support the early identification of Autism Spectrum Disorder in children. The approach is designed to work fairly across both boys and girls, ensuring that detection is not biased toward any specific group. It analyzes behavioral and clinical patterns to improve the accuracy of diagnosis as well as to better understand the severity of the condition. A key aspect of this research is the use of explainable AI, which allows the model\'s decisions to be transparent and understandable for medical professionals rather than acting as a "black box." This helps clinicians trust and validate the predictions made by the system. Overall, the goal is to improve early screening, reduce delays in diagnosis, and support better intervention strategies. By combining machine learning with healthcare insights, the work aims to contribute to more reliable, ethical, and impactful solutions for autism detection.',
    image: '/project_autism.jpg',
    status: 'active',
    tags: ['Explainable AI', 'Healthcare', 'Machine Learning', 'ASD'],
    icon: Brain,
    color: '#00F0FF',
  },
  {
    title: 'Seizure Prediction using Deep Learning',
    description: 'This project focuses on building an advanced deep learning system to predict epileptic seizures in children before they occur. It uses spatial-aware neural network techniques, meaning the model is designed to understand patterns not only in time-based signals but also in how brain activity is distributed across different regions. The main goal is to improve prediction accuracy while also ensuring fairness across different pediatric age groups and developmental stages. Since brain signals can vary significantly as children grow, the model is designed to adapt to these variations instead of being biased toward a specific age group. By combining deep learning with fairness-aware design, the system aims to reduce prediction errors and ensure consistent performance for all children. Ultimately, this research contributes to more reliable and equitable AI-based healthcare tools for early seizure detection and prevention.',
    image: '/project_seizure.jpg',
    status: 'active',
    tags: ['Deep Learning', 'Neuroscience', 'Fairness', 'Healthcare'],
    icon: Activity,
    color: '#A78BFA',
  },
  {
    title: 'AI in Robotics Review and Analysis',
    description: 'This comprehensive review paper examines how artificial intelligence, machine learning, and deep learning techniques are being integrated into modern robotics systems. The work covers a wide range of applications, from autonomous navigation and object recognition to human-robot interaction and collaborative robotics. It explores how these AI technologies are transforming traditional robotics by enabling robots to learn from experience, adapt to new environments, and make intelligent decisions. The review discusses current challenges in AI-robotics integration, such as computational complexity, real-time processing requirements, and safety considerations. It also highlights emerging trends like edge computing for robotics, reinforcement learning for task optimization, and the development of more sophisticated sensor fusion techniques. By synthesizing research from multiple disciplines, this work provides insights into the future directions of AI-powered robotics and their potential impact on various industries including manufacturing, healthcare, and service robotics.',
    image: '/project_robotics.jpg',
    status: 'active',
    tags: ['Robotics', 'AI Review', 'Deep Learning', 'Automation'],
    icon: Bot,
    color: '#F59E0B',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card) => {
          const image = card.querySelector('.project-image');
          
          // Card entrance animation
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Parallax effect on image
          if (image) {
            gsap.to(image, {
              yPercent: -15,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-cyan text-sm tracking-[0.2em] uppercase mb-4 block">
            Current Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight mb-6">
            Active Projects
          </h2>
          <p className="text-distant max-w-2xl text-lg">
            Ongoing research projects that apply artificial intelligence and machine learning 
            to solve real-world problems in healthcare and technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <div
                key={index}
                className="project-card group relative glass rounded-3xl overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
                  <div
                    className="project-image absolute inset-0 scale-110"
                    // eslint-disable-next-line react/no-unknown-property
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-space via-space/50 to-transparent" />
                  
                  {/* Status Badge */}
                  {/* eslint-disable-next-line react/no-unknown-property */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full flex items-center gap-2"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    {/* eslint-disable-next-line react/no-unknown-property */}
                    <Loader2
                      className="w-4 h-4 animate-spin"
                      style={{ color: project.color }}
                    />
                    {/* eslint-disable-next-line react/no-unknown-property */}
                    <span className="text-sm font-medium" style={{ color: project.color }}>
                      Active
                    </span>
                  </div>

                  {/* Project Icon */}
                  {/* eslint-disable-next-line react/no-unknown-property */}
                  <div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <ProjectIcon className="w-5 h-5" style={{ color: project.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl text-starlight mb-3 group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-distant text-sm leading-relaxed mb-4 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-96 group-hover:opacity-100">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-space-lighter/50 text-distant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border border-cyan/0 group-hover:border-cyan/30 transition-colors duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
