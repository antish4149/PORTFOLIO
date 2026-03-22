// components/Skills.jsx — Skills section with animated skill cards
import { motion } from 'framer-motion'
import SectionWrapper, { StaggerGrid, cardVariant } from './SectionWrapper'
import { skillCategories } from '../data/portfolio'

export default function Skills() {
  return (
    <SectionWrapper id="skills" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <p className="section-label">Skills &amp; Tools</p>
        <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', marginBottom: 56 }}>
          My technical<br />toolkit.
        </h2>

        <StaggerGrid style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {skillCategories.map(({ icon, title, skills }) => (
            <SkillCard key={title} icon={icon} title={title} skills={skills} />
          ))}
        </StaggerGrid>
      </div>
    </SectionWrapper>
  )
}

/* ── SkillCard ────────────────────────────────────────────── */
function SkillCard({ icon, title, skills }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, borderColor: 'rgba(0,229,160,0.4)' }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 16, padding: '26px 24px',
        cursor: 'default',
        transition: 'border-color 0.25s',
      }}
    >
      <div style={{ fontSize: '1.7rem', marginBottom: 14 }}>{icon}</div>
      <h3 style={{
        fontFamily: 'Syne, sans-serif', fontSize: '1rem',
        fontWeight: 700, marginBottom: 16,
      }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {skills.map(skill => (
          <SkillTag key={skill} label={skill} />
        ))}
      </div>
    </motion.div>
  )
}

/* ── SkillTag ─────────────────────────────────────────────── */
function SkillTag({ label }) {
  return (
    <motion.span
      whileHover={{
        background: 'var(--accent-dim)',
        borderColor: 'var(--accent)',
        color: 'var(--accent)',
      }}
      style={{
        background: 'var(--bg3)', border: '1px solid var(--border)',
        padding: '4px 12px', borderRadius: 6,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.78rem', color: 'var(--text-muted)',
        cursor: 'default', transition: 'all 0.18s',
      }}
    >
      {label}
    </motion.span>
  )
}
