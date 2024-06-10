import React, { useState } from 'react';
import {
  Container,
  Form,
  Input,
  Button,
  Title,
  ErrorMessage
} from '../component/StyledNewpass'; // Update the import path

const Newpass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    // Handle the new password logic here, e.g., send a request to the backend
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Reset Password</Title>
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
        />
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Reset Password</Button>
      </Form>
    </Container>
  );
};

export default Newpass;
