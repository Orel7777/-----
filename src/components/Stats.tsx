import { useState, useEffect } from 'react';
import Form from './Form';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBattleNet } from "react-icons/fa6";
import Lottie from "lottie-react";
import styled from 'styled-components';

const Stats = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [phoneAnimation, setPhoneAnimation] = useState(null);

  useEffect(() => {
    fetch('/icons/1.json')
      .then(res => res.text())
      .then(text => {
        try {
          const jsonData = JSON.parse(text);
          setPhoneAnimation(jsonData);
        } catch (error) {
          console.error('Error parsing phone animation JSON:', error);
        }
      })
      .catch(error => console.error('Error loading phone animation:', error));
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

  return (
    <StatsWrapper className="relative overflow-hidden" id="stats">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3C4] to-[#D4B5A3] opacity-30" />
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              y: [-5, 5, -5],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="inline-block mb-6"
          >
            <FaBattleNet className="w-16 h-16 text-[#8B4513]" />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-[#8B4513] mb-4">
            נעים להכיר – מדואלה דקלה
          </h2>
          
          <motion.div 
            className="featured-image-container mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              type: "spring",
              stiffness: 80
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="image-frame">
              <img src="/5.jpg" alt="דקלה מדואלה" className="featured-image" />
              <div className="image-overlay">
                <span>מקצועיות ואיכות ללא פשרות</span>
              </div>
            </div>
          </motion.div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#8B4513] to-transparent mx-auto mb-6" />
          
          <h3 className="text-2xl font-semibold text-[#5C4033] mb-8">
            מומחית בטיפולי מגע, קוסמטיקה רפואית ורפואה משלימה
          </h3>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-10 mb-12 border border-white/30 shadow-2xl relative overflow-hidden"
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(139, 69, 19, 0.4)",
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-5 z-0"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8B4513]/20 to-transparent rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#8B4513]/20 to-transparent rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <p className="text-lg leading-relaxed text-[#5C4033] mb-8 drop-shadow-sm">
              עם למעלה מעשור של ניסיון מקצועי ועשייה אינטנסיבית בתחום הקוסמטיקה והרפואה המשלימה, 
              אני כאן כדי להעניק לך טיפולים מותאמים אישית שיחדשו את העור, 
              ירגיעו את הנפש ויעניקו לגוף תחושה נפלאה של איזון ובריאות.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:transform hover:-translate-y-2 transition-all"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(139, 69, 19, 0.3)",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))"
                }}
              >
                <h4 className="text-xl font-bold text-[#8B4513] mb-4 flex items-center">
                  <span className="inline-block w-8 h-8 mr-2 bg-[#8B4513]/10 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-[#8B4513] rounded-full"></span>
                  </span>
                  הניסיון שלי
                </h4>
                <ul className="space-y-6 text-[#5C4033]">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-5 flex-shrink-0" />
                    מנהלת וקוסמטיקאית רפואית במכונים מובילים
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-5 flex-shrink-0" />
                    The Spa במלון אינטרקונטיננטל
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-5 flex-shrink-0" />
                    Alokino בראשון לציון
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:transform hover:-translate-y-2 transition-all"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(139, 69, 19, 0.3)",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))"
                }}
              >
                <h4 className="text-xl font-bold text-[#8B4513] mb-4 flex items-center">
                  <span className="inline-block w-8 h-8 mr-2 bg-[#8B4513]/10 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-[#8B4513] rounded-full"></span>
                  </span>
                  מה אני מציעה
                </h4>
                <ul className="space-y-6 text-[#5C4033]">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-5 flex-shrink-0" />
                    טיפולים מותאמים אישית
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-5 flex-shrink-0" />
                    טכניקות ריפוי מתקדמות
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-5 flex-shrink-0" />
                    תוצאות ברמה הגבוהה ביותר
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl"
        >
          <h4 className="text-2xl font-bold text-[#8B4513] mb-4">
            צרי קשר עוד היום וקבלי ייעוץ מותאם אישית!
          </h4>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-2xl font-bold text-[#8B4513]">053-3353203</span>
            {phoneAnimation && (
              <Lottie animationData={phoneAnimation} style={{ width: 40, height: 40 }} />
            )}
          </div>
          
          <p className="text-lg text-[#5C4033] mb-8">
            אני מחכה להעניק לך את החוויה האולטימטיבית של בריאות ויופי
          </p>
          
          <Button onClick={handleOpenForm}>
            קביעת תור לייעוץ
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent" />
      
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </StatsWrapper>
  );
};

const StatsWrapper = styled.section`
  .featured-image-container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 10px;
  }

  .image-frame {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(139, 69, 19, 0.15);
    aspect-ratio: auto;
    margin-bottom: 20px;
    max-height: 400px;
    border: 2px solid rgba(139, 69, 19, 0.2);
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .featured-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    transition: all 0.3s ease;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(173, 139, 114, 0.5), rgba(206, 172, 147, 0.3));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .image-overlay span {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    background-color: rgba(139, 69, 19, 0.7);
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.5s ease;
  }

  .image-frame:hover .image-overlay {
    opacity: 1;
  }

  .image-frame:hover .image-overlay span {
    transform: translateY(0);
    opacity: 1;
  }

  .image-frame:hover .featured-image {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .featured-image-container {
      max-width: 350px;
    }

    .image-frame,
    .featured-image {
      max-height: 300px;
    }

    .image-overlay span {
      font-size: 1.2rem;
      padding: 0.4rem 1.2rem;
    }
  }
`;

export default Stats;