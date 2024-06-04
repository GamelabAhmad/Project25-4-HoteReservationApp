import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
`;

export const AboutSection = styled.section`
  margin-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Column = styled.div`
  flex: 1;
  margin: 40px 60px 0 20px; /* Add margin to top and both sides for better spacing */
  text-align: justify; /* Justify the text in the column */
  width: 50%; /* Memberikan lebar agar kedua kolom tidak bertumpuk */
  font-size: 1.3rem;
`;

export const Image = styled.img`
  width: 100%; /* Lebar gambar 100% dari elemen pembungkus */
  max-width: 800px; /* Lebar maksimum gambar */
  height: 230px; /* Tinggi gambar */
  object-fit: contain; /* Menjaga proporsi gambar */
  margin-left: 20px; /* Posisikan gambar lebih ke kanan dengan margin kiri */
`;

export const KontainerTim = styled.div`
  text-align: center;
  padding: 20px;
`;

export const GridAnggota = styled.div`
display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Mengurangi jarak antar kolom dan baris */
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px; /* Mengurangi jarak antar gambar pada ukuran layar kecil */
  }
`;

export const KartuAnggota = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GambarAnggota = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const NamaAnggota = styled.div`
  background-color: #c56e24;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 5px; /* Add margin-bottom to separate the name and description */
  text-align: center;

  small {
    display: block;
    font-size: 0.8rem;
    color: #f0e68c;
    margin-top: 5px; /* Add margin-top to separate the description from the name */
  }
`;
