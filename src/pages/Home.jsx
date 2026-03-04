import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutSection from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutSection />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}
