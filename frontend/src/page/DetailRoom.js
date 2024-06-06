import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
  Judul,
  ButtonBook,
  Price,
  DollarSign,
  Bintang,
  Kamar,
  AboutDeskripsi
} from '../component/StyledPremiumRoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import RatingStars from './RatingStars';
import Kamar1 from '../kamar/kamar1.jpg';
import Kamar2 from '../kamar/kamar2.jpg';
import Kamar3 from '../kamar/kamar3.jpg';
import Kamar4 from '../kamar/kamar4.jpg';
import Kamar5 from '../kamar/kamar5.jpg';
import Kamar6 from '../kamar/kamar6.jpg';

const rooms = [
  { id: 1, name: 'Premium King Room', image: Kamar1, price: '199$', size: '30 ft', capacity: 'Max person 3', bed: 'King Beds', services: 'Wifi, Television, Bathroom', description: 'MotorBeranda or Trailer that is the question for you...' },
  { id: 2, name: 'Deluxe Room', image: Kamar2, price: '159$', size: '30 ft', capacity: 'Max person 5', bed: 'King Beds', services: 'Wifi, Television, Bathroom', description: 'Deluxe room with all the amenities...' },
  { id: 3, name: 'Luxury Room', image: Kamar3, price: '179$', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Television, Bathroom', description: 'Luxury room for a comfortable stay...' },
  { id: 4, name: 'Double Room', image: Kamar4, price: '139$', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Television, Bathroom', description: 'Double room perfect for solo travelers...' },
  { id: 5, name: 'Room With View', image: Kamar5, price: '169$', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Television, Bathroom', description: 'Enjoy the best views from our rooms...' },
  { id: 6, name: 'Room With View', image: Kamar6, price: '169$', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Television, Bathroom', description: 'Scenic views right from your window...' }
];

const DetailRoom = () => {
  const { roomId } = useParams();
  const room = rooms.find(room => room.id === parseInt(roomId));

  return (
    <div>
      {room ? (
        <div>
          <AboutDiv>
            <AboutStyle>Detail Kamar</AboutStyle>
            <AboutHome>
              <Link to="/room" style={{ textDecoration: 'none', color: 'black' }}>Beranda</Link> <FontAwesomeIcon icon={faChevronRight} size="1px" /> Kamar
            </AboutHome>
          </AboutDiv>
          <AboutBody>
            <AboutRoom>
              <AboutImg>
                <img src={room.image} alt={room.name} />
              </AboutImg>
              <AboutPesan>
                <AboutJudul>Reservasi Anda</AboutJudul>
                <AboutDeskripsi>Check In :</AboutDeskripsi>
                <Input type="date" />
                <AboutDeskripsi>Check Out :</AboutDeskripsi>
                <Input type="date" />
                <AboutDeskripsi>Jml. Orang :</AboutDeskripsi>
                <Select>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </Select>
                <AboutDeskripsi>Jml. Kamar :</AboutDeskripsi>
                <Select>
                  <option value="single">Single Room</option>
                  <option value="double">Double Room</option>
                  <option value="suite">Suite</option>
                </Select>
                <Button>Cek Ketersediaan</Button>
              </AboutPesan>
            </AboutRoom>
            <AboutRoom>
              <Kamar>
                <Judul>{room.name}</Judul>
                <Bintang>
                  <RatingStars rating={5} /> {/* Rating bintang, ganti angka sesuai rating */}
                </Bintang>
                <ButtonBook>Booking Now</ButtonBook>
              </Kamar>
              <Price><DollarSign>{room.price}</DollarSign> /PER NIGHT</Price>
              <div>
                <p>Size: {room.size}</p>
                <p>Capacity: {room.capacity}</p>
                <p>Bed: {room.bed}</p>
                <p>Service: {room.services}</p>
              </div>
              <div>
                <p>{room.description}</p>
              </div>
            </AboutRoom>
          </AboutBody>
        </div>
      ) : (
        <p>Room not found</p>
      )}
    </div>
  );
};

export default DetailRoom;
