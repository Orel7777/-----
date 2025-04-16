import { useState } from 'react';
import { FaWaze, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTikTok } from "react-icons/ai";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import Form from './Form';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

const StyledMenuItem = styled(motion.a)`
  border: 1px solid rgba(211, 198, 190, 0.5);
`;

const StyledMenu = styled.div`
  .menu-item {
    &:hover {
      scale: 1.05;
      background-color: rgba(211, 198, 190, 0.7);
      box-shadow: 0 4px 10px rgba(101, 109, 85, 0.2);
    }
  }
`;

const StyledSocialIcon = styled(motion.a)`
  box-shadow: 0 4px 12px rgba(101, 109, 85, 0.2);
  border: 1px solid rgba(211, 198, 190, 0.8);
`;

// Logo container with enhanced styling
const LogoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &::after {
    content: '';
    position: absolute;
    width: 120%;
    height: 8px;
    bottom: -8px;
    left: -10%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
    border-radius: 50%;
    opacity: 0.6;
  }
`;

// Enhanced logo image styling
const LogoImage = styled(motion.img)`
  border-radius: 50%;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleOpenForm = () => {
    setIsFormOpen(true);
    setIsMenuOpen(false);
  };

  // הפונקציה מחזירה את הנתיב המתאים בהתאם למיקום הנוכחי
  const getNavigationPath = (anchor: string) => {
    if (isHomePage) {
      return `#${anchor}`;
    } else {
      return `/#${anchor}`;
    }
  };

  return (
    <>
      <header className="fixed top-0 z-40 w-full">
        <div className="shadow-md backdrop-blur-md" style={{
          background: 'linear-gradient(to bottom, rgba(211, 198, 190, 0.95), rgba(152, 162, 125, 0.9))'
        }}>
          <div className="mx-auto max-w-6xl">
            <nav className="flex justify-between items-center px-4 py-3 md:py-2 lg:px-0">
              {/* Enhanced Logo */}
              <LogoContainer 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Link to="/">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <LogoImage 
                      src="/לוגו_גדול.jpeg" 
                      alt="דקלה מדואלה" 
                      className="p-1 w-auto h-20 z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 15,
                          delay: 0.2
                        }
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)"
                      }}
                      style={{
                        boxShadow: '0 8px 25px rgba(101, 109, 85, 0.4)',
                        border: '3px solid rgba(255, 255, 255, 0.8)',
                        background: 'linear-gradient(135deg, rgba(211, 198, 190, 0.9), rgba(152, 162, 125, 0.8))'
                      }}
                    />
                    {/* Decorative ring around logo */}
                    <motion.div 
                      className="absolute top-0 left-0 right-0 bottom-0 rounded-full -z-10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: [0.5, 0.8, 0.5], 
                        scale: [0.9, 1.05, 0.9],
                        transition: { 
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut"
                        }
                      }}
                      style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                        transform: 'translate(-5%, -5%)',
                        width: '110%',
                        height: '110%'
                      }}
                    />
                  </motion.div>
                </Link>
                <motion.span 
                  className="mt-1 text-sm font-semibold text-white"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  נעים מאוד - מדואלה דקלה שליט
                </motion.span>
              </LogoContainer>

              {/* Desktop Menu */}
              <div className="hidden gap-8 items-center md:flex">
                {[
                  { name: "שירותים", anchor: "services" },
                  { name: "המלצות", anchor: "testimonials" },
                  { name: "שיטת הטיפול", anchor: "methodology" },
                  { name: "אודות", anchor: "stats" }
                ].map((item, index) => (
                  <motion.a 
                    key={item.name}
                    href={getNavigationPath(item.anchor)}
                    className="relative text-lg font-medium text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover="hover"
                  >
                    {item.name}
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-[#98a27d] rounded-full"
                      initial={{ width: 0 }}
                      variants={{
                        hover: { width: "100%" }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="relative w-10 h-10 text-white md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="block absolute top-1/2 left-1/2 w-5 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.span 
                    className="absolute top-0 left-0 w-5 h-0.5 bg-current transform"
                    animate={{ 
                      rotate: isMenuOpen ? 45 : 0, 
                      translateY: isMenuOpen ? 8 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span 
                    className="absolute top-1.5 left-0 w-5 h-0.5 bg-current transform"
                    animate={{ 
                      opacity: isMenuOpen ? 0 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span 
                    className="absolute top-3 left-0 w-5 h-0.5 bg-current transform"
                    animate={{ 
                      rotate: isMenuOpen ? -45 : 0, 
                      translateY: isMenuOpen ? -8 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.button>

              {/* Desktop Social Icons and CTA */}
              <div className="hidden items-center space-x-4 md:flex rtl:space-x-reverse">
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {[
                    { Icon: FaWaze, href: "https://waze.com/ul?q=נס ציונה, ישראל" },
                    { Icon: FaWhatsapp, href: "https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0" },
                    { Icon: FaInstagram, href: "https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh" },
                    { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100058313266229" }
                  ].map(({ Icon, href }, index) => (
                    <motion.a 
                      key={href}
                      href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 15,
                        delay: 0.5 + (index * 0.1)
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 10,
                        color: "#98a27d" 
                      }}
                      className="text-white transition-all p-2 bg-[#fefbe8]/40 rounded-full shadow-md"
                      style={{
                        boxShadow: '0 4px 12px rgba(101, 109, 85, 0.2)',
                        border: '1px solid rgba(211, 198, 190, 0.8)'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15,
                    delay: 0.9
                  }}
                >
                <Button onClick={handleOpenForm}>קביעת תור</Button>
                </motion.div>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Fullscreen */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'linear-gradient(135deg, rgba(211, 198, 190, 0.95), rgba(152, 162, 125, 0.95), rgba(101, 109, 85, 0.95))'
              }}
            >
              <motion.div 
                className="flex flex-col justify-center items-center px-4 py-2 min-h-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative p-6 space-y-5 w-full max-w-md text-center rounded-2xl"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(211, 198, 190, 0.5), rgba(152, 162, 125, 0.5))',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(211, 198, 190, 0.7)',
                    border: '2px solid rgba(211, 198, 190, 0.7)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-3 right-3 p-2 text-white rounded-full shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(211, 198, 190, 0.9), rgba(152, 162, 125, 0.8))',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(211, 198, 190, 0.7)'
                    }}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2.5" 
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  <div className="flex flex-col justify-center items-center mb-6">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      <motion.img 
                        src="/לוגו_גדול.jpeg" 
                        alt="דקלה מדואלה" 
                        className="p-1 w-20 h-20 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        style={{
                          boxShadow: '0 8px 20px rgba(101, 109, 85, 0.3)',
                          border: '2px solid rgba(211, 198, 190, 0.9)',
                          background: 'linear-gradient(135deg, rgba(211, 198, 190, 0.9), rgba(152, 162, 125, 0.8))'
                        }}
                      />
                    </Link>
                    <span className="mt-2 text-base font-semibold text-white">
                      נעים מאוד - מדואלה דקלה שליט
                    </span>
                  </div>

                  <div className="flex gap-2 justify-center items-center mb-6">
                    <RiMenuUnfoldFill className="w-6 h-6 text-white" />
                    <div className="text-2xl font-bold text-white">תפריט</div>
                    <RiMenuUnfoldFill className="w-6 h-6 text-white" />
                  </div>

                  <StyledMenu className="mb-8 space-y-4">
                    {[
                      { name: "שירותים", anchor: "services" },
                      { name: "המלצות", anchor: "testimonials" },
                      { name: "שיטת הטיפול", anchor: "methodology" },
                      { name: "אודות", anchor: "stats" }
                    ].map((item, index) => (
                      <StyledMenuItem 
                        key={item.name}
                        href={getNavigationPath(item.anchor)} 
                        className="block text-xl font-semibold transition-all text-white py-2.5 px-4 rounded-xl menu-item"
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        {item.name}
                      </StyledMenuItem>
                    ))}
                  </StyledMenu>
              
                  {/* Mobile Social Icons */}
                  <div className="flex justify-center mb-6 space-x-6 rtl:space-x-reverse">
                    {[
                      { Icon: FaWaze, href: "https://waze.com/ul?q=נס ציונה, ישראל" },
                      { Icon: FaWhatsapp, href: "https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0" },
                      { Icon: FaInstagram, href: "https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh" },
                      { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100058313266229" }
                    ].map(({ Icon, href }, index) => (
                      <motion.a 
                        key={href}
                        href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 15,
                          delay: 0.3 + (index * 0.1)
                        }}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 10,
                          color: "#98a27d" 
                        }}
                        className="text-white transition-all p-2.5 bg-[#fefbe8]/40 rounded-full shadow-md"
                        style={{
                          boxShadow: '0 4px 12px rgba(101, 109, 85, 0.2)',
                          border: '1px solid rgba(211, 198, 190, 0.8)'
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
              <Button onClick={handleOpenForm}>קביעת תור</Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Header;
