import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiServer, FiShield, FiZap } from 'react-icons/fi'

const stats = [
  { icon: <FiCode size={28} />, value: '50+', label: 'Projets livrés' },
  { icon: <FiServer size={28} />, value: '30+', label: 'Clients satisfaits' },
  { icon: <FiShield size={28} />, value: '8+', label: "Années d'expertise" },
  { icon: <FiZap size={28} />, value: '99%', label: 'Disponibilité' },
]

import useIsMobile from '../hooks/useIsMobile'

export default function About() {
  const ref = useRef(null)
  const mobile = useIsMobile()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" style={{
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
          style={{
            textAlign: 'center',
            marginBottom: 80,
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            whileInView={{ boxShadow: ['0 0 30px rgba(0,212,255,0.05)', '0 0 60px rgba(123,47,247,0.1)', '0 0 30px rgba(0,212,255,0.05)'] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              display: 'inline-block',
              padding: '8px 24px',
              borderRadius: 50,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#00d4ff',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
              transform: 'translateZ(30px)',
            }}
          >
            À propos
          </motion.div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            marginTop: 20,
            transform: 'translateZ(50px)',
            background: 'linear-gradient(135deg, #fff 60%, #7b2ff7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Façonner l'avenir du numérique
          </h2>
          <p style={{
            color: '#999',
            fontSize: 17,
            lineHeight: 1.8,
            maxWidth: 700,
            margin: '20px auto 0',
            transform: 'translateZ(20px)',
          }}>
            OumaTech est une entreprise innovante spécialisée dans les solutions IT
            sur-mesure. Nous transformons vos idées en expériences numériques
            exceptionnelles avec des technologies de pointe.
          </p>
        </motion.div>

        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
          transformStyle: 'preserve-3d',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -15,
                rotateX: 5,
                boxShadow: `0 30px 80px ${i % 2 === 0 ? 'rgba(0,212,255,0.15)' : 'rgba(123,47,247,0.15)'}`,
                borderColor: i % 2 === 0 ? 'rgba(0,212,255,0.3)' : 'rgba(123,47,247,0.3)',
              }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20,
                padding: '40px 24px',
                textAlign: 'center',
                cursor: 'default',
                transformStyle: 'preserve-3d',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at ${30 + i * 20}% 0%, ${i % 2 === 0 ? 'rgba(0,212,255,0.06)' : 'rgba(123,47,247,0.06)'}, transparent)`,
                pointerEvents: 'none',
              }} />
              <div style={{
                color: i % 2 === 0 ? '#00d4ff' : '#7b2ff7',
                marginBottom: 16,
                display: 'inline-flex',
                padding: 12,
                borderRadius: 14,
                background: `rgba(${i % 2 === 0 ? '0,212,255' : '123,47,247'}, 0.1)`,
                position: 'relative',
                zIndex: 1,
                transform: 'translateZ(20px)',
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: 40,
                fontWeight: 800,
                color: '#fff',
                marginBottom: 4,
                position: 'relative',
                zIndex: 1,
                transform: 'translateZ(30px)',
              }}>
                {stat.value}
              </div>
              <div style={{
                color: '#888',
                fontSize: 15,
                position: 'relative',
                zIndex: 1,
                transform: 'translateZ(10px)',
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
