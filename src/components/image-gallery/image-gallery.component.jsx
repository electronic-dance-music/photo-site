import React from 'react';
import { ImageGalleryImage, ImageGalleryMasterContainer } from './image-gallery.styles';


{/* since teh path needs ot be static hardcoded (NOT using a variable) for require context, need to literally paste this entire line to use the image gallery  */}
{/* <ImageGallery imagesContext={require.context(`!!file-loader!../../../public/images/test-photos`, false, /\.(png|jpe?g|svg)$/)} /> */}
const ImageGallery = ({imagesContext}) => {
//   const imagesContext = require.context(`!!file-loader!../../../public/images/test-photos`, false, /\.(png|jpe?g|svg)$/);
  const imagePaths = imagesContext.keys();

  return (
    <ImageGalleryMasterContainer>
        {imagePaths.map((path, index) => {
            const imagePath = imagesContext(path).default
            console.log("path: ", imagePath)
            return (<ImageGalleryImage
            key={index}
            src={imagesContext(path).default}
            alt={`Image ${index}`}
          />)
        })}
    </ImageGalleryMasterContainer>
  );
};

export default ImageGallery;
