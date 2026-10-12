import Reveal from "@/components/Reveal";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <Reveal className="mb-12 md:mb-16">
      <h2 className="display text-4xl md:text-5xl text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
