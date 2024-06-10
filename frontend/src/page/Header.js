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
  LoginRegisterStyle,
  ToggleMenu 
} from "../component/StyledHeader";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isBig, setIsBig] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsBig(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavStyle isSticky={isSticky}>
      <LeftContainer>
        <LogoStyle>
          <Link to="/" style={{ color: '#0D99FF' }}>
            <img src="/images/LogoJH.png" alt="Logo Hotel" />
          </Link>
        </LogoStyle>
        <RightContainer isBig={isBig}>
          <LoginRegisterStyle isBig={isBig}>
            <Link to="/masuk">Masuk</Link>
            <Link to="/daftar">Daftar</Link>
          </LoginRegisterStyle>
          <ToggleMenu onClick={handleToggle}>
            <div></div>
            <div></div>
            <div></div>
          </ToggleMenu>
        </RightContainer>
      </LeftContainer>
      <UlStyle isOpen={isOpen}>
        <LiStyle><Link to="/" style={{ textDecoration: 'none' }}><AStyle>Beranda</AStyle></Link></LiStyle>
        <LiStyle><Link to="/ruang" style={{ textDecoration: 'none' }}><AStyle>Kamar</AStyle></Link></LiStyle>
        <LiStyle><Link to="/tentang" style={{ textDecoration: 'none' }}><AStyle>Tentang</AStyle></Link></LiStyle>
        <LiStyle><Link to="/pesanan" style={{ textDecoration: 'none' }}><AStyle>Pesanan</AStyle></Link></LiStyle>
        <LiStyle><Link to="/kontak" style={{ textDecoration: 'none' }}><AStyle>Kontak</AStyle></Link></LiStyle>
      </UlStyle>
    </NavStyle>
  );
};

export default Header;
