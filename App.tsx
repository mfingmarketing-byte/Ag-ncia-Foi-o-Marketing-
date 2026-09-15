import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InvisibilityProblem from '@/components/InvisibilityProblem';
import StrategicVisibility from '@/components/StrategicVisibility';
import Process from '@/components/Process';
import Team from '@/components/Team';
import Proofs from '@/components/Proofs';
import Services from '@/components/Services';
import Calculator from '@/components/Calculator';
import Plans from '@/components/Plans';
import TargetAudience from '@/components/TargetAudience';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InvisibilityProblem />
        <StrategicVisibility />
        <Process />
        <Team />
        <Proofs />
        <Services />
        <Calculator />
        <Plans />
        <TargetAudience />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
