import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Code2, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzXZhopf0uGSqIiUiq2Hb_o8Q_346RbfvLdxBhXziGvmkXM0qMmunjQvRCHtgDTd3s/exec";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in both your email and message before submitting.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const data = new FormData();
      data.append('email', formData.email);
      data.append('message', formData.message);
      data.append('Email', formData.email);
      data.append('Message', formData.message);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });

      setStatus('success');
      setFormData({ email: '', message: '' });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or reach out via email directly.');
    }
  };

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
          <div className="space-y-6">
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

            <a href="https://leetcode.com/u/IshamA/" target="_blank" rel="noopener noreferrer" className="flex items-center group p-4 rounded-2xl bg-blue-50/50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">LeetCode</p>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-200">leetcode.com/u/IshamA</p>
              </div>
            </a>
          </div>

          {/* Quick Contact Message Form */}
          <form onSubmit={handleSubmit} className="p-8 bg-blue-50/50 dark:bg-slate-800/50 rounded-3xl border border-blue-100 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Quick Message</h3>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start space-x-3 text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 size={24} className="shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="font-bold text-sm">Message Sent!</p>
                    <p className="text-xs mt-1">Thank you for reaching out. Your message has been saved to Google Sheets!</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-start space-x-3 text-rose-800 dark:text-rose-300">
                  <AlertCircle size={24} className="shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                  <div>
                    <p className="font-bold text-sm">Submission Error</p>
                    <p className="text-xs mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">Your Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Type your message here..."
                    className="w-full p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center py-4 mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-2xl font-bold text-lg transition-all group shadow-lg shadow-blue-200 dark:shadow-none cursor-pointer disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
