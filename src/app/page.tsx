// app/page.tsx
import type { CSSProperties } from "react";
import { HERO_CONTENT } from "@/utils/constants";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroTracker from "@/components/HeroTracker";

const riseDelay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <>
      {/* Hero: the map bleeds off the right edge on wide screens and sits below the text on small ones */}
      <section id="hero" className="relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 lg:min-h-[min(100svh,60rem)] lg:pb-24 lg:pt-24">
          <div className="relative z-10 max-w-[40rem]">
            <p
              className="rise inline-flex items-center gap-2.5 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-sm text-foreground backdrop-blur"
              style={riseDelay(0)}
            >
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              {HERO_CONTENT.availability}
            </p>

            <h1 className="mt-8">
              <span className="rise block text-lg font-medium text-muted-foreground" style={riseDelay(80)}>
                {HERO_CONTENT.title}
              </span>
              <span
                className="rise display mt-3 block text-[clamp(2.5rem,6.2vw,4.75rem)] text-foreground"
                style={riseDelay(160)}
              >
                {HERO_CONTENT.subtitle}
              </span>
            </h1>

            <p
              className="rise mt-6 max-w-[56ch] text-lg leading-relaxed text-muted-foreground"
              style={riseDelay(240)}
            >
              {HERO_CONTENT.description}
            </p>

            <div className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" style={riseDelay(320)}>
              <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground transition duration-200 hover:brightness-105 active:scale-[0.98]">
                {HERO_CONTENT.cta}
              </a>
              <a href="#work" className="link-underline font-medium text-foreground">
                {HERO_CONTENT.secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero-map-fade relative mt-14 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-card lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:aspect-auto lg:w-[58%] lg:rounded-none lg:border-0 lg:bg-transparent">
            <HeroTracker />
          </div>
        </div>
      </section>

      <ProjectsSection />

      <ExpertiseSection />

      <AboutSection />

      <ContactSection />
    </>
  );
}
