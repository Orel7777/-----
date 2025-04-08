import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BabySteps from './components/BabySteps';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Modaah from './components/Modaah';
import { useEffect, useState } from 'react';

// יצירת קומפוננטת שלג
const Snowflake = ({ style }: { style: React.CSSProperties }) => {
  return <div className="snowflake" style={style} />;
};

function App() {
  const [snowflakes, setSnowflakes] = useState<React.CSSProperties[]>([]);

  // יצירת פתיתי שלג
  useEffect(() => {
    const flakes = [];
    const count = window.innerWidth < 768 ? 20 : 40; // פחות פתיתים במובייל
    
    for (let i = 0; i < count; i++) {
      flakes.push({
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.3,
        fontSize: `${Math.random() * 15 + 10}px`,
      });
    }
    
    setSnowflakes(flakes);
  }, []);

  return (
    <div 
      className="min-h-screen text-foreground font-assistant relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #fefbe8 0%, #ceac93 50%, #ad8b72 100%)`,
      }}
    >
      {/* אפקט שלג */}
      <div className="snow-container">
        {snowflakes.map((style, index) => (
          <Snowflake key={index} style={style} />
        ))}
      </div>

      <style jsx global>{`
        .snow-container {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .snowflake {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          top: -10px;
          animation-name: snowfall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
        }
        
        @keyframes snowfall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>

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