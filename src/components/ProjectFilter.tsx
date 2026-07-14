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
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
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