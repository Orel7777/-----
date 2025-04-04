import styled from 'styled-components';
import Form from './Form';
import { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <StyledHero>
      <div className="hero-content">
        <motion.div 
          className="text-content"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <h1 className="text-4xl font-bold mb-4 text-[#8B4513]">מרכז  לרפואה משלימה ועיסויים לנשים</h1>
          <p className="text-xl mb-8 text-[#5C4033]">חוויית עיסוי מותאמת אישית לנשים – לשחרור, רוגע וריפוי טבעי</p>
          <Button onClick={handleOpenForm}>לחצי עכשיו לקביעת תור</Button>
        </motion.div>
        <motion.div 
          className="image-card"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="card" style={{
            backgroundColor: 'rgba(220, 193, 166, 0.3)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
            transition: 'transform 0.3s ease',
            border: '1px solid #8B4513'
          }}>
            <div className="video-container">
              <video 
                className="hero-video" 
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/dd.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text">
              
              <p>חוויית טיפול ייחודית לגוף ולנפש</p>
            </div>
          </div>
        </motion.div>
      </div>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </StyledHero>
  );
}

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #dcc1a6;

  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
  }

  .text-content {
    flex: 1;
    text-align: right;
  }

  .image-card {
    flex: 1;
    display: flex;
    justify-content: center;
    perspective: 1000px;
  }

  .card {
    position: relative;
    background: rgba(220, 193, 166, 0.8);
    width: 400px;
    height: 400px;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    box-shadow: 0px 15px 45px rgba(139, 69, 19, 0.2);

    &:hover {
      transform: rotateY(10deg) translateY(-10px);
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0px 0px 50px 10px rgba(220, 193, 166, 0.5);
      z-index: 1;
      pointer-events: none;
    }
  }

  .video-container {
    position: absolute;
    top: 3%;
    left: 3%;
    width: 94%;
    height: 94%;
    transition: all 0.5s ease;
    border-radius: 12px;
    overflow: hidden;

    .hero-video {
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: center;
      transition: all 0.5s ease;
      transform: scale(1.05);
    }
  }

  .card:hover .video-container .hero-video {
    transform: scale(1.1);
  }

  .card:hover .video-container {
    transform: scale(1.02);
  }

  .text {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    padding: 2rem;
    background: linear-gradient(to top, rgba(139, 69, 19, 0.8), transparent);
    color: white;
    transition: all 0.3s ease;
    text-align: center;
    
    span {
      display: block;
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
  }

  .card:hover .text {
    bottom: 0;
  }

  @media (max-width: 768px) {
    .hero-content {
      flex-direction: column;
      text-align: center;
    }

    .text-content {
      text-align: center;
    }

    .card {
      width: 280px;
      height: 320px;
    }
  }
`;

export default Hero;