// src/components/ProfileStyles.js
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 8000px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

export const ProfileLeft = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileRight = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    margin-bottom: 20px; /* Mengatur jarak antara setiap div */
  }

  label {
    font-weight: bold;
  }

  input {
    width: 100%; /* Menyesuaikan lebar input */
    padding: 8px; /* Menambahkan padding */
    font-size: 16px; /* Mengatur ukuran font input */
    border: 1px solid #ccc; /* Menambahkan border */
    border-radius: 5px; /* Membuat sudut input sedikit melengkung */
    box-sizing: border-box; /* Memastikan lebar input termasuk border dan padding */
  }
`;



export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Membuat foto profil bulat */
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ImageUpload = styled.input`
  display: none;
`;

export const Label = styled.label`
  display:block;
  margin-top: 50px;
  background: grey;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;
