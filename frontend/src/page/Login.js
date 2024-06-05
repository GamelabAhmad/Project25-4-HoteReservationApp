import React, { useState } from 'react';
import { 
  LoginContainer,
  FlexKanan,
  FlexKiri,
  GoogleLoginButton,
  Divider,
  Form,
  Input,
  Button,
  PolicyText,
  Title,
  Flex
} from '../component/StyledLogin';
import { Link } from 'react-router-dom';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
    // Logic to handle login
    // Check if identifier is email or phone number
    const isEmail = identifier.includes('@');
    if (isEmail) {
      // Handle email login
      console.log('Logging in with email:', identifier);
    } else {
      // Handle phone number login
      console.log('Logging in with phone number:', identifier);
    }
    // Implement login logic here
  };

  return (
    <LoginContainer>
      <Title>Masuk</Title>
      <GoogleLoginButton>
        <img src="/images/googele.png" alt="Google Logo" style={{ width: '20px', marginRight: '10px' }} />
        Masuk dengan Google
      </GoogleLoginButton>
      <Divider>atau</Divider>
      <Form onSubmit={handleLogin}>
        <Input 
          type="text" 
          placeholder="Email atau Nomor HP" 
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
