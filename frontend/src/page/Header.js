// src/component/Header.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavStyle,
  LeftContainer,
  LogoStyle,
  UlStyle,
  LiStyle,
  AStyle,
  RightContainer,
  LoginRegisterStyle,
  ToggleMenu,
  SubMenu,
} from "../component/StyledHeader";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isBig, setIsBig] = useState(window.innerWidth > 768);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMasterOpen, setIsMasterOpen] = useState(false); // State untuk submenu
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsBig(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if the user is authenticated by checking the presence of a token
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMasterToggle = () => {
    setIsMasterOpen(!isMasterOpen);
  };
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <NavStyle isSticky={isSticky}>
      <LeftContainer>
        <LogoStyle>
          <Link to="/" style={{ color: "#0D99FF" }}>
            <img src="/images/LogoJH.png" alt="Logo Hotel" />
          </Link>
        </LogoStyle>
        <RightContainer isBig={isBig}>
          <LoginRegisterStyle isBig={isBig}>
            {isAuthenticated ? (
              <>
                <Link to="/profile">Profil</Link>
                <button
                  onClick={handleLogout}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    color: "white",
                    marginLeft: "15px",
                  }}
                >
                  Keluar
                </button>
              </>
            ) : (
              <>
                <Link to="/masuk">Masuk</Link>
                <Link to="/daftar">Daftar</Link>
              </>
            )}
          </LoginRegisterStyle>
          <ToggleMenu onClick={handleToggle}>
            <div></div>
            <div></div>
            <div></div>
          </ToggleMenu>
        </RightContainer>
      </LeftContainer>
      <UlStyle isOpen={isOpen}>
        <LiStyle>
          <Link to="/body" style={{ textDecoration: "none" }}>
            <AStyle>Beranda</AStyle>
          </Link>
        </LiStyle>
        <LiStyle>
          <Link to="/ruang" style={{ textDecoration: "none" }}>
            <AStyle>Kamar</AStyle>
          </Link>
        </LiStyle>
        <LiStyle onClick={handleMasterToggle} style={{ position: 'relative', color: 'white' }}>
          <AStyle>Data Master</AStyle>
          {isMasterOpen && (
            <SubMenu>
              <LiStyle>
                <Link to="/users" style={{ textDecoration: "none" }}>
                  <AStyle>Users</AStyle>
                </Link>
              </LiStyle>
              <LiStyle>
                <Link to="/produk" style={{ textDecoration: "none" }}>
                  <AStyle>Produk</AStyle>
                </Link>
              </LiStyle>
              <LiStyle>
                <Link to="/categories" style={{ textDecoration: "none" }}>
                  <AStyle>Categories</AStyle>
                </Link>
              </LiStyle>
            </SubMenu>
          )}
        </LiStyle>
        <LiStyle>
          <Link to="/tentang" style={{ textDecoration: "none" }}>
            <AStyle>Tentang</AStyle>
          </Link>
        </LiStyle>
        <LiStyle>
          <Link to="/pesanan" style={{ textDecoration: "none" }}>
            <AStyle>Pesanan</AStyle>
          </Link>
        </LiStyle>
        <LiStyle>
          <Link to="/kontak" style={{ textDecoration: "none" }}>
            <AStyle>Kontak</AStyle>
          </Link>
        </LiStyle>
      </UlStyle>
    </NavStyle>
  );
};

export default Header;