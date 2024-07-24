// PhotoGallerySelector.jsx
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { sharedStyleProps } from '../../styles/globalstyles.styles';
// import { HorizontalLine } from '../../styles/globalstyles.styles';

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const PhotoContainer = styled.div`
    flex: 1 1 45%; /* Allow two items per row on larger screens */
    // margin: 10px;
    max-width: 45%; /* Limit the width of each item to 45% */
    box-sizing: border-box;

    @media (max-width: 800px) {
        flex: 1 1 95%; /* Set the width to 95% on smaller screens */
        max-width: 95%; /* Limit the width of each item to 95% */
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; /* Ensure the link text inherits the color and doesn't change */

    &:hover {
        text-decoration: none;
        color: inherit;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto; /* Allow images to have different heights */
    max-height: 100vh;
    object-fit: cover; /* Ensure the image covers the entire area */
    // border-radius: 2px;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    // transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.02); /* Reduced scale effect */
        // box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        // filter: brightness(1.1);
    }

    @media (max-width: 800px) {
        max-height: 200vh;
    }
`;

const GalleryInfo = styled.div`
    margin-top: 10px;
    font-family: ${sharedStyleProps.fontsToUse};

    h2 {
        font-family: ${sharedStyleProps.fontsToUse};
        font-size: clamp(23px, 4vw, 27px);
        margin: 5px 0;
        color: ${sharedStyleProps.primaryTextColor};
    }

    p {
        font-family: ${sharedStyleProps.fontsToUse};
        font-size: clamp(16px, 3vw, 20px);
        margin: 0;
        color: #949494;
    }
`;

const TopText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${sharedStyleProps.fontsToUse};
    margin-bottom: 20px;

    

    h1 {
        font-family: ${sharedStyleProps.fontsToUse};
        font-size: clamp(36px, 4vw, 40px);
        color: ${sharedStyleProps.primaryTextColor};
    }

    p{
        font-size: clamp(14px, 4vw, 18px);
        color: ${sharedStyleProps.secondaryTextColor};
    }
`;

const PhotoGalleryLink = ({ gallery }) => (
    <StyledLink to={`/portfolio/${gallery.folder}`}>
        <StyledImage src={`${process.env.PUBLIC_URL}/photo_galleries/${gallery.folder}/${gallery.coverImage}`} alt={gallery.title} />
        <GalleryInfo>
            <h2>{gallery.title}</h2>
            <p>{gallery.subtitle}</p>
        </GalleryInfo>
    </StyledLink>
);

const PhotoGallerySelector = () => {
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/photo_galleries/gallery-selector-images.json`)
            .then(response => response.json())
            .then(data => setGalleries(data))
            .catch(error => console.error('Error fetching galleries:', error));
    }, []);

    return (
        <Fragment>
            <TopText>
                <h1>Portfolio</h1>
                <p>Click a photo to see more highlights!</p>
                {/* <HorizontalLine lineWidth='90%' /> */}
            </TopText>
            <GalleryContainer>
                {galleries.map((gallery, index) => (
                    <PhotoContainer key={index}>
                        <PhotoGalleryLink gallery={gallery} />
                    </PhotoContainer>
                ))}
            </GalleryContainer>
        </Fragment>
    );
};

export default PhotoGallerySelector;
