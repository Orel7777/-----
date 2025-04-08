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
              <li className={isOpen ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
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

        <div className="mt-8 pt-8 border-t border-[#dcc1a6]/30 text-center">
          <p className="text-[#8B4513] mb-6">כל הזכויות שמורות לאוראל בוקריס מפתח אתרים ואפליקציות בתלת מימד</p>
          
          {/* כרטיס אוראל בוקריס */}
          <div className="flex justify-center items-center">
            <a 
              href="https://www.orelweb.co.il/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block"
            >
              <div className="flex flex-col gap-5 group mx-2 cursor-pointer">
                <div className="bg-gradient-to-r w-32 sm:w-44 aspect-square items-center justify-center flex from-[#dcc1a6]/30 to-[#8B4513]/20 rounded-lg border border-[#8B4513]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-125 w-14 sm:w-20 aspect-square rotate-0 group-hover:-rotate-[360deg] group-hover:stroke-[#8B4513] fill-[#8B4513] group-hover:-translate-y-6 group-hover:-skew-y-6 group-hover:skew-x-6" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z" />
                  </svg>
                </div>
                <div className="flex flex-row place-items-center place-content-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-base sm:text-lg relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#8B4513] text-[#8B4513]">
                      אתרים בתלת מימד
                    </p>
                    <p className="text-xs sm:text-sm text-[#5C4033]">עיצוב, פיתוח</p>
                  </div>
                  <div className="-rotate-45 cursor-pointer">
                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-[#8B4513] font-semibold text-base sm:text-lg transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-gray-200 fill-[#8B4513] group-hover:bg-[#8B4513] group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-8 sm:w-9 group-hover:rounded-full group-hover:animate-pulse">
                      <path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
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