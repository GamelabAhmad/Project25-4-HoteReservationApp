import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from react-icons
import Kamar1 from '../kamar/kamar1.jpg'; 
import Kamar2 from '../kamar/kamar2.jpg'; 
import Kamar3 from '../kamar/kamar3.jpg'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { keyframes } from 'styled-components';

import { 
  AboutBody,
  AboutImg,
  AboutStyle,
  Price,
  DollarSign,
  Header,
  Deskripsi,
  ButtonOrange,
  AboutStyleWhite, 
  ReviewContainer,
  ReviewTitle,
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

const SliderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  p {
    font-size: 25px;
  };
  h3 {
    font-size: 35px;
  };
`;

const Slide = styled.div`
  outline: none;
  opacity: 0; /* Mulai dengan opacity 0 */
  animation: ${keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `} 0.5s forwards; /* Terapkan animasi fade-in */
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

  const reviews = [
    {
      name: 'John Doe',
      text: 'Great service and friendly staff. Had an amazing stay!',
      images: [Kamar1],
    },
    {
      name: 'Jane Smith',
      text: 'The rooms were clean and comfortable. Highly recommend this hotel.',
      images: [Kamar2],
    },
    {
      name: 'Sam Wilson',
      text: 'Excellent location and beautiful views. Will come back again.',
      images: [Kamar3],
    },
    {
      name: 'Jon Kemit',
      text: 'Excellent location and beautiful views. Will come back again.',
      images: [Kamar2],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    fade: true,
    autoplay: true, // Tambahkan autoplay
    autoplaySpeed: 3000 // Atur kecepatan autoplay (dalam milidetik)
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
      <ReviewContainer>
        <ReviewTitle>Customer Reviews</ReviewTitle>
        <SliderContainer>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <Slide key={index}>
                <div>
                  <h3>{review.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={review.images} alt={`Kamar ${index + 1}`} height={'250px'} width={'350px'}/> 
                  </div><br></br>
                  <div>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#ffc107" style={{ fontSize: '24px' }} />
                    ))}
                  </div>
                  <p>{review.text}</p>
                </div>
              </Slide>
            ))}
          </Slider>
        </SliderContainer>
      </ReviewContainer>
    </body>
  );
};

export default Body;
