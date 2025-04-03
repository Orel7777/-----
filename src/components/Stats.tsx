import { useState, useEffect } from 'react';
import Form from './Form';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBattleNet } from "react-icons/fa6";
import Lottie from "lottie-react";

// נתיבי התעודות - עם נתיבים יחסיים במקום מוחלטים
const certificatePaths = [
  '/images/תעודות/2.1.jpeg',
  '/images/תעודות/2 (4).jpeg',
  '/images/תעודות/2 (2).jpeg',
];

const Stats = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [phoneAnimation, setPhoneAnimation] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    // טעינת אנימציית טלפון
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

  const nextCertificate = () => {
    setCurrentCertificateIndex((prevIndex) => 
      prevIndex === certificatePaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setCurrentCertificateIndex((prevIndex) => 
      prevIndex === 0 ? certificatePaths.length - 1 : prevIndex - 1
    );
  };

  const openCertificate = (src: string) => {
    setSelectedCertificate(src);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
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

  // טיפול בשגיאות טעינת תמונה
  const handleImageError = () => {
    console.error("Failed to load certificate image");
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  return (
    <section className="py-16 relative bg-[#dcc1a6] md:mt-0 mt-4 overflow-visible z-20" id="stats">
      {/* כותרת סקשן עם רקע חום - יותר בולטת */}
      <div className="sticky top-0 left-0 right-0 h-16 bg-[#dcc1a6]/50 text-center flex items-center justify-center shadow-md z-50 mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-[#8B4513]">אודות</h2>
      </div>
      
      <div className="max-w-4xl mx-auto px-2 md:px-4 pt-20 md:pt-12">
        <motion.div 
          className="mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} /* הקטנת מספר האלמנטים שצריכים להיות בתצוגה */
          variants={fadeInUp}
        >
          <div className="flex flex-col items-center gap-2 md:gap-4 mb-4 md:mb-8">
            <motion.div
              animate={floatAnimation}
              className="text-[#8B4513]"
            >
              <FaBattleNet size={40} className="md:w-[65px] md:h-[65px] w-[40px] h-[40px]" />
            </motion.div>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8B4513]">נעים להכיר – מדואלה דקלה</h2>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6 text-[#5C4033]">מומחית בטיפולי מגע, קוסמטיקה רפואית ורפואה משלימה</h3>

          <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-[#5C4033]">
            עם למעלה מעשור של ניסיון מקצועי ועשייה אינטנסיבית בתחום הקוסמטיקה והרפואה המשלימה, אני כאן כדי להעניק לך טיפולים מותאמים אישית שיחדשו את העור, ירגיעו את הנפש ויעניקו לגוף תחושה נפלאה של איזון ובריאות.
          </p>

          <div style={{
            backgroundColor: 'rgba(220, 193, 166, 0.3)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
            transition: 'transform 0.3s ease',
            textAlign: 'center',
            marginBottom: '2rem',
            border: '1px solid #8B4513'
          }}>
            <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#8B4513] flex items-center gap-2 md:gap-3 border-b border-[#8B4513] pb-2 md:pb-3">
              <span className="text-[#8B4513] text-2xl md:text-3xl">💼</span>
              הניסיון שלי
            </h4>
            
            <div className="space-y-4 md:space-y-6">
              <div style={{
                backgroundColor: 'rgba(220, 193, 166, 0.3)',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
                transition: 'transform 0.3s ease',
                border: '1px solid #8B4513'
              }}>
                <div className="flex items-start gap-3">
                  <div className="bg-[#8B4513] rounded-full p-2 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-[#8B4513] mb-2">בעלים של קליניקה פרטית</h5>
                    <p className="text-[#5C4033] leading-relaxed">
                      כיום אני הבעלים הגאה של <span className="font-medium text-[#8B4513]">קליניקה פרטית בנס ציונה</span> – מרכז מתקדם לטיפולי מגע, קוסמטיקה רפואית וטיפוח העור.
                    </p>
                  </div>
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(220, 193, 166, 0.3)',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
                transition: 'transform 0.3s ease',
                border: '1px solid #8B4513'
              }}>
                <div className="flex items-start gap-3">
                  <div className="bg-[#8B4513] rounded-full p-2 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-[#8B4513] mb-2">ניסיון במוסדות המובילים בתחום</h5>
                    <p className="text-[#5C4033] leading-relaxed mb-3">
                      עבדתי כמנהלת וכמטפלת בקוסמטיקה רפואית במכונים המובילים:
                    </p>
                    <ul className="space-y-2 pl-2">
                      <li style={{
                        backgroundColor: 'rgba(220, 193, 166, 0.3)',
                        padding: '10px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(139, 69, 19, 0.2)',
                        border: '1px solid #8B4513'
                      }} className="flex items-center gap-2">
                        <span className="text-[#8B4513] text-xl">•</span>
                        <span className="font-medium text-[#5C4033]">The Spa במלון אינטרקונטיננטל תל אביב</span>
                      </li>
                      <li style={{
                        backgroundColor: 'rgba(220, 193, 166, 0.3)',
                        padding: '10px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(139, 69, 19, 0.2)',
                        border: '1px solid #8B4513'
                      }} className="flex items-center gap-2">
                        <span className="text-[#8B4513] text-xl">•</span>
                        <span className="font-medium text-[#5C4033]">Alokino בראשון לציון</span>
                      </li>
                      <li style={{
                        backgroundColor: 'rgba(220, 193, 166, 0.3)',
                        padding: '10px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(139, 69, 19, 0.2)',
                        border: '1px solid #8B4513'
                      }} className="flex items-center gap-2">
                        <span className="text-[#8B4513] text-xl">•</span>
                        <span className="font-medium text-[#5C4033]">מרכזי היוקרה Mediclinic ו-Desheli</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(220, 193, 166, 0.3)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
            transition: 'transform 0.3s ease',
            textAlign: 'center',
            marginBottom: '2rem',
            border: '1px solid #8B4513'
          }}>
            <h4 className="text-2xl font-bold mb-6 text-[#8B4513] flex items-center gap-3 border-b border-[#8B4513] pb-3">
              <span className="text-[#8B4513] text-3xl">✨</span>
              מה אני מציעה לך?
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div style={{
                backgroundColor: 'rgba(220, 193, 166, 0.3)',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
                transition: 'transform 0.3s ease',
                border: '1px solid #8B4513'
              }}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl text-[#8B4513]">👩‍⚕️</div>
                  <h5 className="font-semibold text-lg text-[#8B4513]">טיפולים מותאמים אישית</h5>
                  <p className="text-[#5C4033]">
                טיפולים מותאמים אישית עם דגש על צרכים רפואיים ואסתטיים.
                  </p>
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(220, 193, 166, 0.3)',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
                transition: 'transform 0.3s ease',
                border: '1px solid #8B4513'
              }}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl text-[#8B4513]">🌿</div>
                  <h5 className="font-semibold text-lg text-[#8B4513]">טכניקות ריפוי מתקדמות</h5>
                  <p className="text-[#5C4033]">
                שילוב טכניקות ריפוי מתקדמות עם מגע מקצועי ומרגיע.
                  </p>
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(220, 193, 166, 0.3)',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
                transition: 'transform 0.3s ease',
                border: '1px solid #8B4513'
              }}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl text-[#8B4513]">✨</div>
                  <h5 className="font-semibold text-lg text-[#8B4513]">תוצאות ברמה הגבוהה ביותר</h5>
                  <p className="text-[#5C4033]">
                תוצאות ניכרות לעין ותהליך טיפולי ברמה הגבוהה ביותר.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              margin: '20px 0',
              border: '1px solid #8B4513'
            }}>
              <p className="text-[#5C4033] italic font-medium">
            הלקוחות שלי מספרים על חוויות טיפול מעשירות ומשנות חיים, ואני כאן כדי להציע לך את אותה החוויה המיוחדת.
              </p>
            </div>
          </div>

          {/* גלריית תעודות */}
          <motion.div 
            className="rounded-xl p-4 md:p-8 mb-6 md:mb-8 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#8B4513] text-center">תעודות הסמכה מקצועיות</h4>
            
            <div className="relative">
              <div className="mb-4">
                <div className="relative aspect-[3/2] w-full max-w-[300px] md:max-w-[400px] mx-auto">
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#dcc1a6]/20">
                      <span className="text-sm font-semibold text-gray-800">טוען תמונה...</span>
                    </div>
                  )}
                  
                  {imageError ? (
                    <div className="aspect-[3/2] w-full flex items-center justify-center bg-gray-100/10 text-center p-4">
                      <div>
                        <p className="text-red-600 font-bold mb-2 text-xs">שגיאה בטעינת התמונה</p>
                        <p className="text-gray-700 text-xs">לא ניתן לטעון את התעודה כרגע</p>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={certificatePaths[currentCertificateIndex]} 
                      alt={`תעודת הסמכה ${currentCertificateIndex + 1}`} 
                      className="w-full h-full object-contain cursor-pointer shadow-sm hover:shadow-md transition-all"
                      onClick={() => openCertificate(certificatePaths[currentCertificateIndex])}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                  )}
                </div>
              </div>
              
              <div className="flex justify-center gap-3 mt-3 mb-2">
                <button 
                  onClick={prevCertificate}
                  className="bg-[#dcc1a6] hover:bg-[#c1a585] p-1.5 rounded-full transition-all shadow-md"
                  aria-label="תעודה קודמת"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
                <button 
                  onClick={nextCertificate}
                  className="bg-[#dcc1a6] hover:bg-[#c1a585] p-1.5 rounded-full transition-all shadow-md"
                  aria-label="תעודה הבאה"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
              </div>
              
              <div className="flex justify-center gap-2">
                {certificatePaths.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                      currentCertificateIndex === index ? 'bg-[#dcc1a6] scale-125' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentCertificateIndex(index)}
                    aria-label={`תעודה ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="text-center mt-4 text-gray-700 text-xs md:text-sm">
                <p>לחץ/י על התעודה להגדלה • {currentCertificateIndex + 1} מתוך {certificatePaths.length}</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center bg-[#dcc1a6]/20 rounded-xl p-4 md:p-8 z-10 relative shadow-sm">
            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">צרי קשר עוד היום וקבלי ייעוץ מותאם אישית!</h4>
            <p className="text-lg md:text-xl mb-1 md:mb-2 text-gray-700">טלפון/וואטסאפ:</p>
            <div className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center justify-center gap-2">
              053-3353203
              {phoneAnimation && (
                <Lottie animationData={phoneAnimation} style={{ width: 30, height: 30 }} className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]" />
              )}
            </div>
            <p className="text-base md:text-lg text-gray-700">אני מחכה להעניק לך את החוויה האולטימטיבית של בריאות ויופי.</p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-6 md:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <Button onClick={handleOpenForm} className="px-4 py-2 md:px-6 md:py-3 text-base md:text-lg">קביעת תור לייעוץ</Button>
        </motion.div>
      </div>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* הוספת פופאפ להצגת תעודה בגודל מלא */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
          >
            <motion.div
              className="relative max-w-xs md:max-w-sm max-h-[80vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedCertificate} 
                alt="תעודת הסמכה מוגדלת" 
                className="max-h-[70vh] w-full object-contain rounded-lg shadow-xl border-4 border-white/80"
              />
              <motion.button 
                className="absolute top-2 left-2 bg-[#dcc1a6] hover:bg-[#c1a585] p-2 md:p-3 rounded-full transition-colors shadow-lg z-[10000] border-2 border-white/80"
                onClick={closeCertificate}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-4 h-4 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Stats;