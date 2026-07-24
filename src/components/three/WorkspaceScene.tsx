"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import Laptop from "./Laptop";
import SceneLighting from "./SceneLighting";

/** A flat front-on view never reveals a horizontal tabletop's surface — the
 * camera needs an explicit downward tilt, unlike the hero's vertical laptop
 * screen which faces the camera naturally. */
function CameraLookAt({ target }: { target: [number, number, number] }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(...target);
  }, [camera, target]);
  return null;
}

useGLTF.preload("/models/desk.glb");

const CUP_COLOR = "#f4f1ea";
const CUP_RIM_COLOR = "#233D4D";
const POT_COLOR = "#8a5a3d";
const LEAF_COLOR = "#3f6b4a";

const DESK_NODE_PREFIX = "Desk";
const TARGET_DESK_WIDTH = 3.2;

function CoffeeCup({ deskTopY }: { deskTopY: number }) {
  return (
    <group position={[-0.95, deskTopY + 0.08, 0.35]}>
      <mesh>
        <cylinderGeometry args={[0.09, 0.075, 0.16, 16]} />
        <meshStandardMaterial color={CUP_COLOR} roughness={0.4} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.081, 0]}>
        <cylinderGeometry args={[0.078, 0.078, 0.003, 16]} />
        <meshStandardMaterial color={CUP_RIM_COLOR} roughness={0.5} />
      </mesh>
      <mesh position={[0.1, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.045, 0.014, 8, 16, Math.PI]} />
        <meshStandardMaterial color={CUP_COLOR} roughness={0.4} />
      </mesh>
    </group>
  );
}

function Plant({ deskTopY }: { deskTopY: number }) {
  return (
    <group position={[1.0, deskTopY + 0.06, 0.3]}>
      <mesh>
        <cylinderGeometry args={[0.1, 0.08, 0.14, 12]} />
        <meshStandardMaterial color={POT_COLOR} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.14, 0]}>
        <coneGeometry args={[0.09, 0.22, 8]} />
        <meshStandardMaterial color={LEAF_COLOR} roughness={0.8} />
      </mesh>
      <mesh position={[0.06, 0.1, 0.03]} rotation={[0, 0, -0.4]}>
        <coneGeometry args={[0.05, 0.16, 8]} />
        <meshStandardMaterial color={LEAF_COLOR} roughness={0.8} />
      </mesh>
      <mesh position={[-0.07, 0.09, -0.02]} rotation={[0, 0, 0.5]}>
        <coneGeometry args={[0.05, 0.14, 8]} />
        <meshStandardMaterial color={LEAF_COLOR} roughness={0.8} />
      </mesh>
    </group>
  );
}

/** Cherry-picks just the bare table mesh out of the multi-object desk scene
 * (which also contains a chair, monitor, keyboard, mouse, phone, laptop bag —
 * all skipped to keep the composition minimal), grounds it at y=0, and scales
 * it to a consistent width. */
function useDeskMesh() {
  const { nodes } = useGLTF("/models/desk.glb");

  return useMemo(() => {
    // Match by a plain-character prefix rather than the full literal name:
    // the exporter's node name uses a dash glyph that doesn't byte-match a
    // typed ASCII hyphen, so an exact-string lookup silently misses.
    const deskKey = Object.keys(nodes).find((key) => key.startsWith(DESK_NODE_PREFIX));
    const source = deskKey ? (nodes[deskKey] as THREE.Object3D) : undefined;
    if (!source) return { object: new THREE.Group(), topY: 0.06 };

    const clone = source.clone(true);

    const naturalBox = new THREE.Box3().setFromObject(clone);
    const naturalSize = new THREE.Vector3();
    naturalBox.getSize(naturalSize);
    const maxDim = Math.max(naturalSize.x, naturalSize.y, naturalSize.z) || 1;
    const scale = TARGET_DESK_WIDTH / maxDim;

    const group = new THREE.Group();
    group.add(clone);
    group.scale.setScalar(scale);

    const scaledBox = new THREE.Box3().setFromObject(group);
    const center = new THREE.Vector3();
    scaledBox.getCenter(center);
    // Fully center (not floor-ground) so this composes the same way the
    // Laptop component does: content balanced around the origin, letting a
    // simple un-aimed camera frame it without needing an explicit lookAt.
    group.position.set(-center.x, -center.y, -center.z);

    const topY = scaledBox.max.y - center.y;
    return { object: group, topY };
  }, [nodes]);
}

function IdleGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const baseY = useRef(0);
  const { object: desk, topY: deskTopY } = useDeskMesh();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.position.y = baseY.current + Math.sin(state.clock.elapsedTime * 0.6) * 0.03;
  });

  return (
    <group ref={groupRef}>
      <primitive object={desk} />

      {/* Laptop, sitting on the desk surface */}
      <group position={[0, deskTopY, -0.15]}>
        <Laptop />
      </group>

      <CoffeeCup deskTopY={deskTopY} />
      <Plant deskTopY={deskTopY} />
    </group>
  );
}

const WorkspaceScene = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 1.9, 3.4], fov: 36 }}
    >
      <CameraLookAt target={[0, 0.15, 0]} />
      <SceneLighting />
      <Suspense fallback={null}>
        <IdleGroup />
      </Suspense>
    </Canvas>
  );
};

export default WorkspaceScene;
