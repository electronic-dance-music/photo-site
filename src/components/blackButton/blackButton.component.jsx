import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #2d2d2d;
  color: white;
  padding: 14px 30px;
  font-family: Garamond, Georgia, 'Times New Roman', serif;
  font-size: clamp(16px, 4vw, 20px);
  letter-spacing: 1.5px;

  transition: opacity 0.3s ease;

  &:hover{
    opacity: 0.9;
  }
`;

const BlackButton = ({
    text,
  }) => {
    return (
      <Button>
          {text}
      </Button>
    );
  };
  
  export default BlackButton;
  