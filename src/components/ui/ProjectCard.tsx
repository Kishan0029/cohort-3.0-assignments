"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Spotlight } from "./Spotlight";

interface ProjectCardProps {
  project: {
    id: string;
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group h-full flex"
    >
      <Spotlight className="flex flex-col w-full h-full">
        {/* Minimal Thumbnail */}
        <div className="relative h-48 w-full border-b border-white/[0.04] bg-[#050505] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
          />
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
  );
}
