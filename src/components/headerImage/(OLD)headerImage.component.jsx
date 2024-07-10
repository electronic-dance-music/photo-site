import React from 'react';
import styled from 'styled-components';

const PUBLIC_URL = process.env.PUBLIC_URL;

const HeaderImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%; /* Aspect ratio for a 2:1 image (adjust as needed) */
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => `${PUBLIC_URL}${props.imageUrl}`});
  background-size: cover;
  background-position: ${props => props.bgPositionX} ${props => props.bgPositionY};
`;

const ImageText = styled.h1`
  color: white;
  font-family: Garamond, Georgia, 'Times New Roman', serif;
  font-size: clamp(36px, 4vw, 40px);
  position: absolute;
  bottom: ${props => props.desktopBottomOffset};
  left: ${props => props.desktopLeftOffset};
  width: 100%; /* Ensure text takes full width */
  text-align: left;


  @media (max-width: 768px) {
    bottom: ${props => props.mobileBottomOffset};
    left: ${props => props.mobileLeftOffset};
  }
`;

const HeaderImage = ({
  imageUrl,
  text,
  bgPositionX = 'center', // Default to center if not provided
  bgPositionY = 'center', // Default to center if not provided
  desktopBottomOffset = '0',
  mobileBottomOffset = '0',
  desktopLeftOffset = '0',
  mobileLeftOffset = '0',
}) => {
  const fullImageUrl = `${PUBLIC_URL}/${imageUrl}`;

  return (
    <HeaderImageContainer>
      <BackgroundImage imageUrl={fullImageUrl} bgPositionX={bgPositionX} bgPositionY={bgPositionY} />
      <ImageText
        desktopBottomOffset={desktopBottomOffset}
        mobileBottomOffset={mobileBottomOffset}
        desktopLeftOffset={desktopLeftOffset}
        mobileLeftOffset={mobileLeftOffset}
      >
        {text}
      </ImageText>
    </HeaderImageContainer>
  );
};

export default HeaderImage;
