import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'
import useIsMobile from '../hooks/useIsMobile'

export default function Footer() {
  const mobile = useIsMobile()
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        padding: mobile ? '40px 16px 24px' : '60px 24px 30px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
      }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(123,47,247,0.2), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: mobile ? 'center' : 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 40,
          transformStyle: 'preserve-3d',
          flexDirection: mobile ? 'column' : 'row',
        }}>
          <motion.span
            whileHover={{ scale: 1.02, translateZ: 10 }}
            style={{
              fontSize: 24,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #00d4ff, #7b2ff7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transform: 'translateZ(20px)',
              display: 'inline-block',
            }}>
            OumaTech
          </motion.span>

          <div style={{ display: 'flex', gap: 16 }}>
            {[FiGithub, FiLinkedin, FiTwitter, FiInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{
                  y: -5,
                  scale: 1.15,
                  boxShadow: '0 10px 30px rgba(0,212,255,0.15)',
                  borderColor: 'rgba(0,212,255,0.3)',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#888',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: mobile ? 'center' : 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.03)',
          flexDirection: mobile ? 'column' : 'row',
          textAlign: 'center',
        }}>
          <div style={{ color: '#555', fontSize: 14 }}>
            &copy; {new Date().getFullYear()} OumaTech. Tous droits réservés.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Mentions légales', 'Confidentialité', 'CGV'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: '#555',
                  fontSize: 14,
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => { e.target.style.color = '#888' }}
                onMouseLeave={(e) => { e.target.style.color = '#555' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
