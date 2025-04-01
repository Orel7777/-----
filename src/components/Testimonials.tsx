import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineReviews } from "react-icons/md";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "רונית כהן",
      text: "הטיפולים במרכז עזרו לי מאוד להתמודד עם כאבי הגב הכרוניים. הצוות מקצועי ואכפתי, והאווירה נעימה ומרגיעה.",
      rating: 5
    },
    {
      id: 2,
      name: "מיכל לוי",
      text: "עיסוי השוודי היה מדהים! המטפלת הייתה מקצועית והקשיבה לצרכים שלי. יצאתי מהטיפול מרגישה מחודשת לגמרי.",
      rating: 5
    },
    {
      id: 3,
      name: "דנה ישראלי",
      text: "טיפולי פיסול הפנים הטבעי שינו לי את החיים. התוצאות מדהימות והצוות מקצועי ביותר. ממליצה בחום!",
      rating: 5
    },
    {
      id: 4,
      name: "שירה אברהם",
      text: "המרכז מציע שירות מעולה ויחס אישי. הטיפולים עזרו לי להירגע ולהתמודד עם לחץ בעבודה. תודה רבה!",
      rating: 5
    }
  ];

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
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

  const floatAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-16" id="testimonials">
      <div className="max-w-4xl mx-auto px-4">
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
            <MdOutlineReviews size={65} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            המלצות מלקוחות מרוצים
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#b5dacd]/20 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
              <div className="text-[#b5dacd]">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-4">
              "הטיפולים במרכז הם ברמה הגבוהה ביותר. הצוות מקצועי ואדיב, והתוצאות מדהימות. ממליצה בחום!"
            </p>
            <p className="font-semibold text-gray-800">- רונית כהן</p>
          </div>

          <div className="bg-[#b5dacd]/20 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
              <div className="text-[#b5dacd]">★★★★★</div>
            </div>
            <p className="text-gray-700 mb-4">
              "מקום מקסים עם אווירה נעימה ומרגיעה. הטיפולים עזרו לי מאוד והשירות תמיד מעולה."
            </p>
            <p className="font-semibold text-gray-800">- דנה לוי</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;