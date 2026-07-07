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
    <main className="relative min-h-screen bg-black overflow-x-hidden selection:bg-white/20 font-sans">
      <CommandPalette />
      <Header />
      <Background />

      {/* Full Screen Minimalist Hero Section */}
      <div id="home" className="w-full h-screen min-h-[800px] flex flex-col justify-between px-10 pt-40 pb-12 relative z-10">
        
        {/* Huge Typography Block */}
        <div className="flex flex-col relative w-full mt-10">
          <h1 className="text-[12vw] leading-[0.85] font-black text-white tracking-tighter m-0 p-0">
            CREATIVE
          </h1>
          
          <div className="flex items-start relative">
            <div className="w-[3px] h-[10vw] bg-white/20 mt-4 mr-6 hidden md:block"></div>
            <h1 className="text-[12vw] leading-[0.85] font-black text-white/30 tracking-tighter m-0 p-0">
              DEVELOPER
            </h1>
            
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
              <p className="font-mono text-[10px] text-white/50 tracking-[0.2em] uppercase">
                Kishan Revankar / Web Developer & AI Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Elements */}
        <div className="flex justify-between items-end w-full border-t border-white/[0.05] pt-10">
          <div className="flex flex-col justify-between h-full gap-20">
            <p className="font-mono text-[11px] text-white/60 tracking-widest uppercase">
              // SCALABLE WEB & AI SOLUTIONS.
            </p>
            <p className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase">
              EXPLORE MY WORK ↓
            </p>
          </div>
          
          <div className="max-w-[400px]">
            <p className="font-mono text-[10px] leading-loose text-white/40 text-justify">
              Full-stack developer and AI automation engineer passionate about building scalable web applications, intelligent workflows, and real-world AI solutions. Focused on clean architecture, performance, and creating products that solve meaningful business problems.
            </p>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-pulse">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/30">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>

      {/* Content Below Fold */}
      <div className="w-full px-10 pb-24 relative z-10 bg-black">
        {/* Project Browser */}
        <section id="projects" className="pt-20 border-t border-white/[0.05]">
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

        {/* About Section */}
        <section id="about" className="pt-32 pb-20 border-t border-white/[0.05] mt-32">
          <div className="flex items-end justify-between mb-12 pb-4 border-b border-white/[0.06]">
            <div>
              <h2 className="text-xl font-medium text-white mb-1">About Me</h2>
              <p className="text-sm text-white/40 font-light">My background and what I do.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-white/60 font-light leading-relaxed">
            <div className="flex flex-col gap-6">
              <p>
                Hi, I'm <strong className="text-white font-medium">Kishan Revankar</strong> — a full-stack developer and AI automation engineer passionate about building modern web applications, intelligent automation systems, and software that solves real-world problems.
              </p>
              <p>
                I'm currently learning <strong className="text-white font-medium">Web Development</strong> and <strong className="text-white font-medium">AI Automation</strong> through <strong className="text-white font-medium">Sheryians Coding School Cohort 3.0</strong>, where I'm strengthening my foundations while building projects consistently and sharing my journey in public.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p>
                Alongside learning, I'm the founder of <strong className="text-white font-medium">Nextverse</strong>, where I develop websites, AI-powered workflows, and custom automation solutions for businesses. My goal is to create fast, scalable, and user-focused products that deliver real value.
              </p>
              <p>
                I enjoy exploring new technologies, contributing to open-source projects, and continuously improving my skills by building, experimenting, and shipping.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-32 pb-20 border-t border-white/[0.05]">
          <div className="flex items-end justify-between mb-12 pb-4 border-b border-white/[0.06]">
            <div>
              <h2 className="text-xl font-medium text-white mb-1">Contact Me</h2>
              <p className="text-sm text-white/40 font-light">Let's build something together.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on interesting projects, or connecting with fellow developers and builders. Feel free to reach out—I'd love to connect and build something amazing together.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a href="mailto:your@email.com" className="flex items-center gap-4 p-4 border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-lg group">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors w-24">Email</span>
                <span className="text-white/80">your@email.com</span>
              </a>
              <a href="https://github.com/Kishan0029" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-lg group">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors w-24">GitHub</span>
                <span className="text-white/80">github.com/Kishan0029</span>
              </a>
              <a href="https://www.linkedin.com/in/kishanrevankar29/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-lg group">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors w-24">LinkedIn</span>
                <span className="text-white/80">linkedin.com/in/kishanrevankar29</span>
              </a>
              <a href="https://x.com/Kishan__29" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-lg group">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors w-24">X (Twitter)</span>
                <span className="text-white/80">x.com/Kishan__29</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
