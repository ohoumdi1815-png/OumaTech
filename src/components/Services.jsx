import { motion } from 'framer-motion'
import { FiMonitor, FiSmartphone, FiCloud, FiDatabase, FiBarChart2, FiUsers } from 'react-icons/fi'
import useIsMobile from '../hooks/useIsMobile'

const services = [
  {
    icon: <FiMonitor size={32} />,
    title: 'Développement Web',
    desc: 'Sites vitrines, applications web progressives et plateformes sur-mesure avec les frameworks les plus modernes.',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.15)',
  },
  {
    icon: <FiSmartphone size={32} />,
    title: 'Applications Mobiles',
    desc: 'Applications iOS et Android natives ou cross-platform avec des interfaces fluides et intuitives.',
    color: '#7b2ff7',
    glow: 'rgba(123,47,247,0.15)',
  },
  {
    icon: <FiCloud size={32} />,
    title: 'Cloud & DevOps',
    desc: 'Infrastructure cloud scalable, CI/CD, conteneurisation et monitoring pour une fiabilité maximale.',
    color: '#ff6b6b',
    glow: 'rgba(255,107,107,0.15)',
  },
  {
    icon: <FiDatabase size={32} />,
    title: 'Big Data & IA',
    desc: 'Solutions de traitement de données massives, machine learning et intelligence artificielle.',
    color: '#ffd93d',
    glow: 'rgba(255,217,61,0.15)',
  },
  {
    icon: <FiBarChart2 size={32} />,
    title: 'Cybersécurité',
    desc: 'Audit de sécurité, pentesting, implémentation de protocoles de protection avancés.',
    color: '#6bcb77',
    glow: 'rgba(107,203,119,0.15)',
  },
  {
    icon: <FiUsers size={32} />,
    title: 'Consulting IT',
    desc: 'Accompagnement stratégique pour votre transformation digitale et optimisation des processus.',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.15)',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 15 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6 } },
}

const getRgb = (color) => {
  const map = { '#00d4ff': '0,212,255', '#7b2ff7': '123,47,247', '#ff6b6b': '255,107,107', '#ffd93d': '255,217,61', '#6bcb77': '107,203,119' }
  return map[color] || '0,212,255'
}

export default function Services() {
  const mobile = useIsMobile()
  return (
    <section id="services" style={{
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
          style={{ textAlign: 'center', marginBottom: 80, transformStyle: 'preserve-3d' }}
        >
          <motion.div
            whileInView={{ boxShadow: ['0 0 30px rgba(123,47,247,0.05)', '0 0 60px rgba(0,212,255,0.1)', '0 0 30px rgba(123,47,247,0.05)'] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              display: 'inline-block',
              padding: '8px 24px',
              borderRadius: 50,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#7b2ff7',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
              transform: 'translateZ(30px)',
            }}
          >
            Nos services
          </motion.div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            marginTop: 20,
            transform: 'translateZ(50px)',
            background: 'linear-gradient(135deg, #fff 60%, #00d4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Des solutions complètes
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 16,
            transformStyle: 'preserve-3d',
          }}
        >
          {services.map((srv) => (
            <motion.div
              key={srv.title}
              variants={itemVariants}
              whileHover={{
                y: -16,
                rotateX: 4,
                boxShadow: `0 40px 90px ${srv.glow}`,
                borderColor: srv.color + '44',
              }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 20,
                padding: '36px 28px',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                transformStyle: 'preserve-3d',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${srv.color}, transparent)`,
                boxShadow: `0 0 30px ${srv.color}`,
              }} />
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle, ${srv.glow}, transparent)`,
                filter: 'blur(50px)',
                pointerEvents: 'none',
              }} />
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: `rgba(${getRgb(srv.color)}, 0.1)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: srv.color,
                marginBottom: 20,
                position: 'relative',
                zIndex: 1,
                boxShadow: `0 0 40px ${srv.glow}`,
                transform: 'translateZ(20px)',
              }}>
                {srv.icon}
              </div>
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 12,
                color: '#fff',
                position: 'relative',
                zIndex: 1,
                transform: 'translateZ(30px)',
              }}>
                {srv.title}
              </h3>
              <p style={{
                color: '#999',
                lineHeight: 1.7,
                fontSize: 15,
                position: 'relative',
                zIndex: 1,
                transform: 'translateZ(10px)',
              }}>
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
