import React, { useEffect, useRef, useState } from 'react';
import { FaPython, FaBrain, FaDatabase, FaChartLine, FaTools, FaCode } from 'react-icons/fa';
import { SiPytorch, SiNumpy, SiPandas, SiLatex, SiGit, SiTensorflow } from 'react-icons/si';

const skillsData = [
  {
    category: 'Core AI & Deep Learning',
    items: [
      { name: 'Python & PyTorch', icon: FaPython, level: 95, label: 'Advanced architecture design, custom loss functions, and complex training loops for neuro-imaging data.' },
      { name: 'Few-Shot Meta-Learning (MAML)', icon: SiPytorch, level: 90, label: 'Specialized implementation of model-agnostic meta-learning for data-scarce pediatric environments.' },
      { name: 'Multimodal Fusion', icon: FaBrain, level: 88, label: 'Integrating EEG, fMRI, and clinical metadata using Cross-Modal Attention mechanisms.' },
      { name: 'Explainable AI (XAI)', icon: SiTensorflow, level: 85, label: 'Deploying Grad-CAM, Saliency Maps, and attention visualization for clinical interpretability.' }
    ]
  },
  {
    category: 'Data Science & Clinical Analytics',
    items: [
      { name: 'Neuro-Signal Processing', icon: FaChartLine, level: 92, label: 'Preprocessing and feature extraction from raw EEG/fMRI time-series data.' },
      { name: 'Algorithmic Fairness Auditing', icon: SiNumpy, level: 88, label: 'Statistical bias detection and mitigation across demographic groups (Gender, Race, Age).' },
      { name: 'Statistical Analysis', icon: SiPandas, level: 90, label: 'Rigorous evaluation using Pandas, NumPy, SciPy, and structured CSV documentation.' },
      { name: 'Systematic Review Methodology', icon: FaDatabase, level: 95, label: 'PRISMA guidelines, QUADAS-2 quality assessment, and meta-analysis synthesis.' }
    ]
  },
  {
    category: 'Research Tools & Workflow',
    items: [
      { name: 'LaTeX & Scientific Writing', icon: SiLatex, level: 94, label: 'Professional typesetting and manuscript preparation for top-tier Q1 journals.' },
      { name: 'Git & Version Control', icon: SiGit, level: 92, label: 'Managing complex codebases, experiment tracking, and collaborative research workflows.' },
      { name: 'High-Performance Computing (HPC)', icon: FaTools, level: 85, label: 'Optimizing GPU utilization for large-scale deep learning training jobs.' },
      { name: 'Clinical Framework Design', icon: FaCode, level: 90, label: 'Architecting novel paradigms like CLINIC-DL and DLQA for real-world deployment.' }
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
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">My Technical Expertise</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Specialized skills in AI, data science, and research tools for clinical neuroscience applications.
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