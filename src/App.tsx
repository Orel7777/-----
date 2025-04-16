import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BabySteps from './components/BabySteps';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Modaah from './components/Modaah';
import { useEffect, useState } from 'react';
import LoadingWithLogo from './components/LoadingWithLogo';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // סימולציה של טעינת העמוד
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingWithLogo />;
  }

  return (
    <div 
      className="min-h-screen text-foreground font-assistant relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #c3c8c1 0%, #98a27d 50%, #656d55 100%)`,
      }}
    >
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Modaah />
          <Services />
          <Testimonials />
          <BabySteps />
          <Stats />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;