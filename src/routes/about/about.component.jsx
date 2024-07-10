import React from 'react';
import styled from 'styled-components';
import HeaderImage from '../../components/headerImage/headerImage.component'
import BlackButton from '../../components/blackButton/blackButton.component'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
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

  p {
      font-family: Garamond, Georgia, 'Times New Roman', serif;
      font-size: clamp(16px, 4vw, 20px);
  }
  h2 {
      font-family: Garamond, Georgia, 'Times New Roman', serif;
      font-size: clamp(26px, 4vw, 30px);
      font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    // border-radius: 10px;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const About = () => {
  return (
    <>
      {/* <HeaderImage
          imageUrl="about/about-top.jpg" // Replace with the correct path to your image
          text="ABOUT THE ARTIST"
          bgPositionX="50%"
          bgPositionY="50%"
          desktopBottomOffset="10%" // Adjust the bottom offset for desktop view
          mobileBottomOffset="40%" // Adjust the bottom offset for mobile view
          desktopLeftOffset="5%" // Adjust the left offset for desktop view
          mobileLeftOffset="5%" // Adjust the left offset for mobile view
        /> */}

        <HeaderImage
          imageUrl="about/about-top.jpg"
          imageHeight="800px"
          backgroundPositionX="48%"
          backgroundPositionY="80%"
          text="ABOUT THE ARTIST"
          desktopBottomOffset="20%"
          desktopLeftOffset="10%"
          mobileBottomOffset="50%"
          mobileLeftOffset="5%"
        />
      <AboutContainer>
        <Section>
          <TextContainer>
            <h2>About Me</h2>
            <p>
              I am a Louisiana native currently based in Baton Rouge, and I love backpacking, rock climbing, and art. 
              I'm always ready for an adventure, especially if it involves wandering around in the woods or exploring a new place. 
              There's nothing quite as relaxing and exciting as vanishing into the wilderness for a week or more. In 2022, my husband, 
              Aaron, and I hiked the Appalachian Trail: a 2194 mile journey from Georgia to Maine. Check out my blog post about it below!
            </p>
            <BlackButton text={"BLOG"} />
            {/* <button>
              <a href="https://www.kahdalea.com/adventure/worm-flippers-and-their-great-appalachian-adventure/" target="_blank" rel="noopener noreferrer"> here</a>
            </button> */}

          </TextContainer>
          <ImageContainer>
            <img src={`${process.env.PUBLIC_URL}/about/about-first.jpg`} alt="About Me" />
          </ImageContainer>
        </Section>
        <Section reverse>
          <TextContainer>
            <h2>Work</h2>
            <p>
              During the week, I work as a personal trainer at my local gym. I've been a dedicated workout junkie since I was 13, 
              and now I'm using everything I've learned to help others. I love pushing people to reach their goals and feel like 
              their best selves.
            </p>
            <p>
              I also enjoy taking up the occasional odd job, such as freelance sewing projects or leading backpacking/rock climbing 
              trips. The variety in my work always keeps it interesting!
            </p>
          </TextContainer>
          <ImageContainer>
            <img src={`${process.env.PUBLIC_URL}/about/work.jpg`} alt="Work" />
          </ImageContainer>
        </Section>
        <Section>
          <TextContainer>
            <h2>Photography Philosophy</h2>
            <p>
              I believe photography is about capturing authentic moments. In your photoshoot, your personality or your relationship 
              should really shine through. My goal is to create and capture the beautiful moments that are candid, fun, and memorable. 
              We won't just make pictures you'll treasure, but a whole photoshoot experience you'll remember forever!
            </p>
          </TextContainer>
          <ImageContainer>
            <img src={`${process.env.PUBLIC_URL}/about/philosophy.jpg`} alt="Photography Philosophy" />
          </ImageContainer>
        </Section>
      </AboutContainer>
  </>);
};

export default About;
