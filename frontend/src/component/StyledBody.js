// StyledBody.js
import styled from 'styled-components';
// import BgBenner from './img/wallpaperpantai.jpg';

export const ButtonStyle = styled.button`
    padding: 10px 40px;
    border-radius: 0.3rem;
    background: green;
    color: white;
    font-weight: 500;
    border: none;
`;

export const ButtonGreen = styled.button`
    padding: 10px 40px;
    border-radius: 20px;
    background: green;
    color: white;
    font-weight: 400;
    border: none;
`;

export const ButtonOrange = styled.button`
    padding: 10px 40px;
    border-radius: 20px;
    background: #b86614;
    color: white;
    font-weight: 400;
    border: none;
`;

export const ButtonBlack = styled.button`
    padding: 10px 40px;
    border-radius: 20px;
    background: black;
    color: white;
    font-weight: 400;
    border: none;
`;

export const ButtonPink = styled.button`
    padding: 10px 40px;
    border-radius: 20px;
    background: pink;
    color: black;
    font-weight: 400;
    border: none;
`;

export const Box = styled.div`
    margin-top: 40px;
    background-color: #f0f0f0;
    padding: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); 
    transition: box-shadow 0.3s ease; 
    max-width: 400px;

    h1 {
        font-size: 25px;
    }

    &:hover {
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2); 
    }
`;

export const BoxInner = styled.div`
    background-color: white;
    border-left: 5px solid green;
    padding: 20px;
`;

export const Header = styled.div`
    font-family: 'Times New Roman', Times, serif;
    background-color: #f0f0f0;
    font-size: 40px;
    padding-top: 15px;
`;

export const Deskripsi = styled.div`
    font-family: 'Times New Roman', Times, serif;
    background-color: #f0f0f0;
    font-size: 20px;
    padding-top: 15px;
    padding-right: 40px;
    padding-bottom: 15px;
`;

// Styling for the green section
export const AboutStyleWhite = styled.section`
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: #f0f0f0;
    padding-bottom: 15px;
`;

// Styling for the image container
export const AboutImg = styled.div`
    width: 50%;
    box-sizing: border-box;
    text-align: left;

    img {
        width: 700px;
        height: 400px
    }
`;


// Styling for the description container
export const AboutStyle = styled.div`
    padding-left: 25px;
    width: 50%;
    box-sizing: border-box;
    text-align: left;
`;

export const Price = styled.h2`
    font-size: 24px;
    color: black; /* warna lainnya disesuaikan */
`;

export const DollarSign = styled.span`
    color: orange;
    font-size: 50px;
`;

// Additional styling for the description text
export const AboutText = styled.div`
    font-size: 20px;
    margin: 0.5rem 0 1.1rem;
`;

// Styling for the general about section
export const AboutSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    gap: 1.5rem;
    padding: 0 100px;
    background-color: #00ffff;
`;

export const AboutStyleYellow = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    gap: 1.5rem;
    padding: 0 100px;
    background-color: #ffff9e;
    padding-bottom: 25px;
`;

export const AboutBody = styled.div`
    text-align: center;
    font-size: 20px;
    background-color: putih;
    padding: 0;
    margin-bottom: 0px;
    padding-right: 250px;
    padding-left: 250px;
    margin-top: 40px;

    h1 {
        font-size: 75px;
    }

    p {
        font-size: 18px;
        padding-right: 225px;
        padding-left: 225px;
    }
`;

export const AboutHeading = styled.h2`
    font-size: 20px;
    margin: 0.5rem 0 1.1rem;
`;

