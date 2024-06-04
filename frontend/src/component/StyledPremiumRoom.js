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

export const AboutRoom = styled.p`
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: white;
    padding-bottom: 15px;
`;

// Styling for the image container
export const AboutImg = styled.div`
    width: 60%;
    box-sizing: border-box;
    text-align: left;
    margin-right: 35px;
    img {
        width: 810px;
        height: 510px
    }
`;

// Styling for the description container
export const AboutPesan = styled.div`
    padding-left: 35px;
    text-align: left;
    width: 40%;
    box-sizing: border-box;
    h1 {
        font-size: 20px;
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

export const AboutBody = styled.p`
    text-align: center;
    font-size: 20px;
    background-color: putih;
    padding: 0;
    margin-bottom: -15.5px;
    padding-right: 50px;
    padding-left: 50px;
    padding-top: 10px;
    margin-top: 50px;

    h1 {
        font-size: 75px;
    }

    p {
        font-size: 18px;
        padding-right: 225px;
        padding-left: 225px;
    }
`;

export const Input = styled.input`
    width: 60%;
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Select = styled.select`
    width: 60%;
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;


export const Button = styled.button`
    padding: 10px 40px;
    background-color: #b86614;
    color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    width: 290px;
    font-size: 16px;
    &:hover {
        background-color: white;
        color: #b86614;
        border: 1px solid #b86614;
    }
`;

export const Price = styled.h2`
    font-size: 24px;
    color: black; /* warna lainnya disesuaikan */
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
    justify-content: left;
    background-color: white;
    padding-bottom: 15px;
    width: 60%;
    text-align: left;
`;

export const Judul = styled.h3`
    width: 70%;
    align-items: left;
    font-family: 'Times New Roman', serif;
    font-size: 30px;
    color: #333;
`;

export const Bintang = styled.div`
    width: 20%;
    align-items: center;
`;


export const ButtonBook = styled.button`
    width: 20%;
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
`;