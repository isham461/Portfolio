const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-blue-50/50 dark:bg-slate-900 border-t border-blue-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 md:mb-0">
          ISHAM
        </div>
        
        <div className="text-slate-500 dark:text-slate-400 text-sm">
          &copy; {currentYear} ISHAM. All rights reserved.
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">About</a>
          <a href="#projects" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Projects</a>
          <a href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
