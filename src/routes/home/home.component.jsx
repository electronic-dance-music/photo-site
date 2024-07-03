import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  @media (max-width: 800px) {
    flex: 1 1 92%; /* Adjusted width for smaller screens */
    max-width: 92%; /* Adjusted width for smaller screens */
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 2px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PhotoTitle = styled.div`
  // margin-top: 10px;
  font-weight: bold;
  font-family: Garamond, Georgia, 'Times New Roman', serif;
  font-size: clamp(36px, 4vw, 40px);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), -1px -1px 1px rgba(255, 255, 255, 0.7), 0 0 2px rgba(0, 0, 0, 0.1); /* Subtle embossed effect */
`;

const GalleryButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GalleryButton = styled(Link)`
  display: block;
  margin-bottom: 20px;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-family: Garamond, Georgia, 'Times New Roman', serif;
  font-size: clamp(22px, 4vw, 26px);

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <PhotoContainer>
          <PhotoTitle>Candid</PhotoTitle>
          <StyledImage src={`${process.env.PUBLIC_URL}/home/candid.jpg`} alt="Candid" />
        </PhotoContainer>
        <PhotoContainer>
          <PhotoTitle>Intimate</PhotoTitle>
          <StyledImage src={`${process.env.PUBLIC_URL}/home/intimate.jpg`} alt="Intimate" />
        </PhotoContainer>
        <PhotoContainer>
          <PhotoTitle>Fun</PhotoTitle>
          <StyledImage src={`${process.env.PUBLIC_URL}/home/fun.jpg`} alt="Fun" />
        </PhotoContainer>
      </HomeContainer>
      <GalleryButtonContainer>
        <GalleryButton to="/gallery">View Galleries</GalleryButton>
      </GalleryButtonContainer>
    </>
  );
};

export default Home;
