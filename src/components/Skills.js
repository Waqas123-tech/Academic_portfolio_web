import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiDocker, SiMongodb, SiRedux, SiPostgresql } from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact, level: 90, label: 'React / JSX / Hooks' },
      { name: 'HTML', icon: FaHtml5, level: 95, label: 'Semantic HTML and accessibility' },
      { name: 'CSS', icon: FaCss3Alt, level: 88, label: 'Modern layout, responsive design' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 83, label: 'Utility-first styling and responsive UI' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs, level: 85, label: 'API design, Express, REST' },
      { name: 'Python', icon: FaPython, level: 92, label: 'Scripting, data processing, ML support' },
      { name: 'MongoDB', icon: SiMongodb, level: 78, label: 'Document database modeling and queries' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 76, label: 'Relational schema design and SQL' }
    ]
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: FaGitAlt, level: 92, label: 'Version control and collaboration' },
      { name: 'Docker', icon: SiDocker, level: 74, label: 'Containerization for reproducible apps' },
      { name: 'Developer Tools', icon: FaCode, level: 94, label: 'IDE workflows, debugging, and extensions' },
      { name: 'Redux', icon: SiRedux, level: 80, label: 'State management for frontend apps' }
    ]
  }
];

function SkillsSection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Technical Skills</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            A modern skillset built for fast, responsive products and reliable backend systems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillsData.map((category) => (
            <div key={category.category} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="mb-6 text-xl font-semibold text-slate-900">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:border-cyan-400 hover:bg-white hover:shadow-md">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition duration-300 group-hover:bg-cyan-200">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{skill.name}</p>
                          <p className="mt-1 text-sm text-slate-500">{skill.label}</p>
                        </div>
                        <div className="ml-auto rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700">
                          {skill.level}%
                        </div>
                      </div>
                      <div className="mt-4 rounded-full bg-slate-200 h-3 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 transition-all duration-1000 ease-out"
                          style={{ width: hasAnimated ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;