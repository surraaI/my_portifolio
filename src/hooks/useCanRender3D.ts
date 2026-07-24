"use client";

import { useEffect, useState } from "react";

const hasWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

export type Render3DMode = "loading" | "3d" | "fallback";

/**
 * Shared gate for whether a device/browser should get the live WebGL scene
 * or the static fallback: honors prefers-reduced-motion, requires a WebGL
 * context, and skips 3D below `minWidth` (small/low-power devices).
 */
export function useCanRender3D(minWidth = 640): Render3DMode {
  const [mode, setMode] = useState<Render3DMode>("loading");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isNarrowViewport = window.innerWidth < minWidth;
    setMode(prefersReducedMotion || isNarrowViewport || !hasWebGL() ? "fallback" : "3d");
  }, [minWidth]);

  return mode;
}
