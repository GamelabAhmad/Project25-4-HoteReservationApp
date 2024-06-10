import styled from 'styled-components';

export const AboutDiv = styled.h1`
    margin-top: 50px;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 50px;
`;

export const AboutStyle = styled.h1`
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 50px;
`;

export const AboutHome = styled.p`
    font-family: 'Arial';
    text-align: center;
    font-size: 18px;
`;

export const AboutRoom = styled.div`
    display: flex;
    flex-wrap: wrap; /* Menyusun konten ke baris baru jika ruang tidak cukup */
    justify-content: space-between;
    background-color: white;
    padding-bottom: 15px;
`;

export const AboutPrice = styled.div`
    display: flex; /* Menjadikan konten dalam satu baris */
    justify-content: space-between; /* Mengatur jarak antara elemen-elemen */
    align-items: center; /* Mengatur vertikal alignment */
    background-color: white;
    padding-bottom: 15px;
`;

export const AboutImg = styled.div`
    flex: 1;
    box-sizing: border-box;
    margin-right: 35px;
    img {
        width: 100%;
        height: auto;
    }
`;

export const AboutPesan = styled.div`
    flex: 1;
    padding-left: 35px;
    box-sizing: border-box;
`;

export const AboutJudul = styled.h2`
    font-size: 35px;
    font-family: 'Times New Roman', Times, serif;
    padding-bottom: 10px;
`;

export const AboutDeskripsi = styled.div`
    font-family: "Arial";
`;

export const AboutBody = styled.div`
    text-align: left;
    font-size: 20px;
    background-color: white;
    padding: 0 50px; /* Menambahkan padding horizontal */
    margin-top: 50px;

    h1 {
        font-size: 75px;
    }

    p {
        font-size: 18px;
    }
`;

export const Input = styled.input`
    width: 100%; /* Mengisi lebar konten parent */
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Select = styled.select`
    width: 100%; /* Mengisi lebar konten parent */
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    width: 100%; /* Mengisi lebar konten parent */
    padding: 10px;
    background-color: #b86614;
    color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background-color: white;
        color: #b86614;
        border: 1px solid #b86614;
    }
`;

export const Price = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: left;
`;

export const DollarSign = styled.span`
    color: orange;
    font-size: 50px;
`;

export const Keterangan = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Kiri = styled.div`
    font-weight: bold;
`;

export const Kanan = styled.div``;

export const DetailWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const DeskripsiLengkap = styled.div`
    margin-top: 20px;
    font-style: italic;
`;

export const Kamar = styled.div`
    display: flex;
    flex-wrap: wrap; /* Membuat elemen ke baris baru jika ruang tidak cukup */
    align-items: center; /* Mengatur vertikal alignment */
    background-color: white;
    padding-bottom: 15px;
`;

export const Judul = styled.h3`
    flex: 1 1 200px; /* Membuat elemen ini fleksibel dengan ukuran minimum */
    font-size: 30px;
    font-family: 'Times New Roman', serif;
    color: #333;
`;

export const Bintang = styled.div`
    margin-right: 20px;
    flex: 0 1 auto; /* Membuat elemen ini fleksibel dengan ukuran minimum */
`;

export const ButtonBook = styled.button`
    padding: 10px 20px;
    background-color: #b86614;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    flex: 0 1 auto; /* Membuat elemen ini fleksibel dengan ukuran minimum */
    &:hover {
        background-color: white;
        color: #b86614;
        border: 1px solid #b86614;
    }
`;
