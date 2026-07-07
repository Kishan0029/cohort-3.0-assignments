"use client";
import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#020617]">
      {/* Simplified Background Gradient for Better Performance */}
      <div 
        className="absolute top-[-30%] left-[-10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,rgba(0,0,0,0)_70%)]" 
      />
      
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,rgba(0,0,0,0)_70%)]" 
      />

      {/* Structured Minimal Grid to eliminate the "empty" feeling */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, #000 40%, transparent 100%)'
        }}
      />
      
      {/* Premium Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-screen"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      ></div>
    </div>
  );
}
