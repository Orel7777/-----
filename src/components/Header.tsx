import { useState } from 'react';
import { FaWaze, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTikTok } from "react-icons/ai";
import { RiMenuUnfoldFill, RiMenuUnfold4Fill } from "react-icons/ri";
import Form from './Form';
import Button from './Button';
import { motion } from 'framer-motion';

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
        <div className="bg-[#dcc1a6]/10 backdrop-blur-md shadow-sm">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center justify-between px-4 py-2 md:py-2 lg:px-0">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <img 
                  src="/logo.jpeg" 
                  alt="דקלה מדואלה" 
                  className="h-12 w-auto rounded-full bg-[#dcc1a6]/40 backdrop-blur-sm p-1"
                />
                <span className="text-sm text-[#8B4513] mt-0.5">מדואלה - דקלה שליט</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#services" className="transition-colors text-[#8B4513] hover:text-[#5C4033]">
                  שירותים
                </a>
                <a href="#testimonials" className="transition-colors text-[#8B4513] hover:text-[#5C4033]">
                  המלצות
                </a>
                <a href="#methodology" className="transition-colors text-[#8B4513] hover:text-[#5C4033]">
                  שיטת הטיפול
                </a>
                <a href="#stats" className="transition-colors text-[#8B4513] hover:text-[#5C4033]">
                  אודות
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative w-10 h-10 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className={`absolute left-1/2 top-1/2 block w-5 transform -translate-x-1/2 -translate-y-1/2 ${isMenuOpen ? 'hidden' : ''}`}>
                  <span 
                    className={`absolute top-0 left-0 w-5 h-0.5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                  />
                  <span 
                    className={`absolute top-1.5 left-0 w-5 h-0.5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                  />
                  <span 
                    className={`absolute top-3 left-0 w-5 h-0.5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                  />
                </span>
              </button>

              {/* Desktop Social Icons and CTA */}
              <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <a 
                    href="https://waze.com/ul?q=נס ציונה, ישראל" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8B4513] hover:text-[#5C4033] transition-colors"
                  >
                    <FaWaze className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8B4513] hover:text-[#5C4033] transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8B4513] hover:text-[#5C4033] transition-colors"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100058313266229" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#8B4513] hover:text-[#5C4033] transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </div>
                <Button onClick={handleOpenForm}>קביעת תור</Button>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Fullscreen */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out lg:hidden ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
          style={{
            background: 'linear-gradient(to bottom, rgba(220, 193, 166, 0.95), rgba(139, 69, 19, 0.95), rgba(92, 64, 51, 0.95))'
          }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-2">
            <div className="text-center space-y-4 bg-[#dcc1a6]/30 backdrop-blur-md p-3 pt-2 rounded-2xl border border-[#dcc1a6]/50 shadow-xl max-w-md w-full relative">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-1 right-1 p-1.5 text-gray-800 hover:text-gray-900 transition-all duration-300 hover:scale-110 bg-white/50 rounded-full shadow-lg backdrop-blur-sm"
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
              </button>

              <div className="flex flex-col items-center justify-center pb-1 border-b border-gray-200/50">
                <img 
                  src="/logo.jpeg" 
                  alt="דקלה מדואלה" 
                  className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-sm p-1"
                />
                <span className="text-sm text-gray-800 mt-0.5">מדואלה - דקלה שליט</span>
              </div>

              <div className="flex items-center justify-center gap-2 pb-2 border-b border-gray-200/50">
                <RiMenuUnfold4Fill className="w-5 h-5 text-gray-800 hover:scale-110 transition-all duration-300" style={{ animation: 'verticalFloat 120s ease-in-out infinite' }} />
                <div className="text-2xl font-bold text-gray-800">תפריט</div>
                <RiMenuUnfoldFill className="w-5 h-5 text-gray-800 hover:scale-110 transition-all duration-300" style={{ animation: 'verticalFloat 120s ease-in-out infinite', animationDelay: '4s' }} />
              </div>

              <div className="space-y-2">
                <a 
                  href="#services" 
                  className="block text-lg font-semibold transition-all text-gray-800 hover:text-gray-900 hover:scale-105 py-1.5 px-3 rounded-xl hover:bg-white/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  שירותים
                </a>
                <a 
                  href="#testimonials" 
                  className="block text-lg font-semibold transition-all text-gray-800 hover:text-gray-900 hover:scale-105 py-1.5 px-3 rounded-xl hover:bg-white/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  המלצות
                </a>
                <a 
                  href="#methodology" 
                  className="block text-lg font-semibold transition-all text-gray-800 hover:text-gray-900 hover:scale-105 py-1.5 px-3 rounded-xl hover:bg-white/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  שיטת הטיפול
                </a>
                <a 
                  href="#stats" 
                  className="block text-lg font-semibold transition-all text-gray-800 hover:text-gray-900 hover:scale-105 py-1.5 px-3 rounded-xl hover:bg-white/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  אודות
                </a>
              </div>
              
              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                <a 
                  href="https://waze.com/ul?q=נס ציונה, ישראל" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-gray-900 transition-colors"
                >
                  <FaWaze className="w-5 h-5" />
                </a>
                <a 
                  href="https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-gray-900 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-gray-900 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100058313266229" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-gray-900 transition-colors"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
              </div>

              <Button onClick={handleOpenForm}>קביעת תור</Button>

              <style>{`
                @keyframes verticalFloat {
                  0% { transform: translateY(-2px); }
                  50% { transform: translateY(2px); }
                  100% { transform: translateY(-2px); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </header>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Header;
