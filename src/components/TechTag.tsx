import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const TechTag = ({ name }: { name: string }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
      <Badge
        variant="secondary"
        className="bg-[#233D4D]/10 text-[#233D4D] dark:bg-[#233D4D]/40 dark:text-[#EAECF0] border-transparent"
      >
        {name}
      </Badge>
    </motion.div>
  );
};

export default TechTag;
