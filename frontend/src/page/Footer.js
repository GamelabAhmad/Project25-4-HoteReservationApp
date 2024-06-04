// Footer.js
import React from 'react';
import { 
  StyledFooter,
  BagianFooter,
  FooterSection1,
  FooterSection2,
  FooterSection3,
} from '../component/StyledFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const phoneNumber = "62856789101112"; // Ganti dengan nomor WhatsApp yang sesuai

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div>
      <BagianFooter>
        <FooterSection1>
            <h1>JavaHotel</h1>
            <p>Nikmati sensasi di setiap malam</p>
            <a href={whatsappUrl} target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '35px', marginTop: '50px' }}/>
            </a>        
          </FooterSection1>
        <FooterSection2>
            <h3>Menu Utama</h3>
            <p><Link to="/beranda" style={{ color: 'white', fontSize: '22px' }}>Beranda</Link></p>
            <p><Link to="/kamar" style={{ color: 'white', fontSize: '22px' }}>Kamar</Link></p>
            <p><Link to="/tentang" style={{ color: 'white', fontSize: '22px' }}>Tentang</Link></p>
            <p><Link to="/kontak" style={{ color: 'white', fontSize: '22px' }}>Kontak</Link></p>
        </FooterSection2>
        <FooterSection3>
            <h3>Hubungi</h3>
            <p>javahotel03@gmail.com</p>
            <p>0856789101112 (WA)</p>
        </FooterSection3>
      </BagianFooter>
      <StyledFooter>
        Copyright &copy; 2024
      </StyledFooter>
    </div>
  );
};

export default Footer;
