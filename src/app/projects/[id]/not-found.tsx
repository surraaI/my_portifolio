import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-center px-5 pt-24 md:px-8">
      <h1 className="display text-5xl text-foreground md:text-6xl">Project not found</h1>
      <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
        There is no project at this address. It may have been renamed or removed.
      </p>
      <div className="mt-10">
        <Link href="/#work" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground transition duration-200 hover:brightness-105 active:scale-[0.98]">
          See selected work
        </Link>
      </div>
    </div>
  );
}
