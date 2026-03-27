// components/Experience.jsx — Timeline + Certificates section
import { motion } from 'framer-motion'
import SectionWrapper, { StaggerGrid, cardVariant } from './SectionWrapper'
import { experience, certificates } from '../data/portfolio'

export default function Experience() {
  return (
    <SectionWrapper id="experience" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <p className="section-label">Background</p>
        <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', marginBottom: 56 }}>
          Experience &amp;<br />training.
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 720 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 15, top: 8, bottom: 0,
            width: 1, background: 'var(--border)',
          }} />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ paddingLeft: 52, marginBottom: 48, position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute', left: 9, top: 5,
                width: 14, height: 14, borderRadius: '50%',
                border: '2px solid var(--accent)',
                background: 'var(--bg2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: 'var(--accent)',
                }} />
              </div>

              {/* Type badge */}
              <span style={{
                display: 'inline-block',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--accent)',
                background: 'var(--accent-dim)', border: '1px solid rgba(0,229,160,0.2)',
                padding: '2px 9px', borderRadius: 4,
                marginBottom: 8,
              }}>
                {exp.type}
              </span>

              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem', color: 'var(--text-dim)',
                letterSpacing: '0.06em', marginBottom: 6,
              }}>{exp.period}</div>

              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontSize: '1.15rem',
                fontWeight: 700, marginBottom: 4,
              }}>{exp.role}</h3>

              <p style={{
                fontSize: '0.875rem', color: 'var(--text-muted)',
                marginBottom: 16,
              }}>{exp.company}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {exp.bullets.map((bullet, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>→</span>
                    {bullet}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <div style={{ marginTop: 64 }}>
          <p className="section-label">Certificate</p>

          <StaggerGrid style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
            marginTop: 24,
          }}>
            {certificates.map((cert, i) => (
              <CertCard key={i} cert={cert} />
            ))}
          </StaggerGrid>
        </div>
      </div>
    </SectionWrapper>
  )
}

function CertCard({ cert }) {
  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariant}
      whileHover={{ y: -4, borderColor: 'rgba(0,229,160,0.3)' }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 14, padding: '18px 20px',
        display: 'flex', gap: 14, alignItems: 'flex-start',
        textDecoration: 'none', cursor: 'pointer',
        transition: 'border-color 0.2s',
      }}
    >
      <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{cert.icon}</span>
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: 4 }}>
          {cert.name}
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          {cert.issuer} · {cert.date}
        </div>
      </div>
    </motion.a>
  )
}
