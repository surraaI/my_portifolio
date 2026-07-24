import { motion } from 'framer-motion';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}

const SkillCard = ({ icon, name, level, description }: SkillCardProps) => {
  return (
    <motion.div
      className="bg-card text-card-foreground rounded-2xl shadow-xl border border-[#233D4D] dark:border-[#233D4D]"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <CardContent className="flex flex-col items-center text-center py-6">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#000000] dark:text-[#EAECF0] mb-2">{name}</h3>
        <Badge
          variant="secondary"
          className="bg-[#233D4D]/10 text-[#233D4D] dark:bg-[#233D4D]/40 dark:text-[#EAECF0] border-transparent mb-3"
        >
          {level}
        </Badge>
        <p className="text-[#000000] dark:text-[#EAECF0] text-sm">{description}</p>
      </CardContent>
    </motion.div>
  );
};

export default SkillCard;