import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background-color: #2d2d2d;
  color: white;
  padding: 12px 24px;
  font-family: Garamond, Georgia, 'Times New Roman', serif;
  font-size: clamp(13px, 3vw, 15px);
  letter-spacing: 1.5px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.9;
  }
`;

const BlackButton = ({ text, to, href }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button as="span">{text}</Button>
      </a>
    );
  } else {
    return (
      <Link to={to}>
        <Button>{text}</Button>
      </Link>
    );
  }
};

export default BlackButton;
