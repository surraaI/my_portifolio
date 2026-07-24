import { motion } from 'framer-motion';
import { CardContent } from '@/components/ui/card';

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
      className="bg-card text-card-foreground rounded-2xl shadow-xl border border-[#233D4D]/30"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <CardContent className="py-6">
        <div className="flex items-start mb-4">
          <div className="bg-[#233D4D]/10 dark:bg-[#233D4D]/20 p-2 rounded-lg">
            {icon}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-[#000000] dark:text-[#EAECF0]">{title}</h3>
            <p className="text-[#233D4D] dark:text-[#EAECF0]">{institution}</p>
            <p className="text-[#233D4D] dark:text-[#EAECF0] text-sm mt-1">{period}</p>
          </div>
        </div>
        <p className="text-[#000000] dark:text-[#EAECF0]">{description}</p>
      </CardContent>
    </motion.div>
  );
};

export default EducationCard;