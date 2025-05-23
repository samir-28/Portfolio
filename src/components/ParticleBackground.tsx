
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

function Particles({ count = 100, theme }: { count: number, theme: string }) {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const dummy = new THREE.Object3D();
  const particles = useRef<{ position: THREE.Vector3; velocity: THREE.Vector3; acceleration: THREE.Vector3 }[]>([]);

  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ),
      acceleration: new THREE.Vector3(0, 0, 0)
    }));
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;

    particles.current.forEach((particle, i) => {
      particle.position.add(particle.velocity);

      // Boundary check
      if (Math.abs(particle.position.x) > 5) particle.velocity.x *= -1;
      if (Math.abs(particle.position.y) > 5) particle.velocity.y *= -1;
      if (Math.abs(particle.position.z) > 5) particle.velocity.z *= -1;

      dummy.position.copy(particle.position);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color={theme === "dark" ? "#FFC107" : "#8B5CF6"} transparent opacity={0.6} />
    </instancedMesh>
  );
}

export default function ParticleBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 opacity-50">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Particles count={150} theme={theme} />
      </Canvas>
    </div>
  );
}
