import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useInView } from 'react-intersection-observer';
import Form from './Form';
import { FaStar } from 'react-icons/fa';

// Image paths
const imageUrls = [
  '/1.1change.png',
  '/1.2.jpeg',
  '/1.3.jpeg',
  '/1.4change.png',
  '/1.5.jpeg',
  '/1.7.jpeg',
  '/1.9.jpeg',
  '/1.10.jpeg',
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    align: 'center',
    direction: 'rtl',
    watchDrag: true
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const [isPaused, setIsPaused] = useState(false);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // הוספת state לטופס
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Auto-scroll effect for carousel
  useEffect(() => {
    if (!emblaApi) return;
    
    const interval = setInterval(() => {
      if (!isPaused) {
        emblaApi.scrollNext();
      }
    }, 4000);

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    
    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, isPaused]);

  // Animation when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
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

  const phoneAnimation = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
    transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2 * index
      }
    })
  };

  const starAnimation = {
    hidden: { opacity: 0.7, y: 0 },
    visible: (index: number) => ({
      opacity: 1,
      y: [-2, 2, -2],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 0.1 * index
        },
        opacity: {
          duration: 0.3
        }
      }
    })
  };

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // פונקציה לפתיחת הטופס
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <section className="py-16 bg-[#dcc1a6]" id="testimonials" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center gap-4 mb-8"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block p-2 rounded-full bg-[#dcc1a6]/40 mb-2"
            animate={{ y: [-5, 5, -5] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-8 h-8 text-gray-700"
            >
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5c4f47] relative">
            המלצות מלקוחות מרוצים
            <motion.span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#dcc1a6] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </h2>
        </motion.div>

        {/* כפתורי ניווט */}
        <div className="flex justify-center gap-4 mb-6">
          <motion.button
            onClick={scrollPrev}
            className="bg-[#dcc1a6]/20 p-2 rounded-full hover:bg-[#dcc1a6]/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '10px',
              borderRadius: '50%',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              transition: 'all 0.3s ease',
              border: '1px solid #8B4513'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8B4513" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>
          <motion.button
            onClick={scrollNext}
            className="bg-[#dcc1a6]/20 p-2 rounded-full hover:bg-[#dcc1a6]/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: 'rgba(220, 193, 166, 0.3)',
              padding: '10px',
              borderRadius: '50%',
              boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
              transition: 'all 0.3s ease',
              border: '1px solid #8B4513'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#8B4513" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </motion.button>
        </div>

        <div 
          className="embla overflow-hidden relative mb-8" 
          ref={emblaRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            backgroundColor: 'rgba(220, 193, 166, 0.3)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
            transition: 'transform 0.3s ease',
            border: '1px solid #8B4513'
          }}
        >
          <div className="embla__container flex pt-4 pb-8">
            {imageUrls.map((src, index) => (
              <motion.div 
                className="embla__slide flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 px-2 flex justify-center" 
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={phoneAnimation}
              >
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[250px] shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => openImage(src)}
                  >
                    {/* Phone details */}
                    <div className="w-[124px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    
                    {/* Phone screen with image */}
                    <motion.div 
                      className="rounded-[2rem] overflow-hidden w-[222px] h-[472px] bg-white"
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <img 
                        src={src}
                        alt={`המלצת לקוח ${index + 1}`}
                        className="w-full h-full object-contain bg-white"
                        loading={index === 0 ? "eager" : "lazy"}
                        style={{
                          WebkitFilter: "contrast(1.05) brightness(1.05)",
                          filter: "contrast(1.05) brightness(1.05)",
                        }}
                      />
                      
                      {/* Simple reflection effect */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
                    </motion.div>
                  </motion.div>
                  
                  {/* כרטיס דירוג וביקורת מתחת לכל תמונה */}
                  <motion.div 
                    className="mt-4 rounded-lg p-3 w-full max-w-[250px] relative z-10"
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                  >
                    {/* דירוג כוכבים עם אנימציה - תיקון להצגת 5 כוכבים מלאים תמיד */}
                    <div className="flex items-center justify-center">
                      {[0, 1, 2, 3, 4].map((starIndex) => (
                        <motion.div
                          key={starIndex}
                          custom={starIndex}
                          initial="hidden"
                          animate={controls}
                          variants={starAnimation}
                          whileHover={{ scale: 1.1, color: "#FFD700", transition: { duration: 0.2 } }}
                        >
                          <FaStar className="w-6 h-6 text-yellow-500 mx-1 drop-shadow-md" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-2">
            {imageUrls.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#8B4513]' : 'bg-gray-300'}`}
                onClick={() => emblaApi?.scrollTo(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              />
            ))}
          </div>
        </div>

        {/* Call to action button */}
        <div className="text-center mt-10">
           <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-[#8B4513] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 text-lg"
             initial={{ opacity: 0, y: 20 }}
             animate={controls}
             variants={{
               visible: {
                 opacity: 1,
                 y: 0,
                 transition: { delay: 1, duration: 0.6 }
               }
             }}
             onClick={handleOpenForm}
           >
             הדרך שלנו מתחילה בלחיצה כאן!
           </motion.button>
        </div>
      </div>

      {/* הוספת הטופס */}
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="המלצה מוגדלת" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
              <motion.button 
                className="absolute top-3 left-3 bg-[#dcc1a6] hover:bg-[#b9aea5] p-3 rounded-full transition-colors shadow-md z-10"
                onClick={closeImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#333" className="w-6 h-6">
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

export default Testimonials;