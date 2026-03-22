// components/Hero.jsx — Full-viewport hero with animated entrance
import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'

/* Staggered entrance variants */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}
const badgeVariant = {
  hidden: { opacity: 0, y: -14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const lines = personal.tagline.split('\n')

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '68px 24px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        pointerEvents: 'none',
      }} />

      {/* Accent glow orb */}
      <div style={{
        position: 'absolute',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,160,0.07) 0%, transparent 65%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -60%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 1140 }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 820 }}
        >
          {/* Available badge */}
          <motion.div variants={badgeVariant} style={{ marginBottom: 32 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,229,160,0.08)',
              border: '1px solid rgba(0,229,160,0.18)',
              padding: '7px 18px', borderRadius: 100,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem', color: 'var(--accent)',
              letterSpacing: '0.04em',
            }}>
              <PulseDot />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 6.5rem)',
              lineHeight: 1.0,
              marginBottom: 16,
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
            }}
          >
            {personal.name.split(' ').slice(0, 2).join(' ')}<br />
            <span style={{ color: 'var(--accent)' }}>
              {personal.name.split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(1rem, 2.4vw, 1.45rem)',
              fontWeight: 300,
              color: 'var(--text-muted)',
              marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 10,
            }}
          >
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: 'var(--accent)',
              background: 'var(--accent-dim)',
              padding: '3px 10px', borderRadius: 4,
              letterSpacing: '0.06em',
            }}>
              &lt;dev&gt;
            </span>
            {personal.role} · MERN Stack
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: 'var(--accent)',
              background: 'var(--accent-dim)',
              padding: '3px 10px', borderRadius: 4,
              letterSpacing: '0.06em',
            }}>
              &lt;/dev&gt;
            </span>
          </motion.p>

          {/* Tagline */}
          <motion.h2
            variants={item}
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              marginBottom: 44,
              lineHeight: 1.2,
            }}
          >
            {lines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>
                {i === 0 ? line : <span style={{ color: 'var(--text-muted)' }}>{line}</span>}
              </span>
            ))}
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>⚡</span> View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>✉️</span> Contact Me
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <GithubIcon /> GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: 36, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: 'var(--text-dim)',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem', letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        <ScrollLine />
        scroll
      </motion.div>
    </section>
  )
}

/* ── Sub-components ───────────────────────────────────────── */

function PulseDot() {
  return (
    <motion.span
      animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{
        display: 'inline-block', width: 7, height: 7,
        borderRadius: '50%', background: 'var(--accent)',
      }}
    />
  )
}

function ScrollLine() {
  return (
    <motion.span
      animate={{ scaleY: [0, 1, 1, 0], originY: ['0%', '0%', '100%', '100%'] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      style={{
        display: 'block', width: 1, height: 48,
        background: 'linear-gradient(to bottom, var(--accent), transparent)',
        borderRadius: 1,
      }}
    />
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}
