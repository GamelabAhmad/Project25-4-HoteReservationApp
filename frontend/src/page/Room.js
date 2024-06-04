import React from 'react';
import { 
  AboutStyle,
  AboutHome,
  AboutDiv,
  AboutImg
} from '../component/StyledRoom';
import { Link } from 'react-router-dom';
import Kamar1 from '../kamar/kamar1.jpg'; 
import Kamar2 from '../kamar/kamar2.jpg'; 
import Kamar3 from '../kamar/kamar3.jpg'; 
import Kamar4 from '../kamar/kamar4.jpg'; 
import Kamar5 from '../kamar/kamar5.jpg'; 
import Kamar6 from '../kamar/kamar6.jpg'; 
import '../Room.css';

const Room = () => {
  return (
    <body>
        <AboutDiv>
            <AboutStyle>Our Room</AboutStyle>
            <AboutHome>
                Rooms 
            </AboutHome>
        </AboutDiv>
        <div className="about-container">
            <div className="about-body">
                <div className="box">
                    <AboutImg>
                        <img src={Kamar1} alt="Logo Hotel" />
                    </AboutImg>
                    <h3>Premium King Room</h3>
                    <span className="price">
                        <span className="amount">159$</span>
                        <span className="pernight">/Pernight</span>
                    </span>
                    <span className="deskripsi">
                        <span className="kiri">
                            <p>Size :</p>
                            <p>Capacity :</p>
                            <p>Bed :</p>
                            <p>Services :</p>
                        </span>
                        <span className="kanan">
                            <p>30 ft</p>
                            <p>Max persion 3</p>
                            <p>King Beds</p>
                            <p>Wifi, Television, Bathroom</p>
                        </span>
                    </span>
                    <button className="more-detail-button">
                        <b><Link to="/detail-kamar" style={{ textDecoration: 'none', color: 'black' }}>More Details</Link></b>
                    </button>
                </div>
                <div className="box">
                    <AboutImg>
                        <img src={Kamar2} alt="Logo Hotel" />
                    </AboutImg>
                    <h3>Deluxe Room</h3>
                    <span className="price">
                        <span className="amount">159$</span>
                        <span className="pernight">/Pernight</span>
                    </span>
                    <span className="deskripsi">
                        <span className="kiri">
                            <p>Size :</p>
                            <p>Capacity :</p>
                            <p>Bed :</p>
                            <p>Services :</p>
                        </span>
                        <span className="kanan">
                            <p>30 ft</p>
                            <p>Max persion 5</p>
                            <p>King Beds</p>
                            <p>Wifi, Television, Bathroom</p>
                        </span>
                    </span>
                    <button className="more-detail-button"><b>More Details</b></button>
                </div>
                <div className="box">
                    <AboutImg>
                        <img src={Kamar3} alt="Logo Hotel" />
                    </AboutImg>
                    <h3>Luxury Room</h3>
                    <span className="price">
                        <span className="amount">159$</span>
                        <span className="pernight">/Pernight</span>
                    </span>
                    <span className="deskripsi">
                        <span className="kiri">
                            <p>Size :</p>
                            <p>Capacity :</p>
                            <p>Bed :</p>
                            <p>Services :</p>
                        </span>
                        <span className="kanan">
                            <p>30 ft</p>
                            <p>Max persion 1</p>
                            <p>King Beds</p>
                            <p>Wifi, Television, Bathroom</p>
                        </span>
                    </span>
                    <button className="more-detail-button"><b>More Details</b></button>
                </div>
                <div className="box">
                    <AboutImg>
                        <img src={Kamar4} alt="Logo Hotel" />
                    </AboutImg>
                    <h3>Double Room</h3>
                    <span className="price">
                        <span className="amount">159$</span>
                        <span className="pernight">/Pernight</span>
                    </span>
                    <span className="deskripsi">
                        <span className="kiri">
                            <p>Size :</p>
                            <p>Capacity :</p>
                            <p>Bed :</p>
                            <p>Services :</p>
                        </span>
                        <span className="kanan">
                            <p>30 ft</p>
                            <p>Max persion 1</p>
                            <p>King Beds</p>
                            <p>Wifi, Television, Bathroom</p>
                        </span>
                    </span>
                    <button className="more-detail-button"><b>More Details</b></button>
                </div>
                <div className="box">
                    <AboutImg>
                        <img src={Kamar5} alt="Logo Hotel" />
                    </AboutImg>
                    <h3>Room With View</h3>
                    <span className="price">
                        <span className="amount">159$</span>
                        <span className="pernight">/Pernight</span>
                    </span>
                    <span className="deskripsi">
                        <span className="kiri">
                            <p>Size :</p>
                            <p>Capacity :</p>
                            <p>Bed :</p>
                            <p>Services :</p>
                        </span>
                        <span className="kanan">
                            <p>30 ft</p>
                            <p>Max persion 1</p>
                            <p>King Beds</p>
                            <p>Wifi, Television, Bathroom</p>
                        </span>
                    </span>
                    <button className="more-detail-button"><b>More Details</b></button>
                </div>
                <div className="box">
                    <AboutImg>
                        <img src={Kamar6} alt="Logo Hotel" />
                    </AboutImg>
                    <h3>Room With View</h3>
                    <span className="price">
                        <span className="amount">159$</span>
                        <span className="pernight">/Pernight</span>
                    </span>
                    <span className="deskripsi">
                        <span className="kiri">
                            <p>Size :</p>
                            <p>Capacity :</p>
                            <p>Bed :</p>
                            <p>Services :</p>
                        </span>
                        <span className="kanan">
                            <p>30 ft</p>
                            <p>Max persion 1</p>
                            <p>King Beds</p>
                            <p>Wifi, Television, Bathroom</p>
                        </span>
                    </span>
                    <button className="more-detail-button"><b>More Details</b></button>
                </div>
            </div>
        </div>
    </body>
  );
};

export default Room;
