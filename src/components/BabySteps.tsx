import { motion } from 'framer-motion';
import { TbMassage } from "react-icons/tb";
import styled from 'styled-components';
import Lottie from "lottie-react";
import yogaAnimation from "../assets/yoga-animation.json";

const BabySteps = () => {
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
        <div className="header">
          <h2 className="text-center">הטיפול המושלם - בארבעה שלבים</h2>
          <p className="subtitle text-center">תהליך טיפול מקצועי ומותאם אישית</p>
        </div>
        <h3 className="text-2xl font-semibold mb-6 text-center">כל טיפול מתוכנן ומבוצע בקפידה לפי צרכי המטופל/ת</h3>
        <div className="flex justify-center mb-12">
          <Lottie animationData={yogaAnimation} style={{ width: 200, height: 200 }} />
        </div>
        <div className="steps">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-[#b5dacd]/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div className="text-secondary font-bold text-lg mb-2">שלב 1: אבחון ראשוני</div>
              <p className="text-foreground">
                פגישת ייעוץ מקיפה להבנת הצרכים והמטרות שלך. נבצע אבחון מקצועי ונתאים תכנית טיפול אישית.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#b5dacd]/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div className="text-secondary font-bold text-lg mb-2">שלב 2: תכנית טיפול</div>
              <p className="text-foreground">
                בניית תכנית טיפול מותאמת אישית, הכוללת את סוגי הטיפולים המומלצים, תדירות ומשך הטיפול.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#b5dacd]/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div className="text-secondary font-bold text-lg mb-2">שלב 3: ביצוע הטיפול</div>
              <p className="text-foreground">
                טיפול מקצועי ומדויק בסביבה נעימה ומרגיעה, תוך שימוש בטכניקות מתקדמות ושיטות טיפול מוכחות.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#b5dacd]/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div className="text-secondary font-bold text-lg mb-2">שלב 4: מעקב והמשך</div>
              <p className="text-foreground">
                מעקב אחר התקדמות הטיפול, התאמות נדרשות והמלצות להמשך. אנו מלווים אותך לאורך כל הדרך להשגת התוצאות הרצויות.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold mb-6">
              המרכז המוביל לטיפולי רפואה משלימה ועיסוי מקצועי
            </h3>
            <p className="text-lg text-secondary mb-12">
              מגוון רחב של טיפולים מקצועיים בהתאמה אישית
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-[#b5dacd]/20 rounded-xl p-6 text-center shadow-md"
              variants={fadeInUp}
            >
              <h4 className="font-bold text-xl mb-3">צוות מקצועי</h4>
              <div className="w-40 h-40 mx-auto mb-4 rounded-lg overflow-hidden">
                <img
                  src="/team.jpg"
                  alt="צוות מקצועי"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-secondary">
                מטפלים מוסמכים ומנוסים
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#b5dacd]/20 rounded-xl p-6 text-center shadow-md"
              variants={fadeInUp}
            >
              <h4 className="font-bold text-xl mb-3">ציוד מתקדם</h4>
              <div className="w-40 h-40 mx-auto mb-4 rounded-lg overflow-hidden">
                <img
                  src="/equipment.jpg"
                  alt="ציוד מתקדם"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-secondary">
                שימוש בטכנולוגיות וציוד מתקדם
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#b5dacd]/20 rounded-xl p-6 text-center shadow-md"
              variants={fadeInUp}
            >
              <h4 className="font-bold text-xl mb-3">סביבה מרגיעה</h4>
              <div className="w-40 h-40 mx-auto mb-4 rounded-lg overflow-hidden">
                <img
                  src="/environment.jpg"
                  alt="סביבה מרגיעה"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-secondary">
                אווירה נעימה ומרגיעה
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </StyledBabySteps>
  );
};

const StyledBabySteps = styled.section`
  .container {
    max-w: 6xl;
    padding: 0 4;
  }

  .header {
    text-align: center;
    margin-bottom: 12;
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--secondary);
    margin-bottom: 8;
  }

  .steps {
    margin-top: 16;
    text-align: center;
  }
`;

export default BabySteps;