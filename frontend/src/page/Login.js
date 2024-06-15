import React, { useState } from "react";
import {
  LoginContainer,
  FlexKanan,
  FlexKiri,
  GoogleLoginButton,
  Divider,
  Form,
  Input,
  SubmitButton,
  BackButton,
  PolicyText,
  Title,
  Flex,
  StyledLink,
  BackgroundWrapper,
} from "../component/StyledLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Swal from 'sweetalert2';

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  // Fungsi untuk menampilkan notifikasi menggunakan SweetAlert2
  const showNotification = (message, type) => {
    Swal.fire({
      text: message,
      icon: type,
      timer: 3000, // Menutup otomatis setelah 3 detik
      timerProgressBar: true,
      toast: true,
      position: 'top-end',
      showConfirmButton: false
    });
  };

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
      localStorage.setItem("token", response.data.token);
      navigate("/home"); // Arahkan ke halaman home
      showNotification("Login Berhasil", "success");
    } catch (error) {
      setLoginStatus(false);
      console.error(error.response ? error.response.data : error.message);
      showNotification("Login Gagal", "error");
    }
  };

  const responseGoogleSuccess = async (response) => {
    console.log("Login Google berhasil:", response);
    try {
      const googleResponse = await axios.post(
        "http://localhost:5000/api/auth/google",
        { token: response.credential }
      );
      localStorage.setItem("token", googleResponse.data.token);
      setLoginStatus(true);
      navigate("/home"); // Arahkan ke halaman home
      showNotification("Login Google Berhasil", "success");
    } catch (error) {
      console.error("Google login error:", error);
      setLoginStatus(false);
      showNotification("Login Google Gagal", "error");
    }
  };

  const responseGoogleFailure = (error) => {
    console.log("Login Google gagal:", error);
    setLoginStatus(false);
    showNotification("Login Google Gagal", "error");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <BackgroundWrapper>
        <LoginContainer>
          <div style={{ position: "absolute", top: "10px", left: "10px" }}>
            <StyledLink to="/home">
              <BackButton>
                <FontAwesomeIcon icon={faArrowLeft} />
              </BackButton>
            </StyledLink>
          </div>
          <div style={{ marginTop: "40px" }}>
            {" "}
            {/* Sesuaikan margin top sesuai kebutuhan */}
            <Title>Masuk</Title>
            <GoogleLogin
              onSuccess={responseGoogleSuccess}
              onError={responseGoogleFailure}
              render={(renderProps) => (
                <GoogleLoginButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img
                    src="/images/google.png"
                    alt="Logo Google"
                    style={{ width: "20px", marginRight: "10px" }}
                  />
                  Masuk dengan Google
                </GoogleLoginButton>
              )}
            />
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
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <SubmitButton type="submit">Masuk</SubmitButton>
              
            </Form>
            <Flex>
              <FlexKanan>
                {loginStatus === true && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green", marginRight: "5px" }}
                  />
                )}
                <StyledLink
                  to="/Lupapass"
                  style={{ color: "#0D99FF", marginLeft: "5px" }}
                >
                  Lupa kata sandi
                </StyledLink>
              </FlexKanan>
              <FlexKiri>
                {loginStatus === false && (
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "red", marginRight: "5px" }}
                  />
                )}
                <StyledLink
                  to="/daftar"
                  style={{ color: "#0D99FF", marginLeft: "5px" }}
                >
                  Daftar
                </StyledLink>
              </FlexKiri>
            </Flex>
            <PolicyText>
              Dengan mengklik masuk, Anda menyetujui{" "}
              <a href="#">Ketentuan Layanan</a> dan{" "}
              <a href="#">Kebijakan Privasi</a> kami
            </PolicyText>
          </div>
        </LoginContainer>
      </BackgroundWrapper>
    </GoogleOAuthProvider>
  );
};

export default Login;
