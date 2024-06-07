import React, { useState } from 'react';
import { DaftarContainer, GoogleDaftarButton, Divider, Form, Input, Button, PolicyText} from '../component/StyledDaftar';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Daftar = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: ''
  });

  const { full_name, email, phone_number, password, confirm_password } = formData;

  const navigate = useNavigate(); // Initialize useNavigate hook

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", { full_name, email, phone_number, password });
      console.log(response.data); // Response from backend (JWT token)
      // Redirect to login page after successful registration
      navigate('/masuk');
    } catch (error) {
      console.error(error.response ? error.response.data : error.message); // Error message from backend or general error
      // Handle registration error (e.g., display error message to user)
    }
  };

  return (
    <DaftarContainer>
      <h1>Daftar</h1>
      <GoogleDaftarButton>
        <img src="/images/googele.png" alt="Googele Logo" style={{ width: '20px', marginRight: '10px' }} />
        Masuk dengan Google
      </GoogleDaftarButton>
      <Divider>atau</Divider>
      <Form onSubmit={onSubmit}>
        <Input type="text" name="full_name" value={full_name} onChange={onChange} placeholder="Nama Lengkap" required />
        <Input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <Input type="text" name="phone_number" value={phone_number} onChange={onChange} placeholder="No.HP" required />
        <Input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <Input type="password" name="confirm_password" value={confirm_password} onChange={onChange} placeholder="Konfirmasi Password" required />
        <Button type="submit">Daftar</Button>
      </Form>
      <Link to="/masuk" style={{ color: '#0D99FF' }}>Masuk</Link>
      <PolicyText>
        Dengan mengklik daftar, Anda menyetujui <a href="#">Ketentuan Layanan</a> dan <a href="#">Kebijakan Privasi</a> kami
      </PolicyText>
    </DaftarContainer>
  );
};

export default Daftar;
