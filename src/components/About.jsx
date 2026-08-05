import { Code, Database, Palette } from 'lucide-react';

const About = () => {
  const posters = [
    { src: '/posters/BMW.png', title: 'BMW Poster' },
    { src: '/posters/ICe.png', title: 'Ice Cream Poster' },
    { src: '/posters/watch.png', title: 'Watch Poster' },
    { src: '/posters/bp.jpg', title: 'Brand Poster' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-transparent via-blue-100/30 dark:via-[#030c25]/80 to-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Paragraphs Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              I am a driven <span className="font-semibold text-blue-600 dark:text-blue-400">Second-Year B.Tech student</span> specializing in Artificial Intelligence & Data Science. I bridge the gap between creative web development and analytical data science to build practical, user-centric applications.
            </p>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Currently, I am expanding my technical toolkit with competitive programming, developing modern full-stack web solutions, and building intuitive dashboards with Power BI, Tableau, and Excel to derive actionable insights from complex data.
            </p>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic">
              When I'm not coding or designing, I explore intricate forms of Gothic calligraphy, finding a creative discipline that enhances my technical work.
            </p>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Frontend Dev */}
            <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg shadow-blue-500/5 border border-blue-100 hover:border-blue-300 hover:scale-[1.02] transition-all dark:bg-gradient-to-b dark:from-[#071536]/80 dark:to-[#020716]/90 dark:border-blue-900/40 dark:hover:border-blue-500/60">
              <Code className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Frontend Dev</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Crafting intuitive, responsive, and cross-platform UI/UX using React, TypeScript, and modern frameworks.
              </p>
            </div>

            {/* Card 2: Data Science */}
            <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg shadow-blue-500/5 border border-blue-100 hover:border-blue-300 hover:scale-[1.02] transition-all dark:bg-gradient-to-b dark:from-[#071536]/80 dark:to-[#020716]/90 dark:border-blue-900/40 dark:hover:border-blue-500/60">
              <Database className="text-cyan-600 dark:text-cyan-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Data Science</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Data-driven Insights:</span> building and integrating models, and visualizing complex datasets through Power BI, Tableau, and Excel dashboards.
              </p>
            </div>

            {/* Card 3: Creative Arts */}
            <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg shadow-blue-500/5 border border-blue-100 hover:border-blue-300 hover:scale-[1.01] transition-all sm:col-span-2 dark:bg-gradient-to-b dark:from-[#071536]/80 dark:to-[#020716]/90 dark:border-blue-900/40 dark:hover:border-blue-500/60">
              <div className="flex items-center mb-3">
                <Palette className="text-pink-600 dark:text-pink-400 mr-3" size={28} />
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">Creative Arts</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Product Poster Design:</span> Blending aesthetic vision with precise layout and brand narrative.
              </p>

              {/* Poster Gallery */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {posters.map((poster, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl border border-blue-200 dark:border-blue-900/50 bg-slate-100 dark:bg-[#030919] aspect-3/4 shadow-sm hover:shadow-md transition-all">
                    <img 
                      src={poster.src} 
                      alt={poster.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-xs font-semibold text-white truncate">{poster.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
