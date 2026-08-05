import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent transition-colors duration-500 overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-anton text-5xl md:text-8xl text-slate-900 dark:text-white mb-6 tracking-wide">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent">ISHAM</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Second-Year AI & Data Science Student | Data Analyst & Frontend Developer
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#projects"
            className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 border border-blue-400/30 transition-all"
          >
            View My Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/IshamResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-4 bg-white/80 hover:bg-blue-50 text-slate-800 border border-blue-200 hover:border-blue-400 rounded-full font-bold text-lg backdrop-blur-md shadow-md transition-all hover:scale-105 dark:bg-[#061330]/80 dark:hover:bg-[#0b1f4d] dark:text-white dark:border-blue-800/60 dark:hover:border-blue-500"
          >
            <FileText className="mr-2" size={20} /> Resume
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 bg-white/80 hover:bg-blue-50 text-slate-800 border border-blue-200 hover:border-blue-400 rounded-full font-bold text-lg backdrop-blur-md shadow-md transition-all hover:scale-105 dark:bg-[#061330]/80 dark:hover:bg-[#0b1f4d] dark:text-white dark:border-blue-800/60 dark:hover:border-blue-500"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
