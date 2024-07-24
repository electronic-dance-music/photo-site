import { ContactContainer, FormContainer, NameContainer, GoogleForm } from './contact.styles.jsx';
import HeaderImage from '../../components/headerImage/headerImage.component.jsx';


const Contact = () => {

  return (
    <>
      <HeaderImage
            imageUrl="contact/contact-top.jpg"
            imageHeight="800px"
            backgroundPositionX="52%"
            backgroundPositionY="80%"
            text="CONTACT ME"
            smallText="LET'S TELL YOUR STORY"
            textColor='#3a3a3a'
            textColorMobile='#3a3a3a'
            desktopBottomOffset="30%"
            desktopLeftOffset="10%"
            mobileBottomOffset="65%"
            mobileLeftOffset="5%"
      />
      <ContactContainer>
        <h2>Contact Me</h2>
        <p>Have an event you want to remember forever? Whether it's a wedding, engagement, family Christmas photos, or just for fun, let's make it happen! Fill out the form below or shoot me an email at elizabethmdenham@gmail.com and let's chat!</p>
        
        <GoogleForm src="https://docs.google.com/forms/d/e/1FAIpQLSfKXRcmN8FToSdhVWyniHFgQxMseQu-0OotcRchA6KuNE5CZA/viewform?embedded=true" 
                // width="640" 
                // height="639" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">
            Loading…
        </GoogleForm>

      </ContactContainer>
    </>
  );
};

export default Contact;
