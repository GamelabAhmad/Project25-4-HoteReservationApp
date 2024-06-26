import React, { useState } from "react";
import {
  DaftarContainer,
  GoogleDaftarButton,
  Divider,
  Form,
  Input,
  Button,
  PolicyText,
  BackgroundWrapper
} from "../component/StyledDaftar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Swal from 'sweetalert2';

const Daftar = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const { full_name, email, phone_number, password, confirm_password } =
    formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      console.error("Passwords do not match");
      showNotification("Passwords do not match", "error");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { full_name, email, phone_number, password }
      );
      console.log(response.data);
      navigate("/masuk");
      showNotification("Pendaftaran berhasil", "success");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      showNotification("Pendaftaran gagal", "error");
    }
  };

  const responseGoogleSuccess = async (response) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/google-login",
        { tokenId: response.credential }
      );
      console.log(res.data);
      navigate("/masuk");
      showNotification("Login dengan Google berhasil", "success");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      showNotification("Login dengan Google gagal", "error");
    }
  };

  const responseGoogleFailure = (error) => {
    console.error(error);
    showNotification("Login dengan Google gagal", "error");
  };

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

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <BackgroundWrapper>
        <DaftarContainer>
          <h1>Daftar</h1>
          <GoogleLogin
            onSuccess={responseGoogleSuccess}
            onError={responseGoogleFailure}
            render={(renderProps) => (
              <GoogleDaftarButton
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img
                  src="/images/google.png"
                  alt="Google Logo"
                  style={{ width: "20px", marginRight: "10px" }}
                />
                Masuk dengan Google
              </GoogleDaftarButton>
            )}
          />
          <Divider>atau</Divider>
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              name="full_name"
              value={full_name}
              onChange={onChange}
              placeholder="Nama Lengkap"
              required
            />
            <Input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              required
            />
            <Input
              type="text"
              name="phone_number"
              value={phone_number}
              onChange={onChange}
              placeholder="No.HP"
              required
            />
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              required
            />
            <Input
              type="password"
              name="confirm_password"
              value={confirm_password}
              onChange={onChange}
              placeholder="Konfirmasi Password"
              required
            />
            <Button type="submit">Daftar</Button>
          </Form>
          <Link to="/masuk" style={{ color: "#0D99FF" }}>
            Masuk
          </Link>
          <PolicyText>
            Dengan mengklik daftar, Anda menyetujui{" "}
            <a href="#">Ketentuan Layanan</a> dan{" "}
            <a href="#">Kebijakan Privasi</a> kami
          </PolicyText>
        </DaftarContainer>
      </BackgroundWrapper>
    </GoogleOAuthProvider>
  );
};

export default Daftar;
