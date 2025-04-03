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
    background: #8B4513;
    color: white;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .button:hover {
    color: white;
    transform: scale(1.05);
    background: #5C4033;
  }
`;

export default Button; 