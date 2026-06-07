import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onLoaded }) {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame
    const start = Date.now()
    const animate = () => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / 2000, 1)
      setProgress(p)
      if (p < 1) {
        frame = requestAnimationFrame(animate)
      } else {
        setTimeout(() => {
          setVisible(false)
          onLoaded()
        }, 400)
      }
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10000,
            background: '#0a0a0f',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.05)',
              borderTop: '2px solid #00d4ff',
              borderRight: '2px solid #7b2ff7',
              marginBottom: 40,
            }}
          />
          <span style={{
            fontSize: 32,
            fontWeight: 900,
            background: 'linear-gradient(135deg, #00d4ff, #7b2ff7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 24,
          }}>
            OumaTech
          </span>
          <div style={{
            width: 200,
            height: 2,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 1,
            overflow: 'hidden',
          }}>
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)',
                borderRadius: 1,
                width: `${progress * 100}%`,
              }}
            />
          </div>
          <span style={{ color: '#555', fontSize: 13, marginTop: 12 }}>
            Chargement de l'expérience 3D...
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
