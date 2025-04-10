import { motion } from 'framer-motion';
import { TbMassage } from "react-icons/tb";
import styled from 'styled-components';
import Lottie from "lottie-react";
import { useState, useEffect } from 'react';

const BabySteps = () => {
  const [massageAnimation, setMassageAnimation] = useState(null);
  const [yogaAnimation, setYogaAnimation] = useState(null);

  useEffect(() => {
    // טעינת אנימציית עיסוי
    fetch('/icons/3.json')
      .then(res => res.text())
      .then(text => {
        try {
          const jsonData = JSON.parse(text);
          setMassageAnimation(jsonData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Error loading massage animation:', error));
      
    // טעינת אנימציית יוגה
    fetch('/icons/2.json')
      .then(res => res.text())
      .then(text => {
        try {
          const jsonData = JSON.parse(text);
          setYogaAnimation(jsonData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Error loading yoga animation:', error));
  }, []);

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

  return (
    <StyledBabySteps id="methodology">
      <div className="container">
        <motion.div 
          className="content-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="header">
            <h2>הטיפול המושלם - בארבעה שלבים</h2>
            <div className="divider"></div>
            <p className="subtitle">תהליך טיפול מקצועי ומותאם אישית</p>
          </div>

          <div className="steps-grid">
            <motion.div 
              className="step"
              variants={fadeInUp}
            >
              <div className="step-number">1</div>
              <h3>אבחון ראשוני</h3>
              <p>הבנת הצרכים והמטרות שלך</p>
            </motion.div>

            <motion.div 
              className="step"
              variants={fadeInUp}
            >
              <div className="step-number">2</div>
              <h3>תכנית טיפול</h3>
              <p>התאמה אישית של הטיפול</p>
            </motion.div>

            <motion.div 
              className="step"
              variants={fadeInUp}
            >
              <div className="step-number">3</div>
              <h3>טיפול מקצועי</h3>
              <p>ביצוע הטיפול בקפידה</p>
            </motion.div>

            <motion.div 
              className="step"
              variants={fadeInUp}
            >
              <div className="step-number">4</div>
              <h3>מעקב והתאמה</h3>
              <p>התאמת הטיפול לפי הצורך</p>
            </motion.div>
          </div>

          <div className="animation-container">
            {massageAnimation && (
              <Lottie animationData={massageAnimation} style={{ width: 200, height: 200 }} />
            )}
          </div>
        </motion.div>
      </div>
    </StyledBabySteps>
  );
};

const StyledBabySteps = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #E5D3C4, #D4B5A3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.1) 100%);
    pointer-events: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .content-wrapper {
    position: relative;
    z-index: 1;
  }

  .header {
    text-align: center;
    margin-bottom: 60px;
    
    h2 {
      font-size: 2.5rem;
      color: #8B4513;
      font-weight: 700;
      margin-bottom: 20px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .divider {
      width: 120px;
      height: 3px;
      background: linear-gradient(to right, transparent, #8B4513, transparent);
      margin: 20px auto;
    }

    .subtitle {
      font-size: 1.25rem;
      color: #5C4033;
      font-weight: 500;
    }
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin: 40px 0;
  }

  .step {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(139, 69, 19, 0.15);
      background: rgba(255, 255, 255, 0.2);
    }

    .step-number {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #8B4513, #5C4033);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      font-weight: bold;
      margin: 0 auto 20px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    h3 {
      font-size: 1.5rem;
      color: #8B4513;
      margin-bottom: 15px;
      font-weight: 600;
    }

    p {
      color: #5C4033;
      line-height: 1.6;
      font-size: 1.1rem;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
      pointer-events: none;
    }
  }

  .animation-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    .header h2 {
      font-size: 2rem;
    }

    .steps-grid {
      gap: 20px;
    }

    .step {
      padding: 20px;
    }
  }

  /* Add sparkle effect */
  .sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: white;
    animation: sparkle 1.5s infinite;
    opacity: 0.5;
  }

  @keyframes sparkle {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.5); opacity: 1; }
    100% { transform: scale(1); opacity: 0.5; }
  }
`;

export default BabySteps;