
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

function Stars({ count = 5000 }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const { theme } = useTheme();
  
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
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

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-20">
      <Canvas camera={{ position: [0, 0, 1], fov: 100 }}>
        <Stars count={5000} />
        <Planets />
      </Canvas>
    </div>
  );
}
