import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PawGuard — AI Stray Animal Rescue Advisor",
      description: "An AI-powered emergency advisor built for the 1M1B AI for Sustainability Virtual Internship, designed to mitigate urban human-animal conflict (SDG 11 & SDG 15).",
      bullets: [
        "Engineered a local RAG pipeline to securely ground AI responses in verified documents like the PCA Act 1960 and WHO Rabies Protocols, completely preventing AI hallucinations.",
        "Designed a modern, glassmorphic UI featuring a real-time AI advisor chat, legal rights vault, and emergency first-aid dashboard."
      ],
      tech: ["React", "Tailwind CSS", "RAG", "IBM Granite AI"],
      image: "/pawgaurd.png",
      live: null,
      github: "https://github.com/isham461/PawGuardAI"
    },
    {
      title: "Dais Activity Hub",
      description: "A centralized platform designed to streamline, track, and manage events and daily engagements. Built with a strong focus on delivering a clean, intuitive frontend interface for seamless activity monitoring.",
      tech: ["React", "Tailwind CSS"],
      image: "/dais.png",
      live: "https://dais-activity-hub.vercel.app",
      github: null
    },
    {
      title: "AuraAudit",
      description: "An AI-powered web accessibility and UX auditing tool prototype. Designed with a modern, responsive architecture to help developers and designers visually evaluate and improve website usability and compliance.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "/auraaudit.png",
      live: null,
      github: "https://github.com/isham461/auraaudit.git"
    },
    {
      title: "Lettering Gallery",
      description: "A custom digital gallery showcasing my physical Gothic and Blackletter calligraphy artwork. This visually rich portfolio highlights my artistic eye and translates my lettering skills into an interactive web experience.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/letteringgallery.png",
      live: "https://lettering-seven.vercel.app/#gallery",
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
            <div key={index} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
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
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {project.bullets && (
                    <ul className="text-slate-600 dark:text-slate-400 text-xs space-y-1.5 list-disc list-inside mb-4">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="px-8 pb-8 flex items-center space-x-4 mt-auto">
                {project.live && project.live !== '#' && (
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} className="mr-1" /> View Live
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm font-bold text-slate-600 dark:text-slate-400 hover:underline"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
