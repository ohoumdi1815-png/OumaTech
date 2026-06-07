import { lazy, Suspense, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Scene3D from './components/Scene3D'
import Cursor3D from './components/Cursor3D'
import LoadingScreen from './components/LoadingScreen'
import { FiArrowDown } from 'react-icons/fi'

const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 1001,
        background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)',
        transformOrigin: '0%',
        scaleX,
      }}
    />
  )
}

function HeroContent() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          textAlign: 'center',
          padding: '0 24px',
          pointerEvents: 'auto',
          transformStyle: 'preserve-3d',
          perspective: 800,
        }}
      >
        <motion.div
          animate={{
            boxShadow: [
              '0 0 30px rgba(0,212,255,0.1)',
              '0 0 60px rgba(123,47,247,0.2)',
              '0 0 30px rgba(0,212,255,0.1)',
            ],
          }}
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
            marginBottom: 24,
            transform: 'translateZ(40px)',
          }}
        >
          Innovation & Technologies
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontSize: 'clamp(36px, 8vw, 80px)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 24,
            transformStyle: 'preserve-3d',
          }}
        >
          <span style={{
            display: 'inline-block',
            transform: 'translateZ(60px)',
            color: '#fff',
          }}>
            Explorez l'avenir
          </span>
          <br />
          <span style={{
            display: 'inline-block',
            transform: 'translateZ(80px)',
            background: 'linear-gradient(135deg, #00d4ff, #7b2ff7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            avec OumaTech
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            color: '#999',
            fontSize: 'clamp(16px, 2vw, 20px)',
            maxWidth: 600,
            margin: '0 auto 40px',
            lineHeight: 1.7,
            transform: 'translateZ(30px)',
          }}
        >
          Solutions IT innovantes, développement sur-mesure et intelligence artificielle
          pour propulser votre entreprise vers le futur du numérique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', transform: 'translateZ(50px)' }}
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 50px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '14px 36px',
              borderRadius: 50,
              background: 'linear-gradient(135deg, #00d4ff, #7b2ff7)',
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              pointerEvents: 'auto',
              display: 'inline-block',
              backdropFilter: 'blur(10px)',
            }}
          >
            Découvrir nos projets
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 50px rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '14px 36px',
              borderRadius: 50,
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              color: '#fff',
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              pointerEvents: 'auto',
              display: 'inline-block',
            }}
          >
            Nous contacter
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: '#666', fontSize: 24, cursor: 'pointer', transform: 'translateZ(20px)' }}
        >
          <FiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  )
}

function SectionFallback() {
  return (
    <div style={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 40,
        height: 40,
        border: '3px solid rgba(255,255,255,0.05)',
        borderTop: '3px solid #00d4ff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      {!loaded && <LoadingScreen onLoaded={() => setLoaded(true)} />}
      <Cursor3D />
      <ScrollProgress />
      <Scene3D />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 10, opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <HeroContent />
        <div style={{ perspective: 1200 }}>
          <Suspense fallback={<SectionFallback />}><About /></Suspense>
          <Suspense fallback={<SectionFallback />}><Services /></Suspense>
          <Suspense fallback={<SectionFallback />}><Portfolio /></Suspense>
          <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
          <Suspense fallback={null}><Footer /></Suspense>
        </div>
      </div>
    </div>
  )
}
