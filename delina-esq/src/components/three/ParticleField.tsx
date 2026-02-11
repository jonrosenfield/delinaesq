'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* Chrome sphere that catches light */
function ChromeSphere({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.8
    ref.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.3
    ref.current.rotation.y = state.clock.elapsedTime * 0.3
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#C0C0C0"
        metalness={0.95}
        roughness={0.05}
        envMapIntensity={2}
      />
    </mesh>
  )
}

/* Wireframe geometric — Y2K floating shape */
function WireframeShape({ position, rotation, scale, color }: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  color: string
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x += 0.003
    ref.current.rotation.z += 0.002
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.5
  })
  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
    </mesh>
  )
}

/* Floating torus ring */
function FloatingRing({ position, color, speed }: {
  position: [number, number, number]
  color: string
  speed: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.6
  })
  return (
    <mesh ref={ref} position={position} scale={0.4}>
      <torusGeometry args={[1, 0.02, 16, 48]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  )
}

/* Particle dust */
function Particles() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 600

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.015
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#FF006E"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#FF006E" />
        <pointLight position={[-5, -3, 3]} intensity={0.6} color="#00F5FF" />

        <Particles />

        {/* Chrome spheres */}
        <ChromeSphere position={[-4, 1.5, -3]} scale={0.18} speed={0.4} />
        <ChromeSphere position={[4.5, -1, -2]} scale={0.12} speed={0.55} />
        <ChromeSphere position={[1, 3, -4]} scale={0.08} speed={0.35} />

        {/* Wireframe shapes — Y2K geometric floaters */}
        <WireframeShape position={[-2.5, -2, -1.5]} rotation={[0.5, 0.3, 0]} scale={0.35} color="#FF006E" />
        <WireframeShape position={[3, 2, -3]} rotation={[0.2, 0.8, 0.4]} scale={0.25} color="#00F5FF" />
        <WireframeShape position={[-1, 2.5, -2]} rotation={[0.7, 0.1, 0.5]} scale={0.2} color="#BF5AF2" />

        {/* Floating rings */}
        <FloatingRing position={[2, -1.5, -1]} color="#FF006E" speed={0.5} />
        <FloatingRing position={[-3, 0.5, -2.5]} color="#00F5FF" speed={0.35} />
      </Canvas>
    </div>
  )
}
