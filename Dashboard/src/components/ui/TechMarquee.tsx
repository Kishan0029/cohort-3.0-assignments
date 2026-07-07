"use client";

import { motion } from "framer-motion";

export function TechMarquee() {
  const technologies = [
    "HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", 
    "Framer Motion", "TypeScript", "Node.js", "Git", "Vercel", "GSAP"
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.04] bg-white/[0.01] py-4 mt-20 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10 pointer-events-none w-full" />
      
      <motion.div
        className="flex whitespace-nowrap gap-12 px-6 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {/* Double array to loop seamlessly */}
        {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
          <span 
            key={idx} 
            className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
