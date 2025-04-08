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
    <StyledBabySteps id="methodology">
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
        <div className="steps">
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>אבחון ראשוני</h3>
            <p>הבנת הצרכים והמטרות שלך</p>
          </motion.div>
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3>תכנית טיפול</h3>
            <p>התאמה אישית של הטיפול</p>
          </motion.div>
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <h3>טיפול מקצועי</h3>
            <p>ביצוע הטיפול בקפידה</p>
          </motion.div>
          <motion.div 
            className="step"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <h3>מעקב והתאמה</h3>
            <p>התאמת הטיפול לפי הצורך</p>
          </motion.div>
        </div>
        <motion.div 
          className="treatment-types"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2 
            variants={fadeInUp} 
            className="text-2xl md:text-3xl font-bold mb-6 text-[#5C4033]"
          >
            סוגי טיפולים
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-[#5C4033] mb-8"
          >
            אני מציעה מגוון טיפולים מותאמים אישית לצרכים הספציפיים שלך
          </motion.p>
          
          <div className="treatment-types">
            <motion.div 
              className="treatment-type"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>טיפול פנים</h3>
              <p>טיפול מותאם אישית לסוג העור שלך</p>
            </motion.div>
            
            <motion.div 
              className="treatment-type"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3>טיפול גוף</h3>
              <p>טיפולים מפנקים להרגעה ושיפור מראה העור</p>
            </motion.div>
            
            <motion.div 
              className="treatment-type"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <h3>הסרת שיער</h3>
              <p>הסרת שיער מקצועית ועדינה</p>
            </motion.div>
            
            <motion.div 
              className="treatment-type"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <h3>טיפולים מיוחדים</h3>
              <p>טיפולים מתקדמים לתוצאות מיטביות</p>
            </motion.div>
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
    color: #5C4033;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #5C4033;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .step {
    background-color: rgba(220, 193, 166, 0.8);
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(139, 69, 19, 0.2);
    border: 2px solid #8B4513;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(139, 69, 19, 0.3);
    }
    
    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 10px;
      color: #5C4033;
    }
    
    p {
      color: #5C4033;
      line-height: 1.6;
    }
  }

  .treatment-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .treatment-type {
    background-color: rgba(220, 193, 166, 0.9);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #5C4033;
    }

    p {
      margin-bottom: 15px;
      color: #5C4033;
    }
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
    background-color: rgba(220, 193, 166, 0.9);
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;

    h4 {
      font-size: 1.2rem;
      margin-bottom: 5px;
      color: #5C4033;
    }

    p {
      color: #5C4033;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    h2 {
      font-size: 2rem;
    }

    .steps {
      grid-template-columns: 1fr;
    }

    .treatment-types {
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