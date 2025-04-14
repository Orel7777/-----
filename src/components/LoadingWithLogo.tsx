import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import { motion } from 'framer-motion';

const LoadingWithLogo = () => {
  return (
    <StyledWrapper>
      <motion.div 
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="logo-container"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
        >
          <img src="/לוגו_גדול.jpeg" alt="דקלה מדואלה" className="logo" />
          <span className="logo-text"> מדואלה-דקלה שליט</span>
        </motion.div>
        <motion.div 
          className="loader-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Loader />
        </motion.div>
        <motion.div 
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p>מרכז לרפואה משלימה ועיסויים לנשים</p>
        </motion.div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #c3c8c1 0%, #98a27d 50%, #656d55 100%);
  direction: rtl;
  
  .content {
    background-color: rgba(177, 177, 153, 0.3);
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(101, 109, 85, 0.3);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    max-width: 90%;
    border: 1px solid #656d55;
    backdrop-filter: blur(8px);
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    
    .logo {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #656d55;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      margin-bottom: 1rem;
    }
    
    .logo-text {
      font-family: 'Assistant', sans-serif;
      font-size: 2.2rem;
      font-weight: bold;
      color: white;
      text-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
      line-height: 1.2;
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }
  
  .loader-container {
    margin: 1rem 0;
  }
  
  .title {
    text-align: center;
    
    p {
      font-size: 1.2rem;
      color: white;
      font-weight: 500;
    }
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
      gap: 1.5rem;
    }
    
    .logo-container {
      .logo {
        width: 150px;
        height: 150px;
      }
      
      .logo-text {
        font-size: 1.8rem;
      }
    }
    
    .title p {
      font-size: 1rem;
    }
  }
`;

export default LoadingWithLogo;