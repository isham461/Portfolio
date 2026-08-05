const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white/80 border-t border-blue-100 dark:bg-black/90 dark:border-blue-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent mb-4 md:mb-0">
          ISHAM
        </div>
        
        <div className="text-slate-600 dark:text-slate-400 text-sm">
          &copy; {currentYear} ISHAM. All rights reserved.
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors">About</a>
          <a href="#projects" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors">Projects</a>
          <a href="#contact" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
