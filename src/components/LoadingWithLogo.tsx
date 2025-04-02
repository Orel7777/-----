import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const LoadingWithLogo = () => {
  return (
    <StyledWrapper>
      <div className="content">
        <div className="logo-container">
          <img src="/logo.jpeg" alt="דקלה מדואלה" className="logo" />
        </div>
        <div className="loader-container">
          <Loader />
        </div>
        <div className="title">
          <h1>מדואלה - דקלה שליט</h1>
          <p>מרכז לרפואה משלימה ועיסויים לנשים</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(165deg, rgb(181, 218, 205, 0.95) 15%, rgba(181, 218, 205, 0.3) 50%, rgba(245, 242, 240, 0.95) 85%);
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    max-width: 90%;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
  }
  
  .logo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border: 3px solid rgba(255, 255, 255, 0.4);
  }
  
  .loader-container {
    margin: -1.5rem 0;
    transform: scale(0.6);
  }
  
  .title {
    text-align: center;
    color: #1a1a1a;
  }
  
  .title h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .title p {
    font-size: 1.2rem;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
      gap: 1.5rem;
    }
    
    .logo {
      width: 100px;
      height: 100px;
    }
    
    .loader-container {
      transform: scale(0.5);
      margin: -2rem 0;
    }
    
    .title h1 {
      font-size: 1.5rem;
    }
    
    .title p {
      font-size: 1rem;
    }
  }
`;

export default LoadingWithLogo; 