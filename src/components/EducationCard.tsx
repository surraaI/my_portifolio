import { motion } from 'framer-motion';

interface EducationCardProps {
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const EducationCard = ({ 
  title, 
  institution, 
  period, 
  description,
  icon
}: EducationCardProps) => {
  return (
    <motion.div
      className="bg-surface-card rounded-2xl p-6 shadow-xl border border-purple-500/30"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start mb-4">
        <div className="bg-purple-500/10 dark:bg-purple-500/20 p-2 rounded-lg">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-purple-600 dark:text-purple-400">{institution}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{period}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default EducationCard;