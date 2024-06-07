import styled from 'styled-components';

export const AboutDiv = styled.h1`
    margin-top: 50px;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 50px;

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
    }
`;

export const AboutStyle = styled.h1`
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 50px;

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
    }
`;

export const AboutHome = styled.p`
    font-family: 'Arial';
    text-align: center;
    font-size: 18px;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const AboutRoom = styled.p`
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: white;
    padding-bottom: 15px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const AboutImg = styled.div`
    width: 60%;
    box-sizing: border-box;
    text-align: left;

    img {
        width: 350px;
        height: 250px;

        @media (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;

export const AboutPesan = styled.div`
    padding-left: 35px;
    text-align: left;
    width: 40%;
    box-sizing: border-box;

    h1 {
        font-size: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding-left: 0;
        text-align: center;
    }
`;

export const AboutJudul = styled.h2`
    font-size: 35px;
    font-family: 'Times New Roman', Times, serif;
    padding-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 30px;
    }

    @media (max-width: 480px) {
        font-size: 25px;
    }
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

    @media (max-width: 768px) {
        font-size: 18px;
        padding-right: 25px;
        padding-left: 25px;

        h1 {
            font-size: 50px;
        }

        p {
            padding-right: 25px;
            padding-left: 25px;
        }
    }

    @media (max-width: 480px) {
        font-size: 16px;
        padding-right: 10px;
        padding-left: 10px;

        h1 {
            font-size: 40px;
        }

        p {
            font-size: 14px;
            padding-right: 10px;
            padding-left: 10px;
        }
    }
`;

export const Input = styled.input`
    width: 60%;
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Select = styled.select`
    width: 60%;
    padding: 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    padding: 10px 40px;
    background-color: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: black;
        color: white;
    }

    @media (max-width: 768px) {
        padding: 10px 30px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        padding: 10px 20px;
        font-size: 12px;
    }
`;

export const Price = styled.h2`
    font-size: 24px; /* Mengatur font size default */
    color: black;

    @media (max-width: 768px) {
        font-size: 20px; /* Mengatur font size pada layar dengan lebar maksimum 768px */
    }

    @media (max-width: 480px) {
        font-size: 18px; /* Mengatur font size pada layar dengan lebar maksimum 480px */
    }
`;

export const DollarSign = styled.span`
    color: orange;
    font-size: 50px; /* Mengatur font size default */

    @media (max-width: 768px) {
        font-size: 40px; /* Mengatur font size pada layar dengan lebar maksimum 768px */
    }

    @media (max-width: 480px) {
        font-size: 30px; /* Mengatur font size pada layar dengan lebar maksimum 480px */
    }
`;

export const Keterangan = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Kanan = styled.div`
    width: 50%;
    font-size: 14px;
    color: #666;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Kiri = styled.div`
    width: 50%;
    font-size: 14px;
    color: #666;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const DeskripsiLengkap = styled.p`
    margin-top: 20px;
    font-size: 14px;
    color: #666;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
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

    @media (max-width: 480px) {
        padding-left: 5px;
    }
`;

export const Kamar = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: white;
    padding-bottom: 15px;
    width: 60%;
    text-align: left;

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Judul = styled.h3`
    width: 70%;
    align-items: left;
    font-size: 20px;
    color: #333;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
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

    @media (max-width: 768px) {
        width: 30%;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        width: 40%;
        font-size: 12px;
    }
`;
