import { ArchitectureLayer } from "@/data/projects";

/**
 * Draws a system as stacked layers (clients, API, data) joined by connectors,
 * so a case study can show how the pieces fit rather than just listing a stack.
 */
const ArchitectureDiagram = ({ layers, title }: { layers: ArchitectureLayer[]; title: string }) => {
  return (
    <figure className="rounded-3xl border border-border bg-card p-5 sm:p-8">
      <figcaption className="sr-only">{title} architecture</figcaption>

      <ol>
        {layers.map((layer, index) => (
          <li key={layer.name}>
            {index > 0 && (
              <div className="flex h-8 justify-center" aria-hidden>
                <span className="w-px bg-foreground/25" />
              </div>
            )}

            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-sm font-medium text-muted-foreground">{layer.name}</p>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {layer.nodes.map((node) => (
                  <li
                    key={node.label}
                    className="rounded-xl border border-border bg-card px-3 py-2.5 last:odd:col-span-2"
                  >
                    <p className="text-sm font-medium text-foreground">{node.label}</p>
                    {node.note && (
                      <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{node.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
};

export default ArchitectureDiagram;
