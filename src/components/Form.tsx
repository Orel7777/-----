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
    background: linear-gradient(165deg, rgb(181, 218, 205, 0.95) 15%, rgba(181, 218, 205, 0.3) 50%, rgba(245, 242, 240, 0.95) 85%);
    border-radius: 20px;
    padding: 20px;
    font-family: inherit;
    color: #1a1a1a;
    display: flex;
    flex-direction: column;
    gap: 14px;
    box-sizing: border-box;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
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
    border-color: #69a88f;
    box-shadow: 0 0 0 2px rgba(105, 168, 143, 0.2);
  }

  .form-submit-btn {
    background: #69a88f;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    margin-top: 6px;
    width: 100%;
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
      padding: 18px;
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
            <label htmlFor="name">שם מלא</label>
            <input type="text" id="name" name="name" required placeholder="הכנס/י את שמך המלא" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">מספר טלפון</label>
            <input type="tel" id="phone" name="phone" required placeholder="הכנס/י מספר טלפון" />
          </div>
          <div className="form-group">
            <label htmlFor="email">אימייל</label>
            <input type="email" id="email" name="email" required placeholder="הכנס/י כתובת אימייל" />
          </div>
          <div className="form-group">
            <label htmlFor="treatmentType">סוג הטיפול</label>
            <select id="treatmentType" name="treatmentType" required>
              <option value="" disabled selected>בחר/י סוג טיפול</option>
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
            <label htmlFor="medicalIssues">האם יש בעיות רפואיות?</label>
            <textarea 
              name="medicalIssues" 
              id="medicalIssues" 
              rows={4} 
              placeholder="אנא פרט/י אם יש בעיות רפואיות שעלינו לדעת עליהן"
            />
          </div>
          <button className="form-submit-btn" type="submit">שליחה</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

export default Form;