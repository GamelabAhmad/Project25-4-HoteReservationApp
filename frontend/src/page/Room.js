import React from 'react';
import { AboutDiv, AboutHome, AboutImg, Price } from '../component/StyledRoom'; // Mengimpor komponen styled yang telah diperbarui
import { Link } from 'react-router-dom';
import Kamar1 from '../kamar/kamar1.jpg'; 
import Kamar2 from '../kamar/kamar2.jpg'; 
import Kamar3 from '../kamar/kamar3.jpg'; 
import Kamar4 from '../kamar/kamar4.jpg'; 
import Kamar5 from '../kamar/kamar5.jpg'; 
import Kamar6 from '../kamar/kamar6.jpg'; 
import '../Room.css';

const Room = () => {
  const rooms = [
    { id: 1, name: 'Premium King Room', image: Kamar1, price: 'IDR 2.300.000', size: '30 ft', capacity: 'Max person 3', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
    { id: 2, name: 'Deluxe Room', image: Kamar2, price: 'IDR 2.500.000', size: '30 ft', capacity: 'Max person 5', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
    { id: 3, name: 'Luxury Room', image: Kamar3, price: 'IDR 2.000.000', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
    { id: 4, name: 'Double Room', image: Kamar4, price: 'IDR 1.800.000', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
    { id: 5, name: 'Room With View', image: Kamar5, price: 'IDR 2.200.000', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' },
    { id: 6, name: 'Room With View', image: Kamar6, price: 'IDR 2.200.000', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Televisi, Kamar Mandi' }
  ];

  return (
    <div>
      <AboutDiv>
        <h1>Kamar Kami</h1>
        <AboutHome>Kamar</AboutHome>
      </AboutDiv>
      <div className="about-container">
        <div className="about-body">
          {rooms.map(room => (
            <div className="box" key={room.id}>
              <AboutImg>
                <img src={room.image} alt="Gambar Kamar" />
              </AboutImg>
              <h3><b>{room.name}</b></h3>
              <span className="price" style={{ display: 'flex', alignItems: 'center' }}>
                <Price className="amount" style={{ marginRight: '5px' }}>{room.price}</Price>
                <span className="pernight" style={{ color: 'black' }}>/Malam</span>
              </span>
              <div className="deskripsi">
                <div className="kiri">
                  <p>Ukuran :</p>
                  <p>Kapasitas :</p>
                  <p>Tempat Tidur :</p>
                  <p>Layanan :</p>
                </div>
                <div className="kanan">
                  <p>{room.size}</p>
                  <p>{room.capacity}</p>
                  <p>{room.bed}</p>
                  <p>{room.services}</p>
                </div>
              </div>
              <button className="more-detail-button">
                <b><Link to={`/pesan-kamar/${room.id}`} style={{ textDecoration: 'none', color: 'black' }}>Baca Selengkapnya</Link></b>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
