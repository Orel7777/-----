const Footer = () => {
  return (
    <footer className="backdrop-blur-sm border-t border-[#b5dacd]/30 py-12 bg-gradient-to-b from-[#b5dacd]/20 to-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">שעות פעילות</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-gray-900 transition-colors">ראשון - חמישי: 09:00 - 20:00</li>
              <li className="hover:text-gray-900 transition-colors">שישי: 09:00 - 14:00</li>
              <li className="hover:text-gray-900 transition-colors">שבת: סגור</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">צור קשר</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-gray-900 transition-colors">טלפון: 054-1234567</li>
              <li className="hover:text-gray-900 transition-colors">כתובת: רחוב הרצל 1, תל אביב</li>
              <li className="hover:text-gray-900 transition-colors">דוא"ל: info@example.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">עקבו אחרינו</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#b5dacd]/30 text-center text-gray-800">
          <p>© 2024 מדואלה קליניק. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;