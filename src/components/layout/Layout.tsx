// src/components/layout/Layout.tsx
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#f7f4ef',
        color: '#0f1117',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

        * { box-sizing: border-box; }

        .nav-link {
          position: relative;
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4a4a5a;
          transition: color 0.2s ease;
          text-decoration: none;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #0f1117;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #0f1117; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active { color: #0f1117; }
        .nav-link.active::after { width: 100%; }

        .drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          font-size: 1.375rem;
          font-weight: 300;
          font-family: 'Cormorant Garamond', serif;
          color: #0f1117;
          text-decoration: none;
          border-bottom: 1px solid rgba(15,17,23,0.1);
          transition: opacity 0.2s;
        }
        .drawer-link:hover { opacity: 0.6; }
        .drawer-link span.num {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          color: #9090a0;
        }
      `}</style>

      {/* Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: scrolled ? 'rgba(247,244,239,0.96)' : 'rgba(247,244,239,0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(15,17,23,0.08)' : '1px solid transparent',
          transition: 'border-color 0.3s ease, background-color 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            
            {/* Logo */}
            <Link
              to="/"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#0f1117',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                lineHeight: 1,
              }}
            >
              JLR
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link${isActive(item.path) ? ' active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#f7f4ef',
                  backgroundColor: '#0f1117',
                  padding: '0.5rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Hire me
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                color: '#0f1117',
                display: 'none',
              }}
              className="mobile-menu-btn"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: flex !important; align-items: center; }
          }
        `}</style>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          backgroundColor: 'rgba(15,17,23,0.45)',
          backdropFilter: 'blur(4px)',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Mobile Drawer Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 70,
          width: 'min(80vw, 320px)',
          backgroundColor: '#f7f4ef',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 1.75rem',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.12)',
        }}
      >
        {/* Drawer header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.375rem',
              fontWeight: 600,
              color: '#0f1117',
              letterSpacing: '0.04em',
            }}
          >
            Menu
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0f1117', padding: '0.25rem' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav style={{ flex: 1 }}>
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              to={item.path}
              className="drawer-link"
            >
              {item.name}
              <span className="num">0{i + 1}</span>
            </Link>
          ))}
        </nav>

        {/* Drawer footer CTA */}
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '0.875rem',
              backgroundColor: '#0f1117',
              color: '#f7f4ef',
              textDecoration: 'none',
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Hire me
          </Link>
          <p style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: '#9090a0', letterSpacing: '0.04em' }}>
            Based in Cebu, Philippines
          </p>
        </div>
      </div>

      {/* Main content */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(15,17,23,0.1)',
          padding: '1.75rem 1.25rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          fontSize: '0.75rem',
          color: '#9090a0',
          letterSpacing: '0.05em',
        }}
      >
        <span>© {new Date().getFullYear()} Jhon Louie Rubin</span>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.875rem' }}>
          Crafted with care
        </span>
      </footer>
    </div>
  );
}