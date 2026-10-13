import Hero from '@/components/Hero';
import Startups from '@/components/Startups';
import Milestones from '@/components/Milestones';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import FaqGeo from '@/components/FaqGeo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';

export default function Home() {
  return (
    <main className="relative selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
      <FloatingParticles />
      <Hero />
      <Startups />
      <Milestones />
      <Projects />
      <Skills />
      <About />
      <Gallery />
      <FaqGeo />
      <Contact />
      <Footer />
    </main>
  );
}
