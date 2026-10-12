const TechTag = ({ name }: { name: string }) => {
  return (
    <span className="inline-block rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
      {name}
    </span>
  );
};

export default TechTag;
