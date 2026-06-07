import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Text, Sphere, Ring } from '@react-three/drei'
import * as THREE from 'three'
import useIsMobile from '../hooks/useIsMobile'

let sharedScroll = { current: 0 }

export function useScrollValue() {
  return sharedScroll
}

function ScrollManager() {
  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      sharedScroll.current = (window.scrollY / max) * 8
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}

const objectsData = [
  { pos: [-4, 2.5, -0.5], color: '#00d4ff', size: 0.5, type: 'torus', speed: 0.6, label: 'AI' },
  { pos: [4.5, -2, -2], color: '#7b2ff7', size: 0.4, type: 'octahedron', speed: 0.8, label: 'DEV' },
  { pos: [-3, -3, -4], color: '#ff6b6b', size: 0.35, type: 'icosahedron', speed: 0.5, label: 'VR' },
  { pos: [5, 3, -6], color: '#ffd93d', size: 0.45, type: 'torus', speed: 0.7, label: 'TECH' },
  { pos: [-5, 1.5, -8], color: '#7b2ff7', size: 0.4, type: 'sphere', speed: 0.9, label: 'WEB' },
  { pos: [3, -3.5, -10], color: '#ffd93d', size: 0.35, type: 'octahedron', speed: 0.4, label: 'CODE' },
  { pos: [-4.5, -1, -12], color: '#6bcb77', size: 0.3, type: 'torus', speed: 0.6, label: 'CLOUD' },
  { pos: [4, 4, -14], color: '#00d4ff', size: 0.5, type: 'icosahedron', speed: 0.8, label: 'IA' },
  { pos: [-2, -2.5, -16], color: '#ff6b6b', size: 0.4, type: 'torus', speed: 0.5, label: 'DATA' },
  { pos: [2.5, 1, -18], color: '#7b2ff7', size: 0.45, type: 'sphere', speed: 0.7, label: 'NFT' },
]

function FloatingObject({ pos, color, size, type, speed, label }) {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.2
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.3
    }
  })

  return (
    <group>
      <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={meshRef} position={pos}>
          {type === 'torus' ? (
            <torusGeometry args={[size, size * 0.35, 12, 24]} />
          ) : type === 'octahedron' ? (
            <octahedronGeometry args={[size, 0]} />
          ) : type === 'sphere' ? (
            <sphereGeometry args={[size, 24, 24]} />
          ) : (
            <icosahedronGeometry args={[size, 0]} />
          )}
          <MeshDistortMaterial
            color={color}
            roughness={0.05}
            metalness={0.95}
            distort={0.4}
            speed={2}
            transparent
            opacity={0.45}
          />
        </mesh>
        {type === 'sphere' || type === 'torus' ? (
          <mesh position={pos}>
            {type === 'sphere' ? (
              <sphereGeometry args={[size * 1.5, 12, 12]} />
            ) : (
              <torusGeometry args={[size * 1.6, size * 0.05, 8, 32]} />
            )}
            <meshBasicMaterial color={color} wireframe transparent opacity={0.1} />
          </mesh>
        ) : null}
      </Float>
      <Text
        position={[pos[0], pos[1] - size - 0.6, pos[2]]}
        fontSize={0.28}
        color={color}
        anchorX="center"
        anchorY="middle"
        transparent
        opacity={0.35}
      >
        {label}
      </Text>
    </group>
  )
}

function SceneObjects({ mobile }) {
  const objs = mobile ? objectsData.filter((_, i) => i % 2 === 0) : objectsData
  return (
    <group>
      {objs.map((obj, i) => (
        <FloatingObject key={i} {...obj} />
      ))}
    </group>
  )
}

function NeuralNetwork({ mobile }) {
  const count = mobile ? 40 : 120
  const { positions, connections } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const nodes = []
    for (let i = 0; i < count; i++) {
      const z = (Math.random() - 0.5) * 35
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = z
      nodes.push({ x: pos[i * 3], y: pos[i * 3 + 1], z })
    }
    const conn = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dz = nodes[i].z - nodes[j].z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 3 && Math.random() > 0.88) {
          conn.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z)
        }
      }
    }
    return { positions: pos, connections: new Float32Array(conn) }
  }, [])

  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0003
      ref.current.rotation.x = Math.sin(Date.now() * 0.00008) * 0.02
    }
  })

  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={mobile ? 0.04 : 0.06} color="#00d4ff" transparent opacity={mobile ? 0.2 : 0.3} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={connections.length / 3} array={connections} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#7b2ff7" transparent opacity={0.06} />
      </lineSegments>
    </group>
  )
}

function AmbientRings() {
  const ref = useRef()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={ref}>
      <Ring args={[2.5, 3, 64]} position={[0, 0, -3]}>
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.04} side={THREE.DoubleSide} />
      </Ring>
      <Ring args={[4, 4.5, 64]} position={[0, 0, -8]}>
        <meshBasicMaterial color="#7b2ff7" transparent opacity={0.03} side={THREE.DoubleSide} />
      </Ring>
      <Ring args={[3, 3.8, 64]} position={[0, 0, -14]}>
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.03} side={THREE.DoubleSide} />
      </Ring>
      <Ring args={[5, 6, 64]} position={[0, 0, -20]}>
        <meshBasicMaterial color="#7b2ff7" transparent opacity={0.02} side={THREE.DoubleSide} />
      </Ring>
    </group>
  )
}

function AmbientLighting() {
  return (
    <>
      <ambientLight intensity={0.12} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <pointLight position={[-10, -5, -5]} intensity={0.8} color="#7b2ff7" />
      <pointLight position={[10, -5, -15]} intensity={0.8} color="#00d4ff" />
      <pointLight position={[0, 0, -25]} intensity={0.5} color="#7b2ff7" />
      <Sphere args={[40, 32, 32]} position={[0, 0, -25]}>
        <meshBasicMaterial color="#08080d" side={THREE.BackSide} />
      </Sphere>
    </>
  )
}

function CameraController() {
  const { camera } = useThree()
  const target = useRef(new THREE.Vector3())
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    const t = sharedScroll.current
    const mx = mouseRef.current.x * 0.2
    const my = mouseRef.current.y * 0.15
    const targetZ = 10 - t * 2.8
    const targetX = mx + Math.sin(t * 0.25) * 1.2
    const targetY = my + Math.sin(t * 0.15) * 0.5 + t * 0.1

    camera.position.z += (targetZ - camera.position.z) * 0.05
    camera.position.x += (targetX - camera.position.x) * 0.05
    camera.position.y += (targetY - camera.position.y) * 0.05

    target.current.set(0, 0, -t * 2.5)
    camera.lookAt(target.current)
  })

  return null
}

export default function Scene3D() {
  const mobile = useIsMobile()

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: mobile ? 65 : 55 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      <ScrollManager />
      <AmbientLighting />
      <CameraController />
      <NeuralNetwork mobile={mobile} />
      <AmbientRings />
      <SceneObjects mobile={mobile} />
    </Canvas>
  )
}
