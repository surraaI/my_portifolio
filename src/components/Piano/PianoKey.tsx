import { motion } from "framer-motion";
import { ReactNode } from "react";

type PianoKeyProps = {
  note: string;
  isBlack: boolean;
  onPress: (note: string) => void;
  label: ReactNode;
};

const PianoKey = ({ note, isBlack, onPress, label }: PianoKeyProps) => {
  return (
    <motion.button
      className={`relative rounded-b-md ${
        isBlack
          ? "bg-black w-8 h-32 md:h-40 z-10 -mx-4 shadow-lg"
          : "bg-white w-12 h-40 md:h-48 border border-gray-200"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ 
        scaleY: 0.95, 
        boxShadow: isBlack 
          ? "0 2px 5px rgba(0,0,0,0.5)" 
          : "0 2px 5px rgba(0,0,0,0.2)"
      }}
      onMouseDown={() => onPress(note)}
      onTouchStart={() => onPress(note)}
      aria-label={`Piano key ${note}`}
    >
      <div className={`absolute bottom-4 left-0 right-0 text-center ${
        isBlack ? "text-white" : "text-gray-800"
      } font-medium`}>
        {label}
      </div>
    </motion.button>
  );
};

export default PianoKey;