import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './page/Header';
import Footer from './page/Footer';
import Kontak from './page/Kontak';
import Tentang from './page/Tentang';
import Body from './page/Body';
import Room from './page/Room';
import Login from './page/Login';
import Daftar from './page/Daftar';
import Booking from './page/Booking';
import Pesanan from './page/Pesanan';
import Lupapass from './page/Lupapass';
import Newpass from './page/Newpass'; // Import the Newpass component
import Home from './page/Home';
import Profile from './page/Profile';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/bootstrap.min.css';
import './css/animate.css';

const App = () => {
  const location = useLocation();
  const noHeaderFooterPaths = ['/masuk', '/daftar', '/Lupapass', '/newpass']; // Add '/newpass' to the paths that hide Header and Footer
  const shouldHideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/ruang" element={<Room />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/pesanan" element={<Pesanan />} />
        <Route path="/pesan-kamar/:roomId" element={<Booking />} /> 
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/lupapass" element={<Lupapass />} />
        <Route path="/newpass" element={<Newpass />} /> {/* Add the Newpass route */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;