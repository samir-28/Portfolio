
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

function Stars({ count = 5000 }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const { theme } = useTheme();
  
  const positions = useRef<Float32Array>();
  
  useEffect(() => {
    const positionsArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positionsArray[i * 3] = (Math.random() - 0.5) * 2000;
      positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positionsArray[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    positions.current = positionsArray;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Continuous rotation animation
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
      
      // Enhanced parallax effect based on mouse position
      const mouse = state.mouse;
      ref.current.rotation.z = mouse.x * 0.1;
      ref.current.position.x = mouse.x * 50;
      ref.current.position.y = mouse.y * 50;
      
      // Breathing effect
      const breathe = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      ref.current.scale.setScalar(1 + breathe);
    }
  });

  if (!positions.current) return null;

  return (
    <Points ref={ref} positions={positions.current} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={theme === "dark" ? "#ffffff" : "#666666"}
        size={2}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function Planets() {
  const planetsRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (planetsRef.current) {
      // Orbital rotation
      planetsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      
      // Enhanced parallax effect for planets
      const mouse = state.mouse;
      planetsRef.current.position.x = mouse.x * 30;
      planetsRef.current.position.y = mouse.y * 30;
      
      // Individual planet rotations
      planetsRef.current.children.forEach((planet, index) => {
        if (planet instanceof THREE.Mesh) {
          planet.rotation.x += 0.01 * (index + 1);
          planet.rotation.y += 0.005 * (index + 1);
          
          // Floating animation
          planet.position.y += Math.sin(state.clock.elapsedTime + index) * 0.5;
        }
      });
    }
  });

  return (
    <group ref={planetsRef}>
      <mesh position={[50, 20, -100]}>
        <sphereGeometry args={[8, 32, 32]} />
        <meshBasicMaterial color="#ff6b6b" transparent opacity={0.8} />
      </mesh>
      <mesh position={[-80, -30, -150]}>
        <sphereGeometry args={[12, 32, 32]} />
        <meshBasicMaterial color="#4ecdc4" transparent opacity={0.8} />
      </mesh>
      <mesh position={[120, -50, -200]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshBasicMaterial color="#45b7d1" transparent opacity={0.8} />
      </mesh>
      <mesh position={[-40, 80, -120]}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color="#9b59b6" transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null!);
  const { theme } = useTheme();
  
  const particleCount = 200;
  const positions = useRef<Float32Array>();
  
  useEffect(() => {
    const positionsArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positionsArray[i * 3] = (Math.random() - 0.5) * 500;
      positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 500;
      positionsArray[i * 3 + 2] = (Math.random() - 0.5) * 500;
    }
    positions.current = positionsArray;
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current && positions.current) {
      // Enhanced floating animation
      for (let i = 0; i < particleCount; i++) {
        positions.current[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.02;
        positions.current[i * 3 + 1] += Math.cos(state.clock.elapsedTime + i * 0.5) * 0.03;
        positions.current[i * 3 + 2] += Math.sin(state.clock.elapsedTime + i * 0.3) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Enhanced parallax rotation
      const mouse = state.mouse;
      particlesRef.current.rotation.x = mouse.y * 0.05;
      particlesRef.current.rotation.y = mouse.x * 0.05;
      particlesRef.current.rotation.z += delta * 0.1;
    }
  });

  if (!positions.current) return null;

  return (
    <Points ref={particlesRef} positions={positions.current} stride={3}>
      <PointMaterial
        transparent
        color={theme === "dark" ? "#FFC107" : "#8B5CF6"}
        size={1.5}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function Nebula() {
  const nebulaRef = useRef<THREE.Mesh>(null!);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (nebulaRef.current) {
      nebulaRef.current.rotation.z = state.clock.elapsedTime * 0.02;
      
      // Parallax effect
      const mouse = state.mouse;
      nebulaRef.current.position.x = mouse.x * 20;
      nebulaRef.current.position.y = mouse.y * 20;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      nebulaRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={nebulaRef} position={[0, 0, -300]}>
      <planeGeometry args={[400, 400]} />
      <meshBasicMaterial
        color={theme === "dark" ? "#1a1a2e" : "#e6e6fa"}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-20 opacity-90">
      <Canvas camera={{ position: [0, 0, 1], fov: 100 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        <Stars count={5000} />
        <Planets />
        <FloatingParticles />
        <Nebula />
      </Canvas>
    </div>
  );
}
