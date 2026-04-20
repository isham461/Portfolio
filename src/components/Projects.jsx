import { ExternalLink, Github, Activity, ShieldCheck, Palette, FileAudio } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PDF-to-Audiobook Converter",
      description: "A robust Python script that parses PDF documents and converts the text into high-quality, playable audio using advanced TTS libraries.",
      tech: ["Python", "Pyttsx3", "PyPDF2"],
      icon: <FileAudio className="text-blue-500" size={40} />,
      live: "#",
      github: "https://github.com/isham461/PDF-to-Audiobook-Converter.git"
    },
    {
      title: "Dais Activity Hub",
      description: "A centralized platform designed to streamline, track, and manage events and daily engagements. Built with a strong focus on delivering a clean, intuitive frontend interface for seamless activity monitoring.",
      tech: ["React", "Tailwind CSS"],
      icon: <Activity className="text-indigo-500" size={40} />,
      live: "#",
      github: "https://github.com/isham461/dais-activity-hub.git"
    },
    {
      title: "AuraAudit",
      description: "An AI-powered web accessibility and UX auditing tool prototype. Designed with a modern, responsive architecture to help developers and designers visually evaluate and improve website usability and compliance.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      icon: <ShieldCheck className="text-pink-500" size={40} />,
      live: "#",
      github: "https://github.com/isham461/auraaudit.git"
    },
    {
      title: "Running Ink Lettering Portfolio",
      description: "A custom digital gallery showcasing my physical Gothic and Blackletter calligraphy artwork. This visually rich portfolio highlights my artistic eye and translates my lettering skills into an interactive web experience.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      icon: <Palette className="text-blue-500" size={40} />,
      live: "#",
      github: "https://github.com/isham461/lettering.git"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-blue-50/50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Selected Projects</h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                {/* Decorative background element */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-linear-to-br from-blue-500 to-transparent" />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <a href={project.live} className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">
                    <ExternalLink size={16} className="mr-1" /> View Live
                  </a>
                  <a href={project.github} className="flex items-center text-sm font-bold text-slate-600 dark:text-slate-400 hover:underline">
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
