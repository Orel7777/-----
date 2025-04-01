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
    max-width: 400px;
    background: linear-gradient(165deg, rgb(181, 218, 205, 0.95) 15%, rgba(181, 218, 205, 0.3) 50%, rgba(245, 242, 240, 0.95) 85%);
    border-radius: 20px;
    padding: 24px;
    font-family: inherit;
    color: #1a1a1a;
    display: flex;
    flex-direction: column;
    gap: 16px;
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
    gap: 16px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
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
    font-size: 14px;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: white;
    font-size: 14px;
  }

  .form-group textarea {
    resize: none;
    height: 120px;
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
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 8px;
    width: 100%;
  }

  .logo {
    width: 60px;
    height: 60px;
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
    margin-top: 8px;
    font-size: 16px;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    .form-container {
      width: 95%;
      padding: 20px;
    }
  }

  @media (min-width: 769px) {
    .form-container {
      width: 80%;
      max-width: 450px;
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
            <label htmlFor="textarea">איך נוכל לעזור לך?</label>
            <textarea 
              name="textarea" 
              id="textarea" 
              rows={5} 
              required 
              placeholder="ספר/י לנו במה נוכל לעזור..."
            />
          </div>
          <button className="form-submit-btn" type="submit">שליחה</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

export default Form;