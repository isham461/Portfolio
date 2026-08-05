import { useState } from 'react';
import { Moon, Sun, Menu, X, FileText } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/IshamResume.pdf', external: true },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/70 backdrop-blur-xl border-b border-blue-200/60 dark:border-blue-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent">
            ISHAM
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-medium transition-colors flex items-center gap-1"
              >
                {link.name === 'Resume' && <FileText size={16} />}
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-blue-100/80 text-blue-700 hover:text-blue-900 hover:bg-blue-200 border border-blue-200 dark:bg-[#071330] dark:text-blue-300 dark:hover:text-white dark:hover:bg-blue-900/60 dark:border-blue-800/40 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-blue-100/80 text-blue-700 border border-blue-200 dark:bg-[#071330] dark:text-blue-300 dark:border-blue-800/40"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 border-b border-blue-200/60 dark:border-blue-900/40 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-blue-950/50 dark:hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
