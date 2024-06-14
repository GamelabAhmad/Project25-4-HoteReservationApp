import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from react-icons
import Kamar1 from '../kamar/kamar1.jpg'; 
import Kamar2 from '../kamar/kamar2.jpg'; 
import Kamar3 from '../kamar/kamar3.jpg'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { 
  AboutBody,
  Price,
  Header,
  Deskripsi,
  ButtonOrange,
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
const interval = 15000; // Change image every 15 seconds

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
  h3 {
    font-size: 50px;
  }
  p {
    font-size: 35px;
  }
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

const RoomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const RoomImage = styled.div`
  flex: 1;
  margin-right: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const RoomDetails = styled.div`
  flex: 2;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
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
        <div className="container">
          <h1>Penawaran</h1>
        </div>
        <p>
          Selamat datang di JavaHotel, destinasi resor dengan pemandangan alam memukau, fasilitas mewah, dan layanan ramah. 
          Nikmati kamar elegan dengan amenitas kelas atas dan berbagai fasilitas rekreasi seperti kolam renang, ruang gym, serta restoran dan bar. 
          Tim kami siap memastikan liburan Anda tak terlupakan.
        </p>
        <RoomBox>
          <RoomImage>
            <img src={Kamar1} alt="Premium King Room" />
          </RoomImage>
          <RoomDetails>
            <Header>Premium King Room</Header>
            <Price>
              <span style={{ color: 'black', marginRight: '10px', fontSize: '1.5rem' }}><s>IDR 2.500.000</s></span> 
              <span style={{ color: '#FFA500', fontWeight: 'bold', fontSize: '2rem' }}>IDR 2.300.000</span>/Malam
            </Price>
            <Deskripsi>
              Nikmati kenyamanan menginap di kamar seluas 30 kaki persegi yang dapat menampung hingga 3 orang. 
              Kamar ini dilengkapi dengan tempat tidur king size yang empuk, menjanjikan istirahat yang nyenyak sepanjang malam. 
              Anda dapat menikmati fasilitas WiFi gratis kecepatan tinggi untuk tetap terhubung dengan dunia maya, 
              serta hiburan layar datar dengan saluran TV kabel favorit Anda. Kamar mandi privat mewah dengan amenities mandi berkualitas menambah kemewahan pengalaman menginap Anda. 
              Kemudahan akses ke semua layanan ini akan memastikan liburan Anda benar-benar berkesan dan tak terlupakan.
            </Deskripsi>
            <ButtonOrange>
              <Link to="/detail-kamar/1" style={{ textDecoration: 'none', color: 'white' }}>
                Pesan Sekarang
              </Link>
            </ButtonOrange>
          </RoomDetails>
        </RoomBox>
        <RoomBox>
          <RoomImage>
            <img src={Kamar2} alt="Deluxe Room" />
          </RoomImage>
          <RoomDetails>
            <Header>Deluxe Room</Header>
            <Price>
              <span style={{ color: 'black', marginRight: '10px', fontSize: '1.5rem' }}><s>IDR 2.800.000</s></span> 
              <span style={{ color: '#FFA500', fontWeight: 'bold', fontSize: '2rem' }}>IDR 2.500.000</span>/Malam
            </Price>
            <Deskripsi>
              Nikmati kenyamanan menginap di kamar seluas 30 kaki persegi yang dapat menampung hingga 3 orang. 
              Kamar ini dilengkapi dengan tempat tidur king size yang empuk, menjanjikan istirahat yang nyenyak sepanjang malam. 
              Anda dapat menikmati fasilitas WiFi gratis kecepatan tinggi untuk tetap terhubung dengan dunia maya, 
              serta hiburan layar datar dengan saluran TV kabel favorit Anda. Kamar mandi privat mewah dengan amenities mandi berkualitas menambah kemewahan pengalaman menginap Anda. 
              Kemudahan akses ke semua layanan ini akan memastikan liburan Anda benar-benar berkesan dan tak terlupakan.
            </Deskripsi>
            <ButtonOrange>
              <Link to="/detail-kamar/2" style={{ textDecoration: 'none', color: 'white' }}>
                Pesan Sekarang
              </Link>
            </ButtonOrange>
          </RoomDetails>
        </RoomBox>
        <RoomBox>
          <RoomImage>
            <img src={Kamar3} alt="Room With View" />
          </RoomImage>
          <RoomDetails>
          <Header>Room With View</Header>
            <Price>
              <span style={{ color: 'black', marginRight: '10px', fontSize: '1.5rem' }}><s>IDR 2.500.000</s></span> 
              <span style={{ color: '#FFA500', fontWeight: 'bold', fontSize: '2rem' }}>IDR 2.200.000</span>/Malam
            </Price>
            <Deskripsi>
              Nikmati kenyamanan menginap di kamar seluas 30 kaki persegi yang dapat menampung hingga 3 orang. 
              Kamar ini dilengkapi dengan tempat tidur king size yang empuk, menjanjikan istirahat yang nyenyak sepanjang malam. 
              Anda dapat menikmati fasilitas WiFi gratis kecepatan tinggi untuk tetap terhubung dengan dunia maya, 
              serta hiburan layar datar dengan saluran TV kabel favorit Anda. Kamar mandi privat mewah dengan amenities mandi berkualitas menambah kemewahan pengalaman menginap Anda. 
              Kemudahan akses ke semua layanan ini akan memastikan liburan Anda benar-benar berkesan dan tak terlupakan.
            </Deskripsi>
            <ButtonOrange>
              <Link to="/detail-kamar/3" style={{ textDecoration: 'none', color: 'white' }}>
                Pesan Sekarang
              </Link>
            </ButtonOrange>
          </RoomDetails>
        </RoomBox>
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
                    <img src={review.images} alt={`Kamar ${index + 1}`} height={'400px'} width={'650px'}/> 
                  </div><br></br>
                  <div>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#ffc107" style={{ fontSize: '35px' }} />
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
