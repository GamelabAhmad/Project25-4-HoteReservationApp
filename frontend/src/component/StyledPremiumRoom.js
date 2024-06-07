import styled from 'styled-components';

export const AboutDiv = styled.h1`
    margin-top: 50px;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 50px;
    @media (max-width: 768px) {
        font-size: 40px;
        margin-top: 30px;
    }
`;

export const AboutStyle = styled.h1`
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 50px;
    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

export const AboutHome = styled.p`
    font-family: 'Arial';
    text-align: center;
    font-size: 18px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const AboutRoom = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: white;
    padding-bottom: 15px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const AboutImg = styled.div`
    width: 40%;
    box-sizing: border-box;
    text-align: center; /* Mengatur posisi teks ke tengah */
    margin: 0 auto; /* Memposisikan div ke tengah */
    margin-bottom: 20px; /* Menambahkan margin bawah */
    margin-left: auto; /* Mengatur margin kiri ke auto */
    margin-right: 10px; /* Mengatur margin kanan ke auto */
    @media (max-width: 1024px) { /* Untuk iPad dan perangkat serupa */
        width: 50%;
    }
    @media (max-width: 768px) { /* Untuk handphone dan perangkat kecil */
        width: 100%;
    }
    img {
        width: 100%;
        height: auto; /* Mengatur tinggi gambar secara otomatis */
        object-fit: cover; /* Memastikan gambar tetap proporsional dalam kotak */
        height: 530px; /* Mengatur tinggi gambar khusus untuk laptop */
        @media (max-width: 1024px) { /* Untuk iPad dan perangkat serupa */
            height: 400px; /* Atur tinggi gambar khusus untuk iPad */
        }
        @media (max-width: 768px) { /* Untuk handphone dan perangkat kecil */
            height: 300px; /* Atur tinggi gambar khusus untuk handphone */
        }
    }
`;


export const AboutPesan = styled.div`
    display: block;
    padding-left: 15px; /* Mengurangi padding-left untuk mengurangi jarak */
    text-align: left;
    width: 43%;
    box-sizing: border-box;
    @media (max-width: 768px) {
        width: 100%;
        padding-left: 0;
    }
`;

export const AboutJudul = styled.h2`
    font-size: 35px;
    font-family: 'Times New Roman', Times, serif;
    padding-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export const AboutDeskripsi = styled.div`
    font-family: "Arial";
`;

export const AboutBody = styled.div`
    font-size: 20px;
    background-color: white;
    padding: 0;
    margin-bottom: -15.5px;
    padding-right: 50px;
    padding-left: 50px;
    padding-top: 10px;
    margin-top: 50px;
    @media (max-width: 768px) {
        padding-right: 20px;
        padding-left: 20px;
        margin-top: 30px;
    }
    h1 {
        font-size: 75px;
        @media (max-width: 768px) {
            font-size: 50px;
        }
    }
    p {
        font-size: 18px;
        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
`;

export const Input = styled.input`
    width: 50%;
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Select = styled.select`
    width: 50%;
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    display: block;
    padding: 10px;
    background-color: #b86614;
    color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    width: 50%;
    font-size: 16px;
    box-sizing: border-box;
    &:hover {
        background-color: white;
        color: #b86614;
        border: 1px solid #b86614;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Price = styled.h2`
    font-size: 24px;
    color: black;
    display: block;
`;

export const DollarSign = styled.span`
    color: orange;
    font-size: 30px;
    margin-left: 10px; /* Menambahkan margin kiri untuk memberikan jarak antara nama kamar dan simbol dolar */
    @media (max-width: 768px) {
        margin-left: 0; /* Menghapus margin kiri pada tampilan mobile */
        margin-top: 10px; /* Memberikan jarak antara simbol dolar dan deskripsi pada tampilan mobile */
    }
`;

export const Keterangan = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Kanan = styled.div`
    width: 50%;
    font-size: 14px;
    color: #666;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;

export const Kiri = styled.div`
    width: 50%;
    font-size: 14px;
    color: #666;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;

export const DeskripsiLengkap = styled.p`
    margin-top: 20px;
    font-size: 14px;
    color: #666;
    line-height: 1.6;
`;

export const Deskripsi = styled.div`
    padding-left: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    @media (max-width: 768px) {
        padding-left: 10px;
    }
`;

export const Kamar = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding-bottom: 15px;
    width: auto;
    max-width: 60%;
    text-align: left;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        max-width: 100%;
    }
`;

export const Judul = styled.h3`
    width: auto;
    font-family: 'Times New Roman', serif;
    font-size: 30px;
    color: #333;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
    @media (max-width: 768px) {
        font-size: 30px;
        white-space: normal;
    }
`;

export const RatingStars = styled.div`
    align-self: flex-end; /* Menggeser bintang ke kanan */
    margin-left: 10px; /* Memberikan jarak antara bintang dan judul */
    @media (max-width: 768px) {
        align-self: center; /* Mengatur ulang posisi bintang pada tampilan mobile */
        margin-left: 0; /* Menghapus margin kiri pada tampilan mobile */
        margin-top: 10px; /* Memberikan jarak antara bintang dan tombol "Book" pada tampilan mobile */
    }
`;

export const ButtonBook = styled.button`
    padding: 10px 20px;
    background-color: #b86614;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: white;
        color: #b86614;
        border: 1px solid #b86614;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 10px; /* Memberikan jarak antara tombol "Book" dengan harga pada tampilan mobile */
    }
`;

export const RoomInfoWrapper = styled.div`
  /* Tambahkan gaya sesuai kebutuhan */
`;

export const RoomInfo = styled.div`
  margin-top: 20px; /* Atur jarak dari atas */
  text-align: left;
  display: flex; /* Menggunakan flexbox */
  flex-direction: column; /* Mengatur arah tata letak menjadi kolom */

  @media (max-width: 768px) {
    align-items: left; /* Pusatkan konten pada layar dengan lebar maksimum 768px */
  }
`;

export const RoomDescription = styled.div`
  /* Tambahkan gaya sesuai kebutuhan */
`;