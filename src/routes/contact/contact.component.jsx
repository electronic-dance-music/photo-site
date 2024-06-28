// contact.component.jsx
import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { ContactContainer, FormContainer, NameContainer, GoogleForm } from './contact.styles.jsx';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, subject, message } = formData;

    if (!email || !subject || !message) {
      setFormError(true);
      return;
    }

    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError(true);
      return;
    }

    // You can implement the logic to send the email here

    setFormSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <p>Interested in booking a session? Please fill out the Google Form below and I'll be sure to get back to you as soon as possible!</p>

      <GoogleForm src="https://docs.google.com/forms/d/e/1FAIpQLSeQpB3OLiLl9gZ_zJ26zd3iVWqvtsOLpsLSXKI-ir_mvZ0RPg/viewform?embedded=true" 
              // width="640" 
              // height="639" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0">
          Loading…
      </GoogleForm>

    </ContactContainer>
  );
};

export default Contact;
