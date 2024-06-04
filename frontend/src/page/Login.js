import React from 'react';
// Menghapus baris impor yang tidak digunakan
// import Icon from '../img/googele.png'; 
import {LoginContainer,FlexKanan,FlexKiri,GoogleLoginButton,Divider,Form,Input,Button,PolicyText,Title,Flex} from '../component/StyledLogin';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <LoginContainer>
      <Title>Masuk</Title>
      <GoogleLoginButton>
        {/* Menggunakan path relatif langsung untuk gambar */}
        <img src="/images/googele.png" alt="Google Logo" style={{ width: '20px', marginRight: '10px' }} />
        Masuk dengan google
      </GoogleLoginButton>
      <Divider>atau</Divider>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Masuk</Button>
      </Form>
      <Flex>
        <FlexKanan>
          <Link to="#" style={{ color: '#0D99FF' }}>Lupa kata sandi</Link>
        </FlexKanan>
        <FlexKiri>
          <Link to="/daftar" style={{ color: '#0D99FF' }}>Daftar</Link>
        </FlexKiri>
      </Flex>
      <PolicyText>
        Dengan mengklik masuk, Anda menyetujui <a href="#">Ketentuan Layanan</a> dan <a href="#">Kebijakan Privasi</a> kami
      </PolicyText>
    </LoginContainer>
  );
};

export default Login;
