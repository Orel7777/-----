import styled from 'styled-components';
import Form from './Form';
import { useState, useEffect } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { FaBluesky, FaDove } from "react-icons/fa6";
import Lottie from "lottie-react";
import { TbMassage } from "react-icons/tb";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': any;
    }
  }
}

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [serviceAnimation, setServiceAnimation] = useState(null);

  useEffect(() => {
    fetch('/icons/4.json')
      .then(res => res.text())
      .then(text => {
        try {
          const jsonData = JSON.parse(text);
          setServiceAnimation(jsonData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Error loading animation:', error));
  }, []);

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
    <StyledServices className="" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        > 
          <motion.div
            animate={floatAnimation}
            className="text-gray-800 mb-4"
          >
            {serviceAnimation && (
              <Lottie animationData={serviceAnimation} style={{ width: 200, height: 200 }} />
            )}
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513]">
            שירותי הקליניקה
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="backdrop-blur-sm bg-[#dcc1a6]/20 rounded-xl p-12 shadow-lg hover:shadow-xl transition-all"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-4xl font-bold text-[#8B4513]">עיסויים רפואיים וטיפוליים</h3>
              <motion.div
                animate={floatAnimation}
                className="text-[#8B4513]"
              >
                <FaDove size={32} />
              </motion.div>
            </div>
            <ul className="space-y-6 text-2xl font-medium text-[#5C4033]">
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי רפואי
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי רקמות עמוק
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי לנשים בהריון
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי לאחר לידה
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי לימפטי
                <span className="text-xl text-gray-500 mr-2">(ניקוז לימפטי)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי לספורטאיות
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי לכאבי גב וצוואר
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-[#dcc1a6]/20 rounded-xl p-12 shadow-lg hover:shadow-xl transition-all"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-4xl font-bold text-[#8B4513]">עיסויים מסורתיים ומרגיעים</h3>
              <motion.div
                animate={floatAnimation}
                className="text-[#8B4513]"
              >
                <FaBluesky size={32} />
              </motion.div>
            </div>
            <ul className="space-y-6 text-2xl font-medium text-[#5C4033]">
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי שוודי
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי הוליסטי
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי באבנים חמות
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי תאילנדי עדין
                <span className="text-xl text-gray-500 mr-2">(ללא מתיחות אגרסיביות)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי לומי-לומי
                <span className="text-xl text-gray-500 mr-2">(מהוואי)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-[#dcc1a6]/20 rounded-xl p-12 shadow-lg hover:shadow-xl transition-all"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-4xl font-bold text-[#8B4513]">שיטות מיוחדות ועיסויים משולבים</h3>
              <motion.div
                animate={floatAnimation}
                className="text-[#8B4513]"
              >
                <TbMassage size={32} />
              </motion.div>
            </div>
            <ul className="space-y-6 text-2xl font-medium text-[#5C4033]">
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי כוסות רוח
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                רפלקסולוגיה
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי משולב
                <span className="text-xl text-gray-500 mr-2">(לפי צרכי המטופלת)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי קרקפת ופנים
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#dcc1a6]">•</span>
                עיסוי בשיטת טריגר פוינט
                <span className="text-xl text-gray-500 mr-2">(Trigger Point Therapy)</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Button onClick={handleOpenForm}>לתיאום תור</Button>
        </motion.div>
      </div>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </StyledServices>
  );
};

const StyledServices = styled.section`
  padding: 80px 0;
  margin-bottom: 40px;
  background-color: #dcc1a6;

  .video-card {
    position: relative;
    height: 400px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    padding: 8px;
    background: rgba(220, 193, 166, 0.05);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);

      .service-video {
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
    background: linear-gradient(to top, rgba(139, 69, 19, 0.9), rgba(139, 69, 19, 0.1));
    color: #fff;
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

  .service-image-container {
    width: 100%;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 16px;
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

  .type-item {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }

    h4 {
      margin: 16px 0 8px;
    }

    p {
      color: #666;
    }
  }

  .types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    margin-top: 32px;
    padding: 0 16px;
  }

  .type-icon {
    font-size: 24px;
    margin-bottom: 8px;
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

    .service-image-container {
      height: 200px;
    }

    .types-grid {
      grid-template-columns: 1fr;
      padding: 0 8px;
    }
  }
`;

export default Services;