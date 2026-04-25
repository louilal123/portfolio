// src/pages/Projects.tsx
import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'hzoom',
    tagline: 'Real-time Video Chat',
    description:
      'Real-time chat application with WebRTC video/audio calls. Users can sign in and chat instantly with friends.',
    tech: ['Node.js', 'React', 'WebRTC', 'Tailwind', 'Firebase'],
    liveUrl: 'https://hzoom-green.vercel.app/',
    accent: 'bg-emerald-50 border-emerald-200',
    accentText: 'text-emerald-700',
    accentDot: 'bg-emerald-400',
  },
  {
    number: '02',
    title: 'lecommerce',
    tagline: 'Full-Stack E-Commerce',
    description:
      'Full-featured e-commerce platform inspired by Shopee. Product listings, cart, orders, and authentication.',
    tech: ['PostgreSQL', 'Express', 'React', 'Node.js', 'Supabase', 'Tailwind'],
    liveUrl: 'https://ecommerce-pern.vercel.app/',
    accent: 'bg-violet-50 border-violet-200',
    accentText: 'text-violet-700',
    accentDot: 'bg-violet-400',
  },
  {
    number: '03',
    title: 'TCarRental',
    tagline: 'Booking Platform',
    description:
      'Car rental booking website where users can browse available cars and make reservations online.',
    tech: ['Supabase', 'Node.js', 'React', 'Tailwind'],
    liveUrl: 'https://tcarrental-green.vercel.app/',
    accent: 'bg-amber-50 border-amber-200',
    accentText: 'text-amber-700',
    accentDot: 'bg-amber-400',
  },
];

export default function Projects() {
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
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <div data-reveal className="mb-14">
          <p className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">
            Selected Work
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Projects
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-stone-300" />
            <p className="text-stone-500 text-sm font-light">
              A selection of full-stack applications I've built.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              data-reveal
              className="group relative bg-white border border-stone-200 overflow-hidden
                hover:border-stone-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">

                {/* Number column */}
                <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start
                  px-5 pt-5 pb-3 sm:py-7 sm:px-7 sm:w-24 shrink-0
                  border-b sm:border-b-0 sm:border-r border-stone-100">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-200 leading-none">
                    {project.number}
                  </span>
                  <span className={`sm:mt-4 flex h-2 w-2 rounded-full ${project.accentDot}`} />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className={`text-[0.6rem] font-medium tracking-[0.18em] uppercase mb-1 ${project.accentText}`}>
                        {project.tagline}
                      </p>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                        {project.title}
                      </h2>
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase
                        bg-stone-900 text-stone-50 px-4 py-2.5 min-h-[40px]
                        hover:bg-purple-900 transition-colors duration-200 shrink-0"
                    >
                      Live Demo
                      <ArrowUpRight size={13} />
                    </a>
                  </div>

                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-5 max-w-prose">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[0.7rem] font-medium tracking-wide border border-stone-200
                          text-stone-600 bg-stone-50 hover:border-stone-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-reveal className="mt-12 flex flex-col sm:flex-row items-start sm:items-center
          justify-between gap-4 border-t border-stone-200 pt-10">
          <div>
            <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-1">
              See more
            </p>
            <p className="font-serif text-xl text-stone-800">
              More projects &amp; source code on GitHub
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-stone-300 text-stone-700
              px-5 py-3 text-xs font-medium tracking-widest uppercase
              hover:border-stone-900 hover:text-stone-900 hover:bg-stone-100
              transition-colors duration-200 min-h-[48px] shrink-0"
          >
            View GitHub
          </a>
        </div>

      </div>
    </div>
  );
}