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
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .form-container {
    position: relative;
    width: 90%;
    max-width: 380px;
    background: rgba(92, 64, 51, 0.9);
    border-radius: 12px;
    padding: 20px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 14px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease-out;
    border: 1px solid #8B4513;
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
    top: 10px;
    left: 10px;
    background: rgba(139, 69, 19, 0.8);
    border: 2px solid #fff;
    border-radius: 50%;
    font-size: 22px;
    color: white;
    cursor: pointer;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
    z-index: 10;
  }

  .close-button:hover {
    background: #8B4513;
    transform: scale(1.1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  }

  .form-group label {
    color: white;
    font-size: 13px;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #8B4513;
    background: rgba(255, 255, 255, 0.95);
    font-size: 14px;
    text-align: right;
    direction: rtl;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    color: #000000;
  }

  .form-group input:hover,
  .form-group textarea:hover,
  .form-group select:hover {
    border-color: #5C4033;
    background: #fff;
  }

  .form-group textarea {
    resize: none;
    height: 100px;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder,
  .form-group select::placeholder {
    color: #5C4033;
    opacity: 1;
    font-weight: 500;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: #8B4513;
    box-shadow: 0 0 0 2px rgba(139, 69, 19, 0.2), inset 0 1px 3px rgba(0, 0, 0, 0.1);
    background: #fff;
  }

  .form-group select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%238B4513' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 12px center;
    padding-left: 30px;
    color: #8B4513;
    font-weight: 500;
  }

  .form-group select option {
    color: #8B4513;
    font-weight: 500;
    padding: 10px;
    background-color: #fff;
  }

  .form-group select option:hover,
  .form-group select option:focus {
    background-color: rgba(220, 193, 166, 0.3);
  }

  .form-submit-btn {
    background: #8B4513;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.5);
    padding: 10px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .form-submit-btn:hover {
    background: #5C4033;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  .logo {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 50%;
    border: 2px solid #8B4513;
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
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .form-note {
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
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
            <label className="form-group-label" htmlFor="name">שם מלא *</label>
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
              <option value="עיסוי רפואי">עיסוי רפואי</option>
              <option value="עיסוי רקמות עמוק">עיסוי רקמות עמוק</option>
              <option value="עיסוי לנשים בהריון">עיסוי לנשים בהריון</option>
              <option value="עיסוי לאחר לידה">עיסוי לאחר לידה</option>
              <option value="עיסוי לימפטי">עיסוי לימפטי (ניקוז לימפטי)</option>
              <option value="עיסוי לספורטאיות">עיסוי לספורטאיות</option>
              <option value="עיסוי לכאבי גב וצוואר">עיסוי לכאבי גב וצוואר</option>
              <option value="עיסוי שוודי">עיסוי שוודי</option>
              <option value="עיסוי הוליסטי">עיסוי הוליסטי</option>
              <option value="עיסוי באבנים חמות">עיסוי באבנים חמות</option>
             
              <option value="עיסוי לומי-לומי">עיסוי לומי-לומי (מהוואי)</option>
              <option value="עיסוי כוסות רוח">עיסוי כוסות רוח</option>
              <option value="רפלקסולוגיה">רפלקסולוגיה</option>
              <option value="עיסוי משולב">עיסוי משולב (לפי צרכי המטופלת)</option>
              <option value="עיסוי קרקפת ופנים">עיסוי קרקפת ופנים</option>
              <option value="עיסוי בשיטת טריגר פוינט">עיסוי בשיטת טריגר פוינט (Trigger Point Therapy)</option>
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