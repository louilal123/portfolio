// src/pages/Blog.tsx
import { useEffect } from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';

const posts = [
  {
    number: '01',
    title: 'Building a Real-time Chat App with WebRTC and Firebase',
    excerpt:
      'A deep dive into the architecture of hzoom — covering WebRTC signaling, Firebase authentication, and React hooks.',
    date: 'March 15, 2026',
    readTime: '8 min read',
    slug: 'building-realtime-chat-webrtc-firebase',
    tag: 'WebRTC',
  },
  {
    number: '02',
    title: 'From PERN to Production: Deploying a Full-Stack E-commerce App',
    excerpt:
      'Lessons learned while building lecommerce — database design, file uploads, and deployment on Vercel.',
    date: 'February 28, 2026',
    readTime: '6 min read',
    slug: 'pern-ecommerce-production',
    tag: 'Full-Stack',
  },
  {
    number: '03',
    title: 'Why I Chose Supabase for My Car Rental Booking System',
    excerpt:
      'A comparison of Supabase vs Firebase and how it simplified authentication and real-time features in TCarRental.',
    date: 'January 10, 2026',
    readTime: '5 min read',
    slug: 'supabase-vs-firebase-car-rental',
    tag: 'Backend',
  },
];

export default function Blog() {
  // Staggered reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 80 + i * 90);
    });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 px-4 sm:px-8 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">

        {/* Page header */}
        <div data-reveal className="mb-14">
          <p className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">
            Writing
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Blog
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-stone-300" />
            <p className="text-stone-500 text-sm font-light">
              Thoughts, tutorials, and insights on full-stack development.
            </p>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-0 divide-y divide-stone-100">
          {posts.map((post) => (
            <article key={post.slug} data-reveal className="group py-8 first:pt-0">
              <a href={`/blog/${post.slug}`} className="block">

                {/* Top meta row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-sm text-stone-300 font-light">
                      {post.number}
                    </span>
                    <span className="px-2.5 py-0.5 text-[0.6rem] font-medium tracking-widest uppercase
                      border border-stone-200 text-stone-500">
                      {post.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-[0.7rem] text-stone-400 tracking-wide">
                    <span className="hidden sm:flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug mb-3
                  group-hover:text-purple-900 transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium
                  tracking-widest uppercase text-stone-400 group-hover:text-stone-900
                  transition-colors duration-200">
                  Read article
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Coming soon footer */}
        <div data-reveal className="mt-12 pt-10 border-t border-stone-200 text-center">
          <span className="font-serif italic text-stone-400 text-sm">
            More articles coming soon —
          </span>
          <span className="text-stone-400 text-sm"> stay tuned.</span>
        </div>

      </div>
    </div>
  );
}