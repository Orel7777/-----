import { useState } from 'react';
import { FaWaze, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTikTok } from "react-icons/ai";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import Form from './Form';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const StyledMenuItem = styled(motion.a)`
  border: 1px solid rgba(254, 251, 232, 0.5);
`;

const StyledMenu = styled.div`
  .menu-item {
    &:hover {
      scale: 1.05;
      background-color: rgba(254, 251, 232, 0.7);
      box-shadow: 0 4px 10px rgba(173, 139, 114, 0.2);
    }
  }
`;

const StyledSocialIcon = styled(motion.a)`
  box-shadow: 0 4px 12px rgba(173, 139, 114, 0.2);
  border: 1px solid rgba(254, 251, 232, 0.8);
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed w-full top-0 z-40">
        <div className="backdrop-blur-md shadow-md" style={{
          background: 'linear-gradient(to bottom, rgba(254, 251, 232, 0.95), rgba(206, 172, 147, 0.9))'
        }}>
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center justify-between px-4 py-3 md:py-2 lg:px-0">
              {/* Logo */}
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img 
                  src="/לוגו_גדול.jpeg" 
                  alt="דקלה מדואלה" 
                  className="h-16 w-auto rounded-full p-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{
                    boxShadow: '0 8px 20px rgba(173, 139, 114, 0.3)',
                    border: '2px solid rgba(254, 251, 232, 0.9)',
                    background: 'linear-gradient(135deg, rgba(254, 251, 232, 0.9), rgba(206, 172, 147, 0.8))'
                  }}
                />
                <span className="text-sm font-semibold text-[#ad8b72] mt-1">נעים להכיר - מדואלה דקלה שליט</span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {["שירותים", "המלצות", "שיטת הטיפול", "אודות"].map((item, index) => (
                  <motion.a 
                    key={item}
                    href={`#${item === "שירותים" ? "services" : item === "המלצות" ? "testimonials" : item === "שיטת הטיפול" ? "methodology" : "stats"}`}
                    className="relative text-[#ad8b72] font-medium text-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover="hover"
                  >
                    {item}
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ad8b72] to-[#ceac93] rounded-full"
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
                className="md:hidden relative w-10 h-10 text-[#ad8b72]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute left-1/2 top-1/2 block w-5 transform -translate-x-1/2 -translate-y-1/2">
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
              <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
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
                        color: "#ceac93" 
                      }}
                      className="text-[#ad8b72] transition-all p-2 bg-[#fefbe8]/40 rounded-full shadow-md"
                      style={{
                        boxShadow: '0 4px 12px rgba(173, 139, 114, 0.2)',
                        border: '1px solid rgba(254, 251, 232, 0.8)'
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
                background: 'linear-gradient(135deg, rgba(254, 251, 232, 0.95), rgba(206, 172, 147, 0.95), rgba(173, 139, 114, 0.95))'
          }}
        >
              <motion.div 
                className="flex flex-col items-center justify-center min-h-screen px-4 py-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-center space-y-5 p-6 rounded-2xl w-full max-w-md relative"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(254, 251, 232, 0.5), rgba(206, 172, 147, 0.5))',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(254, 251, 232, 0.7)',
                    border: '2px solid rgba(254, 251, 232, 0.7)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <motion.button
                onClick={() => setIsMenuOpen(false)}
                    className="absolute top-3 right-3 p-2 rounded-full shadow-lg text-[#ad8b72]"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(254, 251, 232, 0.9), rgba(206, 172, 147, 0.8))',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(254, 251, 232, 0.7)'
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

                  <div className="flex flex-col items-center justify-center mb-6">
                    <motion.img 
                  src="/לוגו_גדול.jpeg" 
                  alt="דקלה מדואלה" 
                      className="w-20 h-20 rounded-full p-1"
                      whileHover={{ scale: 1.1 }}
                      style={{
                        boxShadow: '0 8px 20px rgba(173, 139, 114, 0.3)',
                        border: '2px solid rgba(254, 251, 232, 0.9)',
                        background: 'linear-gradient(135deg, rgba(254, 251, 232, 0.9), rgba(206, 172, 147, 0.8))'
                      }}
                />
                    <span className="text-base font-semibold text-[#ad8b72] mt-2">
                      נעים להכיר - מדואלה דקלה שליט
                    </span>
              </div>

                  <div className="flex items-center justify-center gap-2 mb-6">
                    <RiMenuUnfoldFill className="w-6 h-6 text-[#ad8b72]" />
                    <div className="text-2xl font-bold text-[#ad8b72]">תפריט</div>
                    <RiMenuUnfoldFill className="w-6 h-6 text-[#ad8b72]" />
              </div>

                  <StyledMenu className="space-y-4 mb-8">
                    {[
                      { name: "שירותים", href: "#services" },
                      { name: "המלצות", href: "#testimonials" },
                      { name: "שיטת הטיפול", href: "#methodology" },
                      { name: "אודות", href: "#stats" }
                    ].map((item, index) => (
                      <StyledMenuItem 
                        key={item.name}
                        href={item.href} 
                        className="block text-xl font-semibold transition-all text-[#ad8b72] py-2.5 px-4 rounded-xl menu-item"
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
                  <div className="flex justify-center space-x-6 rtl:space-x-reverse mb-6">
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
                          color: "#ceac93" 
                        }}
                        className="text-[#ad8b72] transition-all p-2.5 bg-[#fefbe8]/40 rounded-full shadow-md"
                        style={{
                          boxShadow: '0 4px 12px rgba(173, 139, 114, 0.2)',
                          border: '1px solid rgba(254, 251, 232, 0.8)'
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
