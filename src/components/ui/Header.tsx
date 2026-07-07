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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-black/40 backdrop-blur-md border-white/[0.06] py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs">
            K
          </div>
          <span className="text-white text-sm font-medium tracking-tight">Kishan Revankar</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Projects</a>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About</a>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="text-xs font-medium text-white/60 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.08] transition-colors">
            <span className="hidden sm:inline">Search</span>
            <kbd className="font-sans px-1.5 py-0.5 rounded bg-white/[0.1] text-white/80">⌘K</kbd>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
