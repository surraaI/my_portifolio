"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

useGLTF.preload("/models/laptop.glb");

const TARGET_SIZE = 1.7; // matches the scale both scenes are composed around
const CORRECTIVE_ROTATION: [number, number, number] = [0, 0, 0];

/**
 * Shared laptop model (CC0, sourced from Poly Pizza) used by both the
 * interactive hero scene and the passive workspace scene. Auto-centers and
 * auto-scales from the model's real bounding box so it composes consistently
 * regardless of the source file's native units/pivot.
 */
export default function Laptop() {
  const { scene } = useGLTF("/models/laptop.glb");

  const prepared = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const normalizedScale = TARGET_SIZE / maxDim;

    const inner = new THREE.Group();
    inner.add(clone);
    inner.position.set(-center.x, -center.y, -center.z);

    const wrapper = new THREE.Group();
    wrapper.add(inner);
    wrapper.scale.setScalar(normalizedScale);
    wrapper.rotation.set(...CORRECTIVE_ROTATION);
    return wrapper;
  }, [scene]);

  return <primitive object={prepared} />;
}
