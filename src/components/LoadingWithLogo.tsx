import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const LoadingWithLogo = () => {
  return (
    <StyledWrapper>
      <div className="content" style={{
        backgroundColor: 'rgba(220, 193, 166, 0.3)',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(139, 69, 19, 0.2)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        maxWidth: '90%',
        border: '1px solid #8B4513'
      }}>
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
  background: #dcc1a6;
  
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
    box-shadow: 0 4px 20px rgba(139, 69, 19, 0.2);
    border: 3px solid #8B4513;
  }
  
  .loader-container {
    margin: -1.5rem 0;
    transform: scale(0.6);
  }
  
  .title {
    text-align: center;
    color: #8B4513;
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