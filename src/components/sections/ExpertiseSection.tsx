// components/sections/ExpertiseSection.tsx
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { SKILL_GROUPS } from '@/utils/constants';

export default function ExpertiseSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading title="Skills" subtitle="What I reach for, grouped by where it sits in the stack." />

        <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <div
              key={group.label}
              className={`rounded-3xl border border-border bg-card p-6 md:p-8 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <h3 className="text-sm font-medium text-muted-foreground">{group.label}</h3>
              <p className={`mt-4 leading-relaxed text-foreground ${index === 0 ? 'display text-2xl md:text-3xl !leading-snug' : 'text-lg'}`}>
                {group.items.join(', ')}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
