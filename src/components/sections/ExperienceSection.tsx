// components/sections/ExperienceSection.tsx
'use client';

import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { EXPERIENCE } from '@/utils/constants';

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading title="Experience" />

        {/* Timeline: the rail continues the hero's route, one stop per role */}
        <ol className="relative">
          <span className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" aria-hidden />

          {EXPERIENCE.map((job, index) => {
            const isCurrent = index === 0;

            return (
              <li key={`${job.company}-${job.period}`} className="relative pl-10 pb-8 last:pb-0">
                <span
                  className={`absolute left-0 top-7 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-background ${
                    isCurrent ? 'bg-[#FE7F2D]' : 'bg-card border-2 border-[#FE7F2D]'
                  }`}
                  aria-hidden
                >
                  {isCurrent && (
                    <span className="absolute h-4 w-4 rounded-full bg-[#FE7F2D] opacity-60 motion-safe:animate-ping" />
                  )}
                </span>

                <Reveal>
                  <article className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-colors hover:border-[#FE7F2D]/50">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                      <div>
                        <h3 className="text-xl font-semibold font-display text-foreground">{job.role}</h3>
                        <p className="mt-1 text-foreground">{job.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground sm:text-right">
                        <p className="flex items-center gap-2 sm:justify-end">
                          {isCurrent && (
                            <span className="rounded-full bg-[#FE7F2D]/15 px-2 py-0.5 text-xs font-medium text-[#FE7F2D]">
                              Now
                            </span>
                          )}
                          {job.period}
                        </p>
                        {job.location && <p className="mt-1">{job.location}</p>}
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[#FE7F2D]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
