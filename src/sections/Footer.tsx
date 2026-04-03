import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 lg:px-8 border-t border-space-lighter/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6 text-cyan" />
            <span className="text-starlight font-display">Waqas Ahmad</span>
          </div>

          {/* Center Text */}
          <div className="text-distant text-sm text-center">
            Made with{' '}
            <Heart className="w-4 h-4 inline text-red-400 mx-1" />{' '}
            for AI & ML Research
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-distant hover:text-cyan transition-colors"
          >
            <span className="text-sm">Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-space-lighter group-hover:border-cyan flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-space-lighter/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-distant/60">
          <div>
            &copy; {new Date().getFullYear()} Waqas Ahmad. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Department of Computer Science</span>
            <span>AWKUM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
