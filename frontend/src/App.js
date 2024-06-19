import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./page/Header";
import Footer from "./page/Footer";
import Kontak from "./page/Kontak";
import Tentang from "./page/Tentang";
import Body from "./page/Body";
import Room from "./page/Room";
import Login from "./page/Login";
import Daftar from "./page/Daftar";
import Booking from "./page/Booking";
import Pesanan from "./page/Pesanan";
import Admin from "./page/Admin";
import EditKamar from "./page/EditKamar";
import Produk from './page/Produk'; // Import komponen Products
import TambahKamar from './page/TambahKamar'; // Import komponen Products
import Lupapass from "./page/Lupapass";
import Newpass from "./page/Newpass"; // Import the Newpass component
import Home from "./page/Home";
import Profile from "./page/Profile";
import ProfileAdmin from "./page/ProfileAdmin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";

const App = () => {
  const location = useLocation();
  const noHeaderFooterPaths = ["/masuk", "/daftar", "/Lupapass", "/newpass", "/admin", "/produk", "/tambah-kamar", "/profileAdmin"]; // Add '/newpass' to the paths that hide Header and Footer
  const shouldHideHeaderFooter = noHeaderFooterPaths.includes(
    location.pathname
  );

  return (
    <div className="App">
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/body" replace />} />
        <Route path="/Body" element={<Body />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/ruang" element={<Room />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/pesanan" element={<Pesanan />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tambah-kamar" element={<TambahKamar />} />
        <Route path="/edit-kamar" element={<EditKamar />} />
        <Route path="/pesan-kamar/:id" element={<Booking />} />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/lupapass" element={<Lupapass />} />
        <Route path="/newpass" element={<Newpass />} />{" "}
        <Route path="/Home" element={<Home />} />
        {/* Add the Newpass route */}
        <Route path="/Profile" element={<Profile />} />
        <Route path="/profileAdmin" element={<ProfileAdmin />} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};
export default App;
