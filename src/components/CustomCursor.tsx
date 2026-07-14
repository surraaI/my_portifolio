"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "glow" | "glass" | "blob-glass" | "blob-gradient" | "ring";

interface BubbleConfig {
  id: number;
  size: number;
  variant: Variant;
  radius: string;
  homeX: number;
  homeY: number;
  driftSeed: number;
  driftSpeed: number;
  offsetAngle: number;
  offsetRadius: number;
  stiffness: number;
  damping: number;
}

interface BubblePhysics {
  curX: number;
  curY: number;
  velX: number;
  velY: number;
}

const VARIANTS: Variant[] = ["glow", "glass", "blob-glass", "blob-gradient", "ring"];
const BUBBLE_COUNT = 10;
const INFLUENCE_RADIUS = 240;

function randomBlobRadius() {
  const r = () => Math.round(35 + Math.random() * 30);
  return `${r()}% ${100 - r()}% ${r()}% ${100 - r()}% / ${r()}% ${r()}% ${100 - r()}% ${100 - r()}%`;
}

function variantClasses(variant: Variant): string {
  switch (variant) {
    case "glow":
      return "bg-gradient-to-br from-[#FE7F2D]/25 to-[#233D4D]/20 blur-md";
    case "glass":
      return "bg-[#EAECF0]/14 dark:bg-[#233D4D]/6 border border-[#233D4D]/30 dark:border-[#EAECF0]/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)]";
    case "blob-glass":
      return "bg-[#EAECF0]/12 dark:bg-[#233D4D]/[0.04] border border-[#233D4D]/25 dark:border-[#EAECF0]/8 backdrop-blur-lg";
    case "blob-gradient":
      return "bg-gradient-to-br from-[#233D4D]/16 to-[#000000]/14 border border-[#EAECF0]/15 dark:border-[#EAECF0]/8 backdrop-blur-sm";
    case "ring":
      return "border-2 border-[#233D4D]/40 dark:border-[#EAECF0]/40 backdrop-blur-sm";
  }
}

/**
 * Site-wide custom cursor: a lead dot + trailing ring replace the native
 * pointer, and a field of glassmorphic bubbles get pulled toward the cursor
 * with a critically-damped spring (proximity-weighted, each with its own
 * orbit offset) and drift back to idle positions when the cursor is far or
 * gone. Disabled entirely on touch/coarse-pointer devices and when the user
 * prefers reduced motion — the native cursor is left untouched in both cases.
 */
export default function CustomCursor() {
  const [bubbles, setBubbles] = useState<BubbleConfig[] | null>(null);
  const bubbleElsRef = useRef<(HTMLDivElement | null)[]>([]);
  const physicsRef = useRef<BubblePhysics[]>([]);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reducedMotion) return;

    const configs: BubbleConfig[] = Array.from({ length: BUBBLE_COUNT }, (_, i) => {
      const variant = VARIANTS[i % VARIANTS.length];
      const size = variant === "glow" ? 60 + Math.random() * 36 : 14 + Math.random() * 28;
      return {
        id: i,
        size,
        variant,
        radius: variant.startsWith("blob") ? randomBlobRadius() : "9999px",
        homeX: Math.random() * window.innerWidth,
        homeY: Math.random() * window.innerHeight,
        driftSeed: Math.random() * Math.PI * 2,
        driftSpeed: 0.06 + Math.random() * 0.1,
        offsetAngle: Math.random() * Math.PI * 2,
        offsetRadius: 30 + Math.random() * 70,
        stiffness: 35 + Math.random() * 25,
        damping: 9 + Math.random() * 5,
      };
    });

    physicsRef.current = configs.map((c) => ({ curX: c.homeX, curY: c.homeY, velX: 0, velY: 0 }));
    document.body.classList.add("custom-cursor-active");
    setBubbles(configs);

    return () => {
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (!bubbles) return;

    const cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
    const dotPos = { x: cursor.x, y: cursor.y };
    const ringPos = { x: cursor.x, y: cursor.y };
    let hovering = false;
    let mouseDown = false;

    const handleMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      cursor.active = true;
      hovering = !!(e.target as HTMLElement).closest?.(
        'a, button, [role="button"], input, textarea, select'
      );
    };
    const handleLeave = () => {
      cursor.active = false;
    };
    const handleDown = () => {
      mouseDown = true;
    };
    const handleUp = () => {
      mouseDown = false;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let rafId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);
      if (document.hidden) {
        lastTime = now;
        return;
      }
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      dotPos.x = lerp(dotPos.x, cursor.x, Math.min(dt * 24, 1));
      dotPos.y = lerp(dotPos.y, cursor.y, Math.min(dt * 24, 1));
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(${mouseDown ? 0.6 : 1})`;
        dotRef.current.style.opacity = cursor.active ? "1" : "0";
      }

      ringPos.x = lerp(ringPos.x, cursor.x, Math.min(dt * 9, 1));
      ringPos.y = lerp(ringPos.y, cursor.y, Math.min(dt * 9, 1));
      if (ringRef.current) {
        const scale = hovering ? 1.8 : mouseDown ? 0.75 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.opacity = cursor.active ? "1" : "0";
      }

      const t = now * 0.001;
      bubbles.forEach((cfg, i) => {
        const phys = physicsRef.current[i];
        if (!phys) return;

        const driftX = Math.sin(t * cfg.driftSpeed + cfg.driftSeed) * 80;
        const driftY = Math.cos(t * cfg.driftSpeed * 0.8 + cfg.driftSeed) * 80;
        const idleX = cfg.homeX + driftX;
        const idleY = cfg.homeY + driftY;

        let targetX = idleX;
        let targetY = idleY;

        if (cursor.active) {
          const dx = cursor.x - phys.curX;
          const dy = cursor.y - phys.curY;
          const dist = Math.hypot(dx, dy);
          if (dist < INFLUENCE_RADIUS) {
            const pull = 1 - dist / INFLUENCE_RADIUS;
            const eased = pull * pull;
            const attractX = cursor.x + Math.cos(cfg.offsetAngle) * cfg.offsetRadius;
            const attractY = cursor.y + Math.sin(cfg.offsetAngle) * cfg.offsetRadius;
            targetX = lerp(idleX, attractX, eased);
            targetY = lerp(idleY, attractY, eased);
          }
        }

        const ax = (targetX - phys.curX) * cfg.stiffness - phys.velX * cfg.damping;
        const ay = (targetY - phys.curY) * cfg.stiffness - phys.velY * cfg.damping;
        phys.velX += ax * dt;
        phys.velY += ay * dt;
        phys.curX += phys.velX * dt;
        phys.curY += phys.velY * dt;

        const el = bubbleElsRef.current[i];
        if (el) {
          el.style.transform = `translate3d(${phys.curX}px, ${phys.curY}px, 0) translate(-50%, -50%)`;
        }
      });
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [bubbles]);

  if (!bubbles) return null;

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-40" aria-hidden>
        {bubbles.map((cfg, i) => (
          <div
            key={cfg.id}
            ref={(el) => {
              bubbleElsRef.current[i] = el;
            }}
            className={`absolute top-0 left-0 rounded-full will-change-transform ${variantClasses(cfg.variant)}`}
            style={{ width: cfg.size, height: cfg.size, borderRadius: cfg.radius }}
          />
        ))}
      </div>
      {/* Separate top-level stacking context so the cursor stays above the fixed header (z-50) everywhere. */}
      <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
        <div
          ref={ringRef}
          className="absolute top-0 left-0 w-9 h-9 rounded-full border-2 border-[#233D4D]/70 dark:border-[#EAECF0]/70 opacity-0 will-change-transform"
        />
        <div
          ref={dotRef}
          className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#233D4D] dark:bg-[#EAECF0] opacity-0 will-change-transform"
        />
      </div>
    </>
  );
}
