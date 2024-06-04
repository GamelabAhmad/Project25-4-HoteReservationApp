import React from 'react';
import { 
  AboutStyle,
  AboutHome,
  AboutDiv,
  AboutRoom,
  AboutImg,
  AboutBody,
  AboutPesan,
  AboutJudul,
  Input,
  Select,
  Button,
  // Deskripsi,
  Judul,
  ButtonBook,
  Price,
  DollarSign,
  // Keterangan,
  Bintang,
  Kamar,
  // Kanan,
  // Kiri,
  // DeskripsiLengkap,
  AboutDeskripsi
} from '../component/StyledPremiumRoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Kamar1 from '../kamar/kamar1.jpg'; 
import RatingStars from './RatingStars';

const PremiumRoom = () => {
  return (
    <body>
      <AboutDiv>
        <AboutStyle>Room</AboutStyle>
        <AboutHome>
          <Link to="/room" style={{ textDecoration: 'none' , color: 'black'}}>Home</Link> <FontAwesomeIcon icon={ faChevronRight } size="1px" /> Detail Rooms 
        </AboutHome>
      </AboutDiv>
      <AboutBody>
        <AboutRoom>
          <AboutImg>
            <img src={Kamar1} alt="Logo Hotel" />
          </AboutImg>
          <AboutPesan>
            <AboutJudul>Your Reservation</AboutJudul>
            <AboutDeskripsi>Check In :</AboutDeskripsi>
            <Input type="date" />
            <AboutDeskripsi>Check Out :</AboutDeskripsi>
            <Input type="date" />
            <AboutDeskripsi>Guest :</AboutDeskripsi>
            <Select>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </Select>
            <AboutDeskripsi>Room :</AboutDeskripsi>
            <Select>
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              <option value="suite">Suite</option>
            </Select>
            <Button>Check Availability</Button>
          </AboutPesan>
        </AboutRoom>
        <AboutRoom>
          <Kamar>
            <Judul>Premium King Room</Judul>
            <Bintang>
              <RatingStars rating={5} /> {/* Rating bintang, ganti angka sesuai rating */}
            </Bintang>
            <ButtonBook>Booking Now</ButtonBook>
          </Kamar>
          </AboutRoom>
          <AboutRoom>
            <Price><DollarSign>$199</DollarSign> /PER NIGHT</Price>
            {/* <Keterangan>
              <Kanan>
                Size, Capacity, Bed, Services
              </Kanan>
              <Kiri>
                30 ft, Max person 5, King Bed, Wifi Television Bathroom
              </Kiri>
              <DeskripsiLengkap>
              Motorhome or Trailer that is the question for you. 
              </DeskripsiLengkap>
            </Keterangan> */}
          </AboutRoom>
        
      </AboutBody>
    </body>
  );
};

export default PremiumRoom;
