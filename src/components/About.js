import React, { useState } from 'react';

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">About</p>
          <h2 className="mt-4 font-semibold text-slate-950 dark:text-slate-100">Clinical AI research for real-world impact</h2>
          <div className="section-underline"></div>
        </div>

        <div className="glass-panel rounded-[32px] border border-slate-200 bg-white/85 p-8 shadow-xl dark:border-slate-700/70 dark:bg-slate-950/70">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-700 dark:border-teal-400/20 dark:bg-teal-900/20 dark:text-teal-300">
            HEC Global Scholars Network Approved Standard Fellow
          </div>
          <p className="mt-6 text-slate-700 leading-8 dark:text-slate-300">
            I am Waqas Ahmad, a Clinical AI researcher dedicated to building a future where technology serves the most vulnerable among us.
          </p>

          <p className="mt-6 text-slate-700 leading-8 dark:text-slate-300">
            My work sits at the intersection of Multimodal Fusion, Algorithmic Fairness, and Explainable Deep Learning. I create trusted systems that are transparent, equitable, and ready for clinical adoption.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600">Recognition</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Approved Standard Fellow in the HEC Global Scholars Network.</p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600">Profile</p>
              <a href="https://gsn.hec.gov.pk/profile/01kwfcfq98d9pv8a8cs5escg3y" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex text-sm font-semibold text-teal-600 transition hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                View official HEC profile
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
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
      </div>
    </section>
  );
}

export default About;

