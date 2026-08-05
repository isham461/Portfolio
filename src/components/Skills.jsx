const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analytics & Visualization",
      skills: ["Power BI", "Tableau", "Streamlit", "Excel", "Google Spreadsheets", "Pandas", "NumPy", "Matplotlib", "Data Analysis & Visualization"]
    },
    {
      title: "Development & Languages",
      skills: ["Python", "C", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Tools & Coding Platforms",
      skills: ["Git", "GitHub", "LeetCode", "Jupyter Notebooks", "Kaggle", "VS Code", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Tools</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-blue-100 hover:border-blue-300 shadow-xl shadow-blue-500/5 transition-all dark:bg-gradient-to-b dark:from-[#071536]/80 dark:via-[#03091a]/80 dark:to-[#01040d]/90 dark:border-blue-900/40 dark:hover:border-blue-500/60">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50/80 text-blue-700 rounded-xl text-sm font-semibold border border-blue-200/80 hover:border-blue-400 hover:text-blue-900 hover:bg-blue-100 transition-all cursor-default dark:bg-[#06122e]/90 dark:text-blue-200 dark:border-blue-800/40 dark:hover:border-blue-400 dark:hover:text-white dark:hover:bg-blue-900/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
