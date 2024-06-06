// src/App.js
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
import DetailRoom from './page/DetailRoom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/bootstrap.min.css';
import './css/animate.css';

const App = () => {
  const location = useLocation();
  const noHeaderFooterPaths = ['/masuk', '/daftar'];
  const shouldHideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/ruang" element={<Room />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/detail-kamar/:roomId" element={<DetailRoom />} /> 
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
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