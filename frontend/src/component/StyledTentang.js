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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 40px 60px 0 20px; /* Add margin to top and both sides for better spacing */
  text-align: justify; /* Justify the text in the column */
  width: 50%; /* Memberikan lebar agar kedua kolom tidak bertumpuk */
  font-size: 1.3rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0; /* Margin yang disederhanakan untuk responsivitas yang lebih baik */
    display: flex;
    flex-direction: column; /* Mengatur tampilan kolom menjadi vertikal pada layar kecil */
  }
`;

export const Image = styled.img`
  width: 100%; /* Lebar gambar 100% dari elemen pembungkus */
  max-width: 800px; /* Lebar maksimum gambar */
  height: 230px; /* Tinggi gambar */
  object-fit: contain; /* Menjaga proporsi gambar */
  margin-left: 20px; /* Posisikan gambar lebih ke kanan dengan margin kiri */

  @media (max-width: 768px) {
    margin-left: 0; /* Hapus margin kiri pada layar kecil untuk pemusatan */
    order: -1; /* Mengatur urutan tampilan gambar menjadi di atas */
  }
`;


export const KontainerTim = styled.div`
  text-align: center;
  padding: 20px;
`;

export const GridAnggota = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

export const KartuAnggota = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px; /* Tambahkan margin pada setiap kartu anggota */
`;

export const GambarAnggota = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    max-width: 200px; /* Mengatur lebar maksimum gambar */
    height: 250px; /* Tetapkan tinggi gambar */
  }
`;



export const NamaAnggota = styled.div`
  background-color: #c56e24;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  width: 200px; /* Lebar sesuai dengan lebar gambar */
  margin-top: 10px; /* Tambahkan margin atas untuk spasi antara gambar dan nama anggota */

  small {
    display: block;
    font-size: 0.8rem;
    color: #f0e68c;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    width: 100%; /* Lebar penuh pada layar kecil */
  }
`;
