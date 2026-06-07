import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMapPin, FiMail, FiPhone, FiCheck } from 'react-icons/fi'
import useIsMobile from '../hooks/useIsMobile'

export default function Contact() {
  const mobile = useIsMobile()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" style={{
      padding: mobile ? '80px 16px' : '120px 24px',
      position: 'relative',
      minHeight: mobile ? 'auto' : '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: mobile ? 40 : 80, transformStyle: 'preserve-3d' }}
        >
          <motion.div
            whileInView={{ boxShadow: ['0 0 30px rgba(107,203,119,0.05)', '0 0 60px rgba(0,212,255,0.1)', '0 0 30px rgba(107,203,119,0.05)'] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              display: 'inline-block',
              padding: '8px 24px',
              borderRadius: 50,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#6bcb77',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
              transform: 'translateZ(30px)',
            }}
          >
            Contact
          </motion.div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            marginTop: 20,
            transform: 'translateZ(50px)',
            background: 'linear-gradient(135deg, #fff 60%, #6bcb77)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Travaillons ensemble
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: mobile ? 32 : 48,
          alignItems: 'start',
          transformStyle: 'preserve-3d',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {[
                { icon: <FiMapPin size={22} />, label: 'Adresse', value: 'Casablanca, Maroc' },
                { icon: <FiMail size={22} />, label: 'Email', value: 'contact@oumatech.ma' },
                { icon: <FiPhone size={22} />, label: 'Téléphone', value: '+212 5XX-XXXXXX' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'center',
                    transform: `translateZ(${10 + i * 10}px)`,
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, rgba(107,203,119,0.15), rgba(107,203,119,0.05))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6bcb77',
                    flexShrink: 0,
                    boxShadow: '0 0 30px rgba(107,203,119,0.1)',
                    border: '1px solid rgba(107,203,119,0.15)',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: '#888', fontSize: 13, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
              padding: mobile ? 24 : 40,
              transformStyle: 'preserve-3d',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <input
                type="text"
                placeholder="Votre nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                style={{
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  color: '#fff',
                  fontSize: 15,
                  outline: 'none',
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#6bcb77'; e.target.style.boxShadow = '0 0 30px rgba(107,203,119,0.15)' }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
              />
              <input
                type="email"
                placeholder="Votre email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                style={{
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  color: '#fff',
                  fontSize: 15,
                  outline: 'none',
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#6bcb77'; e.target.style.boxShadow = '0 0 30px rgba(107,203,119,0.15)' }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
              />
              <textarea
                placeholder="Votre message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                style={{
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  color: '#fff',
                  fontSize: 15,
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#6bcb77'; e.target.style.boxShadow = '0 0 30px rgba(107,203,119,0.15)' }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: '0 15px 50px rgba(0,212,255,0.25)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '14px 28px',
                  borderRadius: 12,
                  border: 'none',
                  background: sent
                    ? 'linear-gradient(135deg, #6bcb77, #00d4ff)'
                    : 'linear-gradient(135deg, #00d4ff, #7b2ff7)',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'all 0.3s',
                  boxShadow: '0 5px 30px rgba(0,212,255,0.2)',
                  transform: 'translateZ(20px)',
                }}
              >
                {sent ? (
                  <>
                    Message envoyé <FiCheck size={18} />
                  </>
                ) : (
                  <>
                    Envoyer <FiSend size={18} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
