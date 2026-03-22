// components/Navbar.jsx — Sticky navbar with theme toggle & mobile menu
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact']

/* ── Icons (inline SVG to avoid icon-lib dependency) ── */
const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection               = useScrollSpy(SECTION_IDS)

  // Navbar border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile nav on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 24px', height: '68px',
        display: 'flex', alignItems: 'center',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'border-color 0.3s',
      }}>
        <div style={{
          maxWidth: 1140, margin: '0 auto', width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#hero" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem',
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            AK<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop nav links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none' }}
            className="desktop-nav">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1)
              const isActive = activeSection === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontSize: '0.875rem', fontWeight: 500,
                      color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                      transition: 'color 0.2s',
                      position: 'relative',
                    }}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        style={{
                          position: 'absolute', bottom: -4, left: 0, right: 0,
                          height: 1, background: 'var(--accent)',
                          borderRadius: 1,
                        }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Theme toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              title="Toggle theme"
              aria-label="Toggle theme"
              style={{
                width: 40, height: 40, borderRadius: 10,
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </motion.button>

            {/* Hamburger — visible on mobile only */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              className="hamburger-btn"
              style={{
                display: 'none',
                flexDirection: 'column', gap: 5, padding: 8,
                background: 'none', border: 'none', cursor: 'pointer',
              }}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 2 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 2 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 2 }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 68, left: 0, right: 0,
              background: 'var(--bg2)',
              borderBottom: '1px solid var(--border)',
              padding: '20px 24px', zIndex: 999,
              display: 'flex', flexDirection: 'column', gap: 4,
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '1rem', fontWeight: 500,
                  color: 'var(--text-muted)', padding: '12px 0',
                  borderBottom: '1px solid var(--border)',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles injected via style tag */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
