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
import { jwtDecode } from "jwt-decode"; // Correct named import

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isBig, setIsBig] = useState(window.innerWidth > 768);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Akun");
  const [role, setRole] = useState("user"); // State untuk peran pengguna
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
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setIsAuthenticated(true);
      setRole(decoded.user.role); // Set state role sesuai dengan peran pengguna dari token
    }
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMasterToggle = () => {
    setIsMasterOpen(!isMasterOpen);
  };

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setRole("user"); // Reset role ke "user" setelah logout
    navigate("/");
  };

  const handleProfileClick = () => {
    setIsProfileOpen(false);
    setButtonText("Profil");
  };

  const handleNavClick = () => {
    setButtonText("Akun");
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
              <div style={{ position: "relative" }}>
                <button
                  onClick={handleProfileToggle}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  {buttonText}
                </button>
                {isProfileOpen && (
                  <SubMenu
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                  >
                    <LiStyle style={{ width: "100%" }}>
                      <Link
                        to="/profile"
                        onClick={handleProfileClick}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          display: "block",
                          width: "100%",
                          padding: "10px 15px",
                        }}
                      >
                        Profil
                      </Link>
                    </LiStyle>
                    <LiStyle style={{ width: "100%" }}>
                      <button
                        onClick={handleLogout}
                        style={{
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                          color: "black",
                          width: "100%",
                          textAlign: "left",
                          padding: "10px 15px",
                        }}
                      >
                        Keluar
                      </button>
                    </LiStyle>
                  </SubMenu>
                )}
              </div>
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
          <Link
            to="/body"
            style={{ textDecoration: "none" }}
            onClick={handleNavClick}
          >
            <AStyle>Beranda</AStyle>
          </Link>
        </LiStyle>
        <LiStyle>
          <Link
            to="/ruang"
            style={{ textDecoration: "none" }}
            onClick={handleNavClick}
          >
            <AStyle>Kamar</AStyle>
          </Link>
        </LiStyle>
        {/* Tampilkan "Data Master" hanya jika role adalah "admin" atau "super_admin" */}
        {role === "admin" || role === "super_admin" ? (
          <LiStyle
            onClick={handleMasterToggle}
            style={{ position: "relative", color: "white" }}
          >
            <AStyle>Data Master</AStyle>
            {isMasterOpen && (
              <SubMenu style={{ backgroundColor: "#333", borderRadius: "8px" }}>
                <LiStyle>
                  <Link
                    to="/admin"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={handleNavClick}
                  >
                    <AStyle>Admin</AStyle>
                  </Link>
                </LiStyle>
              </SubMenu>
            )}
          </LiStyle>
        ) : null}
        <LiStyle>
          <Link
            to="/tentang"
            style={{ textDecoration: "none" }}
            onClick={handleNavClick}
          >
            <AStyle>Tentang</AStyle>
          </Link>
        </LiStyle>
        <LiStyle>
          <Link
            to="/pesanan"
            style={{ textDecoration: "none" }}
            onClick={handleNavClick}
          >
            <AStyle>Pesanan</AStyle>
          </Link>
        </LiStyle>
        <LiStyle>
          <Link
            to="/kontak"
            style={{ textDecoration: "none" }}
            onClick={handleNavClick}
          >
            <AStyle>Kontak</AStyle>
          </Link>
        </LiStyle>
      </UlStyle>
    </NavStyle>
  );
};

export default Header;
