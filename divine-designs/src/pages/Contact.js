import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit</Button>
      </ContactForm>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
  resize: none;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export default Contact;
