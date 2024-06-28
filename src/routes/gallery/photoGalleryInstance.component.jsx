import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

const RowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 10px;
    min-height: 250px;
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: calc(100% / 2); /* Assuming 2 columns */
    justify-content: space-evenly;
`;


const ItemContainer = styled.div`
    flex: 1 1 45%;
    max-width: 45%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

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

const StackedImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
    justify-content: space-between;
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
    const { folderName } = useParams();
    const [format, setFormat] = useState('rows');
    const [contents, setContents] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/photo_galleries/${folderName}/${folderName}.json`)
            .then(response => response.json())
            .then(data => {
                setFormat(data.format);
                setContents(data.contents);
            })
            .catch(error => console.error('Error fetching gallery content:', error));
    }, [folderName]);

    const renderRow = (row) => (
        <RowContainer>
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
    );

    const renderColumn = (column) => (
        <ColumnContainer>
            {column.map((item, itemIndex) => (
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
        </ColumnContainer>
    );

    return (
        <GalleryContainer>
            {format === 'rows'
                ? contents.map((row, rowIndex) => (
                      <React.Fragment key={rowIndex}>{renderRow(row)}</React.Fragment>
                  ))
                : contents[0].map((_, colIndex) => (
                      <React.Fragment key={colIndex}>
                          {renderColumn(contents.map(row => row[colIndex]).filter(Boolean))}
                      </React.Fragment>
                  ))}
        </GalleryContainer>
    );
};

export default PhotoGalleryInstance;
