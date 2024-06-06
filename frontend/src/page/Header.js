import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  NavStyle, 
  LeftContainer, 
  LogoStyle, 
  UlStyle, 
  LiStyle, 
  AStyle, 
  RightContainer, 
  LoginRegisterStyle 
} from "../component/StyledHeader";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mendapatkan posisi scroll
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Mengubah state isSticky berdasarkan posisi scroll
      setIsSticky(scrollTop > 50); // Misalnya, ubah 50 menjadi posisi scroll tertentu untuk menentukan kapan navigasi harus menjadi lengket
    };

    // Menambahkan event listener untuk event scroll
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavStyle isSticky={isSticky}>
      <LeftContainer>
        <LogoStyle>
          <Link to="/" style={{ color: '#0D99FF' }}>
            <img src="/images/LogoJH.png" alt="Logo Hotel" />
          </Link>
        </LogoStyle>
        <UlStyle>
          <LiStyle><Link to="/" style={{ textDecoration: 'none' }}><AStyle>Beranda</AStyle></Link></LiStyle>
          <LiStyle><Link to="/ruang" style={{ textDecoration: 'none' }}><AStyle>Kamar</AStyle></Link></LiStyle>
          <LiStyle><Link to="/tentang" style={{ textDecoration: 'none' }}><AStyle>Tentang</AStyle></Link></LiStyle>
          <LiStyle><Link to="/pesanan" style={{ textDecoration: 'none' }}><AStyle>Pesanan</AStyle></Link></LiStyle>
          <LiStyle><Link to="/kontak" style={{ textDecoration: 'none' }}><AStyle>Kontak</AStyle></Link></LiStyle>
        </UlStyle>
      </LeftContainer>
      <RightContainer>
        <LoginRegisterStyle>
          <Link to="/masuk">Masuk</Link>
          <Link to="/daftar">Daftar</Link>
        </LoginRegisterStyle>
      </RightContainer>
    </NavStyle>
  );
};

export default Header;
