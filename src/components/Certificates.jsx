import { motion } from 'framer-motion'
import SectionWrapper, { StaggerGrid, cardVariant } from './SectionWrapper'
import { certificates } from '../data/portfolio'

export default function Certificates() {
  if (!certificates || certificates.length === 0) return null

  return (
    <SectionWrapper id="certificates">
      <div className="container">
        <p className="section-label">Certifications</p>
        <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', marginBottom: 56 }}>
          My Achievements.
        </h2>

        <StaggerGrid style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: 22,
        }}>
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              variants={cardVariant}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, borderColor: 'var(--accent)' }}
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 20, overflow: 'hidden',
                display: 'block', textDecoration: 'none',
                color: 'inherit', transition: 'all 0.3s ease',
              }}
            >
              {cert.image && (
                <div style={{
                  width: '100%', height: 160,
                  background: `url(${cert.image}) center/cover no-repeat`,
                  borderBottom: '1px solid var(--border)'
                }} />
              )}
              {/* Certificate content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'var(--accent-dim)', border: '1px solid rgba(0,229,160,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    {cert.icon || '📜'}
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem', color: 'var(--text-dim)',
                    letterSpacing: '0.06em',
                  }}>{cert.date}</div>
                </div>

                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontSize: '1.15rem',
                  fontWeight: 700, marginBottom: 8, lineHeight: 1.4,
                  color: 'var(--text)',
                }}>
                  {cert.name}
                </h3>
                
                <div style={{
                  color: 'var(--text-muted)', fontSize: '0.85rem',
                  marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ color: 'var(--accent)' }}>✦</span> {cert.issuer}
                </div>
              </div>
            </motion.a>
          ))}
        </StaggerGrid>
      </div>
    </SectionWrapper>
  )
}
