import { motion } from "framer-motion";

const TechTag = ({ name }: { name: string }) => {
  const getColor = (tech: string) => {
    const colors: Record<string, string> = {
      "Node.js": "bg-green-500/20 text-green-400",
      "Express": "bg-gray-500/20 text-gray-400",
      "MongoDB": "bg-green-600/20 text-green-500",
      "React": "bg-blue-500/20 text-blue-400",
      "Socket.IO": "bg-gray-500/20 text-gray-400",
      "Python": "bg-yellow-500/20 text-yellow-400",
      "FastAPI": "bg-teal-500/20 text-teal-400",
      "PostgreSQL": "bg-blue-600/20 text-blue-500",
      "Docker": "bg-blue-400/20 text-blue-300",
      "Next.js": "bg-black/20 text-gray-300",
      "Tailwind CSS": "bg-cyan-500/20 text-cyan-400",
      "Flutter": "bg-blue-400/20 text-blue-300",
      "Dart": "bg-blue-500/20 text-blue-400",
      "BLoC": "bg-purple-500/20 text-purple-400",
      "Google Maps API": "bg-red-500/20 text-red-400",
      "NestJS": "bg-red-600/20 text-red-500",
      "TypeScript": "bg-blue-600/20 text-blue-500",
      "JWT": "bg-purple-600/20 text-purple-500"
    };
    
    return colors[tech] || "bg-purple-500/20 text-purple-400";
  };
  
  return (
    <motion.span 
      className={`text-xs px-2 py-1 rounded-full ${getColor(name)}`}
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.span>
  );
};

export default TechTag;