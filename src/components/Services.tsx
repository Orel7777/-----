import styled from 'styled-components';
import Form from './Form';
import { useState, useEffect } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { FaBluesky, FaDove } from "react-icons/fa6";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': any;
    }
  }
}

const Services = () => {
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
    <StyledServices className="py-16" id="services">
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
            className="text-gray-800"
          >
            <lord-icon
              src="https://cdn.lordicon.com/aydxrkfl.json"
              trigger="hover"
              style={{ width: '65px', height: '65px' }}
              colors="primary:#b5dacd,secondary:#b5dacd"
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            שירותי הקליניקה
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="video-card" variants={fadeInUp}>
            <div className="video-container">
              <video className="service-video" autoPlay loop muted playsInline>
                <source src="/video_7.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-overlay">
              <h3 className="text-xl font-semibold">עיסוי מקצועי</h3>
              <p>מגוון טיפולי עיסוי מותאמים אישית</p>
            </div>
          </motion.div>

          <motion.div className="video-card" variants={fadeInUp}>
            <div className="video-container">
              <video className="service-video" autoPlay loop muted playsInline>
                <source src="/video_2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-overlay">
              <h3 className="text-xl font-semibold">עיסוי הריון</h3>
              <p>טיפול עדין ומותאם במיוחד</p>
            </div>
          </motion.div>

          <motion.div className="video-card" variants={fadeInUp}>
            <div className="video-container">
              <video className="service-video" autoPlay loop muted playsInline>
                <source src="/video_10.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-overlay">
              <h3 className="text-xl font-semibold">פיסול פנים טבעי</h3>
              <p>מיניליפט ויוגה פייס</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="backdrop-blur-sm bg-[#b5dacd]/20 rounded-xl p-12 shadow-lg hover:shadow-xl transition-all"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-4xl font-bold text-gray-800">סוגי עיסויים</h3>
              <motion.div
                animate={floatAnimation}
                className="text-gray-800"
              >
                <FaDove size={32} />
              </motion.div>
            </div>
            <ul className="space-y-6 text-2xl font-medium text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי שוודי
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי תאילנדי
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי רקמות עמוק
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי רפואי
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי הריון
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי משולב
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-[#b5dacd]/20 rounded-xl p-12 shadow-lg hover:shadow-xl transition-all"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-4xl font-bold text-gray-800">עיסויים מיוחדים</h3>
              <motion.div
                animate={floatAnimation}
                className="text-gray-800"
              >
                <FaBluesky size={32} />
              </motion.div>
            </div>
            <ul className="space-y-6 text-2xl font-medium text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי אבנים חמות
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי ארומתרפי
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי כוסות רוח
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי רקמות עדין
              </li>
              <li className="flex items-center gap-3">
                <span className="text-3xl text-[#b5dacd]">•</span>
                עיסוי מפנק
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

export default Services;