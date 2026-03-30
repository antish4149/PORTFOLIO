// components/Projects.jsx — Projects section with featured card
import { motion } from 'framer-motion'
import SectionWrapper, { StaggerGrid, cardVariant } from './SectionWrapper'
import { projects } from '../data/portfolio'

/* ── Icons ───────────────────────────────────────────────── */
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function Projects() {
  const featured  = projects.filter(p => p.featured)
  const rest      = projects.filter(p => !p.featured)

  return (
    <SectionWrapper id="projects">
      <div className="container">
        <p className="section-label">Featured Work</p>
        <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', marginBottom: 56 }}>
          Things I've built.
        </h2>

        {/* Featured project */}
        {featured.map(project => (
          <FeaturedCard key={project.id} project={project} />
        ))}

        {/* Regular projects grid */}
        <StaggerGrid style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: 22,
          marginTop: 22,
        }}>
          {rest.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerGrid>
      </div>
    </SectionWrapper>
  )
}

/* ── FeaturedCard (full-width) ───────────────────────────── */
function FeaturedCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ borderColor: 'rgba(0,229,160,0.3)' }}
      style={{
        display: 'flex', flexWrap: 'wrap',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 20, overflow: 'hidden',
        marginBottom: 22,
        transition: 'border-color 0.3s',
      }}
    >
      {/* Image panel */}
      <div style={{
        position: 'relative',
        minWidth: 280, flex: '1 1 45%',
        borderRight: '1px solid var(--border)',
        minHeight: 260,
        background: project.image ? `url(${project.image}) center/cover no-repeat` : 'var(--surface)',
      }}>
        <div style={{ position: 'absolute', top: 20, left: 20 }}>
          <span style={{
            background: 'var(--accent-dim)', border: '1px solid rgba(0,229,160,0.25)',
            color: 'var(--accent)', fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem', letterSpacing: '0.12em',
            textTransform: 'uppercase', padding: '4px 10px',
            borderRadius: 4, display: 'inline-block',
            backdropFilter: 'blur(4px)',
          }}>
            ⭐ Featured Project
          </span>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ padding: '28px 30px', flex: '1 1 50%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem', color: 'var(--accent)',
            letterSpacing: '0.06em',
          }}>{project.period}</div>
          <ProjectLinks github={project.github} live={project.live} />
        </div>
        <h3 style={{
          fontFamily: 'Syne, sans-serif', fontSize: '1.4rem',
          fontWeight: 700, marginBottom: 12,
        }}>{project.title}</h3>
        <p style={{
          color: 'var(--text-muted)', fontSize: '0.875rem',
          lineHeight: 1.7, marginBottom: 22,
        }}>{project.description}</p>
        <TechStack stack={project.stack} />
      </div>
    </motion.div>
  )
}

/* ── ProjectCard (regular) ───────────────────────────────── */
function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, borderColor: 'rgba(0,229,160,0.25)' }}
      style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 20, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.3s',
      }}
    >
      {project.image && (
        <div style={{
          width: '100%', height: 160,
          background: `url(${project.image}) center/cover no-repeat`,
          borderBottom: '1px solid var(--border)'
        }} />
      )}
      <div style={{
        padding: '24px 24px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      }}>
        <div style={{
          width: 46, height: 46, borderRadius: 12,
          background: 'var(--accent-dim)', border: '1px solid rgba(0,229,160,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem',
        }}>{project.icon}</div>
        <ProjectLinks github={project.github} live={project.live} />
      </div>

      <div style={{ padding: '16px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.68rem', color: 'var(--text-dim)',
          marginBottom: 8, letterSpacing: '0.06em',
        }}>{project.period}</div>
        <h3 style={{
          fontFamily: 'Syne, sans-serif', fontSize: '1.1rem',
          fontWeight: 700, marginBottom: 10,
        }}>{project.title}</h3>
        <p style={{
          color: 'var(--text-muted)', fontSize: '0.85rem',
          lineHeight: 1.65, flex: 1, marginBottom: 18,
        }}>{project.description}</p>
        <TechStack stack={project.stack} />
      </div>
    </motion.div>
  )
}

/* ── TechStack tags ──────────────────────────────────────── */
function TechStack({ stack }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {stack.map(tech => (
        <span key={tech} style={{
          padding: '3px 9px', borderRadius: 5,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.7rem', color: 'var(--text-dim)',
          background: 'var(--bg3)', border: '1px solid var(--border)',
        }}>{tech}</span>
      ))}
    </div>
  )
}

/* ── ProjectLinks ────────────────────────────────────────── */
function ProjectLinks({ github, live, column = false }) {
  const btnStyle = {
    width: 34, height: 34, borderRadius: 8,
    background: 'var(--bg3)', border: '1px solid var(--border)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--text-muted)', transition: 'all 0.2s',
    textDecoration: 'none',
  }

  return (
    <div style={{ display: 'flex', gap: 8, flexDirection: column ? 'row' : 'row' }}>
      <motion.a
        href={github} target="_blank" rel="noopener noreferrer"
        style={btnStyle} whileHover={{ background: 'var(--accent-dim)', borderColor: 'var(--accent)', color: 'var(--accent)' }}
        title="GitHub"
      >
        <GithubIcon />
      </motion.a>
      <motion.a
        href={live} target="_blank" rel="noopener noreferrer"
        style={btnStyle} whileHover={{ background: 'var(--accent-dim)', borderColor: 'var(--accent)', color: 'var(--accent)' }}
        title="Live Demo"
      >
        <ExternalIcon />
      </motion.a>
    </div>
  )
}
