import React from 'react';
import styled from 'styled-components';

const HeaderImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.imageHeight};
  background-image: url(${props => `${props.imageUrl}`});
  background-position: ${props => `${props.backgroundPositionX} ${props.backgroundPositionY}`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImageText = styled.h1`
  color: white;
  font-family: Garamond, Georgia, 'Times New Roman', serif;
  font-size: clamp(36px, 4vw, 40px);
  font-weight: bold;
  position: absolute;
  bottom: ${props => props.desktopBottomOffset};
  left: ${props => props.desktopLeftOffset};
  width: 80vw;
  text-align: left;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow for better visibility */

  @media (max-width: 768px) {
    bottom: ${props => props.mobileBottomOffset};
    left: ${props => props.mobileLeftOffset};
  }
`;

const HeaderImage = ({
  imageUrl,
  imageHeight = '300px',
  backgroundPositionX = 'center',
  backgroundPositionY = 'center',
  text,
  desktopBottomOffset = '20px',
  desktopLeftOffset = '20px',
  mobileBottomOffset = '10px',
  mobileLeftOffset = '10px'
}) => {
  return (
    <HeaderImageContainer 
      imageUrl={`${process.env.PUBLIC_URL}/${imageUrl}`} 
      imageHeight={imageHeight}
      backgroundPositionX={backgroundPositionX}
      backgroundPositionY={backgroundPositionY}
    >
      <ImageText
        desktopBottomOffset={desktopBottomOffset}
        desktopLeftOffset={desktopLeftOffset}
        mobileBottomOffset={mobileBottomOffset}
        mobileLeftOffset={mobileLeftOffset}
      >
        {text}
      </ImageText>
    </HeaderImageContainer>
  );
};

export default HeaderImage;
