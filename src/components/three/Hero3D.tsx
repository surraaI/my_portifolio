"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import FloatingParticles from "@/components/FloatingParticles";
import { useCanRender3D } from "@/hooks/useCanRender3D";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

/**
 * Renders the interactive 3D laptop when the device/preferences support it;
 * otherwise falls back to a static render of the same laptop so the hero
 * still reads as "laptop" even without WebGL, with the particle field kept
 * as an always-present ambient background layer either way.
 */
const Hero3D = () => {
  const mode = useCanRender3D();

  return (
    <>
      <FloatingParticles />
      <div
        className={`hidden md:block absolute right-[4%] lg:right-[10%] bottom-2 w-[300px] h-[300px] lg:w-[360px] lg:h-[360px] z-0 ${
          mode === "3d" ? "" : "pointer-events-none"
        }`}
        aria-hidden
      >
        {mode === "3d" && <HeroScene />}
        {mode === "fallback" && (
          <div className="relative w-full h-full opacity-90">
            <Image
              src="/images/laptop-fallback.png"
              alt=""
              fill
              className="object-contain"
              sizes="420px"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Hero3D;
