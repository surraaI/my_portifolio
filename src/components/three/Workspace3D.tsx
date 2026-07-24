"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useCanRender3D } from "@/hooks/useCanRender3D";

const WorkspaceScene = dynamic(() => import("./WorkspaceScene"), {
  ssr: false,
  loading: () => null,
});

/**
 * Passive workspace scene: only mounts the WebGL canvas (and its render
 * loop) once this panel scrolls near the viewport, so it costs nothing
 * while the visitor is still up in the hero. Falls back to a static image
 * on reduced-motion/no-WebGL/narrow devices, same as the hero.
 */
export default function Workspace3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isNear, setIsNear] = useState(false);
  const mode = useCanRender3D();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden bg-surface-card border border-[#233D4D]"
    >
      {mode === "3d" && isNear && <WorkspaceScene />}
      {mode === "fallback" && (
        <Image
          src="/images/workspace-fallback.png"
          alt="A minimal desk setup with a laptop"
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 960px, 100vw"
        />
      )}
    </div>
  );
}
