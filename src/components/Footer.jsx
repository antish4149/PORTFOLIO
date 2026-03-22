// components/Footer.jsx — Site footer
import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '28px 24px',
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 14,
      }}>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
          Designed &amp; Built by{' '}
          <span style={{ color: 'var(--accent)' }}>Antish Kumar Yadav</span>
          {' '}· 2025
        </p>

        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: 'var(--accent)' }}
            style={{ fontSize: '0.82rem', color: 'var(--text-dim)', transition: 'color 0.2s' }}
          >
            GitHub →
          </motion.a>
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: 'var(--accent)' }}
            style={{ fontSize: '0.82rem', color: 'var(--text-dim)', transition: 'color 0.2s' }}
          >
            LinkedIn →
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
