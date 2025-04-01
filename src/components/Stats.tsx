import { useState } from 'react';
import Form from './Form';
import Button from './Button';
import { motion } from 'framer-motion';
import { FaBattleNet } from "react-icons/fa6";
import Lottie from "lottie-react";
import animationData from "../assets/phone-animation.json";

const Stats = () => {
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
    <section className="py-16" id="stats">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col items-center gap-4 mb-8">
            <motion.div
              animate={floatAnimation}
              className="text-gray-800"
            >
              <FaBattleNet size={65} />
            </motion.div>
            <h2 className="text-4xl font-bold text-center text-gray-800">נעים להכיר – מדואלה דקלה</h2>
          </div>
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">מומחית בטיפולי מגע, קוסמטיקה רפואית ורפואה משלימה</h3>

          <p className="text-lg mb-8 leading-relaxed text-gray-700">
            עם למעלה מעשור של ניסיון מקצועי ועשייה אינטנסיבית בתחום הקוסמטיקה והרפואה המשלימה, אני כאן כדי להעניק לך טיפולים מותאמים אישית שיחדשו את העור, ירגיעו את הנפש ויעניקו לגוף תחושה נפלאה של איזון ובריאות.
          </p>

          <div className="bg-[#b5dacd]/20 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">ההשכלה שלי</h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#b5dacd] font-bold">✔️</span>
                למדתי עיסויים ושיטות הוליסטיות ורפואיות במכללת משה מורנו – קורס מעמיק ורחב מס' שנים.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b5dacd] font-bold">✔️</span>
                בוגרת לימודי קוסמטיקה רפואית מתקדמת מטעם בתי הספר המובילים בעולם:
                <ul className="mt-2 space-y-1">
                  <li>• Cidesco International</li>
                  <li>• P.M.E בהנחיית חוה זינגבוים</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-[#b5dacd]/20 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">הניסיון שלי</h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#b5dacd] font-bold">✅</span>
                כיום אני הבעלים הגאה של קליניקה פרטית בנס ציונה – מרכז מתקדם לטיפולי מגע, קוסמטיקה רפואית וטיפוח העור.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b5dacd] font-bold">✅</span>
                עבדתי כמנהלת וכמטפלת בקוסמטיקה רפואית במכונים המובילים:
                <ul className="mt-2 space-y-1">
                  <li>• The Spa במלון אינטרקונטיננטל תל אביב</li>
                  <li>• Alokino בראשון לציון</li>
                  <li>• מרכזי היוקרה Mediclinic ו-Desheli</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-[#b5dacd]/20 rounded-xl p-8 mb-8">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">מה אני מציעה לך?</h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-2xl">👩‍⚕️</span>
                טיפולים מותאמים אישית עם דגש על צרכים רפואיים ואסתטיים.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">🌿</span>
                שילוב טכניקות ריפוי מתקדמות עם מגע מקצועי ומרגיע.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">✨</span>
                תוצאות ניכרות לעין ותהליך טיפולי ברמה הגבוהה ביותר.
              </li>
            </ul>
          </div>

          <p className="text-lg mb-8 leading-relaxed text-gray-700">
            הלקוחות שלי מספרים על חוויות טיפול מעשירות ומשנות חיים, ואני כאן כדי להציע לך את אותה החוויה המיוחדת.
          </p>

          <div className="text-center bg-[#b5dacd]/20 rounded-xl p-8">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">צרי קשר עוד היום וקבלי ייעוץ מותאם אישית!</h4>
            <p className="text-xl mb-2 text-gray-700">טלפון/וואטסאפ:</p>
            <p className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
              053-3353203
              <Lottie animationData={animationData} style={{ width: 40, height: 40 }} />
            </p>
            <p className="text-lg text-gray-700">אני מחכה להעניק לך את החוויה האולטימטיבית של בריאות ויופי.</p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Button onClick={handleOpenForm}>קביעת תור לייעוץ</Button>
        </motion.div>
      </div>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default Stats;