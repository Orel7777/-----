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
          {yogaAnimation && (
            <Lottie animationData={yogaAnimation} style={{ width: 200, height: 200 }} />
          )}
        </div>
        <div className="steps-container">
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              border: '1px solid #8B4513'
            }}
          >
            <div className="step-number">1</div>
            <h3 className="text-xl font-bold text-[#8B4513]">אבחון ראשוני</h3>
            <p className="text-[#5C4033] font-medium">הבנת הצרכים והמטרות שלך</p>
          </motion.div>
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              border: '1px solid #8B4513'
            }}
          >
            <div className="step-number">2</div>
            <h3 className="text-xl font-bold text-[#8B4513]">תכנית טיפול</h3>
            <p className="text-[#5C4033] font-medium">התאמה אישית של הטיפול</p>
          </motion.div>
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              border: '1px solid #8B4513'
            }}
          >
            <div className="step-number">3</div>
            <h3 className="text-xl font-bold text-[#8B4513]">טיפול מקצועי</h3>
            <p className="text-[#5C4033] font-medium">ביצוע הטיפול בקפידה</p>
          </motion.div>
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
            style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              border: '1px solid #8B4513'
            }}
          >
            <div className="step-number">4</div>
            <h3 className="text-xl font-bold text-[#8B4513]">מעקב והתאמה</h3>
            <p className="text-[#5C4033] font-medium">התאמת הטיפול לפי הצורך</p>
          </motion.div>
        </div>
        <motion.div 
          className="treatment-types"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-[#8B4513] mb-6">מגוון רחב של טיפולים מקצועיים בהתאמה אישית</h3>
          <div className="types-grid">
            <div className="type-item" style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              border: '1px solid #8B4513'
            }}>
              <div className="service-image-container">
                <img src="/3.6.jpeg" alt="עיסוי רפואי" className="service-image" />
              </div>
              <h4 className="text-lg font-bold text-[#8B4513]">עיסוי רפואי</h4>
              <p className="text-[#5C4033] font-medium">טיפול מקצועי להקלה על כאבים</p>
            </div>
            <div className="type-item" style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              border: '1px solid #8B4513'
            }}>
              <div className="service-image-container">
                <img src="/3.3.jpeg" alt="עיסוי ספורטאים" className="service-image" />
              </div>
              <h4 className="text-lg font-bold text-[#8B4513]">עיסוי ספורטאים</h4>
              <p className="text-[#5C4033] font-medium">שיפור ביצועים והתאוששות</p>
            </div>
            <div className="type-item" style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              border: '1px solid #8B4513'
            }}>
              <div className="service-image-container">
                <img src="/3.5.jpeg" alt="עיסוי רקמות עמוק" className="service-image" />
              </div>
              <h4 className="text-lg font-bold text-[#8B4513]">עיסוי רקמות עמוק</h4>
              <p className="text-[#5C4033] font-medium">טיפול בכאבים כרוניים</p>
            </div>
          </div>
        </motion.div>
      </div>
    </StyledBabySteps>
  );
};

const StyledBabySteps = styled.div`
  padding: 40px 0;
  background-color: #dcc1a6;

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
    color: #8B4513;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #8B4513;
  }

  .steps-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
  }

  .step {
    background-color: #dcc1a6/30;
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(139, 69, 19, 0.2);
    transition: transform 0.3s ease;
    border: 1px solid #8B4513;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(139, 69, 19, 0.3);
    }
  }

  .step-number {
    width: 40px;
    height: 40px;
    background: #8B4513;
    color: white;
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
    box-shadow: 0 4px 6px rgba(139, 69, 19, 0.2);
    border: 1px solid #8B4513;
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
    background-color: #dcc1a6/30;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(139, 69, 19, 0.2);
    transition: transform 0.3s ease;
    text-align: center;
    border: 1px solid #8B4513;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(139, 69, 19, 0.3);
    }

    h4 {
      margin: 12px 0 6px;
      color: #8B4513;
    }

    p {
      color: #5c4f47;
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