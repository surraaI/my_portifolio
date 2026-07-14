import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}

const SkillCard = ({ icon, name, level, description }: SkillCardProps) => {
  const levelColors = {
    Beginner: 'bg-[#233D4D]/20 text-[#EAECF0]',
    Intermediate: 'bg-[#233D4D]/20 text-[#EAECF0]',
    Advanced: 'bg-[#233D4D]/20 text-[#EAECF0]'
  };
  
  return (
    <motion.div
      className="bg-surface-card rounded-2xl p-6 shadow-xl border border-[#233D4D] dark:border-[#233D4D] flex flex-col items-center text-center"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#000000] dark:text-[#EAECF0] mb-2">{name}</h3>
      <span className={`text-sm px-3 py-1 rounded-full ${levelColors[level]} mb-3`}>
        {level}
      </span>
      <p className="text-[#000000] dark:text-[#EAECF0] text-sm">{description}</p>
    </motion.div>
  );
};

export default SkillCard;