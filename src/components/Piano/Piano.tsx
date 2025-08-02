"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PianoKey from "./PianoKey";
import { PianoSound } from "./PianoSound";

const Piano = () => {
  const [pianoSound, setPianoSound] = useState<PianoSound | null>(null);
  const [activeKeys, setActiveKeys] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Initialize piano sound on client side
    setPianoSound(new PianoSound());
  }, []);

  const playNote = (note: string) => {
    if (!pianoSound) return;
    
    // Set key as active
    setActiveKeys(prev => ({ ...prev, [note]: true }));
    
    // Play sound
    pianoSound.playNote(pianoSound.getFrequencyForNote(note));
    
    // Reset after animation
    setTimeout(() => {
      setActiveKeys(prev => ({ ...prev, [note]: false }));
    }, 300);
  };

  const keys = [
    { note: "C4", label: "C", isBlack: false },
    { note: "C#4", label: "C♯", isBlack: true },
    { note: "D4", label: "D", isBlack: false },
    { note: "D#4", label: "D♯", isBlack: true },
    { note: "E4", label: "E", isBlack: false },
    { note: "F4", label: "F", isBlack: false },
    { note: "F#4", label: "F♯", isBlack: true },
    { note: "G4", label: "G", isBlack: false },
    { note: "G#4", label: "G♯", isBlack: true },
    { note: "A4", label: "A", isBlack: false },
    { note: "A#4", label: "A♯", isBlack: true },
    { note: "B4", label: "B", isBlack: false },
    { note: "C5", label: "C", isBlack: false },
  ];

  return (
    <motion.div 
      className="relative bg-gradient-to-b from-gray-800 to-black rounded-xl p-8 shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Piano lid */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-amber-900 to-amber-800 rounded-t-xl"
        initial={{ rotateX: -45 }}
        animate={{ rotateX: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      
      {/* Piano body */}
      <motion.div 
        className="mt-12 bg-gradient-to-b from-gray-900 to-black rounded-lg p-6 pb-16"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Piano keys */}
        <div className="flex justify-center">
          {keys.map((key) => (
            <PianoKey
              key={key.note}
              note={key.note}
              isBlack={key.isBlack}
              onPress={playNote}
              label={key.label}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Piano pedals */}
      <div className="flex justify-center mt-4 space-x-6">
        {["soft", "sostenuto", "sustain"].map((pedal) => (
          <motion.div
            key={pedal}
            className="w-8 h-8 rounded-full bg-gradient-to-b from-gray-700 to-black border border-gray-800 shadow-inner"
            whileHover={{ y: -5 }}
            whileTap={{ y: 5 }}
          />
        ))}
      </div>
      
      {/* Musical notes animation */}
      {Object.keys(activeKeys).map((note, i) => (
        <motion.div
          key={`${note}-${i}`}
          className="absolute text-3xl text-yellow-400"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 40 + 10}%`,
          }}
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ 
            opacity: 0, 
            scale: 1.5,
            y: -100,
            rotate: Math.random() > 0.5 ? 45 : -45
          }}
          transition={{ duration: 1.5 }}
        >
          ♫
        </motion.div>
      ))}
      
      {/* Piano brand */}
      <motion.div 
        className="absolute top-4 left-0 right-0 text-center text-amber-100 text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Sura Itana Signature Edition
      </motion.div>
    </motion.div>
  );
};

export default Piano;