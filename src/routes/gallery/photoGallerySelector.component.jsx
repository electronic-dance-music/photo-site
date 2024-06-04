// PhotoGallerySelector.jsx
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const PhotoContainer = styled.div`
    flex: 1 1 45%; /* Allow two items per row on larger screens */
    margin: 10px;
    max-width: 45%; /* Limit the width of each item to 45% */
    box-sizing: border-box;

    @media (max-width: 800px) {
        flex: 1 1 95%; /* Set the width to 95% on smaller screens */
        max-width: 95%; /* Limit the width of each item to 95% */
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        filter: brightness(1.1);
    }
`;

const TopText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Garamond, Georgia, 'Times New Roman', serif;

    font-size: clamp(14px, 4vw, 18px);

    h1{
        font-family: Garamond, Georgia, 'Times New Roman', serif;
        font-size: clamp(36px, 4vw, 40px);
    }
`

const PhotoGalleryLink = ({ gallery }) => (
    <Link to={`/gallery/${gallery.folder}`}>
        <StyledImage src={`${process.env.PUBLIC_URL}/photo_galleries/${gallery.folder}/${gallery.coverImage}`} alt={gallery.title} />
    </Link>
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
                <h1>Sessions</h1>
                <p>Click a photo to see more highlights!</p>
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
