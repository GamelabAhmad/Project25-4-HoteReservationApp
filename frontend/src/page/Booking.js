// src/components/Booking.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookingForm,
  FormGroup,
  SubmitButton,
} from "../component/StyledBooking";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    specialRequests: "",
    userId: null, // Mengubah userId menjadi null untuk menunjukkan bahwa nilainya belum ditentukan
    roomId: null, // Mengubah roomId menjadi null untuk menunjukkan bahwa nilainya belum ditentukan
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
      if (response.ok) {
        console.log("Booking berhasil disimpan");
        setBookingData({
          name: "",
          email: "",
          checkInDate: "",
          checkOutDate: "",
          roomType: "",
          specialRequests: "",
          userId: null, // Mengubah userId menjadi null kembali setelah berhasil disimpan
          roomId: null, // Mengubah roomId menjadi null kembali setelah berhasil disimpan
        });
        navigate("/payment"); // Arahkan ke halaman pembayaran
      } else {
        console.log("Gagal menyimpan booking");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <BookingForm onSubmit={handleSubmit}>
      <h2>Pemesanan Kamar</h2>
      <FormGroup>
        <label htmlFor="name">Nama:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={bookingData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={bookingData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="checkInDate">Tanggal Check-in:</label>
        <input
          type="date"
          id="checkInDate"
          name="checkInDate"
          value={bookingData.checkInDate}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="checkOutDate">Tanggal Check-out:</label>
        <input
          type="date"
          id="checkOutDate"
          name="checkOutDate"
          value={bookingData.checkOutDate}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="roomType">Tipe Kamar:</label>
        <select
          id="roomType"
          name="roomType"
          value={bookingData.roomType}
          onChange={handleChange}
          required
        >
          <option value="">Pilih Tipe Kamar</option>
          <option value="Premium King Room">Premium King Room</option>
          <option value="Deluxe Room">Deluxe Room</option>
          <option value="Room With View">Room With View</option>
        </select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="specialRequests">Permintaan Khusus:</label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={bookingData.specialRequests}
          onChange={handleChange}
        ></textarea>
      </FormGroup>
      <SubmitButton type="submit">Pesan Sekarang</SubmitButton>
    </BookingForm>
  );
};

export default Booking;
