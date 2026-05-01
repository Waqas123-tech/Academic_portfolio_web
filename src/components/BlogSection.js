import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Living in the Movie: My Journey with Maladaptive Daydreaming",
    excerpt: "How I learned to distinguish between the comforting fantasy world in my head and the beautiful, tangible reality of a garden flower.",
    category: "Personal Journey",
    tags: ["Mental Health", "MD", "Story"],
    date: "2024-05-01",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    slug: "living-in-the-movie"
  },
  {
    id: 2,
    title: "Few-Shot Meta-Learning for Pediatric Epilepsy",
    excerpt: "Exploring how MAML techniques allow AI to learn seizure patterns from just a few examples, revolutionizing diagnosis for children.",
    category: "Neuroscience",
    tags: ["Epilepsy", "MAML", "Pediatrics"],
    date: "2024-04-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    slug: "few-shot-meta-learning-pediatric-epilepsy"
  },
  {
    id: 3,
    title: "Why 'Black-Box' Models Fail in Clinical Settings",
    excerpt: "Doctors need reasons, not just results. A deep dive into Explainable AI (XAI) and why transparency is a matter of life and death.",
    category: "Clinical AI",
    tags: ["XAI", "Ethics", "Fairness"],
    date: "2024-03-20",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    slug: "black-box-models-clinical-settings"
  },
  // Generic placeholders
  {
    id: 4,
    title: "Future Article: AI Ethics in Healthcare",
    excerpt: "Exploring the ethical considerations of implementing AI in medical decision-making processes.",
    category: "Clinical AI",
    tags: ["Ethics", "Healthcare", "AI"],
    date: "2024-06-01",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    slug: "ai-ethics-healthcare"
  },
  {
    id: 5,
    title: "Future Article: Neuroscience Breakthroughs",
    excerpt: "Latest developments in understanding brain function and neurological disorders.",
    category: "Neuroscience",
    tags: ["Brain", "Research", "Neurology"],
    date: "2024-07-01",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
    slug: "neuroscience-breakthroughs"
  },
  {
    id: 6,
    title: "Future Article: Personal Growth Journey",
    excerpt: "Continuing the story of overcoming challenges and finding purpose in research.",
    category: "Personal Journey",
    tags: ["Growth", "Journey", "Inspiration"],
    date: "2024-08-01",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    slug: "personal-growth-journey"
  }
];

const categories = ["All", "Personal Journey", "Neuroscience", "Clinical AI"];

function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">Blog</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">Latest Articles</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Insights on neuroscience, AI ethics, and personal growth in clinical research.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          <Filter className="mr-2 h-5 w-5 text-slate-600 dark:text-slate-400" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-teal-600 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-[4/3] rounded-lg bg-slate-200 dark:bg-slate-700"></div>
                  <div className="mt-4 space-y-3">
                    <div className="h-4 rounded bg-slate-200 dark:bg-slate-700"></div>
                    <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>
                    <div className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-700"></div>
                  </div>
                </div>
              ))
            : filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-slate-800 dark:shadow-slate-700 ${
                    index % 2 === 0 ? "animate-fade-in-up" : "animate-fade-in-up-delay"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mb-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;