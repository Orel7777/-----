import { useState, useEffect, useCallback } from 'react';
import Form from './Form';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBattleNet } from "react-icons/fa6";
import Lottie from "lottie-react";
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Stats = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [phoneAnimation, setPhoneAnimation] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: false,
    dragFree: false,
    direction: 'rtl'
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const certificates = [
    {
      src: "/images/תעודות/2 (2).jpeg",
      alt: "תעודת הסמכה 1"
    },
    {
      src: "/images/תעודות/2 (4).jpeg",
      alt: "תעודת הסמכה 2"
    },
    {
      src: "/images/תעודות/2.1.jpeg",
      alt: "תעודת הסמכה 3"
    }
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

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

  const openImage = (src: string) => {
    setCurrentImage(src);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
    setCurrentImage('');
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
    <StyledStats className="overflow-hidden relative" id="stats">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5D3C4] to-[#D4B5A3] opacity-30" />
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      
      {/* Content Container */}
      <div className="relative z-10 px-4 py-20 mx-auto max-w-3xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center"
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
          
          <h2 className="mb-4">
            נעים להכיר – מדואלה דקלה
          </h2>
          
          <motion.div 
            className="mb-10 featured-image-container"
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
          className="overflow-hidden relative p-10 mb-12 bg-gradient-to-br rounded-3xl border shadow-2xl backdrop-blur-lg from-white/20 to-white/5 border-white/30"
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
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* Experience Section */}
              <motion.div
                className="p-8 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 border border-white/30 shadow-xl backdrop-blur-md"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(139, 69, 19, 0.3)",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.15))"
                }}
              >
                <h4 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center">
                  <span className="inline-block w-10 h-10 mr-3 bg-[#8B4513]/10 rounded-full flex items-center justify-center">
                    <span className="w-4 h-4 bg-[#8B4513] rounded-full"></span>
                  </span>
                  <span className="relative">
                    הניסיון שלי
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B4513]/0 via-[#8B4513] to-[#8B4513]/0"></div>
                  </span>
                </h4>
                <ul className="space-y-8 text-[#5C4033]">
                  <li className="flex items-start gap-5 group">
                    <span className="w-3 h-3 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
                    <span className="text-lg leading-relaxed font-medium">מנהלת וקוסמטיקאית רפואית במכונים מובילים</span>
                  </li>
                  <li className="flex items-start gap-5 group">
                    <span className="w-3 h-3 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
                    <span className="text-lg leading-relaxed font-medium">The Spa במלון אינטרקונטיננטל</span>
                  </li>
                  <li className="flex items-start gap-5 group">
                    <span className="w-3 h-3 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
                    <span className="text-lg leading-relaxed font-medium">Alokino בראשון לציון</span>
                  </li>
                </ul>
              </motion.div>

              {/* What I Offer Section */}
              <motion.div
                className="p-8 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 border border-white/30 shadow-xl backdrop-blur-md"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(139, 69, 19, 0.3)",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.15))"
                }}
              >
                <h4 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center">
                  <span className="inline-block w-10 h-10 mr-3 bg-[#8B4513]/10 rounded-full flex items-center justify-center">
                    <span className="w-4 h-4 bg-[#8B4513] rounded-full"></span>
                  </span>
                  <span className="relative">
                    מה אני מציעה
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B4513]/0 via-[#8B4513] to-[#8B4513]/0"></div>
                  </span>
                </h4>
                <ul className="space-y-8 text-[#5C4033]">
                  <li className="flex items-start gap-5 group">
                    <span className="w-3 h-3 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
                    <span className="text-lg leading-relaxed font-medium">טיפולים מותאמים אישית</span>
                  </li>
                  <li className="flex items-start gap-5 group">
                    <span className="w-3 h-3 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
                    <span className="text-lg leading-relaxed font-medium">טכניקות ריפוי מתקדמות</span>
                  </li>
                  <li className="flex items-start gap-5 group">
                    <span className="w-3 h-3 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
                    <span className="text-lg leading-relaxed font-medium">תוצאות ברמה הגבוהה ביותר</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Certificates Section */}
          <motion.div 
            variants={fadeInUp}
          className="mb-12 overflow-hidden"
        >
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-[#8B4513] mb-8 text-center">
              <span className="relative inline-block">
                התעודות שלי
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B4513]/0 via-[#8B4513] to-[#8B4513]/0"></div>
              </span>
            </h3>

            <div className="relative bg-gradient-to-br from-white/30 to-white/10 rounded-2xl p-3 shadow-xl backdrop-blur-md border border-white/30">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {certificates.map((cert, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative px-2">
                      <div 
                        className="max-w-[160px] sm:max-w-[200px] mx-auto aspect-[3/4] relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
                        onClick={() => openImage(cert.src)}
                      >
                        <img
                          src={cert.src}
                          alt={cert.alt}
                          className="absolute inset-0 w-full h-full object-contain bg-white"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                    </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
                <button 
                className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#8B4513] transition-all hover:bg-white hover:scale-110 z-10"
                onClick={scrollPrev}
                aria-label="הקודם"
                title="הקודם"
              >
                <ChevronLeft className="w-3 h-3" />
                </button>
                <button 
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#8B4513] transition-all hover:bg-white hover:scale-110 z-10"
                onClick={scrollNext}
                aria-label="הבא"
                title="הבא"
              >
                <ChevronRight className="w-3 h-3" />
                </button>

              {/* Progress Indicator */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                {certificates.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all ${
                      idx === selectedIndex ? 'w-3 bg-[#8B4513]' : 'w-1 bg-[#8B4513]/40'
                    }`}
                  />
                ))}
              </div>
              </div>
              
            {/* Fullscreen Image Modal */}
            {isImageOpen && (
              <div 
                className="fixed inset-0 bg-[#fefbe8]/95 z-50 flex items-center justify-center p-4" 
                onClick={closeImage}
              >
                <div 
                  className="relative w-full max-w-[min(90vw,500px)] bg-white rounded-xl overflow-hidden"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="relative pt-[133%]">
                    <img
                      src={currentImage}
                      alt="תעודת הסמכה במסך מלא"
                      className="absolute inset-0 w-full h-full object-contain bg-white"
                    />
                  </div>
                  <button
                    onClick={closeImage}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#fefbe8] hover:bg-[#fefbe8]/90 shadow-lg flex items-center justify-center text-[#8B4513] hover:scale-110 transition-all"
                    aria-label="סגור תמונה"
                    title="סגור"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="p-8 text-center rounded-2xl border shadow-xl backdrop-blur-md bg-white/10 border-white/20"
        >
          <h4 className="text-2xl font-bold text-[#8B4513] mb-4">
            צרי קשר עוד היום וקבלי ייעוץ מותאם אישית!
          </h4>
          
          <div className="flex gap-4 justify-center items-center mb-6">
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
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b to-transparent from-white/10" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t to-transparent from-white/10" />
      
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </StyledStats>
  );
};

const StyledStats = styled.section`
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

  h2 {
    font-family: 'Rubik', 'Assistant', sans-serif;
    font-weight: 800;
    letter-spacing: 0.02em;
    color: #8B4513;
    text-shadow: 0 2px 4px rgba(139, 69, 19, 0.1);
    font-size: 2.25rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

export default Stats;