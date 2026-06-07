import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

export default function Cursor3D() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 200, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 200, damping: 30 })
  const largeX = useSpring(cursorX, { stiffness: 100, damping: 40 })
  const largeY = useSpring(cursorY, { stiffness: 100, damping: 40 })

  useEffect(() => {
    if (isTouch) return
    const onMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  if (isTouch) return null

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#00d4ff',
          boxShadow: '0 0 20px rgba(0,212,255,0.5)',
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(0,212,255,0.15)',
          background: 'rgba(0,212,255,0.03)',
          x: largeX,
          y: largeY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
