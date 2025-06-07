
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
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Add parallax effect based on mouse position
      const mouse = state.mouse;
      ref.current.rotation.z = mouse.x * 0.05;
      ref.current.position.x = mouse.x * 10;
      ref.current.position.y = mouse.y * 10;
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
      />
    </Points>
  );
}

function Planets() {
  const planetsRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (planetsRef.current) {
      planetsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      
      // Add parallax effect for planets
      const mouse = state.mouse;
      planetsRef.current.position.x = mouse.x * 20;
      planetsRef.current.position.y = mouse.y * 20;
    }
  });

  return (
    <group ref={planetsRef}>
      <mesh position={[50, 20, -100]}>
        <sphereGeometry args={[8, 32, 32]} />
        <meshBasicMaterial color="#ff6b6b" />
      </mesh>
      <mesh position={[-80, -30, -150]}>
        <sphereGeometry args={[12, 32, 32]} />
        <meshBasicMaterial color="#4ecdc4" />
      </mesh>
      <mesh position={[120, -50, -200]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshBasicMaterial color="#45b7d1" />
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
      // Floating animation
      for (let i = 0; i < particleCount; i++) {
        positions.current[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.1;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Parallax rotation
      const mouse = state.mouse;
      particlesRef.current.rotation.x = mouse.y * 0.02;
      particlesRef.current.rotation.y = mouse.x * 0.02;
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

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-20">
      <Canvas camera={{ position: [0, 0, 1], fov: 100 }}>
        <ambientLight intensity={0.5} />
        <Stars count={5000} />
        <Planets />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
