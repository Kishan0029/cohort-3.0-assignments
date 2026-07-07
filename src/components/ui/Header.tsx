"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md py-6" : "bg-transparent py-10"
      }`}
    >
      <div className="w-full px-10 flex items-center justify-between font-mono">
        <div className="text-white font-bold text-sm tracking-wider">
          KISHAN.SHERYIANS.COHORT 3.0
        </div>
        
        <nav className="hidden md:flex items-center gap-16">
          <a href="#home" className="text-[10px] text-white/50 hover:text-white transition-colors tracking-[0.2em] uppercase">01/HOME</a>
          <a href="#projects" className="text-[10px] text-white/50 hover:text-white transition-colors tracking-[0.2em] uppercase">02/PROJECTS</a>
          <a href="#about" className="text-[10px] text-white/50 hover:text-white transition-colors tracking-[0.2em] uppercase">03/ABOUT</a>
          <a href="#contact" className="text-[10px] text-white/50 hover:text-white transition-colors tracking-[0.2em] uppercase">04/CONTACT</a>
        </nav>
      </div>
    </motion.header>
  );
}
