"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Code2, User, Search, Terminal } from "lucide-react";
import projectsData from "@/data/projects.json";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* Backdrop overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          onClick={() => setOpen(false)}
        />
      )}
      
      <Command.Dialog 
        open={open} 
        onOpenChange={setOpen}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden z-[100] outline-none"
      >
        <div className="flex items-center border-b border-white/[0.08] px-4">
          <Search className="text-white/40 w-5 h-5 mr-3" />
          <Command.Input 
            placeholder="Search assignments, tools, or links..." 
            className="w-full bg-transparent text-white placeholder-white/30 h-14 outline-none text-sm font-medium"
          />
        </div>

        <Command.List className="max-h-[350px] overflow-y-auto p-2">
          <Command.Empty className="py-8 text-center text-sm text-white/40">
            No results found.
          </Command.Empty>

          <Command.Group heading="Projects & Assignments" className="text-[10px] uppercase tracking-widest text-white/30 font-medium px-2 py-3 [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:px-2">
            {projectsData.map((project) => (
              <Command.Item 
                key={project.id}
                onSelect={() => {
                  window.open(project.url, "_blank");
                  setOpen(false);
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/80 hover:bg-white/[0.06] hover:text-white rounded-lg cursor-pointer transition-colors aria-selected:bg-white/[0.06] aria-selected:text-white"
              >
                <Terminal className="w-4 h-4 text-white/40" />
                {project.title}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Links" className="text-[10px] uppercase tracking-widest text-white/30 font-medium px-2 py-3 border-t border-white/[0.04] [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:px-2">
            <Command.Item 
              onSelect={() => {
                window.open("https://github.com/Kishan0029", "_blank");
                setOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/80 hover:bg-white/[0.06] hover:text-white rounded-lg cursor-pointer transition-colors aria-selected:bg-white/[0.06] aria-selected:text-white"
            >
              <Code2 className="w-4 h-4 text-white/40" />
              GitHub Profile
            </Command.Item>
            <Command.Item 
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/80 hover:bg-white/[0.06] hover:text-white rounded-lg cursor-pointer transition-colors aria-selected:bg-white/[0.06] aria-selected:text-white"
            >
              <User className="w-4 h-4 text-white/40" />
              LinkedIn Profile
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
