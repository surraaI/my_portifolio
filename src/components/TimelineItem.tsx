import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  side: 'left' | 'right';
  delay?: number;
}

const TimelineItem = ({ 
  year, 
  title, 
  organization, 
  description, 
  side,
  delay = 0 
}: TimelineItemProps) => {
  return (
    <motion.div
      className={`relative flex ${side === 'left' ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Year */}
      <div className={`${side === 'left' ? 'md:text-right' : ''} w-full md:w-1/2 px-4 py-2`}>
        <motion.div 
          className="inline-block bg-gradient-to-r from-[#233D4D] to-[#000000] text-[#EAECF0] px-4 py-2 rounded-lg font-bold"
          whileHover={{ scale: 1.05 }}
        >
          {year}
        </motion.div>
      </div>
      
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#233D4D] to-[#000000] border-4 border-[#000000] dark:border-[#EAECF0] z-10"></div>
      
      {/* Content */}
      <div className={`${side === 'left' ? 'md:text-left' : 'md:text-right'} w-full md:w-1/2 px-4 py-2`}>
        <div className="bg-gradient-to-br from-[#233D4D] to-[#000000] p-6 rounded-xl shadow-lg border border-[#233D4D]/30">
          <h3 className="text-xl font-bold text-[#EAECF0] mb-1">{title}</h3>
          <p className="text-[#EAECF0] mb-3">{organization}</p>
          <p className="text-[#EAECF0]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;