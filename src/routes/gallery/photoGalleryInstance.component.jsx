import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BlackButton from '../../components/blackButton/blackButton.component';
import { sharedStyleProps } from '../../styles/globalstyles.styles';
// import { HorizontalLine } from "../../styles/globalstyles.styles";

const TopTextInstance = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Garamond, Georgia, 'Times New Roman', serif;
    margin-bottom: 20px;

    font-size: clamp(14px, 4vw, 18px);

    h1 {
        font-family: Garamond, Georgia, 'Times New Roman', serif;
        font-size: clamp(36px, 4vw, 40px);
        color: ${sharedStyleProps.primaryTextColor};
    }
    h2 {
        font-family: Garamond, Georgia, 'Times New Roman', serif;
        font-size: clamp(22px, 4vw, 26px);
        color: ${sharedStyleProps.secondaryTextColor};
    }
`;

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px; /* Reduced gap */
`;

const RowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    // margin-bottom: 10px; /* Adjusted margin */
    min-height: 250px; /* Adjust the minimum height of each row as needed */
    gap: 15px;

    @media (max-width: 800px) {
        width: 92%;
    }
`;

const ItemContainer = styled.div`
    flex: 1 1 45%; /* Increased flex basis */
    max-width: 45%; /* Increased max-width */
    box-sizing: border-box;
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */

    @media (max-width: 800px) {
        flex: 1 1 100%;
        max-width: 100%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    // border-radius: 2px;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StackedImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    gap: 15px;
`;

const StyledText = styled.div`
    padding: 10px;
    text-align: center;
    font-family: Garamond, Georgia, 'Times New Roman', serif;

    p {
        font-size: clamp(14px, 4vw, 18px);
    }

    h3 {
        font-family: Garamond, Georgia, 'Times New Roman', serif;
        font-size: clamp(31px, 5vw, 35px);
    }
`;

const PhotoGalleryInstance = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 800); // Example breakpoint for mobile
        };

        // Initial setup
        handleResize();

        // Listen to window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const { folderName } = useParams();
    const [galleryData, setGalleryData] = useState({ format: "rows", contents: [] });

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${folderName}.json`)
            .then(response => response.json())
            .then(data => setGalleryData(data))
            .catch(error => console.error('Error fetching gallery content:', error));
    }, [folderName]);

    const renderRowFormat = () => (
        <GalleryContainer>
            {galleryData.contents.map((row, rowIndex) => (
                <RowContainer key={rowIndex}>
                    {row.map((item, itemIndex) => (
                        <ItemContainer key={itemIndex}>
                            {item.type === 'photo' && (
                                <StyledImage src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${item.image}`} alt={item.title} />
                            )}
                            {item.type === 'stacked' && (
                                <StackedImagesContainer>
                                    {item.images.map((image, idx) => (
                                        <StyledImage key={idx} src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${image}`} alt={item.title} />
                                    ))}
                                </StackedImagesContainer>
                            )}
                            {item.type === 'text' && (
                                <StyledText>
                                    <h3>{item.title}</h3>
                                    {item.paragraphs.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </StyledText>
                            )}
                        </ItemContainer>
                    ))}
                </RowContainer>
            ))}
        </GalleryContainer>
    );

    const ColumnContainer = styled.div`
        display: flex;
        // justify-content: space-between;
        gap: 20px;
        width: 92%;

        @media (max-width: 800px) {
            justify-content: center;
        }
    `;

    const ColumnItemContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px; /* Adjust the vertical gap between photos */
        align-items: center;
        width: 49%;

        @media (max-width: 800px) {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            width: 100%;
        }
    `;

    const renderColumnFormat = () => (
        <GalleryContainer>
            <ColumnContainer>
                {/* Render single column on smaller screens */}
                {isMobile && (<ColumnItemContainer>
                    {galleryData.contents.map((item, itemIndex) => (
                        <div key={itemIndex}>
                            {item.type === 'photo' && (
                                <StyledImage src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${item.image}`} alt={item.title} />
                            )}
                            {item.type === 'stacked' && (
                                <StackedImagesContainer>
                                    {item.images.map((image, idx) => (
                                        <StyledImage key={idx} src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${image}`} alt={item.title} />
                                    ))}
                                </StackedImagesContainer>
                            )}
                            {item.type === 'text' && (
                                <StyledText>
                                    <h3>{item.title}</h3>
                                    {item.paragraphs.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </StyledText>
                            )}
                        </div>
                    ))}
                </ColumnItemContainer>)}
                {/* Render two independent columns on larger screens */}
                {!isMobile && (<ColumnItemContainer>
                    {galleryData.contents.map((item, itemIndex) => {
                        if (itemIndex % 2 === 0) {
                            return (
                                <div key={itemIndex}>
                                    {item.type === 'photo' && (
                                        <StyledImage src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${item.image}`} alt={item.title} />
                                    )}
                                    {item.type === 'stacked' && (
                                        <StackedImagesContainer>
                                            {item.images.map((image, idx) => (
                                                <StyledImage key={idx} src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${image}`} alt={item.title} />
                                            ))}
                                        </StackedImagesContainer>
                                    )}
                                    {item.type === 'text' && (
                                        <StyledText>
                                            <h3>{item.title}</h3>
                                            {item.paragraphs.map((paragraph, idx) => (
                                                <p key={idx}>{paragraph}</p>
                                            ))}
                                        </StyledText>
                                    )}
                                </div>
                            );
                        }
                        return null;
                    })}
                </ColumnItemContainer>)}
                {!isMobile && (<ColumnItemContainer>
                    {galleryData.contents.map((item, itemIndex) => {
                        if (itemIndex % 2 !== 0) {
                            return (
                                <div key={itemIndex}>
                                    {item.type === 'photo' && (
                                        <StyledImage src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${item.image}`} alt={item.title} />
                                    )}
                                    {item.type === 'stacked' && (
                                        <StackedImagesContainer>
                                            {item.images.map((image, idx) => (
                                                <StyledImage key={idx} src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${image}`} alt={item.title} />
                                            ))}
                                        </StackedImagesContainer>
                                    )}
                                    {item.type === 'text' && (
                                        <StyledText>
                                            <h3>{item.title}</h3>
                                            {item.paragraphs.map((paragraph, idx) => (
                                                <p key={idx}>{paragraph}</p>
                                            ))}
                                        </StyledText>
                                    )}
                                </div>
                            );
                        }
                        return null;
                    })}
                </ColumnItemContainer>)}
            </ColumnContainer>
        </GalleryContainer>
    );

    return (
        <>
            <TopTextInstance>
                <h1>{galleryData.title}</h1>
                <h2>{galleryData.subtitle}</h2>
                {galleryData.description && galleryData.description.map((text, textIndex) => (<p>{text}</p>))}
                {/* <HorizontalLine lineWidth='90%' /> */}
            </TopTextInstance>
            {galleryData.format === "rows" && renderRowFormat()}
            {galleryData.format === "columns" && renderColumnFormat()}
            <div style={{ marginTop: '20px' }}>
                <BlackButton  text={"Back To Portfolio"} to={'/portfolio'} />
            </div>
        </>
    );
};

export default PhotoGalleryInstance;
