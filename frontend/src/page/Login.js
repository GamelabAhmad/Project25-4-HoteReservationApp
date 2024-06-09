import React, { useState } from "react";
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
  Flex,
} from "../component/StyledLogin";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Logic to handle login
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: identifier,
          password,
        }
      );
      console.log(response.data);
      navigate("/body"); // Ubah sesuai rute dashboard Anda
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <LoginContainer>
      <Title>Masuk</Title>
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
          <Link to="#" style={{ color: "#0D99FF" }}>
            Lupa kata sandi
          </Link>
        </FlexKanan>
        <FlexKiri>
          <Link to="/daftar" style={{ color: "#0D99FF" }}>
            Daftar
          </Link>
        </FlexKiri>
      </Flex>
      <PolicyText>
        Dengan mengklik masuk, Anda menyetujui <a href="#">Ketentuan Layanan</a>{" "}
        dan <a href="#">Kebijakan Privasi</a> kami
      </PolicyText>
    </LoginContainer>
  );
};

export default Login;
