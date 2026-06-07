import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiX } from 'react-icons/fi'
import Project3D from './Project3D'
import LazyCanvas from './LazyCanvas'
import useIsMobile from '../hooks/useIsMobile'

const projects = [
  {
    title: 'NeuralGuard AI',
    category: 'Intelligence Artificielle',
    desc: 'Système de détection basé sur le deep learning avec analyse comportementale en temps réel.',
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff22, #7b2ff722)',
    icon: '🧠',
  },
  {
    title: 'QuantumMesh',
    category: 'Cloud',
    desc: 'Architecture de maillage cloud décentralisé avec orchestration automatique et résilience adaptative.',
    color: '#7b2ff7',
    gradient: 'linear-gradient(135deg, #7b2ff722, #ff6b6b22)',
    icon: '☁️',
  },
  {
    title: 'VisionDeep',
    category: 'Computer Vision',
    desc: 'Plateforme de vision par ordinateur pour l\'analyse vidéo en temps réel avec reconnaissance faciale avancée.',
    color: '#ff6b6b',
    gradient: 'linear-gradient(135deg, #ff6b6b22, #ffd93d22)',
    icon: '👁️',
  },
  {
    title: 'DataSphere',
    category: 'Big Data',
    desc: 'Moteur d\'analyse prédictive capable de traiter des pétabytes de données avec visualisation interactive.',
    color: '#ffd93d',
    gradient: 'linear-gradient(135deg, #ffd93d22, #6bcb7722)',
    icon: '🌐',
  },
  {
    title: 'CyberShield X',
    category: 'Cybersécurité',
    desc: 'Solution de sécurité zero-trust avec chiffrement quantique et détection des menaces par IA générative.',
    color: '#6bcb77',
    gradient: 'linear-gradient(135deg, #6bcb7722, #00d4ff22)',
    icon: '🛡️',
  },
  {
    title: 'SecureCloud Platform',
    category: 'Cloud',
    desc: 'Plateforme de déploiement sécurisé avec automatisation CI/CD et monitoring intelligent.',
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff22, #7b2ff722)',
    icon: '🔷',
  },
]

const filters = ['Tous', 'IA', 'Cloud', 'Computer Vision', 'Big Data', 'Cybersécurité']

export default function Portfolio() {
  const mobile = useIsMobile()
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'Tous'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" style={{
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
          style={{ textAlign: 'center', marginBottom: mobile ? 36 : 60, transformStyle: 'preserve-3d' }}
        >
          <motion.div
            whileInView={{ boxShadow: ['0 0 30px rgba(0,212,255,0.05)', '0 0 60px rgba(255,107,107,0.1)', '0 0 30px rgba(0,212,255,0.05)'] }}
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
            Portfolio
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
            Nos réalisations
          </h2>
          <p style={{
            color: '#888',
            fontSize: 15,
            marginTop: 16,
            maxWidth: 500,
            margin: '16px auto 0',
            transform: 'translateZ(20px)',
          }}>
            Des solutions innovantes pour une expérience numérique unique
          </p>
        </motion.div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 12,
          flexWrap: 'wrap',
          marginBottom: 48,
          transformStyle: 'preserve-3d',
        }}>
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05, translateZ: 10 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '8px 22px',
                borderRadius: 50,
                border: '1px solid',
                borderColor: activeFilter === f ? '#00d4ff' : 'rgba(255,255,255,0.08)',
                background: activeFilter === f ? 'rgba(0,212,255,0.1)' : 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                color: activeFilter === f ? '#fff' : '#888',
                fontSize: 13,
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'all 0.3s',
              }}
            >
              {f}
            </motion.button>
          ))}
        </div>

        <motion.div layout style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: mobile ? 16 : 24,
          transformStyle: 'preserve-3d',
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8, rotateX: -15, z: -100 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateX: 15, z: -100 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{
                  y: -15,
                  rotateX: 5,
                  boxShadow: `0 40px 80px ${project.color}22`,
                }}
                onClick={() => setSelectedProject(project)}
                style={{
                  borderRadius: 20,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(20px)',
                  transformStyle: 'preserve-3d',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                  <div
                    style={{
                      height: mobile ? 180 : 260,
                      background: project.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{
                      width: mobile ? 120 : 180,
                      height: mobile ? 120 : 180,
                      transform: 'translateZ(30px)',
                    }}>
                    <LazyCanvas style={{ width: '100%', height: '100%' }}>
                      <Project3D icon={project.icon} color={project.color} />
                    </LazyCanvas>
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(transparent, rgba(10,10,15,0.9))',
                  }} />

                  <span style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    padding: '4px 14px',
                    borderRadius: 50,
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    fontSize: 11,
                    color: project.color,
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    border: `1px solid ${project.color}33`,
                  }}>
                    {project.category}
                  </span>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: '#fff',
                    transform: 'translateZ(20px)',
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: '#999',
                    fontSize: 14,
                    lineHeight: 1.6,
                    transform: 'translateZ(10px)',
                  }}>
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.9)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
              backdropFilter: 'blur(40px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotateY: 30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.6, opacity: 0, rotateY: -30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: 700,
                width: '100%',
                margin: mobile ? 8 : 0,
                background: 'rgba(20,20,40,0.8)',
                backdropFilter: 'blur(30px)',
                borderRadius: mobile ? 16 : 24,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: `0 0 100px ${selectedProject.color}22`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div style={{
                height: mobile ? 220 : 350,
                background: selectedProject.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: mobile ? 140 : 220,
                  height: mobile ? 140 : 220,
                  transform: 'translateZ(40px)',
                }}>
                  <Project3D icon={selectedProject.icon} color={selectedProject.color} />
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    fontSize: 18,
                  }}
                >
                  <FiX />
                </button>
              </div>
              <div style={{ padding: 32 }}>
                <span style={{
                  fontSize: 11,
                  color: selectedProject.color,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  border: `1px solid ${selectedProject.color}33`,
                  padding: '4px 12px',
                  borderRadius: 50,
                }}>
                  {selectedProject.category}
                </span>
                <h2 style={{ fontSize: 26, fontWeight: 800, margin: '16px 0 12px', color: '#fff', transform: 'translateZ(20px)' }}>
                  {selectedProject.title}
                </h2>
                <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: 15, transform: 'translateZ(10px)' }}>
                  {selectedProject.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 50px rgba(0,212,255,0.2)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    marginTop: 24,
                    padding: '12px 28px',
                    borderRadius: 50,
                    border: 'none',
                    background: 'linear-gradient(135deg, #00d4ff, #7b2ff7)',
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    transform: 'translateZ(30px)',
                  }}
                >
                  Explorer le projet <FiExternalLink />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
