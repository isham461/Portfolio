const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: ["React.js", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Data Science",
      skills: ["Python", "Pandas", "NumPy"]
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "Vite", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills</h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-8 bg-blue-50/50 dark:bg-slate-800/50 rounded-3xl border border-blue-100 dark:border-slate-800 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold shadow-sm border border-slate-100 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 cursor-default"
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
