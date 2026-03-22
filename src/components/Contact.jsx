// components/Contact.jsx — Contact section with form + social links
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { personal } from '../data/portfolio'

/* ── Social icons ────────────────────────────────────────── */
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const inputStyle = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 10, padding: '13px 15px',
  fontFamily: 'DM Sans, sans-serif', fontSize: '0.925rem',
  color: 'var(--text)', outline: 'none', width: '100%',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <SectionWrapper id="contact">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', marginBottom: 56 }}>
          Let's work<br />together.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '72px',
          alignItems: 'start',
        }}>
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: 14 }}>
              Open to opportunities
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 36, fontSize: '1rem' }}>
              I'm actively looking for internships and full-time roles in web development. Whether you have a project, opportunity, or just want to say hello — my inbox is always open.
            </p>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {[
                { icon: '✉️', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { icon: '📱', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                { icon: '📍', label: 'Location', value: personal.location, href: null },
              ].map(({ icon, label, value, href }) => {
                const El = href ? 'a' : 'div'
                return (
                  <motion.div
                    key={label}
                    whileHover={{ borderColor: 'rgba(0,229,160,0.3)' }}
                    style={{ transition: 'border-color 0.2s' }}
                  >
                    <El
                      href={href || undefined}
                      style={{
                        display: 'flex', gap: 14, alignItems: 'center',
                        padding: '13px 16px',
                        background: 'var(--surface)', border: '1px solid var(--border)',
                        borderRadius: 12, textDecoration: 'none',
                      }}
                    >
                      <div style={{
                        width: 38, height: 38, borderRadius: 10,
                        background: 'var(--accent-dim)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1rem', flexShrink: 0,
                      }}>{icon}</div>
                      <div>
                        <div style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.65rem', letterSpacing: '0.1em',
                          textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: 2,
                        }}>{label}</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 500, wordBreak: 'break-all' }}>
                          {value}
                        </div>
                      </div>
                    </El>
                  </motion.div>
                )
              })}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <GithubIcon />, href: personal.github, label: 'GitHub' },
                { icon: <LinkedinIcon />, href: personal.linkedin, label: 'LinkedIn' },
                { icon: <MailIcon />, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  aria-label={label}
                  whileHover={{ y: -4, background: 'var(--accent-dim)', borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
          >
            {/* Name + Email row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <FormGroup label="Name">
                <input
                  type="text" name="name" required
                  placeholder="Your name"
                  value={form.name} onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,160,0.1)' }}
                  onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                />
              </FormGroup>
              <FormGroup label="Email">
                <input
                  type="email" name="email" required
                  placeholder="your@email.com"
                  value={form.email} onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,160,0.1)' }}
                  onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                />
              </FormGroup>
            </div>

            <FormGroup label="Subject">
              <input
                type="text" name="subject" required
                placeholder="What's this about?"
                value={form.subject} onChange={handleChange}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,160,0.1)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
              />
            </FormGroup>

            <FormGroup label="Message">
              <textarea
                name="message" required rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={handleChange}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 140 }}
                onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,160,0.1)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
              />
            </FormGroup>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start' }}
            >
              <span>🚀</span> Send Message
            </motion.button>

            {/* Success toast */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  style={{
                    background: 'var(--surface)', border: '1px solid var(--accent)',
                    borderRadius: 10, padding: '12px 18px',
                    fontSize: '0.875rem', color: 'var(--accent)',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  )
}

/* ── FormGroup helper ─────────────────────────────────────── */
function FormGroup({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <label style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.68rem', letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--text-muted)',
      }}>{label}</label>
      {children}
    </div>
  )
}
