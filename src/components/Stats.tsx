import { useState, useEffect } from 'react';
import Form from './Form';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBattleNet } from "react-icons/fa6";
import Lottie from "lottie-react";

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
    <section className="relative overflow-hidden" id="stats">
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
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#8B4513] to-transparent mx-auto mb-6" />
          
          <h3 className="text-2xl font-semibold text-[#5C4033] mb-8">
            מומחית בטיפולי מגע, קוסמטיקה רפואית ורפואה משלימה
          </h3>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 shadow-xl"
        >
          <p className="text-lg leading-relaxed text-[#5C4033] mb-8">
            עם למעלה מעשור של ניסיון מקצועי ועשייה אינטנסיבית בתחום הקוסמטיקה והרפואה המשלימה, 
            אני כאן כדי להעניק לך טיפולים מותאמים אישית שיחדשו את העור, 
            ירגיעו את הנפש ויעניקו לגוף תחושה נפלאה של איזון ובריאות.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:transform hover:-translate-y-2 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-bold text-[#8B4513] mb-4">הניסיון שלי</h4>
              <ul className="space-y-3 text-[#5C4033]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-3" />
                  מנהלת וקוסמטיקאית רפואית במכונים מובילים
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-3" />
                  The Spa במלון אינטרקונטיננטל
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-3" />
                  Alokino בראשון לציון
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:transform hover:-translate-y-2 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-bold text-[#8B4513] mb-4">מה אני מציעה</h4>
              <ul className="space-y-3 text-[#5C4033]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-3" />
                  טיפולים מותאמים אישית
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-3" />
                  טכניקות ריפוי מתקדמות
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-3" />
                  תוצאות ברמה הגבוהה ביותר
                </li>
              </ul>
            </motion.div>
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
    </section>
  );
};

export default Stats;