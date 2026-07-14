import { motion } from "framer-motion";
import { Category } from "@/data/projects";

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
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category.id
              ? "bg-brand-gradient text-white"
              : "bg-[#EAECF0] text-[#000000] hover:bg-[#233D4D] dark:bg-[#000000] dark:text-[#EAECF0] dark:hover:bg-[#233D4D]"
          }`}
          onClick={() => setActiveCategory(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;