// components/sections/ContactSection.tsx
import Reveal from '@/components/Reveal';
import { CONTACT } from '@/utils/constants';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-40">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="text-lg text-muted-foreground">Get in touch</h2>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </p>

        <a
          href={`mailto:${CONTACT.email}`}
          className="display link-underline mt-10 inline-block break-all text-[clamp(1.75rem,6.4vw,5.5rem)] text-foreground hover:text-accent-text"
        >
          {CONTACT.email}
        </a>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          <li>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-lg text-foreground"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-lg text-foreground"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href={CONTACT.cv} download className="link-underline text-lg text-foreground">
              Download CV
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
