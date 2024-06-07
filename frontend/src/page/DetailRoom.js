import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import RatingStars from './RatingStars';
import { AboutDiv, AboutStyle, AboutHome, AboutBody, AboutRoom, AboutImg, AboutPesan, AboutJudul, Input, Select, Button, Judul, ButtonBook, Price, DollarSign, Kamar, AboutDeskripsi, RoomInfoWrapper, RoomInfo, RoomDescription } from '../component/StyledPremiumRoom'; // Menambahkan import untuk komponen styled

import Kamar1 from '../kamar/kamar1.jpg';
import Kamar2 from '../kamar/kamar2.jpg';
import Kamar3 from '../kamar/kamar3.jpg';
import Kamar4 from '../kamar/kamar4.jpg';
import Kamar5 from '../kamar/kamar5.jpg';
import Kamar6 from '../kamar/kamar6.jpg';

const rooms = [
  { id: 1, name: 'Premium King Room', image: Kamar1, price: 'IDR 2.300.000', size: '30 ft', capacity: 'Max person 3', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
  { id: 2, name: 'Deluxe Room', image: Kamar2, price: 'IDR 2.500.000', size: '30 ft', capacity: 'Max person 5', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
  { id: 3, name: 'Luxury Room', image: Kamar3, price: 'IDR 2.000.000', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
  { id: 4, name: 'Double Room', image: Kamar4, price: 'IDR 1.800.000', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
  { id: 5, name: 'Room With View', image: Kamar5, price: 'IDR 2.200.000', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
  { id: 6, name: 'Room With View', image: Kamar6, price: 'IDR 2.200.000', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' }
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
                <Kamar>
                  <div>
                    <Judul>{room.name}</Judul>
                    <Price><DollarSign>{room.price}</DollarSign> /PER NIGHT</Price>
                    <RoomInfo>
                        <p>Size: {room.size}</p>
                        <p>Capacity: {room.capacity}</p>
                        <p>Bed: {room.bed}</p>
                        <p>Service: {room.services}</p>
                    </RoomInfo>
                  </div>
                  <div>
                      <RatingStars rating={5} />
                      <ButtonBook>Booking Now</ButtonBook>
                  </div>
              </Kamar>
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
                  <div>
                    <Judul>{room.name}</Judul>
                    <Price><DollarSign>{room.price}</DollarSign> /PER NIGHT</Price>
                    <RoomInfo>
                        <p>Size: {room.size}</p>
                        <p>Capacity: {room.capacity}</p>
                        <p>Bed: {room.bed}</p>
                        <p>Service: {room.services}</p>
                    </RoomInfo>
                  </div>
                  <div>
                      <RatingStars rating={5} />
                      <ButtonBook>Booking Now</ButtonBook>
                  </div>
              </Kamar>
              <RoomInfoWrapper>
                <RoomDescription>
                    <p>{room.description}</p>
                </RoomDescription>
              </RoomInfoWrapper>
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
