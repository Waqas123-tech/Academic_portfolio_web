import React, { useState, useEffect, useRef } from 'react';
import { Quote, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Fangli Ying",
    role: "Collaborating Researcher",
    organization: "Project Lead",
    quote: "Waqas Ahmad's work on Few-Shot Meta-Learning for pediatric seizure prediction is groundbreaking. Their ability to bridge complex deep learning with clinical needs is unmatched.",
    avatar: "/dr-fangli-ying.jpg"
  },
  {
    id: 2,
    name: "Assistant Prof. Dr Hashim Ali",
    role: "Academic Co-Supervisor",
    organization: "Abdul Wali Khan University",
    quote: "A researcher of rare dedication. Waqas Ahmad's CLINIC-DL framework has redefined how we approach validity in AI-driven healthcare.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Dr. Ashraf Zia",
    role: "Supervisor",
    organization: "Artificial Intelligence Review",
    quote: "The depth of insight in their systematic reviews on Fairness and XAI is exceptional. They don't just build models; they build trust.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextTestimonial, 5000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextTestimonial();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevTestimonial();
    }
  };

  return (
    <section id="testimonials" className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">What People Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Insights from collaborators and peers in the field of clinical AI and neuroscience.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-800 dark:shadow-slate-700"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Decorative Quote Mark */}
          <div className="absolute top-4 left-4 text-6xl text-teal-100 dark:text-teal-900 opacity-20">
            <Quote className="rotate-180" />
          </div>

          {/* Testimonial Content */}
          <div className="relative z-10">
            <blockquote className="mb-6 text-lg italic text-slate-700 dark:text-slate-300 md:text-xl">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">{testimonials[currentIndex].organization}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-slate-50 dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            <ArrowRight className="h-5 w-5 rotate-180 text-slate-600 dark:text-slate-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-slate-50 dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            <ArrowRight className="h-5 w-5 text-slate-600 dark:text-slate-300" />
          </button>

          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === currentIndex ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;