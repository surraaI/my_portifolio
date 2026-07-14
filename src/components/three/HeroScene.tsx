"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const RotatingBlob = () => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.08;
    }
    if (groupRef.current) {
      const targetY = state.pointer.x * 0.3;
      const targetX = -state.pointer.y * 0.2;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.1, 4]} />
        <MeshDistortMaterial
          color="#233D4D"
          distort={0.4}
          speed={1.5}
          roughness={0.45}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 5], fov: 42 }}
    >
      <ambientLight intensity={1.2} />
      <hemisphereLight args={["#EAECF0", "#233D4D", 0.6]} />
      <pointLight position={[4, 3, 4]} intensity={3.5} color="#FE7F2D" />
      <pointLight position={[-4, -2, -2]} intensity={3} color="#233D4D" />
      <Suspense fallback={null}>
        <RotatingBlob />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
