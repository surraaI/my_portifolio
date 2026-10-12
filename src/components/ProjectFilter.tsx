import { Category } from "@/data/projects";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ProjectFilter = ({
  categories,
  activeCategory,
  setActiveCategory
}: {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}) => {
  return (
    <ToggleGroup
      type="single"
      value={activeCategory}
      onValueChange={(value) => {
        if (value) setActiveCategory(value);
      }}
      className="mb-10 justify-start gap-2"
    >
      {categories.map((category) => (
        <ToggleGroupItem
          key={category.id}
          value={category.id}
          className="px-4 py-2 text-sm font-medium data-[state=off]:text-muted-foreground data-[state=off]:hover:text-foreground"
        >
          {category.name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default ProjectFilter;
