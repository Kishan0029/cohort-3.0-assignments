import { Background } from "@/components/ui/Background";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Magnetic } from "@/components/ui/Magnetic";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { Header } from "@/components/ui/Header";
import { CommandPalette } from "@/components/ui/CommandPalette";
import projectsData from "@/data/projects.json";
import { Code2, User, Terminal, MapPin } from "lucide-react";

export default function Home() {
  const completedProjects = projectsData.filter(p => p.status === "Completed").length;

  return (
    <main className="relative min-h-screen overflow-x-hidden selection:bg-white/20">
      <CommandPalette />
      <Header />
      <Background />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Minimal Hero Section */}
        <section className="mb-32 flex flex-col items-start max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-medium">Available for Work</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 drop-shadow-sm">Kishan Revankar.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-light">
            A developer engineering polished, high-performance web experiences. 
            Currently building in public through Sheryians Cohort 3.0, mastering raw CSS 
            before scaling to full-stack React architecture.
          </p>

          <div className="flex items-center gap-4">
            <Magnetic>
              <a 
                href="https://github.com/Kishan0029" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                <Code2 size={16} /> GitHub Profile
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] text-white/80 text-sm font-medium rounded-lg hover:bg-white/[0.08] hover:text-white transition-colors border border-white/[0.04]"
              >
                <User size={16} /> LinkedIn
              </a>
            </Magnetic>
          </div>

          {/* Minimal Stats Row */}
          <div className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-white/[0.06] w-full">
            <div className="flex flex-col">
              <span className="text-white text-xl font-medium">{projectsData.length}</span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Assignments</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xl font-medium">3</span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Day Streak</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xl font-medium">{completedProjects}</span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Completed</span>
            </div>
          </div>
          
          <TechMarquee />
        </section>

        {/* Project Browser */}
        <section>
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-white/[0.06]">
            <div>
              <h2 className="text-xl font-medium text-white mb-1">Projects & Assignments</h2>
              <p className="text-sm text-white/40 font-light">Latest pushed code and UI implementations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
