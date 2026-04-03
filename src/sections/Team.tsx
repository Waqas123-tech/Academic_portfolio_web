import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail, ExternalLink, Users, Brain, Activity, Bot, Microscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const collaborations = [
  {
    title: 'Artificial Intelligence in Healthcare',
    description: 'We can collaborate in this area by working jointly with researchers, clinicians, and healthcare institutions to develop AI-driven solutions for real medical challenges. This includes building predictive models for early disease detection, analyzing patient data to identify risk patterns, and improving clinical decision-support systems.\n\nWe can contribute machine learning expertise such as model design, feature engineering, data preprocessing, and explainable AI techniques, while integrating domain knowledge from healthcare professionals to ensure clinical relevance and accuracy.\n\nCollaboration can also take place through shared research projects, academic partnerships, and applied studies where AI models are evaluated on real-world medical data to enhance reliability and practical impact in healthcare systems.',
    icon: Brain,
    color: '#00F0FF',
  },
  {
    title: 'Autism Spectrum Disorder Detection',
    description: 'We can collaborate with researchers and domain experts to develop fair and accurate machine learning models for Autism Spectrum Disorder (ASD) screening. This involves jointly working on data collection, preprocessing, and feature engineering to ensure high-quality inputs for model development.\n\nWe can contribute by designing and optimizing ML algorithms that improve early detection accuracy while maintaining fairness across different populations. In addition, explainable AI techniques can be integrated to make the decision-making process more transparent and clinically interpretable.\n\nThrough collaborative research efforts, these models can be validated on real-world datasets, ultimately supporting early screening systems that are reliable, unbiased, and useful for clinical decision-making.',
    icon: Microscope,
    color: '#A78BFA',
  },
  {
    title: 'Deep Learning for Medical Applications',
    description: 'We can collaborate in this area by designing and applying deep learning models to solve medical problems such as image-based diagnosis and physiological signal analysis. This involves working with neural network architectures like CNNs and other advanced models to extract meaningful patterns from complex medical data.\n\nWe can combine technical expertise in deep learning with medical domain knowledge to improve the accuracy and reliability of diagnostic systems. This includes tasks such as feature extraction, model optimization, and performance evaluation on real clinical datasets.\n\nThrough joint research efforts, these models can be refined to support faster, more accurate, and data-driven decision-making in healthcare, especially in imaging and signal-based applications.',
    icon: Activity,
    color: '#4ECDC4',
  },
  {
    title: 'AI-driven Robotics Systems',
    description: 'We can collaborate in this area by exploring how Artificial Intelligence can be integrated with robotics to enable intelligent and autonomous systems. This involves developing algorithms that allow robots to perceive their environment, make decisions, and perform tasks with minimal human intervention.\n\nWe can contribute by applying machine learning and deep learning techniques for robot perception, navigation, object recognition, and control systems. Alongside this, simulation and real-world testing can be used to evaluate system performance in dynamic environments.\n\nThrough collaborative research, AI-driven robotic systems can be enhanced for improved adaptability, efficiency, and automation across multiple domains such as healthcare, industry, and smart environments.',
    icon: Bot,
    color: '#F59E0B',
  },
];

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Profile card animation
      gsap.fromTo(
        profileRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Collaboration cards animation
      const cards = cardsRef.current?.querySelectorAll('.collab-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="team"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan text-sm tracking-[0.2em] uppercase mb-4 block">
            Research Network
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight mb-6">
            Collaborative Research
          </h2>
          <p className="text-distant max-w-2xl mx-auto text-lg">
            Science is a collaborative endeavor. I actively collaborate with academic peers 
            and researchers on interdisciplinary projects at the intersection of AI and healthcare.
          </p>
        </div>

        {/* Profile Card */}
        <div ref={profileRef} className="mb-16">
          <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyan/30 flex-shrink-0">
                <img
                  src="/Academic_portfolio_web/profile_waqas.png"
                  alt="Waqas Ahmad"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl text-starlight mb-2">
                  Waqas Ahmad
                </h3>
                <p className="text-cyan mb-4">Undergraduate Researcher – Machine Learning & AI</p>
                <p className="text-distant leading-relaxed">
                  Focused on developing data-driven solutions using Machine Learning, 
                  Deep Learning, and Explainable AI, particularly in healthcare and 
                  neuroscience applications.
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-3 mt-6">
                  <a
                    href="https://www.linkedin.com/in/waqas-ahmed-582729296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-space-lighter/50 flex items-center justify-center hover:bg-cyan hover:text-space transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:ahmad502492@gmail.com"
                    className="w-10 h-10 rounded-full bg-space-lighter/50 flex items-center justify-center hover:bg-cyan hover:text-space transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Areas */}
        <div className="mb-12">
          <h3 className="font-display text-2xl text-starlight text-center mb-8">
            Areas of Collaboration
          </h3>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {collaborations.map((collab, index) => {
            const CollabIcon = collab.icon;
            return (
              <div
                key={index}
                className="collab-card glass rounded-2xl p-6 group hover:border-cyan/30 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${collab.color}15` }}
                >
                  <CollabIcon className="w-6 h-6" style={{ color: collab.color }} />
                </div>
                <h4 className="font-display text-lg text-starlight mb-2 group-hover:text-cyan transition-colors">
                  {collab.title}
                </h4>
                <p className="text-distant text-sm leading-relaxed">
                  {collab.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Join CTA */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-cyan mx-auto mb-4" />
            <h3 className="font-display text-2xl text-starlight mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-distant mb-6">
              I am always open to collaborating with researchers and students who share 
              a passion for AI, machine learning, and their applications in healthcare.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-space font-semibold rounded-full hover:shadow-glow transition-all"
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
