import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import TechTag from '@/components/TechTag';
import { getProjectById, projects } from '@/data/projects';

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: 'Project not found' };

  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  fullstack: 'Full stack',
  mobile: 'Mobile',
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const study = project.caseStudy;

  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
      <Link href="/#work" className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground">
        Back to selected work
      </Link>

      <header className="mt-10 max-w-3xl">
        <p className="text-sm text-muted-foreground">
          {[CATEGORY_LABELS[project.category], project.role, study?.period].filter(Boolean).join(', ')}
        </p>
        <h1 className="display mt-3 text-5xl text-foreground md:text-6xl">{project.title}</h1>
        <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>

        {(project.demoUrl || project.githubUrl || project.isClientProject) && (
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="link-underline font-medium text-foreground">
                Visit live site
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-underline font-medium text-foreground">
                View code
              </a>
            )}
            {project.isClientProject && !project.githubUrl && (
              <span className="text-sm text-muted-foreground">Client project, private repository</span>
            )}
          </div>
        )}
      </header>

      {project.imageUrl && (
        <div className="relative mt-14 aspect-[2/1] overflow-hidden rounded-3xl border border-border bg-secondary">
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1152px) 2176px, 200vw"
            quality={100}
            className="object-cover object-left-top"
            priority
          />
        </div>
      )}

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-12 lg:col-span-6">
          {study && (
            <dl className="space-y-8">
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
          )}

          <section>
            <h2 className="display text-3xl text-foreground">What it does</h2>
            <ul className="mt-6 space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex max-w-[62ch] gap-3 leading-relaxed text-foreground">
                  <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="lg:col-span-6">
          {study && <ArchitectureDiagram layers={study.architecture} title={project.title} />}

          <section className={study ? 'mt-10' : ''}>
            <h2 className="text-sm font-medium text-muted-foreground">Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <TechTag name={tech} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
