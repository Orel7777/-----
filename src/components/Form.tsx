import React from 'react';
import styled from 'styled-components';

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  direction: rtl;

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }

  .form-container {
    position: relative;
    width: 90%;
    max-width: 380px;
    background: linear-gradient(165deg, rgba(220, 193, 166, 0.95) 15%, rgba(220, 193, 166, 0.3) 50%, rgba(139, 69, 19, 0.95) 85%);
    border-radius: 20px;
    padding: 20px;
    font-family: inherit;
    color: #1a1a1a;
    display: flex;
    flex-direction: column;
    gap: 14px;
    box-sizing: border-box;
    box-shadow: 0 4px 24px rgba(139, 69, 19, 0.2);
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .close-button {
    position: absolute;
    top: 16px;
    left: 16px;
    background: none;
    border: none;
    font-size: 20px;
    color: #1a1a1a;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-group label {
    color: #1a1a1a;
    font-size: 13px;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: white;
    font-size: 13px;
    text-align: right;
    direction: rtl;
  }

  .form-group textarea {
    resize: none;
    height: 100px;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: #717171;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #8B4513;
    box-shadow: 0 0 0 2px rgba(220, 193, 166, 0.3);
  }

  .form-submit-btn {
    background: #8B4513;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    margin-top: 6px;
    width: 100%;
    transition: all 0.3s ease;
  }

  .form-submit-btn:hover {
    background: #5C4033;
  }

  .logo {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 50%;
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
  }

  .logo-text {
    margin-top: 6px;
    font-size: 15px;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    .form-container {
      width: 92%;
      padding: 16px;
      max-height: 85vh;
      overflow-y: auto;
      margin-top: 60px;
    }
    
    .close-button {
      top: 12px;
      left: 12px;
      font-size: 18px;
    }
    
    .form-group {
      gap: 2px;
    }
    
    .logo {
      width: 40px;
      height: 40px;
    }
    
    .logo-text {
      font-size: 14px;
    }
  }

  @media (min-width: 769px) {
    .form-container {
      width: 75%;
      max-width: 400px;
    }
  }
`;

const Form: React.FC<FormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <StyledWrapper>
      <div className="overlay" onClick={onClose}></div>
      <div className="form-container">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="logo-container">
          <img src="/logo.jpeg" alt="דקלה מדואלה" className="logo" />
          <span className="logo-text">מדואלה - דקלה שליט</span>
        </div>
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">שם מלא *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="הכנס/י את שמך המלא" 
              minLength={2}
              pattern="^[\u0590-\u05FF\u200f\u200e a-zA-Z\s]+$"
              title="אנא הכנס/י שם תקין (אותיות בלבד)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">מספר טלפון *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              placeholder="הכנס/י מספר טלפון (לדוגמה: 0501234567)" 
              pattern="^0(5[0-9]|[2-4]|[8-9]|7[0-9])[0-9]{7}$"
              title="אנא הכנס/י מספר טלפון ישראלי תקין (10 ספרות)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">אימייל *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="הכנס/י כתובת אימייל" 
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="אנא הכנס/י כתובת אימייל תקינה"
            />
          </div>
          <div className="form-group">
            <label htmlFor="treatmentType">סוג הטיפול *</label>
            <select id="treatmentType" name="treatmentType" required defaultValue="">
              <option value="" disabled>בחר/י סוג טיפול</option>
              <option value="שוודי">עיסוי שוודי</option>
              <option value="תאילנדי">עיסוי תאילנדי</option>
              <option value="רקמות עמוק">עיסוי רקמות עמוק</option>
              <option value="רפואי">עיסוי רפואי</option>
              <option value="חוויה מרגיעה ומרפאת">חוויה מרגיעה ומרפאת</option>
              <option value="משולב">עיסוי משולב</option>
              <option value="אבנים חמות">עיסוי אבנים חמות</option>
              <option value="ארומתרפי">עיסוי ארומתרפי</option>
              <option value="כוסות רוח">עיסוי כוסות רוח</option>
              <option value="רקמות עדין">עיסוי רקמות עדין</option>
              <option value="מפנק">עיסוי מפנק</option>
              <option value="אחר">אחר</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="medicalIssues">האם יש בעיות רפואיות? *</label>
            <textarea 
              name="medicalIssues" 
              id="medicalIssues" 
              rows={4} 
              required
              placeholder="אנא פרט/י אם יש בעיות רפואיות שעלינו לדעת עליהן. אם אין, אנא כתוב/י 'אין' או 'לא'"
              minLength={2}
            />
          </div>
          <div className="form-note">
            <small>* שדות חובה</small>
          </div>
          <button className="form-submit-btn" type="submit">שליחה</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

export default Form;