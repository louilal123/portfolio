// src/pages/Resume.tsx
import { useEffect } from 'react';
import { Download, Briefcase, GraduationCap, Wrench } from 'lucide-react';

const skills = [
  'JavaScript / TypeScript',
  'React',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Supabase',
  'Firebase',
  'Tailwind CSS',
  'WebRTC',
  'REST APIs',
  'Git & GitHub',
  'Vercel / Netlify',
];

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2023 – Present',
    bullets: [
      'Built and deployed multiple full-stack web applications using React, Node.js, and Supabase/Firebase.',
      'Implemented real-time features with WebRTC and WebSockets.',
      'Designed responsive, mobile-first UIs with Tailwind CSS.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    period: '2019 – 2023',
    note: 'Relevant coursework: Web Development, Database Systems, Data Structures & Algorithms.',
  },
];

export default function Resume() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 80 + i * 100);
    });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 px-4 sm:px-8 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">

        {/* Page header */}
        <div data-reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">
              Credentials
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-2">
              Resume
            </h1>
            <p className="text-stone-500 text-sm font-light">
              Jhon Louie Rubin — Full-Stack Developer
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-stone-900 text-stone-50
              px-5 py-3 text-xs font-medium tracking-widest uppercase
              hover:bg-purple-900 transition-colors duration-200 min-h-[48px] shrink-0"
          >
            <Download size={13} />
            Download PDF
          </a>
        </div>

        {/* ── Skills ── */}
        <section data-reveal className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Wrench size={15} className="text-stone-400" />
            <h2 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-stone-500">
              Technical Skills
            </h2>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="border border-stone-200 px-4 py-3 text-xs font-medium text-stone-700
                  text-center hover:border-stone-400 hover:bg-white transition-all duration-150"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section data-reveal className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={15} className="text-stone-400" />
            <h2 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-stone-500">
              Experience
            </h2>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.role} className="flex gap-6">
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-purple-700 bg-stone-50" />
                  <div className="flex-1 w-px bg-stone-200 mt-2" />
                </div>

                <div className="pb-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-1">
                    <h3 className="font-serif text-xl font-bold text-stone-900">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-stone-400 font-light">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-[0.65rem] font-medium tracking-widest uppercase text-stone-400 mb-3">
                    {exp.period}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm font-light text-stone-600 leading-relaxed">
                        <span className="mt-2 h-1 w-1 rounded-full bg-stone-300 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section data-reveal>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={15} className="text-stone-400" />
            <h2 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-stone-500">
              Education
            </h2>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.degree} className="flex gap-6">
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-purple-700 bg-stone-50" />
                  <div className="flex-1 w-px bg-stone-200 mt-2" />
                </div>
                <div className="pb-6">
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-0.5">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 items-baseline mb-2">
                    <span className="text-sm text-stone-500 font-light">{edu.school}</span>
                    <span className="text-[0.65rem] font-medium tracking-widest uppercase text-stone-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {edu.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}