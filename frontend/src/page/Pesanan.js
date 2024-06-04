// Daftar.js
import React from 'react';
import Icon from '../img/googele.png'; 
import { DaftarContainer, GoogleDaftarButton, Divider, Form, Input, Button, PolicyText } from '../component/StyledDaftar';
import { Link } from 'react-router-dom';

const Daftar = () => {
  return (
    <DaftarContainer>
      <h1>Daftar</h1>
      <GoogleDaftarButton>
        <img src={Icon} alt="Google Logo" style={{ width: '20px', marginRight: '10px' }} />
        Masuk dengan google
      </GoogleDaftarButton>
      <Divider>atau</Divider>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Konfirmasi Password" />
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
