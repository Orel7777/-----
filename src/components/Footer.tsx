import styled from 'styled-components';
import { FaChevronDown, FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' });
      const date = new Date(now);
      const day = date.getDay(); // 0 = ראשון, 6 = שבת
      const hour = date.getHours();
      
      // עדכון השעה הנוכחית
      setCurrentTime(date.toLocaleTimeString('he-IL', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));

      // בדיקה אם המקום פתוח
      if (day === 6) { // שבת
        setIsOpen(false);
      } else if (day >= 0 && day <= 4) { // ימים א-ה
        setIsOpen(hour >= 10 && hour < 20);
      }
    };

    // בדיקה ראשונית
    checkIfOpen();
    
    // בדיקה כל דקה
    const interval = setInterval(checkIfOpen, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="backdrop-blur-sm border-t border-[#dcc1a6]/30 py-12 bg-gradient-to-b from-[#dcc1a6]/20 to-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#8B4513] mb-4">שעות פעילות בקליניקה:</h3>
            <ul className="space-y-2 text-[#5C4033]">
              <li className="hover:text-[#8B4513] transition-colors">א' - ה' 10:00 - 20:00</li>
              <li className="hover:text-[#8B4513] transition-colors font-bold">בתיאום מראש!</li>
              <li className={isOpen ? "text-[#8B4513] font-bold" : "text-red-600 font-bold"}>
                {isOpen ? "פתוח עכשיו" : "סגור"} ({currentTime})
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#8B4513] mb-4">למידע נוסף</h3>
            <ul className="space-y-2 text-[#5C4033]">
              <li className="hover:text-[#8B4513] transition-colors">10:00 - 20:00</li>
              <li className="hover:text-[#8B4513] transition-colors">
                <a 
                  href="https://waze.com/ul?q=נס ציונה, ישראל" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#8B4513]"
                >
                  <FaMapMarkerAlt />
                  נס ציונה, ישראל
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#8B4513] mb-4">עקבו אחרינו</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#5C4033] hover:text-[#8B4513] transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100058313266229" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#5C4033] hover:text-[#8B4513] transition-colors"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a 
                href="https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#5C4033] hover:text-[#8B4513] transition-colors"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#dcc1a6]/30 text-center text-[#8B4513]">
          <p>© 2024 מדואלה קליניק. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

const StyledFooter = styled.footer`
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(220, 193, 166, 0.3);
  padding: 48px 0;
  background: linear-gradient(to bottom, rgba(220, 193, 166, 0.2), transparent);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .clinic-info {
    text-align: center;
    padding: 24px;
    border-radius: 12px;
    background: rgba(220, 193, 166, 0.1);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(220, 193, 166, 0.3);
  }

  h3 {
    color: #8B4513;
  }

  p {
    color: #5C4033;
  }

  .more-info {
    margin-top: 16px;
  }

  .hours-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 12px 0;
  }

  .down-icon {
    color: #5C4033;
  }

  .open-now {
    font-size: 1.1rem;
  }

  .status-location {
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    padding: 32px 0;
    
    .clinic-info {
      padding: 20px;
    }
  }
`;

export default Footer;