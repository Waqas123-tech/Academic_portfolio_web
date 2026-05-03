import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="section-heading text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Contact</p>
          <h2 className="mt-4 font-semibold text-slate-950 dark:text-slate-100">Let's build something meaningful together</h2>
          <div className="section-underline"></div>
        </div>

        <div className="glass-panel rounded-[40px] border border-white/60 p-10 shadow-2xl shadow-slate-900/10 dark:border-slate-700/60 dark:bg-slate-950/75">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            I'm always open to new collaborations, research partnerships, and high-impact AI healthcare initiatives.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">Email</p>
              <p className="mt-4 text-base text-slate-700 dark:text-slate-300">
                <a href="mailto:ahmad502492@gmail.com" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                  ahmad502492@gmail.com
                </a>
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">LinkedIn</p>
              <p className="mt-4 text-base text-slate-700 dark:text-slate-300">
                <a href="https://www.linkedin.com/in/waqas-ahmed-582729296" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                  www.linkedin.com/in/waqas-ahmed-582729296
                </a>
              </p>
            </div>
          </div>

          <a href="mailto:ahmad502492@gmail.com" className="btn-fancy mt-10 inline-flex">
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
