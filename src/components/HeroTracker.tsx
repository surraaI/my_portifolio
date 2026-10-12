"use client";

import { useEffect, useRef, useState } from "react";

/** The route draws itself first (see .route-draw); the courier leaves after that. */
const START_DELAY_SECONDS = 1.7;
const LOOP_SECONDS = 15;
/** Share of the loop spent travelling; the rest is a pause at the drop-off. */
const TRAVEL_SHARE = 0.85;
const START_ETA_MINUTES = 4;

const ROUTE = "M460 650 V540 H620 V380 H760 V200";
const PICKUP = { x: 460, y: 650 };
const DROP_OFF = { x: 760, y: 200 };

// Major streets of the stylised grid; the city blocks are the gaps between them
const STREETS_X = [60, 180, 300, 460, 620, 760, 860];
const STREETS_Y = [60, 200, 380, 540, 650, 760];
const LANES_X = [380, 540, 690];
const LANES_Y = [120, 290, 460];
const BLOCK_INSET = 12;

const blocks = STREETS_X.slice(0, -1).flatMap((x, i) =>
  STREETS_Y.slice(0, -1).map((y, j) => ({
    x: x + BLOCK_INSET,
    y: y + BLOCK_INSET,
    width: STREETS_X[i + 1] - x - BLOCK_INSET * 2,
    height: STREETS_Y[j + 1] - y - BLOCK_INSET * 2,
  }))
);

const etaAt = (seconds: number) => {
  const elapsed = seconds - START_DELAY_SECONDS;
  if (elapsed < 0) return START_ETA_MINUTES;
  const progress = (elapsed % LOOP_SECONDS) / LOOP_SECONDS;
  return progress < TRAVEL_SHARE
    ? Math.max(1, Math.ceil((1 - progress / TRAVEL_SHARE) * START_ETA_MINUTES))
    : 0;
};

/**
 * Hero illustration: a courier travelling a delivery route across a stylised
 * street map, with an ETA that counts down in step with the dot. The dot is
 * driven by SVG animateMotion and the ETA reads the same SVG clock, so the two
 * cannot drift apart.
 */
const HeroTracker = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [eta, setEta] = useState(START_ETA_MINUTES);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Reduced motion: hold a single mid-route frame instead of animating
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const midRoute = START_DELAY_SECONDS + LOOP_SECONDS * TRAVEL_SHARE * 0.5;
      svg.setCurrentTime(midRoute);
      svg.pauseAnimations();
      setEta(etaAt(midRoute));
      return;
    }

    const tick = () => setEta(etaAt(svg.getCurrentTime()));
    tick();
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        viewBox="0 0 880 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Illustration of a courier moving along a delivery route on a street map"
      >
        <g className="fill-foreground/[0.035]">
          {blocks.map((block) => (
            <rect key={`${block.x}-${block.y}`} {...block} rx="8" />
          ))}
        </g>

        <g fill="none" className="stroke-foreground/[0.14]" strokeWidth="1.5">
          <path d={STREETS_X.map((x) => `M${x} 0 V800`).join(" ")} />
          <path d={STREETS_Y.map((y) => `M0 ${y} H880`).join(" ")} />
          <path d="M0 735 L880 330" />
        </g>
        <g fill="none" className="stroke-foreground/[0.07]" strokeWidth="1">
          <path d={LANES_X.map((x) => `M${x} 0 V800`).join(" ")} />
          <path d={LANES_Y.map((y) => `M0 ${y} H880`).join(" ")} />
        </g>

        <path
          id="hero-route"
          d={ROUTE}
          pathLength={1}
          fill="none"
          stroke="#FE7F2D"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="route-draw"
        />

        <circle cx={PICKUP.x} cy={PICKUP.y} r="9" className="fill-background" stroke="#FE7F2D" strokeWidth="4" />
        <circle cx={DROP_OFF.x} cy={DROP_OFF.y} r="20" className="fill-foreground/10" />
        <circle cx={DROP_OFF.x} cy={DROP_OFF.y} r="9" className="fill-foreground" />

        {/* Courier: hidden until the route has finished drawing */}
        <g opacity="0">
          <set attributeName="opacity" to="1" begin={`${START_DELAY_SECONDS}s`} />
          <circle r="22" fill="#FE7F2D" opacity="0.22" />
          <circle r="9" fill="#FE7F2D" className="stroke-background" strokeWidth="4" />
          <animateMotion
            begin={`${START_DELAY_SECONDS}s`}
            dur={`${LOOP_SECONDS}s`}
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1;1"
            keyTimes={`0;${TRAVEL_SHARE};1`}
          >
            <mpath href="#hero-route" />
          </animateMotion>
        </g>
      </svg>

      <div className="absolute left-4 top-4 lg:left-[46%] lg:top-28 flex items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Live tracking
      </div>

      <div className="absolute bottom-4 right-4 lg:bottom-[34%] lg:right-10 rounded-2xl border border-border bg-background/85 px-4 py-3 backdrop-blur">
        <p className="text-xs text-muted-foreground">ETA</p>
        <p className="display text-2xl tabular-nums text-foreground">
          {eta > 0 ? `${eta} min` : "Arrived"}
        </p>
      </div>
    </>
  );
};

export default HeroTracker;
