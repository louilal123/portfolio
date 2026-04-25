// src/pages/Home.tsx
import { useEffect, useRef } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import profileImage from '../assets/image1.png';
import '../css/home.css';
export default function Home() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Staggered reveal on mount
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 120 + i * 90);
    });
  }, []);

  return (
    <>
     
      <section className="home-section">
        <div className="home-inner">

          {/* Mobile-only image at top */}
          <div className="home-image-mobile reveal">
            <img src={profileImage} alt="Jhon Louie Rubin" />
          </div>

          {/* Text content */}
          <div className="home-content">

            {/* Badge */}
            <div className="badge reveal" style={{ marginBottom: '1.5rem' }}>
              <span className="badge-dot">
                <span className="badge-dot-ping" />
                <span className="badge-dot-core" />
              </span>
              Available for work
            </div>

            {/* Heading */}
            <h1 className="home-heading reveal" ref={headingRef} style={{ marginBottom: '1.25rem' }}>
              Hi, I'm{' '}
              <em>Jhon Louie</em>
              <br />
              <span className="underline-accent">Aspiring</span> Developer
            </h1>

            {/* Subtitle */}
            <p className="home-sub reveal" style={{ marginBottom: '1.75rem' }}>
              I craft minimal, performant web experiences with React &amp; Tailwind.
              Currently exploring full-stack development and building real-world projects.
            </p>

            {/* Divider */}
            <div className="divider reveal" style={{ marginBottom: '1.5rem' }} />

            {/* Stats */}
            <div className="stats-row reveal" style={{ marginBottom: '2rem' }}>
              <div>
                <span className="stat-num">2+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div>
                <span className="stat-num">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div>
                <span className="stat-num">∞</span>
                <span className="stat-label">Curiosity</span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="reveal"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.75rem',
              }}
            >
              <a href="#projects" className="cta-btn">
                View Projects
                <ArrowUpRight size={15} />
              </a>
              <a href="/resume" className="cta-secondary">
                Download CV
              </a>
            </div>

            {/* Location */}
            <div className="location-tag reveal">
              <MapPin size={13} />
              Cebu, Philippines
            </div>
          </div>

          {/* Desktop-only right image */}
          <div className="home-image-desktop">
            <img src={profileImage} alt="Jhon Louie Rubin" />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </>
  );
}