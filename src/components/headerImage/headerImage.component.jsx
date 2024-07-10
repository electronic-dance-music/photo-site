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

const TextContainer = styled.div`
  position: absolute;
  bottom: ${props => props.desktopBottomOffset};
  left: ${props => props.desktopLeftOffset};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80vw;
  text-align: left; /* Ensures left alignment */

  @media (max-width: 768px) {
    bottom: ${props => props.mobileBottomOffset};
    left: ${props => props.mobileLeftOffset};
  }
`;

const ImageText = styled.h1`
  color: white;
  font-family: Garamond, Georgia, 'Times New Roman', serif;
  font-size: clamp(36px, 4vw, 40px);
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow for better visibility */
`;

const SmallText = styled.p`
  color: white;
  font-family: Garamond, Georgia, 'Times New Roman', serif;
  font-size: clamp(16px, 3vw, 20px);
  margin: 0 0 10px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Text shadow for better visibility */
`;

const HeaderImage = ({
  imageUrl,
  imageHeight = '300px',
  backgroundPositionX = 'center',
  backgroundPositionY = 'center',
  text,
  smallText,
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
      <TextContainer
        desktopBottomOffset={desktopBottomOffset}
        desktopLeftOffset={desktopLeftOffset}
        mobileBottomOffset={mobileBottomOffset}
        mobileLeftOffset={mobileLeftOffset}
      >
        {smallText && <SmallText>{smallText}</SmallText>}
        <ImageText>{text}</ImageText>
      </TextContainer>
    </HeaderImageContainer>
  );
};

export default HeaderImage;
