// home.component.jsx
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
`;

const PhotoContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 36px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.3); /* Optional: semi-transparent background for better contrast */
    padding: 10px;
    border-radius: 5px;
`;

const Home = () => {
    return (
        <HomeContainer>
            <PhotoContainer>
                <StyledImage src={`${process.env.PUBLIC_URL}/home/candid.jpg`} alt="Candid" />
                <TextOverlay>Candid</TextOverlay>
            </PhotoContainer>
            <PhotoContainer>
                <StyledImage src={`${process.env.PUBLIC_URL}/home/intimate.jpg`} alt="Intimate" />
                <TextOverlay>Intimate</TextOverlay>
            </PhotoContainer>
            <PhotoContainer>
                <StyledImage src={`${process.env.PUBLIC_URL}/home/fun.png`} alt="Fun" />
                <TextOverlay>Fun</TextOverlay>
            </PhotoContainer>
        </HomeContainer>
    );
};

export default Home;
