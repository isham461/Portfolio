import { Code, Database, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-blue-50/50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              I am a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">First-Year B.Tech student</span> specializing in Artificial Intelligence & Data Science. I bridge the gap between creative web development and analytical data science.
            </p>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Currently, I am actively honing my skills in <span className="italic font-medium">Data Structures and Algorithms (DSA)</span> and building modern, responsive user interfaces.
            </p>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic">
              When I'm not coding, you'll likely find me exploring the elegant art of calligraphy, where I find a creative balance to my technical work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 hover:scale-105 transition-transform">
              <Code className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Frontend Dev</h3>
              <p className="text-slate-500 dark:text-slate-400">Crafting intuitive and responsive UI/UX using React and Tailwind.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 hover:scale-105 transition-transform">
              <Database className="text-indigo-600 dark:text-indigo-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Data Science</h3>
              <p className="text-slate-500 dark:text-slate-400">Analyzing patterns and building models with Python, Pandas, and NumPy.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 hover:scale-105 transition-transform sm:col-span-2">
              <Palette className="text-pink-600 dark:text-pink-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Creative Arts</h3>
              <p className="text-slate-500 dark:text-slate-400">Practicing calligraphy to maintain a sharp eye for detail and aesthetics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
