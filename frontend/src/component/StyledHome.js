// StyledBody.js
import styled from 'styled-components';
// import BgBenner from './img/wallpaperpantai.jpg';

export const ReviewContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: white;
  border-top: 1px solid #ddd;
`;

export const ReviewTitle = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
`;

export const ReviewCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  text-align: left;
`;

export const ReviewerName = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  color: #555;
`;

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
    border-radius: 10px;
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
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; 
    background-color: #e8eedc; 
    overflow-x: hidden;
    background-color: #f0f0f0;
    font-size: 40px;
    padding-top: 15px;
    font-weight: bold; /* Menambah gaya tebal (bold) */
`;

export const Deskripsi = styled.div`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; 
    background-color: #f0f0f0;
    font-size: 20px;
    padding-top: 15px;
    padding-right: 40px;
    padding-bottom: 15px;
    text-align: justify; /* Menambahkan gaya teks agar rata kiri-kanan */
`;


// Styling for the green section
export const AboutStyleWhite = styled.section`
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: #f0f0f0;
    padding-bottom: 60px;
    margin-bottom: 50px;
    border-radius: 20px;
`;

// Styling for the image container
export const AboutImg = styled.div`
    width: 50%;
    box-sizing: border-box;
    text-align: center;

    img {
        width: 700px;
        height: 470px;
        border-radius: 20px;
        margin-top:50px;
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
    color: black; /* warna lainnya disesuaikan */
    font-size: 1.5rem; /* Adjust as needed */
    margin-top: 50px;
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
    text-align: justify;
    font-size: 20px;
    background-color: putih;
    padding: 0;
    margin-bottom: 0px;
    padding-right: 250px;
    padding-left: 250px;
    margin-top: 40px;

    h1 {
        font-size: 3rem;
        margin-bottom: 25px;
        text-align: center;
        width : 100%;
        margin-top: 20px;
        display: inline-block;
        border-bottom: 4px solid black;
    }
    
    .container {
        text-align: center;
        width: 18%;
    }

    p {
        font-size: 23px;
        padding-right: 225px;
        padding-left: 225px;
        margin-bottom: 50px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; 
    }
`;

export const AboutHeading = styled.h2`
    font-size: 20px;
    margin: 0.5rem 0 1.1rem;
`;
