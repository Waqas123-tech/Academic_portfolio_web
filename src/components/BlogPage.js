import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Clock, ChevronLeft } from 'lucide-react';
import { blogPosts } from './BlogSection';

function BlogPage({ selectedBlogId = null, onNavigate = () => {} }) {
  const [selectedPostId, setSelectedPostId] = useState(selectedBlogId);

  useEffect(() => {
    setSelectedPostId(selectedBlogId);
  }, [selectedBlogId]);

  const selectedPost = blogPosts.find((post) => post.id === selectedPostId);

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">Blog</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-slate-100">Dedicated Blog Page</h1>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              A clean, focused archive for your articles — no full posts on the home page.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </button>
          </div>
        </div>

        {selectedPost ? (
          <article className="rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900 dark:shadow-slate-800">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">{selectedPost.category}</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">{selectedPost.title}</h2>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(selectedPost.date).toLocaleDateString()}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              {selectedPost.fullContent.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-base leading-8 text-slate-700 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setSelectedPostId(null)}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Articles
              </button>
            </div>
          </article>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.id} className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900 dark:shadow-slate-800">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <div className="mb-3">
                    <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{post.title}</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">{post.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPostId(post.id)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogPage;
