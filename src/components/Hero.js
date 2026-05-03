import React from 'react';
import { ReactTyped } from 'react-typed';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="hero-glow one" />
      <div className="hero-glow two" />
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel relative overflow-hidden rounded-[40px] border border-white/70 p-8 shadow-2xl shadow-slate-900/10 dark:border-slate-700/50 dark:bg-slate-950/70">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-100/95 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-teal-700 dark:bg-teal-900/20 dark:text-teal-200">
                Elite Clinical AI Portfolio
              </div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Waqas Ahmad
                </h1>
                <p className="mt-4 text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
                  <ReactTyped
                    strings={[
                      'Machine Learning Researcher',
                      'Deep Learning Enthusiast',
                      'AI for Real-World Problems'
                    ]}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                  />
                </p>
              </div>
              <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:mx-0">
                Building trusted, explainable AI systems for neurodevelopment and pediatric diagnostics — where research, clinical trust, and real-world impact meet.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
                <a href="#contact" className="btn-fancy">
                  Contact Me
                </a>
                <a href="#projects" className="rounded-full border border-slate-300 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
                  Explore Projects
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent" />
              <img
                src={`${process.env.PUBLIC_URL}/profile_waqas1.png`}
                alt="Waqas Ahmad"
                className="relative z-10 h-52 w-52 rounded-full object-cover border-4 border-teal-400/70 shadow-2xl shadow-teal-400/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
