import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, MapPin, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Department of Computer Science\nAbdul Wali Khan University Mardan\nKhyber Pakhtunkhwa, Pakistan' },
  { icon: Mail, label: 'Email', value: 'ahmad502492@gmail.com' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/waqas-ahmed-582729296' },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const vortexRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vortex rotation animation
      gsap.to(vortexRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: 'none',
      });

      // Form entrance
      gsap.fromTo(
        formRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden"
    >
      {/* Vortex Background */}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          ref={vortexRef}
          className="w-[150vw] h-[150vw] opacity-10"
          style={{
            background: `
              conic-gradient(
                from 0deg,
                transparent 0deg,
                #00F0FF 10deg,
                transparent 20deg,
                transparent 40deg,
                #4F46E5 50deg,
                transparent 60deg,
                transparent 80deg,
                #00F0FF 90deg,
                transparent 100deg,
                transparent 120deg,
                #4F46E5 130deg,
                transparent 140deg,
                transparent 160deg,
                #00F0FF 170deg,
                transparent 180deg,
                transparent 200deg,
                #4F46E5 210deg,
                transparent 220deg,
                transparent 240deg,
                #00F0FF 250deg,
                transparent 260deg,
                transparent 280deg,
                #4F46E5 290deg,
                transparent 300deg,
                transparent 320deg,
                #00F0FF 330deg,
                transparent 340deg,
                transparent 360deg
              )
            `,
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan text-sm tracking-[0.2em] uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-starlight mb-6">
            Contact Me
          </h2>
          <p className="text-distant max-w-2xl mx-auto text-lg">
            For inquiries regarding research, collaboration, or academic discussions, 
            please feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <div className="text-distant text-sm mb-1">{item.label}</div>
                  <div className="text-starlight whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-8 border-t border-space-lighter/30">
              <div className="text-distant text-sm mb-4">Connect With Me</div>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-space-lighter/50 flex items-center justify-center hover:bg-cyan hover:text-space transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass rounded-2xl p-6">
              <div className="text-cyan text-sm mb-2">Response Time</div>
              <div className="text-starlight">
                I typically respond within 24-48 hours
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 md:p-10"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-cyan/20 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="font-display text-2xl text-starlight mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-distant">
                    Thank you for reaching out. I will get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-cyan hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-starlight text-sm mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-space/50 border-space-lighter/50 text-starlight placeholder:text-distant/50 focus:border-cyan focus:ring-cyan/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-starlight text-sm mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-space/50 border-space-lighter/50 text-starlight placeholder:text-distant/50 focus:border-cyan focus:ring-cyan/20"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-starlight text-sm mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your research interests or collaboration ideas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="bg-space/50 border-space-lighter/50 text-starlight placeholder:text-distant/50 focus:border-cyan focus:ring-cyan/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan text-space hover:bg-cyan/90 font-semibold py-6 rounded-xl transition-all hover:shadow-glow disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-space/30 border-t-space rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
