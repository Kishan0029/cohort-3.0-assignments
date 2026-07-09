"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, X, Eye } from "lucide-react";
import { Spotlight } from "./Spotlight";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ProjectCardProps {
  project: {
    id: string;
    category: string;
    title: string;
    description: string;
    status: string;
    technologies: string[];
    difficulty: string;
    date: string;
    tags: string[];
    url: string;
    sourceUrl: string;
    thumbnail: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        className="group flex"
      >
        <Spotlight className="flex flex-col w-full">
          {/* Minimal Thumbnail */}
          <div 
            className="relative w-full border-b border-white/[0.04] bg-[#050505] overflow-hidden cursor-pointer group/thumbnail"
            onClick={() => setIsImageOpen(true)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-auto block object-cover opacity-80 transition-all duration-700 group-hover/thumbnail:scale-105 group-hover/thumbnail:opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumbnail:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white shadow-xl">
                <Eye size={16} />
                <span className="text-xs font-medium tracking-wide">Preview</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                {project.date}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                <span className="text-[10px] uppercase tracking-[0.1em] text-white/80 font-medium">
                  {project.status}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
              {project.title}
            </h3>
            
            <p className="text-sm text-white/50 line-clamp-2 mb-6 flex-grow font-light leading-relaxed">
              {project.description}
            </p>

            {/* Minimal Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map(tech => (
                <span key={tech} className="px-2 py-1 bg-white/[0.03] text-white/60 text-[10px] tracking-wide rounded-md border border-white/[0.04]">
                  {tech}
                </span>
              ))}
            </div>

            {/* Vercel-style Actions */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.04]">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-white text-black text-xs font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Open Project <ArrowRight size={14} />
              </a>
              <a 
                href={project.sourceUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center p-2 bg-white/[0.03] text-white/70 rounded-lg hover:bg-white/[0.08] hover:text-white transition-colors border border-white/[0.04]"
                title="View Source Code"
              >
                <Code2 size={16} />
              </a>
            </div>
          </div>
        </Spotlight>
      </motion.div>

      {mounted && createPortal(
        <AnimatePresence>
          {isImageOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsImageOpen(false)}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-10 backdrop-blur-sm cursor-zoom-out"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setIsImageOpen(false); }}
                className="fixed top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[10000] cursor-pointer"
              >
                <X size={24} />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl relative z-40"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
