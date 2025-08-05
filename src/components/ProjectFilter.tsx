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
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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