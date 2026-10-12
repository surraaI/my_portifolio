// components/sections/AboutSection.tsx
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { EDUCATION } from '@/utils/constants';

const FACTS = [
  { label: 'Based in', value: 'Addis Ababa, Ethiopia' },
  { label: 'Languages', value: 'English, Amharic, Afaan Oromo' },
  { label: 'Problem solving', value: '900+ problems on LeetCode and Codeforces' },
  { label: 'Outside work', value: 'Pianist and composer' },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-secondary">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Sura Itana"
              fill
              // The photo is landscape but the frame is portrait, so it is cropped by height:
              // it needs roughly 1.7x the frame's width in pixels to stay sharp.
              sizes="(min-width: 640px) 660px, 170vw"
              quality={100}
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={0.1}>
          <h2 className="display text-4xl md:text-5xl text-foreground">About</h2>

          <p className="display mt-8 max-w-[34ch] text-2xl !leading-snug text-foreground md:text-3xl">
            I&apos;m a software engineer in Addis Ababa who likes owning a product from
            requirements through deployment.
          </p>

          <div className="mt-8 max-w-[65ch] space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I hold a BSc in Software Engineering from Addis Ababa University and I&apos;m a graduate
              of A2SV (Africa to Silicon Valley), a Google-backed program for African software
              engineers.
            </p>
            <p>
              My depth is backend: Python and Node.js on PostgreSQL. I also build the rest of the
              product, with Next.js on the web, Flutter on mobile, and the infrastructure underneath.
              At Yeneb I make the product and technical decisions too, and I led a five-person team
              on MoveMate.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-x-12 gap-y-6 border-t border-border pt-8 sm:grid-cols-2">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1 text-foreground">{fact.value}</dd>
              </div>
            ))}
            {EDUCATION.map((item) => (
              <div key={item.title}>
                <dt className="text-sm text-muted-foreground">{item.institution}</dt>
                <dd className="mt-1 text-foreground">
                  {item.title}, {item.period}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
