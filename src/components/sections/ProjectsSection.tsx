// components/sections/ProjectsSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import TechTag from '@/components/TechTag';
import { Project, projects } from '@/data/projects';

const ArrowIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 ${className}`} aria-hidden>
    <path d="M6 14 14 6M7 6h7v7" />
  </svg>
);

const CaseStudy = ({ project, flipped }: { project: Project; flipped: boolean }) => {
  const study = project.caseStudy;
  if (!study) return null;

  return (
    <article className="grid grid-cols-1 gap-10 border-t border-border py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
      <Reveal className={`lg:col-span-6 ${flipped ? 'lg:order-2' : ''}`}>
        <p className="text-sm text-muted-foreground">
          {[project.role, study.period].filter(Boolean).join(', ')}
        </p>
        <h3 className="display mt-3 text-4xl md:text-5xl text-foreground">{project.title}</h3>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <dl className="mt-10 space-y-8">
          <div>
            <dt className="text-sm font-medium text-accent-text">Problem</dt>
            <dd className="mt-2 max-w-[62ch] leading-relaxed text-foreground">{study.problem}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-accent-text">My role</dt>
            <dd className="mt-2 max-w-[62ch] leading-relaxed text-foreground">{study.myRole}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-accent-text">Result</dt>
            <dd className="mt-2">
              <ul className="space-y-2">
                {study.results.map((result) => (
                  <li key={result} className="flex max-w-[62ch] gap-3 leading-relaxed text-foreground">
                    <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {result}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {(project.demoUrl || project.githubUrl) && (
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 font-medium text-foreground"
              >
                Visit live site <ArrowIcon />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 font-medium text-foreground"
              >
                View code <ArrowIcon />
              </a>
            )}
          </div>
        )}
      </Reveal>

      <Reveal className={`lg:col-span-6 ${flipped ? 'lg:order-1' : ''}`} delay={0.1}>
        {project.imageUrl && (
          <div className="relative mb-4 aspect-[2/1] overflow-hidden rounded-3xl border border-border bg-secondary">
            <Image
              src={project.imageUrl}
              alt={`${project.title} home page`}
              fill
              // Screenshots hold small UI text: ask for twice the frame width and skip lossy compression
              sizes="(min-width: 1024px) 1056px, 200vw"
              quality={100}
              className="object-cover object-left-top"
            />
          </div>
        )}
        <ArchitectureDiagram layers={study.architecture} title={project.title} />
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
          {project.technologies.map((tech) => (
            <li key={tech}>
              <TechTag name={tech} />
            </li>
          ))}
        </ul>
      </Reveal>
    </article>
  );
};

export default function ProjectsSection() {
  const caseStudies = projects.filter((project) => project.caseStudy);
  const otherProjects = projects.filter((project) => !project.caseStudy);

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          title="Selected work"
          subtitle="Four systems I designed and built, with the problem, my role, and how each one is put together."
        />

        {caseStudies.map((project, index) => (
          <CaseStudy key={project.id} project={project} flipped={index % 2 === 1} />
        ))}

        <Reveal className="border-t border-border pt-16 md:pt-24">
          <h3 className="display text-3xl text-foreground">More projects</h3>
          <ul className="mt-8">
            {otherProjects.map((project) => (
              <li key={project.id} className="border-b border-border first:border-t">
                <Link
                  href={`/projects/${project.id}`}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-5 transition-colors duration-200 hover:bg-foreground/[0.03] sm:grid-cols-[minmax(0,14rem)_1fr_auto] sm:px-3"
                >
                  <span className="font-medium text-foreground">{project.title}</span>
                  <span className="col-start-1 text-muted-foreground sm:col-start-2">{project.description}</span>
                  <ArrowIcon className="col-start-2 row-span-2 row-start-1 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-text sm:col-start-3 sm:row-span-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
