import styled from 'styled-components';
import { GrAchievement, GrDeploy } from "react-icons/gr";
import Form from './Form';
import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

// נתיבי התמונות למצגת
const slideshowImages = [
  '/סרטון מתנגן/3.1.jpeg',
  '/סרטון מתנגן/3.2.jpeg',
  '/סרטון מתנגן/3.3.jpeg',
  '/סרטון מתנגן/3.4.jpeg',
  '/סרטון מתנגן/3.5.jpeg',
  '/סרטון מתנגן/3.7.jpeg',
];

const Modaah = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  // פונקציה למעבר לתמונה הבאה
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // החלפת תמונות אוטומטית
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextImage();
    }, 3000); // מעבר כל 3 שניות
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentImageIndex]);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <StyledModaah className="py-16 bg-[#dcc1a6]" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#dcc1a6]">
          שירותי הקליניקה
        </h2>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="video-card" style={{
            backgroundColor: 'rgba(220, 193, 166, 0.3)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
            transition: 'transform 0.3s ease',
            border: '1px solid #8B4513'
          }}>
            <div className="slideshow-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="slideshow-image-wrapper"
                >
                  <img 
                    src={slideshowImages[currentImageIndex]} 
                    alt={`תמונה ${currentImageIndex + 1}`} 
                    className="slideshow-image"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="text-overlay">
              <h3 className="text-xl font-semibold">עיסוי מקצועי</h3>
              <p>מגוון טיפולי עיסוי מותאמים אישית</p>
            </div>
          </div>

          <div className="video-card" style={{
            backgroundColor: 'rgba(220, 193, 166, 0.3)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
            transition: 'transform 0.3s ease',
            border: '1px solid #8B4513'
          }}>
            <div className="video-container">
              <video
                className="service-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video_2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-overlay">
              <h3 className="text-xl font-semibold"> חוויה מרגיעה ומרפאת</h3>
              <p>טיפול עדין ומותאם במיוחד</p>
            </div>
          </div>

          <div className="video-card" style={{
            backgroundColor: 'rgba(220, 193, 166, 0.3)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
            transition: 'transform 0.3s ease',
            border: '1px solid #8B4513'
          }}>
            <div className="video-container">
              <video
                className="service-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video_10.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-overlay">
              <h3 className="text-xl font-semibold">פיסול פנים טבעי</h3>
              <p>מיניליפט ויוגה פייס</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div style={{
            backgroundColor: 'rgba(220, 193, 166, 0.3)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
            transition: 'transform 0.3s ease',
            textAlign: 'center',
            border: '1px solid #8B4513'
          }}>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-semibold text-[#8B4513]">עיסויים</h3>
              <div className="icon-container text-[#8B4513]">
                <GrDeploy className="achievement-icon" />
              </div>
            </div>
            <ul className="space-y-3 text-[#8B4513]">
              <li>• עיסוי רקמות-עמוק</li>
              <li>• עיסוי שוודי/משולב</li>
              <li>• עיסוי תאילנדי</li>
              <li>• עיסוי הריון</li>
              <li>• עיסוי רפואי</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: 'rgba(220, 193, 166, 0.3)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
            transition: 'transform 0.3s ease',
            textAlign: 'center',
            border: '1px solid #8B4513'
          }} className="relative">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-semibold text-[#8B4513]">פיסול פנים טבעי</h3>
              <div className="icon-container text-[#8B4513]">
                <GrAchievement className="achievement-icon" />
              </div>
            </div>
            <ul className="space-y-3 text-[#8B4513]">
              <li>• עיסוי פנים מיניליפט</li>
              <li>• יוגה פייס</li>
              <li>• טיפול פנים הוליסטי</li>
              <li>• עיסוי פנים מפנק</li>
              <li>• טיפול זוהר טבעי</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button onClick={handleOpenForm}>לתיאום תור</Button>
        </div>
      </div>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </StyledModaah>
  );
};

const StyledModaah = styled.section`
  /* סגנון המצגת בתוך הקארד */
  .slideshow-wrapper {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }

  .slideshow-image-wrapper {
    width: 95%;
    height: 95%;
    margin: 2.5%;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
  }

  .slideshow-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
  }

  .slideshow-controls {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    z-index: 10;
  }

  .control-button {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 20;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      transform: scale(1.1);
    }
  }

  .slideshow-indicators {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background-color: white;
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    .slideshow-image-wrapper {
      height: 300px;
    }
    
    .control-button {
      width: 35px;
      height: 35px;
    }
    
    .indicator {
      width: 8px;
      height: 8px;
    }
  }

  .video-card {
    position: relative;
    height: 400px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    padding: 8px;
    background: rgba(255, 255, 255, 0.05);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);

      .service-video, .slideshow-image {
        transform: scale(1.03);
      }

      .text-overlay {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.3));
        padding-bottom: 2rem;
      }
    }
  }

  .video-container {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    overflow: hidden;

    .service-video {
      width: 95%;
      height: 95%;
      margin: 2.5%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
      border-radius: 8px;
    }
  }

  .text-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
    color: white;
    transition: all 0.3s ease;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    p {
      font-size: 1.1rem;
      opacity: 0.95;
    }
  }

  .icon-container {
    display: inline-flex;
    animation: floatAndRotate 3s ease-in-out infinite;
  }

  .achievement-icon {
    width: 24px;
    height: 24px;
    color: white;
    filter: invert(1);
  }

  @keyframes floatAndRotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .video-card {
      height: 300px;
    }

    .text-overlay {
      padding: 1.5rem;
      
      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export default Modaah;

