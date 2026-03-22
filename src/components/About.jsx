// components/About.jsx — About Me section
import { motion } from 'framer-motion'
import SectionWrapper, { StaggerGrid, cardVariant } from './SectionWrapper'
import { personal, stats, education } from '../data/portfolio'

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '72px',
          alignItems: 'center',
        }}>
          {/* Avatar column */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: 300, height: 360,
                  borderRadius: 20,
                  background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg3) 100%)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Background accent */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, var(--accent-dim) 0%, transparent 55%)',
                }} />
                {/* Initials watermark */}
                <span style={{
                  fontFamily: 'Syne, sans-serif', fontSize: '7rem', fontWeight: 800,
                  color: 'var(--accent)', opacity: 0.08, position: 'absolute',
                  userSelect: 'none',
                }}>AK</span>
                {/* Emoji */}
                <span style={{ fontSize: '5.5rem', position: 'relative', zIndex: 1 }}>👨‍💻</span>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  position: 'absolute', bottom: -16, right: -16,
                  background: 'var(--accent)', color: '#000',
                  padding: '12px 18px', borderRadius: 12,
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: '0.82rem',
                  boxShadow: '0 8px 32px rgba(0,229,160,0.35)',
                  whiteSpace: 'nowrap',
                }}
              >
                B.Tech CSE @ LPU
              </motion.div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="section-label">About Me</p>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
              marginBottom: 24, lineHeight: 1.15,
            }}>
              Passionate about<br />building for the web.
            </h2>

            <p style={{ color: 'var(--text-muted)', marginBottom: 18, fontSize: '1.02rem' }}>
              {personal.shortBio}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem' }}>
              {personal.longBio}
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex', gap: 28, marginTop: 36, paddingTop: 28,
              borderTop: '1px solid var(--border)', flexWrap: 'wrap',
            }}>
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontSize: '2rem',
                    fontWeight: 800, color: 'var(--accent)',
                  }}>{num}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div style={{
              marginTop: 28,
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 14, padding: '20px 22px',
            }}>
              <h4 style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.68rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14,
              }}>
                Education
              </h4>
              {education.map((edu, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', gap: 12, alignItems: 'flex-start',
                    padding: '10px 0',
                    borderTop: i > 0 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <span style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: 'var(--accent)', marginTop: 7, flexShrink: 0,
                    display: 'inline-block',
                  }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{edu.degree}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
                      {edu.institution}, {edu.location} · {edu.period} · {edu.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
