import React, { useState } from 'react';
import { 
    AboutStyle,
    AboutDiv,
    AboutImg
  } from '../component/StyledPesanan';
  import '../css/pesanan.css';
  import Kamar1 from '../kamar/kamar1.jpg'; 

  const Pemesanan = () => {
    const [view, setView] = useState('pesanan'); // State to manage the view

    return (
    <body>
        <AboutDiv>
            <AboutStyle>Pesanan</AboutStyle>
        </AboutDiv>
        <div className="navigasi">
        <button className="btn" onClick={() => setView('pesanan')}>Lihat Pesanan</button>
        <button className="btn" onClick={() => setView('riwayat')}>Riwayat Pemesanan</button>
      </div>

      {view === 'pesanan' && (
        <div className="about-container">
          <div className="about-body">
            <div className="order-box">
              <div className="image-container">
                <AboutImg>
                  <img src={Kamar1} alt="Logo Hotel" />
                </AboutImg>
              </div>
              <div className="details-container">
                <div className="room-name">
                  <h1>Premium King Room</h1>
                  <p>Nama : Andhita Firmansyah Putra</p>
                  <p>No. Hp : 0895856485135</p>
                </div>
                <div className="booking-id">
                  <p>ID Booking: 123456</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-body">
            <div className="order-box">
              <div className="image-container">
                <AboutImg>
                  <img src={Kamar1} alt="Logo Hotel" />
                </AboutImg>
              </div>
              <div className="details-container">
                <div className="room-name">
                  <h1>Premium King Room</h1>
                  <p>Nama : Andhita Firmansyah Putra</p>
                  <p>No. Hp : 0895856485135</p>
                </div>
                <div className="booking-id">
                  <p>ID Booking: 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === 'riwayat' && (
        <div className="about-container">
          <div className="about-body">
            <div className="order-box">
              <div className="image-container">
                <AboutImg>
                  <img src={Kamar1} alt="Logo Hotel" />
                </AboutImg>
              </div>
              <div className="details-container">
                <div className="room-name">
                  <h1>Premium King Room</h1>
                  <p>Tamu : 3 orang</p>
                  <p>Harga : 250.000/malam</p>
                </div>
                <div className="booking-id">
                  <p>ID Booking: 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </body>
    );
}
export default Pemesanan;