import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BlackButton from '../../components/blackButton/blackButton.component';
import { sharedStyleProps } from '../../styles/globalstyles.styles';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TopTextInstance = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${sharedStyleProps.fontsToUse};
    margin-bottom: 20px;
    font-size: clamp(14px, 4vw, 18px);

    h1 {
        font-family: ${sharedStyleProps.fontsToUse};
        font-size: clamp(36px, 4vw, 40px);
        color: ${sharedStyleProps.primaryTextColor};
    }
    h2 {
        font-family: ${sharedStyleProps.fontsToUse};
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
    cursor: pointer; /* Add cursor pointer to indicate clickability */
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
    font-family: ${sharedStyleProps.fontsToUse};

    p {
        font-size: clamp(14px, 4vw, 18px);
    }

    h3 {
        font-family: ${sharedStyleProps.fontsToUse};
        font-size: clamp(31px, 5vw, 35px);
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(100, 100, 100, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: opacity 0.25s ease-in-out, z-index ${({ isOpen }) => (isOpen ? '0s' : '0.5s')} linear;
`;



const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    cursor: pointer;
`;


const ArrowButton = styled.div`
    position: absolute;
    top: 50%;
    font-size: 36px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    user-select: none;
    transform: translateY(-50%);
    z-index: 1001;

    ${({ direction }) => (direction === 'left' ? 'left: 20px;' : 'right: 20px;')}

    @media (max-width: 800px) {
        display: none;
    }
`;


const PopupImage = styled.img`
    max-width: ${({ zoomed }) => (zoomed ? '180%' : '90%')};
    max-height: ${({ zoomed }) => (zoomed ? '180%' : '90%')};
    transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0.7)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

const PhotoGalleryInstance = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            if (isPopupOpen) {
                handleClosePopup();
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isPopupOpen]);

    const { folderName } = useParams();
    const [galleryData, setGalleryData] = useState({ format: "rows", contents: [] });

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${folderName}.json`)
            .then(response => response.json())
            .then(data => setGalleryData(data))
            .catch(error => console.error('Error fetching gallery content:', error));
    }, [folderName]);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        // setSelectedImageIndex(null);
        setIsZoomed(false);
    };

    const handleImageZoom = () => {
        setIsZoomed(!isZoomed);
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    const galleryImages = galleryData.contents
        .flatMap(row => row)
        .filter(item => item.type === 'photo' || item.type === 'stacked')
        .flatMap(item => (item.type === 'photo' ? [item.image] : item.images));

    const renderRowFormat = () => (
        <GalleryContainer>
            {galleryData.contents.map((row, rowIndex) => (
                <RowContainer key={rowIndex}>
                    {row.map((item, itemIndex) => (
                        <ItemContainer key={itemIndex}>
                            {item.type === 'photo' && (
                                <StyledImage
                                    src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${item.image}`}
                                    alt={item.title}
                                    onClick={() => handleImageClick(galleryImages.indexOf(item.image))}
                                />
                            )}
                            {item.type === 'stacked' && (
                                <StackedImagesContainer>
                                    {item.images.map((image, idx) => (
                                        <StyledImage
                                            key={idx}
                                            src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${image}`}
                                            alt={item.title}
                                            onClick={() => handleImageClick(galleryImages.indexOf(image))}
                                        />
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
            width: 100%;
        }
    `;

    const renderColumnFormat = () => (
        <GalleryContainer>
            <ColumnContainer>
                {/* Render a single column on mobile */}
                {isMobile && (
                    <ColumnItemContainer>
                        {galleryData.contents.map((item, itemIndex) => (
                            <div key={itemIndex}>
                                {item.type === 'photo' && (
                                    <StyledImage
                                        src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${item.image}`}
                                        alt={item.title}
                                        onClick={() => handleImageClick(galleryImages.indexOf(item.image))}
                                    />
                                )}
                                {item.type === 'stacked' && (
                                    <StackedImagesContainer>
                                        {item.images.map((image, idx) => (
                                            <StyledImage
                                                key={idx}
                                                src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${image}`}
                                                alt={item.title}
                                                onClick={() => handleImageClick(galleryImages.indexOf(image))}
                                            />
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
                    </ColumnItemContainer>
                )}
                {/* Render two columns on larger screens */}
                {!isMobile && (
                    <>
                        <ColumnItemContainer>
                            {galleryData.contents.map((item, itemIndex) => {
                                if (itemIndex % 2 === 0) {
                                    return (
                                        <div key={itemIndex}>
                                            {item.type === 'photo' && (
                                                <StyledImage
                                                    src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${item.image}`}
                                                    alt={item.title}
                                                    onClick={() => handleImageClick(galleryImages.indexOf(item.image))}
                                                />
                                            )}
                                            {item.type === 'stacked' && (
                                                <StackedImagesContainer>
                                                    {item.images.map((image, idx) => (
                                                        <StyledImage
                                                            key={idx}
                                                            src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${image}`}
                                                            alt={item.title}
                                                            onClick={() => handleImageClick(galleryImages.indexOf(image))}
                                                        />
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
                        </ColumnItemContainer>
                        <ColumnItemContainer>
                            {galleryData.contents.map((item, itemIndex) => {
                                if (itemIndex % 2 !== 0) {
                                    return (
                                        <div key={itemIndex}>
                                            {item.type === 'photo' && (
                                                <StyledImage
                                                    src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${item.image}`}
                                                    alt={item.title}
                                                    onClick={() => handleImageClick(galleryImages.indexOf(item.image))}
                                                />
                                            )}
                                            {item.type === 'stacked' && (
                                                <StackedImagesContainer>
                                                    {item.images.map((image, idx) => (
                                                        <StyledImage
                                                            key={idx}
                                                            src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${image}`}
                                                            alt={item.title}
                                                            onClick={() => handleImageClick(galleryImages.indexOf(image))}
                                                        />
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
                        </ColumnItemContainer>
                    </>
                )}
            </ColumnContainer>
        </GalleryContainer>
    );

    return (
        <>
            <TopTextInstance>
                <h1>{galleryData.title}</h1>
                <h2>{galleryData.subtitle}</h2>
                {galleryData.description && galleryData.description.map((text, textIndex) => (
                    <p key={textIndex}>{text}</p>
                ))}
            </TopTextInstance>
            {galleryData.format === "rows" && renderRowFormat()}
            {galleryData.format === "columns" && renderColumnFormat()}
            <div style={{ marginTop: '20px' }}>
                <BlackButton text={"Back To Portfolio"} to={'/portfolio'} />
            </div>
            {true && (
                <Overlay isOpen={isPopupOpen} onClick={handleClosePopup}>
                    <CloseButton onClick={handleClosePopup}><FontAwesomeIcon icon={faTimes} /></CloseButton>
                    {!isMobile && <ArrowButton direction="left" onClick={handlePrevImage}><FontAwesomeIcon icon={faChevronLeft} /> </ArrowButton>}
                    <PopupImage
                        src={`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${galleryImages[selectedImageIndex]}`}
                        alt="Popup"
                        zoomed={isZoomed}
                        isOpen={isPopupOpen}
                        onClick={handleImageZoom}
                    />
                    {!isMobile && <ArrowButton direction="right" onClick={handleNextImage}><FontAwesomeIcon icon={faChevronRight} /> </ArrowButton>}
                </Overlay>
            )}
        </>
    );
};

export default PhotoGalleryInstance;
