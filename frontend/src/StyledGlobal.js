// src/StyledGlobal.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/images/Lobby.png'); /* Ganti dengan path gambar latar belakang Anda */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
    font-family: sans-serif; /* Sesuaikan dengan font yang Anda inginkan */
  }
`;

export default GlobalStyle;
