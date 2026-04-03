import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, GraduationCap, Award, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Supervisor = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [card1Ref.current, card2Ref.current],
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-8"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan text-sm tracking-[0.2em] uppercase mb-4 block">
            Guidance & Mentorship
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight">
            My Supervisors
          </h2>
        </div>

        {/* Dr. Ashraf Zia Card */}
        <div
          ref={card1Ref}
          className="glass rounded-3xl overflow-hidden mb-8"
        >
          <div className="grid lg:grid-cols-5">
            {/* Image */}
            <div className="lg:col-span-2 relative h-[400px] lg:h-full min-h-[400px]">
              <img
                src="/supervisor_ashraf.jpg"
                alt="Dr. Ashraf Zia"
                className="w-full h-full object-contain bg-gradient-to-b from-space-lighter/20 to-space rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-space/80 lg:bg-gradient-to-l rounded-lg" />
            </div>

            {/* Content */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display text-3xl text-starlight mb-2">
                  Dr. Ashraf Zia
                </h3>
                <p className="text-cyan flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Ph.D. in Computer Science - Computer Vision & AI
                </p>
                <p className="text-distant text-sm mt-1">
                  Aberystwyth University, Wales, U.K.
                </p>
              </div>

              {/* Biography */}
              <div className="space-y-4">
                <p className="text-distant text-sm leading-relaxed">
                  ASHRAF ZIA received the Ph.D. degree in Computer Science, specifically in Computer Vision, Artificial Intelligence and Humanoid Robots from Aberystwyth University, Wales, U.K. and M.S. degree in Software Engineering from SZABIST Islamabad, Pakistan. Previously, he was a researcher at the Intelligent Robotics Lab for Estimation of Grasping Patterns from Images for Humanoid Robots using Deep Learning at Aberystwyth University, Wales, UK.
                </p>
                <div className="pt-4 border-t border-space-lighter/30">
                  <div className="text-starlight font-medium mb-2">Research Interests</div>
                  <div className="text-distant text-sm">
                    Machine Learning, Deep Learning, Software Engineering, and Humanoid Robots
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Fangli Ying Card */}
        <div
          ref={card2Ref}
          className="glass rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            {/* Content - Reversed order for visual variety */}
            <div className="lg:col-span-3 p-8 lg:p-12 order-2 lg:order-1">
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display text-3xl text-starlight mb-2">
                  Dr. Fangli Ying
                </h3>
                <p className="text-cyan flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Lecturer, Department of Computer Science
                </p>
                <p className="text-distant text-sm mt-1">
                  East China University of Science and Technology
                </p>
              </div>

              {/* Education */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-cyan/30" />
                <div className="pl-8 text-distant text-sm leading-relaxed">
                  <p className="mb-2">B.S. in Software Engineering, Zhejiang University (2009)</p>
                  <p>Ph.D. in Computer Science, National University of Ireland, Maynooth (2014)</p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-cyan mt-0.5" />
                  <div>
                    <div className="text-starlight font-medium">Research Focus</div>
                    <div className="text-distant text-sm">
                      Computer Vision, Reinforcement Learning for Financial Trading, 
                      AI for Protein Design
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-cyan mt-0.5" />
                  <div>
                    <div className="text-starlight font-medium">Visiting Position</div>
                    <div className="text-distant text-sm">
                      Visiting Professor at International College of Digital Innovation, 
                      Chiang Mai University, Thailand
                    </div>
                  </div>
                </div>
              </div>

              {/* Collaboration Note */}
              <div className="mt-6 pt-6 border-t border-space-lighter/30">
                <p className="text-cyan text-sm">
                  Currently collaborating on: Seizure Prediction using Deep Learning
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-2 relative h-[400px] lg:h-full min-h-[400px] order-1 lg:order-2">
              <img
                src="/supervisor_fangli.jpg"
                alt="Dr. Fangli Ying"
                className="w-full h-full object-contain bg-gradient-to-b from-space-lighter/20 to-space rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-space/80 lg:bg-gradient-to-r rounded-lg" />
            </div>
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="mt-12 text-center">
          <p className="text-distant/60 text-sm max-w-xl mx-auto">
            "The best way to predict the future is to create it." — Peter Drucker
          </p>
        </div>
      </div>
    </section>
  );
};

export default Supervisor;
