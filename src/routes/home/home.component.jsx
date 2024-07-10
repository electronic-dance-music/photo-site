import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BlackButton from '../../components/blackButton/blackButton.component';
import HeaderImage from '../../components/headerImage/headerImage.component';
import { sharedStyleProps } from '../../styles/globalstyles.styles';

const MasterContainer = styled.div`
  margin: 0 2.5%;

  @media (max-width: 1000px) {
    margin: 0 0;
  }
`

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 20px;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1 1 33%; /* Adjust width for each photo container */
  max-width: 350px; /* Maximum width to avoid overflow */

  @media (max-width: 600px) {
    flex: 1 1 92%; /* Adjusted width for smaller screens */
    max-width: 92%; /* Adjusted width for smaller screens */
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  // border-radius: 2px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PhotoTitle = styled.div`
  // margin-top: 10px;
  font-weight: bold;
  font-family: ${sharedStyleProps.fontsToUse};
  font-size: clamp(36px, 4vw, 40px);
  // text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), -1px -1px 1px rgba(255, 255, 255, 0.7), 0 0 2px rgba(0, 0, 0, 0.1); /* Subtle embossed effect */
`;

const GalleryButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`


const Home = () => {
  const marginBottom = "20px"

  const [imageHeight, setImageHeight] = useState(window.innerWidth < 800 ? "600px" : "800px")

  useEffect(() => {
    const handleResize = () => {
      setImageHeight(window.innerWidth < 800 ? "600px" : "800px");
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <MasterContainer>
      <HeaderImage
          imageUrl="home/candid1.jpg"
          imageHeight={imageHeight}
          backgroundPositionX="48%"
          backgroundPositionY="40%"
          text="CANDID"
          // smallText=""
          desktopBottomOffset="20%"
          desktopLeftOffset="10%"
          mobileBottomOffset="45%"
          mobileLeftOffset="10%"
          marginBottom={marginBottom}
        />
      <HeaderImage
          imageUrl="home/intimate1.jpg"
          imageHeight={imageHeight}
          backgroundPositionX="48%"
          backgroundPositionY="40%"
          text="INTIMATE"
          // smallText=""
          desktopBottomOffset="20%"
          desktopLeftOffset="10%"
          mobileBottomOffset="45%"
          mobileLeftOffset="10%"
          marginBottom={marginBottom}
        />
      <HeaderImage
          imageUrl="home/fun1.jpg"
          imageHeight={imageHeight}
          backgroundPositionX="42%"
          backgroundPositionY="50%"
          text="FUN"
          // smallText=""
          desktopBottomOffset="20%"
          desktopLeftOffset="10%"
          mobileBottomOffset="45%"
          mobileLeftOffset="10%"
          marginBottom={marginBottom}
        />
      <GalleryButtonContainer>
        <BlackButton text={"GET IN TOUCH"} to={'/contact'} />
      </GalleryButtonContainer>
    </MasterContainer>
  );
};

export default Home;
