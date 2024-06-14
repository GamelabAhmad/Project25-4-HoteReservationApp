import styled from 'styled-components';

export const ReviewContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: white;
`;

export const ReviewTitle = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 35px;
  }
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

  @media (max-width: 768px) {
    padding: 15px;
    margin: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin: 10px;
  }
`;

export const ReviewerName = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ButtonStyle = styled.button`
  padding: 10px 40px;
  border-radius: 0.3rem;
  background: green;
  color: white;
  font-weight: 500;
  border: none;

  @media (max-width: 480px) {
    padding: 8px 30px;
  }
`;

export const ButtonGreen = styled.button`
  padding: 10px 40px;
  border-radius: 20px;
  background: green;
  color: white;
  font-weight: 400;
  border: none;

  @media (max-width: 480px) {
    padding: 8px 30px;
  }
`;

export const ButtonOrange = styled.button`
  padding: 10px 40px;
  border-radius: 10px;
  background: #b86614;
  color: white;
  font-weight: 400;
  border: none;

  @media (max-width: 480px) {
    padding: 8px 30px;
  }
`;

export const ButtonBlack = styled.button`
  padding: 10px 40px;
  border-radius: 20px;
  background: black;
  color: white;
  font-weight: 400;
  border: none;

  @media (max-width: 480px) {
    padding: 8px 30px;
  }
`;

export const ButtonPink = styled.button`
  padding: 10px 40px;
  border-radius: 20px;
  background: pink;
  color: black;
  font-weight: 400;
  border: none;

  @media (max-width: 480px) {
    padding: 8px 30px;
  }
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

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const BoxInner = styled.div`
  background-color: white;
  border-left: 5px solid green;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Header = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; 
  background-color: #e8eedc; 
  overflow-x: hidden;
  background-color: #f0f0f0;
  font-size: 40px;
  padding-top: 15px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

export const Deskripsi = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; 
  background-color: #f0f0f0;
  font-size: 20px;
  padding-top: 15px;
  padding-right: 40px;
  padding-bottom: 15px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 18px;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const AboutStyleWhite = styled.section`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #f0f0f0;
  padding-bottom: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const AboutImg = styled.div`
  width: 50%;
  box-sizing: border-box;
  text-align: left;

  img {
    width: 700px;
    height: 400px;
    border-radius: 20px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const AboutStyle = styled.div`
  padding-left: 25px;
  width: 50%;
  box-sizing: border-box;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const Price = styled.h2`
  color: black;
  font-size: 1.5rem;
  margin-top: 25px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const DollarSign = styled.span`
  color: orange;
  font-size: 40px;
`;

export const AboutText = styled.div`
  font-size: 20px;
  margin: 0.5rem 0 1.1rem;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
  align-items: center;
  gap: 1.5rem;
  padding: 0 100px;
  background-color: #00ffff;

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const AboutStyleYellow = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
  align-items: center;
  gap: 1.5rem;
  padding: 0 100px;
  background-color: #ffff9e;
  padding-bottom: 25px;

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const AboutBody = styled.div`
  text-align: justify;
  font-size: 20px;
  background-color: white;
  padding: 0;
  margin-bottom: 0;
  padding-right: 25px;
  padding-left: 25px;
  margin-top: 40px;

  h1 {
    font-size: 3rem;
    margin-bottom: 25px;
    text-align: center;
    border-bottom: 4px solid black;
    padding-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .container {
    text-align: center;
    width: 100%;

    @media (min-width: 768px) {
      max-width: 768px;
      margin: 0 auto;
    }

    @media (min-width: 992px) {
      max-width: 992px;
    }

    @media (min-width: 1200px) {
      max-width: 1200px;
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const AboutHeading = styled.h2`
  font-size: 20px;
  margin: 0.5rem 0 1.1rem;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;