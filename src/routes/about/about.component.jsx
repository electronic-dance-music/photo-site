import React from 'react';
import styled from 'styled-components';
import { sharedStyleProps } from "../../styles/globalstyles.styles";
import HeaderImage from '../../components/headerImage/headerImage.component'
import BlackButton from '../../components/blackButton/blackButton.component'
import { HorizontalLine } from '../../styles/globalstyles.styles';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;

  h2 {
      font-family: ${sharedStyleProps.fontsToUse};
      font-size: clamp(26px, 4vw, 30px);
      font-weight: bold;
      color: ${sharedStyleProps.primaryTextColor};
  }

  @media (min-width: 1000px) {
    padding: 80px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  line-height: 1.6;
  padding: 10px;
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: ${props => props.flexAlign ? props.flexAlign : 'flex-start'};

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

const ImageContainer = styled.div`
  flex: 1;

  img {
    max-height: 650px;
  }
`;

const TrailImagesHeader = styled.h2`
  font-family: ${sharedStyleProps.fontsToUse};
  font-size: clamp(26px, 4vw, 30px);
  font-weight: bold;
  color: ${sharedStyleProps.primaryTextColor};
  text-align: left;
`;

const TrailImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;

  div {
    flex: 1 0 30%;
    padding-top: 30%; /* This ensures the div maintains a square aspect ratio */
    background-repeat: no-repeat;
    background-size: cover;

     @media (max-width: 800px) {
      flex: 1 0 45%;
      padding-top: 45%;
    }

    @media (max-width: 600px) {
      flex: 1 0 100%;
      padding-top: 100%;
    }
  }
`;

const TrailImage = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: ${props => `${props.backgroundPositionX}% ${props.backgroundPositionY}%`};
`;

const About = () => {
  const trailImages = [
    { url: `${process.env.PUBLIC_URL}/about/trail1.jpg`, posX: 50, posY: 60 },
    { url: `${process.env.PUBLIC_URL}/about/trail2.jpeg`, posX: 50, posY: 50 },
    { url: `${process.env.PUBLIC_URL}/about/trail3.jpg`, posX: 50, posY: 50 },
    { url: `${process.env.PUBLIC_URL}/about/trail4.jpeg`, posX: 50, posY: 50 },
    { url: `${process.env.PUBLIC_URL}/about/trail5.jpeg`, posX: 50, posY: 50 },
    { url: `${process.env.PUBLIC_URL}/about/trail6.jpg`, posX: 50, posY: 30 },
  ];

  return (
    <>
      <HeaderImage
        imageUrl="about/about-top.jpg"
        imageHeight="800px"
        backgroundPositionX="48%"
        backgroundPositionY="80%"
        text="ABOUT THE ARTIST"
        textColor='#3a3a3a'
        desktopBottomOffset="20%"
        desktopLeftOffset="10%"
        mobileBottomOffset="50%"
        mobileLeftOffset="5%"
      />
      <AboutContainer>
        <h2>Hi, I'm Lizzie Miller!</h2>
        <Section>
          <TextContainer textAlign={"center"} flexAlign={"center"}>
            <h2>Baton Rouge based photographer</h2>
            <HorizontalLine lineWidth={'60px'} />
            <p>
              I am a Louisiana native currently based in Baton Rouge, and I love backpacking, rock climbing, and art. 
              I'm always ready for an adventure, especially if it involves wandering around in the woods or exploring a new place. 
              There's nothing quite as relaxing and exciting as vanishing into the wilderness for a week or more. In 2022, my husband, 
              Aaron, and I hiked the Appalachian Trail: a 2194 mile journey from Georgia to Maine. Check out my blog post about it below!
            </p>
            <BlackButton text={"BLOG"} href={"https://www.kahdalea.com/adventure/worm-flippers-and-their-great-appalachian-adventure/"} />
          </TextContainer>
          <ImageContainer>
            <img src={`${process.env.PUBLIC_URL}/about/about-me.jpg`} alt="About Me" />
          </ImageContainer>
        </Section>

        <TrailImagesHeader>Photos from the Appalachian Trail</TrailImagesHeader>
        <TrailImagesContainer>
          {trailImages.map((image, index) => (
            <TrailImage key={index} imageUrl={image.url} backgroundPositionX={image.posX} backgroundPositionY={image.posY} />
          ))}
        </TrailImagesContainer>

        <Section>
          <TextContainer>
            <h2>Work</h2>
            <p></p>
            <p>
              During the week, I work as a personal trainer at my local gym. I've been a dedicated workout junkie since I was 13, 
              and now I'm using everything I've learned to help others. I love pushing people to reach their goals and feel like 
              their best selves.
            </p>
            <p></p>
            <p>
              I also enjoy taking up the occasional odd job, such as freelance sewing projects or leading backpacking/rock climbing 
              trips. The variety in my work always keeps it interesting!
            </p>
          </TextContainer>
          <ImageContainer>
            <img src={`${process.env.PUBLIC_URL}/about/about-work.jpg`} alt="Work" />
          </ImageContainer>
        </Section>
        <Section reverse>
          <TextContainer>
            <h2>Photography Philosophy</h2>
            <p></p>
            <p>
              I believe photography is about capturing authentic moments. In your photoshoot, your personality or your relationship 
              should really shine through. My goal is to create and capture the beautiful moments. 
              We won't just make pictures you'll treasure, but a whole photoshoot experience you'll remember forever!
            </p>
            <p></p>
            <p>My style is <b>candid</b>, <b>intimate</b>, and <b>fun</b>!</p>
          </TextContainer>
          <ImageContainer>
            <img src={`${process.env.PUBLIC_URL}/about/about-philosophy.jpg`} alt="Photography Philosophy" />
          </ImageContainer>
        </Section>
        <BlackButton text={"GET IN TOUCH"} to={'/contact'}/>
      </AboutContainer>
  </>);
};

export default About;
