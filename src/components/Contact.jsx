import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0b1120] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Connect</h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto" />
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">Feel free to reach out for collaborations or just a friendly hello!</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
            
            <a href="mailto:ishamnew@gmail.com" className="flex items-center group p-4 rounded-2xl bg-blue-50/50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email</p>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-200">ishamnew@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/isham-a-0059a8381" target="_blank" rel="noopener noreferrer" className="flex items-center group p-4 rounded-2xl bg-blue-50/50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-200">linkedin.com/in/isham-a-0059a8381</p>
              </div>
            </a>

            <a href="https://github.com/isham461" target="_blank" rel="noopener noreferrer" className="flex items-center group p-4 rounded-2xl bg-blue-50/50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm text-slate-900 dark:text-white group-hover:scale-110 transition-transform">
                <Github size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">GitHub</p>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-200">github.com/isham461</p>
              </div>
            </a>
          </div>

          {/* Quick Contact Message */}
          <div className="p-8 bg-blue-50/50 dark:bg-slate-800/50 rounded-3xl border border-blue-100 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Quick Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">Your Message</label>
                <textarea 
                  className="w-full p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  rows="4"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button className="w-full flex items-center justify-center py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all group shadow-lg shadow-blue-200 dark:shadow-none">
                Send Message
                <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
