import React, { useState } from 'react';
import {
  Container,
  Form,
  Input,
  Button,
  Title,
  ErrorMessage
} from '../component/StyledLupapass';

const Lupapass = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInput(input)) {
      setError('Please enter a valid email address or phone number.');
      return;
    }

    setError('');
    // Handle the password reset logic here, e.g., send a request to the backend
  };

  const validateInput = (input) => {
    const emailRe = /\S+@\S+\.\S+/;
    const phoneRe = /^[0-9]{10,15}$/;
    return emailRe.test(input) || phoneRe.test(input);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Forgot Password</Title>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your email or phone number"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Reset Password</Button>
      </Form>
    </Container>
  );
};

export default Lupapass;
