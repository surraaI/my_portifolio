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
      className="mb-12"
    >
      {categories.map((category) => (
        <ToggleGroupItem
          key={category.id}
          value={category.id}
          className="px-4 py-2 text-sm font-medium data-[state=off]:bg-[#EAECF0] data-[state=off]:text-[#000000] data-[state=off]:hover:bg-[#233D4D]/20 dark:data-[state=off]:bg-[#000000] dark:data-[state=off]:text-[#EAECF0] dark:data-[state=off]:hover:bg-[#233D4D]"
        >
          {category.name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default ProjectFilter;
