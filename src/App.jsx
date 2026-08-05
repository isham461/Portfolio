import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeometricBackdrop from './components/GeometricBackdrop';

function App() {
  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-600 selection:text-white">
      {/* Fixed Full-Page Geometric Backdrop */}
      <GeometricBackdrop />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
