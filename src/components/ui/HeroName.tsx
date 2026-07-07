"use client";

import { motion } from "framer-motion";

export function HeroName() {
  return (
    <motion.div
      className="relative inline-block cursor-default select-none group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Dynamic Aura that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
      
      {/* The Text */}
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 drop-shadow-sm font-bold tracking-tight">
        Kishan Revankar.
      </span>
      
      {/* Subtle underline that expands on hover */}
      <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}
