import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 0 7%;
`;

const ItemContainer = styled.div`
    flex: 1 1 ${props => (props.row === 'half' ? '45%' : '100%')};
    margin: 10px;
    max-width: ${props => (props.row === 'half' ? '45%' : '100%')};
    box-sizing: border-box;

    @media (max-width: 800px) {
        flex: 1 1 100%;
        max-width: 100%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledText = styled.div`
    padding: 10px;
    // background-color: #f9f9f9;
    border-radius: 2px;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Garamond, Georgia, 'Times New Roman', serif;

    p{
        font-size: clamp(14px, 4vw, 18px);
    }
    
    h3{
        font-family: Garamond, Georgia, 'Times New Roman', serif;
        font-size: clamp(31px, 5vw, 35px);
    }
`;

const PhotoGalleryInstance = () => {
    const { folderName } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${folderName}.json`)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching gallery content:', error));
    }, [folderName]);

    return (
        <GalleryContainer>
            {items.map((item, index) => (
                <ItemContainer key={index} row={item.row}>
                    {item.type === 'photo' ? (
                        <StyledImage src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${item.image}`} alt={item.title} />
                    ) : (
                        <StyledText>
                            <h3>{item.title}</h3>
                            {item.paragraphs.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </StyledText>
                    )}
                </ItemContainer>
            ))}
        </GalleryContainer>
    );
};

export default PhotoGalleryInstance;
