import { motion } from "framer-motion";

const TechTag = ({ name }: { name: string }) => {
  const getColor = (tech: string) => {
    const colors: Record<string, string> = {
      "Node.js": "bg-[#233D4D]/20 text-[#EAECF0]",
      "Express": "bg-[#233D4D]/20 text-[#EAECF0]",
      "MongoDB": "bg-[#233D4D]/20 text-[#EAECF0]",
      "React": "bg-[#233D4D]/20 text-[#EAECF0]",
      "Socket.IO": "bg-[#233D4D]/20 text-[#EAECF0]",
      "Python": "bg-[#233D4D]/20 text-[#EAECF0]",
      "FastAPI": "bg-[#233D4D]/20 text-[#EAECF0]",
      "PostgreSQL": "bg-[#233D4D]/20 text-[#EAECF0]",
      "Docker": "bg-[#233D4D]/20 text-[#EAECF0]",
      "Next.js": "bg-[#233D4D]/20 text-[#EAECF0]",
      "Tailwind CSS": "bg-[#233D4D]/20 text-[#EAECF0]",
      "Flutter": "bg-[#233D4D]/20 text-[#EAECF0]",
      "Dart": "bg-[#233D4D]/20 text-[#EAECF0]",
      "BLoC": "bg-[#233D4D]/20 text-[#EAECF0]",
      "Google Maps API": "bg-[#233D4D]/20 text-[#EAECF0]",
      "NestJS": "bg-[#233D4D]/20 text-[#EAECF0]",
      "TypeScript": "bg-[#233D4D]/20 text-[#EAECF0]",
      "JWT": "bg-[#233D4D]/20 text-[#EAECF0]"
    };
    
    return colors[tech] || "bg-[#233D4D]/20 text-[#EAECF0]";
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