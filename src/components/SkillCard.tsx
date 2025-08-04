import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}

const SkillCard = ({ icon, name, level, description }: SkillCardProps) => {
  const levelColors = {
    Beginner: 'bg-blue-500/20 text-blue-400',
    Intermediate: 'bg-purple-500/20 text-purple-400',
    Advanced: 'bg-pink-500/20 text-pink-400'
  };
  
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 flex flex-col items-center text-center"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <span className={`text-sm px-3 py-1 rounded-full ${levelColors[level]} mb-3`}>
        {level}
      </span>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
};

export default SkillCard;