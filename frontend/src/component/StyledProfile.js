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
  max-width: 800px; /* Lebar maksimum konten */
  margin: 0 auto; /* Memusatkan konten di tengah layar */
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Menyusun item dalam baris baru jika melebihi lebar parent */
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box; /* Memastikan padding termasuk dalam perhitungan lebar */
`;

export const ProfileLeft = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex: 100%; /* Memenuhi lebar pada layar handphone */
    margin-bottom: 20px; /* Memberikan jarak antar bagian */
  }
`;

export const ProfileRight = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    flex: 100%; /* Memenuhi lebar pada layar handphone */
    margin-bottom: 20px; /* Memberikan jarak antar bagian */
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const ImageUpload = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: block;
  margin-top: 20px;
  background: grey;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;
