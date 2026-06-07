import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'

function BrainModel({ color }) {
  const ref = useRef()
  const wireRef = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(t * 0.15) * 0.1
    ref.current.rotation.y = t * 0.2
    wireRef.current.rotation.x = Math.sin(t * 0.15) * 0.1
    wireRef.current.rotation.y = t * 0.2
  })
  return (
    <group>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color} roughness={0.05} metalness={0.95}
          distort={0.5} speed={2} transparent opacity={0.5}
        />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.2} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.3, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.06} />
      </mesh>
      {Array.from({ length: 20 }).map((_, i) => {
        const theta = (i / 20) * Math.PI * 2
        const phi = Math.cos(i * 1.2) * 0.8
        return (
          <mesh key={i} position={[Math.cos(theta) * phi * 1.1, Math.sin(i * 0.5) * 0.9, Math.sin(theta) * phi * 1.1]}>
            <sphereGeometry args={[0.04, 6, 6]} />
            <meshBasicMaterial color={color} />
          </mesh>
        )
      })}
      <Sparkles count={20} scale={2.5} size={0.3} speed={0.3} color={color} />
    </group>
  )
}

function CloudMesh({ color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.15
  })
  const spheres = [[0, 0, 0.6], [0, 0.6, 0], [0, -0.5, -0.4], [0.6, 0.3, 0.3], [-0.6, 0.2, 0.2], [0.3, -0.3, -0.6], [-0.3, -0.6, 0.3]]
  return (
    <group ref={ref}>
      {spheres.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.4 - i * 0.025, 12, 12]} />
          <MeshDistortMaterial color={color} roughness={0.1} metalness={0.9} distort={0.2} speed={1.5} transparent opacity={0.4} />
        </mesh>
      ))}
      {spheres.map((p, i) => (
        <mesh key={`w${i}`} position={p}>
          <sphereGeometry args={[0.5 - i * 0.025, 6, 6]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.08} />
        </mesh>
      ))}
      <Sparkles count={15} scale={2} size={0.2} speed={0.2} color={color} />
    </group>
  )
}

function EyeModel({ color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.4
  })
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.7, 20, 20]} />
        <MeshDistortMaterial color={color} roughness={0.05} metalness={0.95} distort={0.15} speed={1} transparent opacity={0.5} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.75, 10, 10]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.1} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.3, 12, 12]} />
        <meshBasicMaterial color="#fff" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color="#000" />
      </mesh>
      <Sparkles count={10} scale={1.8} size={0.15} speed={0.2} color={color} />
    </group>
  )
}

function SphereModel({ color }) {
  const ref = useRef()
  const ring1 = useRef()
  const ring2 = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.y = t * 0.1
    ring1.current.rotation.x = t * 0.2
    ring1.current.rotation.z = t * 0.1
    ring2.current.rotation.x = -t * 0.15
    ring2.current.rotation.z = t * 0.2
  })
  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[0.65, 20, 20]} />
        <MeshDistortMaterial color={color} roughness={0.05} metalness={0.95} distort={0.25} speed={1.5} transparent opacity={0.5} />
      </mesh>
      <mesh ref={ref}>
        <sphereGeometry args={[0.75, 8, 8]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.08} />
      </mesh>
      <mesh ref={ring1}>
        <torusGeometry args={[1, 0.03, 8, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[0.85, 0.02, 8, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>
      <Sparkles count={25} scale={2.5} size={0.25} speed={0.3} color={color} />
    </group>
  )
}

function ShieldModel({ color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.2
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.05
  })
  const bars = [[0, 0.25, 0], [0, -0.1, 0], [0, -0.45, 0], [0, -0.8, 0]]
  return (
    <group ref={ref}>
      {bars.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.9 - i * 0.12, 0.08, 0.08]} />
          <MeshDistortMaterial color={color} roughness={0.1} metalness={0.9} distort={0.1} speed={1} transparent opacity={0.5} />
        </mesh>
      ))}
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[0.5, 0.08, 0.08]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
      <mesh position={[0, -1.05, 0]}>
        <boxGeometry args={[0.3, 0.06, 0.06]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>
      <Sparkles count={12} scale={1.8} size={0.2} speed={0.25} color={color} />
    </group>
  )
}

function NodesModel({ color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.25
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.08) * 0.05
  })
  const count = 10
  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[0.5, 0]} />
        <MeshDistortMaterial color={color} roughness={0.05} metalness={0.95} distort={0.3} speed={1.5} transparent opacity={0.3} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.1} />
      </mesh>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.7, Math.sin(angle * 2) * 0.4, Math.sin(angle) * 0.5]}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
        )
      })}
      <Sparkles count={15} scale={2} size={0.2} speed={0.2} color={color} />
    </group>
  )
}

const models = {
  '🧠': BrainModel,
  '☁️': CloudMesh,
  '👁️': EyeModel,
  '🌐': SphereModel,
  '🛡️': ShieldModel,
  '🔷': NodesModel,
}

export default function Project3D({ icon, color }) {
  const Model = models[icon] || BrainModel
  return (
    <Canvas camera={{ position: [0, 0, 3.2], fov: 35 }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 4, 3]} intensity={1.5} />
      <pointLight position={[-3, -2, -3]} intensity={0.8} color={color} />
      <pointLight position={[0, 0, 3]} intensity={0.3} color="#00d4ff" />
      <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.6}>
        <Model color={color} />
      </Float>
    </Canvas>
  )
}
