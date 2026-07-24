"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import Laptop from "./Laptop";
import SceneLighting from "./SceneLighting";

const Y_LIMIT = THREE.MathUtils.degToRad(46);
const X_LIMIT = THREE.MathUtils.degToRad(14);
const DRAG_SENSITIVITY = 0.005;
const VERTICAL_DRAG_FACTOR = 0.3;
const FRICTION = 0.92;
const SETTLE_EPSILON = 0.0004;
const IDLE_SWAY_SPEED = 0.4;
const IDLE_SWAY_AMPLITUDE = THREE.MathUtils.degToRad(8);
const PARALLAX_MAX_Y = 0.12;
const PARALLAX_MAX_X = 0.07;

/**
 * Rotates the laptop as a rigid object via pointer drag (Y primary, X
 * secondary), with inertia on release. Once residual velocity settles the
 * laptop stays where it was left and resumes a gentle idle sway from that
 * angle, rather than snapping back to a default pose. A separate, smaller
 * passive parallax tilt layers on top while the pointer merely hovers.
 * Pointer Events unify mouse/touch/pen, so drag works identically on mobile.
 */
function DraggableLaptop() {
  const groupRef = useRef<THREE.Group>(null);
  const { gl } = useThree();

  const rotation = useRef({ y: 0, x: 0 });
  const velocity = useRef({ y: 0, x: 0 });
  const parallaxTarget = useRef({ y: 0, x: 0 });
  const dragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const settledY = useRef<number | null>(null);
  const idleStartTime = useRef(0);

  useEffect(() => {
    const el = gl.domElement;
    el.style.touchAction = "none";
    el.style.cursor = "grab";

    const onPointerDown = (e: PointerEvent) => {
      dragging.current = true;
      settledY.current = null;
      parallaxTarget.current = { y: 0, x: 0 };
      lastPointer.current = { x: e.clientX, y: e.clientY };
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (dragging.current) {
        const dx = e.clientX - lastPointer.current.x;
        const dy = e.clientY - lastPointer.current.y;
        lastPointer.current = { x: e.clientX, y: e.clientY };

        velocity.current.y = dx * DRAG_SENSITIVITY;
        velocity.current.x = -dy * DRAG_SENSITIVITY * VERTICAL_DRAG_FACTOR;
        rotation.current.y = THREE.MathUtils.clamp(rotation.current.y + velocity.current.y, -Y_LIMIT, Y_LIMIT);
        rotation.current.x = THREE.MathUtils.clamp(rotation.current.x + velocity.current.x, -X_LIMIT, X_LIMIT);
      } else {
        const rect = el.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        parallaxTarget.current = {
          y: THREE.MathUtils.clamp(nx, -1, 1) * PARALLAX_MAX_Y,
          x: -THREE.MathUtils.clamp(ny, -1, 1) * PARALLAX_MAX_X,
        };
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      dragging.current = false;
      el.style.cursor = "grab";
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        // no-op: pointer capture may already be released
      }
    };

    const onPointerLeave = () => {
      if (!dragging.current) parallaxTarget.current = { y: 0, x: 0 };
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [gl]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!dragging.current) {
      velocity.current.y *= FRICTION;
      velocity.current.x *= FRICTION;
      rotation.current.y = THREE.MathUtils.clamp(rotation.current.y + velocity.current.y, -Y_LIMIT, Y_LIMIT);
      rotation.current.x = THREE.MathUtils.clamp(rotation.current.x + velocity.current.x, -X_LIMIT, X_LIMIT);

      if (settledY.current === null && Math.abs(velocity.current.y) < SETTLE_EPSILON) {
        settledY.current = rotation.current.y;
        idleStartTime.current = state.clock.elapsedTime;
      }

      if (settledY.current !== null) {
        const elapsed = state.clock.elapsedTime - idleStartTime.current;
        rotation.current.y = THREE.MathUtils.clamp(
          settledY.current + Math.sin(elapsed * IDLE_SWAY_SPEED) * IDLE_SWAY_AMPLITUDE,
          -Y_LIMIT,
          Y_LIMIT
        );
      }
    }

    const targetY = rotation.current.y + parallaxTarget.current.y;
    const targetX = rotation.current.x + parallaxTarget.current.x;
    const smoothing = 1 - Math.pow(0.001, delta);

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, smoothing);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, smoothing);
  });

  return (
    <group ref={groupRef}>
      <Suspense fallback={null}>
        <Laptop />
      </Suspense>
    </group>
  );
}

const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0.5, 3.2], fov: 38 }}
    >
      <SceneLighting />
      <DraggableLaptop />
    </Canvas>
  );
};

export default HeroScene;
