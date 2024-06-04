import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from react-icons
import Kamar1 from '../kamar/kamar1.jpg'; 
import Kamar2 from '../kamar/kamar2.jpg'; 
import Kamar3 from '../kamar/kamar3.jpg'; 

import { 
  AboutBody,
  AboutImg,
  AboutStyle,
  Price,
  DollarSign,
  Header,
  Deskripsi,
  ButtonOrange,
  AboutStyleWhite
} from "../component/StyledBody";

// Array of image URLs
const images = [
  '../images/gunung.jpg',
  '../images/pantai.jpg',
  '../images/view.jpg'
];

// Interval for changing images (milliseconds)
const interval = 15000; // Change image every 5 seconds

const BennerStyle = styled.section`
  position: relative; /* Added relative positioning for the arrow icons */
  width: auto;
  min-height: 88vh;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  align-items: center;
  padding: 0 100px;
`;

const BennerText = styled.div`
  font-size: 25px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;

  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }
`;

const ArrowButton = styled.button`
  position: absolute; /* Position the arrow buttons */
  top: 50%; /* Align vertically */
  transform: translateY(-50%); /* Adjust position */
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;
  z-index: 999; /* Ensure arrow buttons are above the background image */
`;

const LeftArrow = styled(ArrowButton)`
  left: 35px; /* Position left arrow button */
`;

const RightArrow = styled(ArrowButton)`
  right: 35px; /* Position right arrow button */
`;

const Body = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change background image
  const changeBackgroundImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Set interval to change background image
  useEffect(() => {
    const intervalId = setInterval(changeBackgroundImage, interval);
    return () => clearInterval(intervalId);
  }, []);

  // Function to handle click on left arrow
  const handleClickLeft = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle click on right arrow
  const handleClickRight = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <body>
      <BennerStyle bgImage={images[currentImageIndex]}>
        <LeftArrow onClick={handleClickLeft}><FaArrowLeft /></LeftArrow>
        <RightArrow onClick={handleClickRight}><FaArrowRight /></RightArrow>
        <BennerText>
          <h1>Java Hotel</h1>
          <h2>Nikmati sensasi di setiap malam</h2>
        </BennerText>
      </BennerStyle>
      <AboutBody>
        <h1>Great Offers</h1>
        <p>
          Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, 
          there live the blind texts. Separated they live in 
          Bookmarksgrove right at the coast of the Semantics, 
          a large language ocean.
        </p>
        <AboutStyleWhite>
          <AboutImg>
            <img src={Kamar1} alt="Logo Hotel" />
          </AboutImg>
          <AboutStyle>
              <Price><DollarSign>$199</DollarSign>/PER NIGHT</Price>
              <Header>Premium King Room</Header>
              <Deskripsi>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
                the Semantics, a large language ocean.
              </Deskripsi>
              <ButtonOrange>Book Now</ButtonOrange>
          </AboutStyle>
        </AboutStyleWhite>
        <AboutStyleWhite>
          <AboutImg>
            <img src={Kamar2} alt="Logo Hotel" />
          </AboutImg>
          <AboutStyle>
              <Price><DollarSign>$299</DollarSign>/PER NIGHT</Price>
              <Header>Deluxe Room</Header>
              <Deskripsi>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
                the Semantics, a large language ocean.
              </Deskripsi>
              <ButtonOrange>Book Now</ButtonOrange>
          </AboutStyle>
        </AboutStyleWhite>
        <AboutStyleWhite>
          <AboutImg>
            <img src={Kamar3} alt="Logo Hotel" />
          </AboutImg>
          <AboutStyle>
              <Price><DollarSign>$349</DollarSign>/PER NIGHT</Price>
              <Header>Double Room</Header>
              <Deskripsi>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
                the Semantics, a large language ocean.
              </Deskripsi>
              <ButtonOrange>Book Now</ButtonOrange>
          </AboutStyle>
        </AboutStyleWhite>
      </AboutBody>
      
    </body>
  );
};

export default Body;
