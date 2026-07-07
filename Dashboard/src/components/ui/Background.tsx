"use client";
import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
      {/* Generated 3D Mesh Wave Image aligned to right */}
      <img 
        src="/mesh_wave.png"
        alt="Mesh Wave"
        className="absolute top-0 right-0 h-full w-[80vw] max-w-[1400px] object-cover object-right opacity-90 mix-blend-lighten"
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
