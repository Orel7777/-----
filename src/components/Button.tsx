import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
  return (
    <StyledWrapper className={className}>
      <button className="button" onClick={onClick}>{children}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    min-width: 120px;
    position: relative;
    cursor: pointer;
    padding: 12px 17px;
    border: 0;
    border-radius: 7px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    background: radial-gradient(
      ellipse at bottom,
      rgba(71, 81, 92, 1) 0%,
      rgba(11, 21, 30, 1) 45%
    );
    color: rgb(255, 255, 255, 0.9);
    transition: all 1s cubic-bezier(0.15, 0.83, 0.66, 1);
    font-weight: 500;
  }

  .button::before {
    content: "";
    width: 70%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 15%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.2;
    transition: all 1s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .button:hover {
    color: rgb(255, 255, 255, 1);
    transform: scale(1.1) translateY(-3px);
  }

  .button:hover::before {
    opacity: 1;
  }
`;

export default Button; 