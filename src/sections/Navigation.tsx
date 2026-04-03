import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { Menu, X, Code } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isScrolled ? 0 : -100,
        opacity: isScrolled ? 1 : 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [isScrolled]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        x: isMobileMenuOpen ? 0 : '100%',
        duration: 0.4,
        ease: 'power3.inOut',
      });
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 opacity-0 -translate-y-full"
      >
        <div className="glass-strong border-b border-space-lighter/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a 
                href="#" 
                className="flex items-center gap-2 group"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Code className="w-6 h-6 text-cyan group-hover:animate-pulse" />
                <span className="font-display font-semibold text-starlight group-hover:text-cyan transition-colors">
                  WA
                </span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="relative px-4 py-2 text-sm text-distant hover:text-starlight transition-colors group"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan group-hover:w-1/2 transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-starlight hover:text-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-y-0 right-0 w-72 glass-strong z-50 translate-x-full md:hidden"
      >
        <div className="flex flex-col p-6">
          <button
            className="self-end p-2 text-starlight hover:text-cyan transition-colors mb-8"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 text-lg text-distant hover:text-starlight hover:bg-space-lighter/30 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
