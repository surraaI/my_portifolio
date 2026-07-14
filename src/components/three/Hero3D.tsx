"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import FloatingParticles from "@/components/FloatingParticles";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

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

/**
 * Renders the 3D hero scene when the device/preferences support it;
 * otherwise falls back to the lightweight CSS particle field so there's
 * never a broken canvas or unnecessary GPU cost on low-power devices.
 */
const Hero3D = () => {
  const [mode, setMode] = useState<"loading" | "3d" | "particles">("loading");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isNarrowViewport = window.innerWidth < 640;

    setMode(prefersReducedMotion || isNarrowViewport || !hasWebGL() ? "particles" : "3d");
  }, []);

  if (mode === "3d") {
    return (
      <>
        <FloatingParticles />
        <div
          className="hidden md:block absolute right-[2%] lg:right-[8%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] lg:w-[480px] lg:h-[480px] z-0 pointer-events-none opacity-80"
          aria-hidden
        >
          <HeroScene />
        </div>
      </>
    );
  }

  return <FloatingParticles />;
};

export default Hero3D;
