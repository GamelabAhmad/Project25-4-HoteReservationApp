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
    text-align: left;
    margin-right: 35px;
    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
    }
    img {
        width: 100%;
        height: auto;
    }
`;

export const AboutPesan = styled.div`
    padding-left: 35px;
    text-align: left;
    width: 50%;
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
`;

export const AboutDeskripsi = styled.div`
    font-family: "Arial";
`;

export const AboutBody = styled.div`
    text-align: center;
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
    }
    h1 {
        font-size: 75px;
    }
    p {
        font-size: 18px;
    }
`;

export const Input = styled.input`
    width: 50%; /* Atur lebar sesuai kebutuhan */
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Select = styled.select`
    width: 50%; /* Atur lebar sesuai kebutuhan */
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;


export const Button = styled.button`
display: block; /* Membuat button berada di baris baru */
    padding: 10px;
    background-color: #b86614;
    color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    width: 50%; /* Atur lebar sesuai kebutuhan */
    font-size: 16px;
    box-sizing: border-box;
    &:hover {
        background-color: white;
        color: #b86614;
        border: 1px solid #b86614;
    }
`;

export const Price = styled.h2`
    font-size: 24px;
    color: black; /* warna lainnya disesuaikan */
    display: block; /* Menjadikan elemen harga berada di baris baru */
`;

export const DollarSign = styled.span`
    color: orange;
    font-size: 50px;
`;

export const Keterangan = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Kanan = styled.div`
    width: 50%;
    font-size: 14px;
    color: #666;
`;

export const Kiri = styled.div`
    width: 50%;
    font-size: 14px;
    color: #666;
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
`;

export const Kamar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Mengatur justifikasi ke kiri */
    background-color: white;
    padding-bottom: 15px;
    width: auto; /* Mengatur lebar container sesuai dengan konten di dalamnya */
    max-width: 60%; /* Batasi lebar maksimum container */
    text-align: left;
`;

export const Judul = styled.h3`
    width: auto; /* Menyesuaikan lebar sesuai konten */
    align-items: left;
    font-family: 'Times New Roman', serif;
    font-size: 40px;
    color: #333;
    font-weight: bold;
    white-space: nowrap; /* Mencegah judul berbaris */
    overflow: hidden; /* Menyembunyikan teks yang melebihi lebar */
    text-overflow: ellipsis; /* Menampilkan elipsis (...) untuk teks yang melebihi lebar */
    flex-shrink: 0; /* Menambahkan properti untuk memastikan judul tidak terpotong */
`;

export const Bintang = styled.div`
    width: auto; /* Menyesuaikan lebar sesuai konten */
    align-items: flex-start;
    margin-left: auto; /* Menggeser bintang ke kanan */
    margin-right: 10px; /* Menambahkan jarak di sebelah kanan bintang */
    flex-shrink: 0; /* Menambahkan properti untuk memastikan bintang tidak terpotong */
`;

export const ButtonBook = styled.button`
    width: 40%; /* Menyesuaikan lebar tombol */
    padding: 10px 20px;
    background-color: #b86614;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-left: auto; /* Menggeser tombol ke kanan */
    &:hover {
        background-color: white;
        color: #b86614;
        border: 1px solid #b86614;
    }
`;
