import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-[#0b1120] transition-colors duration-500">
      {/* Visual background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">ISHAM</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          First-Year AI & Data Science Student | Frontend Developer | Python Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#projects"
            className="group flex items-center px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 dark:shadow-none transition-all hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 text-slate-800 border border-slate-300 hover:bg-slate-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 rounded-full font-bold text-lg transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-linear-to-b from-blue-600 to-transparent rounded-full opacity-40" />
      </div>
    </section>
  );
};

export default Hero;
