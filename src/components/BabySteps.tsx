import { motion } from 'framer-motion';
import { TbMassage } from "react-icons/tb";
import styled from 'styled-components';
import Lottie from "lottie-react";
import yogaAnimation from "../assets/yoga-animation.json";
import { useState, useEffect } from 'react';

const BabySteps = () => {
  const [massageAnimation, setMassageAnimation] = useState(null);

  useEffect(() => {
    fetch('/icons/3.json')
      .then(res => res.json())
      .then(data => setMassageAnimation(data));
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <StyledBabySteps>
      <div className="container text-center">
        <div className="flex justify-center mb-8">
          {massageAnimation && (
            <Lottie animationData={massageAnimation} style={{ width: 250, height: 250 }} />
          )}
        </div>
        <div className="header">
          <h2 className="text-center text-gray-800 font-bold">הטיפול המושלם - בארבעה שלבים</h2>
          <p className="subtitle text-center text-gray-700 font-semibold">תהליך טיפול מקצועי ומותאם אישית</p>
        </div>
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">כל טיפול מתוכנן ומבוצע בקפידה לפי צרכי המטופל/ת</h3>
        <div className="flex justify-center mb-12">
          <Lottie animationData={yogaAnimation} style={{ width: 200, height: 200 }} />
        </div>
        <div className="steps-container">
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="step-number">1</div>
            <h3 className="text-xl font-bold text-gray-800">אבחון ראשוני</h3>
            <p className="text-gray-700 font-medium">הבנת הצרכים והמטרות שלך</p>
          </motion.div>
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="step-number">2</div>
            <h3 className="text-xl font-bold text-gray-800">תכנית טיפול</h3>
            <p className="text-gray-700 font-medium">התאמה אישית של הטיפול</p>
          </motion.div>
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="step-number">3</div>
            <h3 className="text-xl font-bold text-gray-800">טיפול מקצועי</h3>
            <p className="text-gray-700 font-medium">ביצוע הטיפול בקפידה</p>
          </motion.div>
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <div className="step-number">4</div>
            <h3 className="text-xl font-bold text-gray-800">מעקב והתאמה</h3>
            <p className="text-gray-700 font-medium">התאמת הטיפול לפי הצורך</p>
          </motion.div>
        </div>
        <motion.div 
          className="treatment-types"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">מגוון רחב של טיפולים מקצועיים בהתאמה אישית</h3>
          <div className="types-grid">
            <div className="type-item">
              <div className="service-image-container">
                <img src="/3.6.jpeg" alt="עיסוי רפואי" className="service-image" />
              </div>
              <h4 className="text-lg font-bold text-gray-800">עיסוי רפואי</h4>
              <p className="text-gray-700 font-medium">טיפול מקצועי להקלה על כאבים</p>
            </div>
            <div className="type-item">
              <div className="service-image-container">
                <img src="/3.3.jpeg" alt="עיסוי ספורטאים" className="service-image" />
              </div>
              <h4 className="text-lg font-bold text-gray-800">עיסוי ספורטאים</h4>
              <p className="text-gray-700 font-medium">שיפור ביצועים והתאוששות</p>
            </div>
            <div className="type-item">
              <div className="service-image-container">
                <img src="/3.5.jpeg" alt="עיסוי רקמות עמוק" className="service-image" />
              </div>
              <h4 className="text-lg font-bold text-gray-800">עיסוי רקמות עמוק</h4>
              <p className="text-gray-700 font-medium">טיפול בכאבים כרוניים</p>
            </div>
          </div>
        </motion.div>
      </div>
    </StyledBabySteps>
  );
};

const StyledBabySteps = styled.div`
  padding: 40px 0;
  background-color: #e8f5e9;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .header {
    text-align: center;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #4a5568;
  }

  .steps-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
  }

  .step {
    background-color: #e8f5e9;
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .step-number {
    width: 40px;
    height: 40px;
    background: #b5dacd;
    color: #4a5568;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
    font-weight: bold;
  }

  .treatment-types {
    text-align: center;
    margin-top: 20px;
  }

  .service-image-container {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .service-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 24px;
    padding: 0 16px;
  }

  .type-item {
    background-color: #e8f5e9;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }

    h4 {
      margin: 12px 0 6px;
    }

    p {
      color: #4a5568;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 0;

    h2 {
      font-size: 2rem;
    }

    .steps-container,
    .types-grid {
      grid-template-columns: 1fr;
    }

    .service-image-container {
      height: 180px;
    }

    .types-grid {
      padding: 0 8px;
    }
  }
`;

export default BabySteps;