import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AboutDiv, AboutHome, AboutImg, Price } from "../component/StyledRoom";
import "../Room.css";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rooms");
        setRooms(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <AboutDiv>
        <h1>Kamar Kami</h1>
        <AboutHome>Kamar</AboutHome>
      </AboutDiv>
      <div className="about-container">
        <div className="about-body">
          {rooms.map((room) => (
            <div className="box" key={room.room_id}>
              <AboutImg>
                <img
                  src={`http://localhost:5000/uploads/${room.image}`}
                  alt="Gambar Kamar"
                />
              </AboutImg>
              <h3>
                <b>{room.room_name}</b>
              </h3>
              <span
                className="price"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Price className="amount" style={{ marginRight: "5px" }}>
                  {room.price}
                </Price>
              </span>
              <div className="deskripsi">
                <div className="kiri">
                  <p>Ukuran : {room.ukuran}</p>
                  <p>Kapasitas : {room.kapasitas}</p>
                  <p>Tempat Tidur : {room.tempat_tidur}</p>
                  <p>Layanan : {room.layanan || "-"}</p>
                </div>
              </div>
              <button className="more-detail-button">
                <b>
                  <Link
                    to={`/pesan-kamar/${room.room_id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Booking
                  </Link>
                </b>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
