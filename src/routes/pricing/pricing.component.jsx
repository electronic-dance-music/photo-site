import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../../components/headerImage/headerImage.component';
import BlackButton from '../../components/blackButton/blackButton.component';
import { sharedStyleProps } from "../../styles/globalstyles.styles";
import { HorizontalLine } from '../../styles/globalstyles.styles';
import { TopTextInstance } from '../gallery/photoGalleryInstance.component';

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;

  
	@media (min-width: 950px) {
			padding: 30px 100px;
	}
	@media (min-width: 1200px) {
			padding: 40px 200px;
	}
	@media (min-width: 1500px) {
			padding: 50px 300px;
	}
  
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: 'row';
  
  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  line-height: 1.6;
  padding: 10px;
  text-align: left;

  div {
    font-family: ${sharedStyleProps.fontsToUse};
    font-size: clamp(14px, 3vw, 16px);
    color: ${sharedStyleProps.secondaryTextColor};
    letter-spacing: 4px;
  }

  p {
    font-family: ${sharedStyleProps.fontsToUse};
    font-size: clamp(16px, 4vw, 20px);
    color: ${sharedStyleProps.secondaryTextColor};
  }
  h2 {
    font-family: ${sharedStyleProps.fontsToUse};
    font-size: clamp(26px, 4vw, 30px);
    font-weight: bold;
    color: ${sharedStyleProps.primaryTextColor};
  }
`;

const imageSize = 'clamp(330px, 28vw + 180px, 440px)'


const ImageContainer = styled.div`
  flex: 1;
  height: ${imageSize};
  min-height: ${imageSize};
  max-height: ${imageSize};
  width: ${imageSize};
  min-width: ${imageSize};
  max-width: ${imageSize};
  background-position: ${props => `${props.backgroundPositionX} ${props.backgroundPositionY}`};
  background-repeat: no-repeat;
  background-size: cover;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;

const TopImage = styled.img`
  width: 100%;
  height: auto;
`

const Pricing = () => {
  return (
    <>
      {/* <HeaderImage
        imageUrl="pricing/pricing-top.jpg"
        imageHeight="4000px"
        backgroundPositionX="48%"
        backgroundPositionY="20%"
        text="PRICING"
        desktopBottomOffset="20%"
        desktopLeftOffset="10%"
        mobileBottomOffset="50%"
        mobileLeftOffset="5%"
      /> */}
      <TopTextInstance>
          <h1>Pricing</h1>
      </TopTextInstance>
      <TopImage src='pricing/pricing-top.jpg'/>
      <PricingContainer>
        <Section>
          <TextContainer>
            <h2>Couples</h2>
            <HorizontalLine lineWidth={'50px'} />
            <p></p>
            <div>STARTING AT $100</div>
            <p></p>
            <p>
              This includes a coffee date or call to plan, 1 hour of sunrise or sunset shooting, and an online gallery of 40+ 
              professionally edited photos.
            </p>
          </TextContainer>
          <ImageContainer 
						style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pricing/pricing-couples.jpg)` }} 
						backgroundPositionX={'50%'}
						backgroundPositionY={'65%'}
					/>
        </Section>
        <Section reverse>
          <TextContainer>
            <h2>Wedding</h2>
            <HorizontalLine lineWidth={'50px'} />
            <p></p>
            <div>$1000 + TRAVEL</div>
            <p></p>
            <p>
              This package includes a coffee date or call to plan, a full day of shooting, and 400+ professionally edited photos 
              in an online gallery.
            </p>
          </TextContainer>
          <ImageContainer 
						style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pricing/pricing-wedding.jpg)` }} 
						backgroundPositionX={'50%'}
						backgroundPositionY={'25%'}	
					/>
        </Section>
        <Section>
          <TextContainer>
            <h2>Portraits</h2>
            <HorizontalLine lineWidth={'50px'} />
            <p></p>
            <div>STARTING AT $75</div>
            <p></p>
            <p>
              This includes a 1 hour photo session and an online gallery of 40+ professionally edited photos. 
              Lots of fun, and friendly pets are welcome!
            </p>
          </TextContainer>
          <ImageContainer 
						style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pricing/pricing-portrait.jpg)` }} 
						backgroundPositionX={'45%'}
						backgroundPositionY={'50%'}
					/>
        </Section>
        <BlackButton text="GET IN TOUCH" to="/contact" />
      </PricingContainer>
    </>
  );
};

export default Pricing;
