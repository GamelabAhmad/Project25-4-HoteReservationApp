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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: identifier,
          password,
        }
      );
      setLoginStatus(true);
      console.log(response.data);
      navigate("/body");
      showNotification("Login Berhasil", "success");
    } catch (error) {
      setLoginStatus(false);
      console.error(error.response ? error.response.data : error.message);
      showNotification("Login Gagal", "error");
    }
  };

  // Fungsi untuk menampilkan notifikasi
  const showNotification = (message, type) => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification(message);
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(message);
          }
        });
      }
    }
  };

  return (
    <LoginContainer>
       <FlexKiri>
        <Link to="/">
        <Button><FontAwesomeIcon icon={faArrowLeft} /></Button>
        </Link>
      </FlexKiri>
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
          {loginStatus === true && (
            <FontAwesomeIcon icon={faCheck} style={{ color: "green", marginRight: "5px" }} />
          )}
          <Link to="/Lupapass" style={{ color: "#0D99FF", marginLeft: "5px" }}>
            Lupa kata sandi
          </Link>
        </FlexKanan>
        <FlexKiri>
          {loginStatus === false && (
            <FontAwesomeIcon icon={faTimes} style={{ color: "red", marginRight: "5px" }} />
          )}
          <Link to="/daftar" style={{ color: "#0D99FF", marginLeft: "5px" }}>
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
