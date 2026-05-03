import React, { useState } from 'react';

function About() {
  const [expanded, setExpanded] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);

  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">About</p>
          <h2 className="mt-4 font-semibold text-slate-950 dark:text-slate-100">Clinical AI research for real-world impact</h2>
          <div className="section-underline"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
          <div className="glass-panel rounded-[32px] border border-slate-200 bg-white/85 p-8 shadow-xl dark:border-slate-700/70 dark:bg-slate-950/70">
            <p className="text-slate-700 dark:text-slate-300 leading-8">
              I am Waqas Ahmad, a Clinical AI researcher dedicated to building a future where technology serves the most vulnerable among us.
            </p>

            <p className="mt-6 text-slate-700 dark:text-slate-300 leading-8">
              My work sits at the intersection of Multimodal Fusion, Algorithmic Fairness, and Explainable Deep Learning. I create trusted systems that are transparent, equitable, and ready for clinical adoption.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setEducationExpanded(!educationExpanded)}
                className="btn-fancy"
              >
                {educationExpanded ? 'Hide Education Background' : 'Show Education Background'}
              </button>
              <button
                onClick={() => setExpanded(!expanded)}
                className="rounded-full border border-slate-300 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                {expanded ? 'Show Less' : 'Read Full Story'}
              </button>
            </div>

            {expanded && (
              <div className="mt-8 space-y-6 rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                <p>
                  My work sits at the intersection of Multimodal Fusion, Algorithmic Fairness, and Explainable Deep Learning (XAI), with a singular mission: to transform opaque "black-box" models into transparent, bias-audited diagnostic tools for neurodevelopmental disorders like Autism and epilepsy. I am the creator of the CLINIC-DL Paradigm and the Dual-Layer Quality Assessment (DLQA) framework, innovations designed to bridge the critical gap between high-accuracy algorithms and real-world clinical utility. Currently, I lead pioneering projects in Few-Shot Meta-Learning for pediatric seizure prediction, working to ensure that life-saving AI is robust, equitable, and accessible even in resource-constrained settings.
                </p>
                <p>
                  But my drive comes from more than just code; it comes from a profound personal journey. For years, I lived inside my own mind, battling Maladaptive Daydreaming—a condition where the imagination becomes an escape from reality. I know what it feels like to be trapped in a world of fantasies, to feel disconnected, and to search for a voice when you feel invisible. That struggle became my superpower. It taught me that accuracy without empathy is empty, and that true innovation requires understanding the human mind from the inside out. My research is my way of grounding myself in reality while giving a voice to children who, like I once felt, might be overlooked by the system.
                </p>
                <p>
                  My philosophy is simple: <strong>Don't live in the movie; live in the garden.</strong> I believe in the power of tangible reality over perfect illusions. Whether I am debugging a complex neural network or planting a flower back into the soil to let it live, I am driven by the same principle: Truth matters. I am not just building AI; I am building a bridge between the digital and the human, ensuring that technology doesn't just calculate, but cares. Welcome to my world where science meets soul, and where every line of code is a step toward a fairer, clearer future for everyone.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Education Highlights</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
                A strong foundation in science and computing, built for real-world clinical research.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Matriculation</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Iqra School and College Daggar Buner Sowari • A1 • 1019/1100 • 2020
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Pre Medical</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Government Degree College Daggar Buner Sowari • A1 • 86.5% • 2022
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Bachelor of Science in Computer Science</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Abdul Wali Khan University Mardan, Garden Campus • Final Year Student • October 2022 – June 2026
                  </p>
                </div>
              </div>
            </div>

            {educationExpanded && (
              <div className="rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-xl dark:border-slate-700 dark:bg-slate-950/70">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Full Education Background</h3>
                <div className="mt-5 space-y-4 text-slate-700 dark:text-slate-300">
                  <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
                    <h4 className="font-semibold">Matriculation</h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Iqra School and College Daggar Buner Sowari • Grade: A1 • Score: 1019/1100 (92.3%) • Graduated: 2020
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
                    <h4 className="font-semibold">Pre Medical</h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Government Degree College Daggar Buner Sowari • Grade: A1 • Percentage: 86.5% • Graduated: 2022
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
                    <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Abdul Wali Khan University Mardan, Garden Campus, KPK, Pakistan • Department of Computer Science • Final Year Student • October 2022 – June 2026
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
