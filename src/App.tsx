import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import InspectorCursor from '@/components/InspectorCursor';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Highlights from '@/components/Highlights';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TechMarquee from '@/components/TechMarquee';
import AIEngineering from '@/components/AIEngineering';
import Architecture from '@/components/Architecture';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <ScrollProgress />
      <InspectorCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Experience />
        <Projects />
        <TechMarquee />
        <Skills />
        <AIEngineering />
        <Architecture />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
