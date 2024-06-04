// contact.component.jsx
import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { ContactContainer, FormContainer, NameContainer } from './contact.styles.jsx';


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
      <p>Interested in booking a session? Shoot me an email at elizabethmdenham@gmail.com</p>
      <p>Please include the following info:</p>
      <ul>
        <li>Name</li>
        <li>Phone Number</li>
        <li>When/Where</li>
        <li>Session Type (Portraits, Couples, Family, Wedding, etc.)</li>
        <li>Basic Details about your request</li>
      </ul>
      <p>Thank you!</p>
      
      {/* <FormContainer>
        <Form success={formSuccess} error={formError} onSubmit={handleSubmit}>
          <NameContainer>
            <Form.Input
              label='First Name'
              placeholder='First Name'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
            />
            <Form.Input
              label='Last Name'
              placeholder='Last Name'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
          </NameContainer>
          <Form.Input
            label='Email'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            error={formError && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
          />
          <Form.Input
            label='Subject'
            placeholder='Subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <Form.TextArea
            label='Message'
            placeholder='Message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Message
            success
            header='Form Submission Successful'
            content='Your message has been sent. We will get back to you soon.'
          />
          <Message
            error
            header='Form Error'
            content='Please fill out all required fields and enter a valid email address.'
          />
          <Button type='submit'>Submit</Button>
        </Form>
      </FormContainer> */}
    </ContactContainer>
  );
};

export default Contact;
