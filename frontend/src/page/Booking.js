import React, { useState } from 'react';
import { 
  BookingForm,
  FormGroup,
  SubmitButton,
} from "../component/StyledBooking";

const Booking = () => {

  // State untuk menyimpan data pemesanan
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    specialRequests: ''
  });

  // Function untuk menghandle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function untuk menghandle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data pemesanan, seperti mengirim ke server atau menampilkan pesan sukses
    console.log('Data pemesanan:', bookingData);
  };


  return (
    <BookingForm onSubmit={handleSubmit}>
      <h2>Pemesanan Kamar</h2>
      <FormGroup>
        <label htmlFor="name">Nama:</label>
        <input type="text" id="name" name="name" value={bookingData.name} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={bookingData.email} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <label htmlFor="checkInDate">Tanggal Check-in:</label>
        <input type="date" id="checkInDate" name="checkInDate" value={bookingData.checkInDate} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <label htmlFor="checkOutDate">Tanggal Check-out:</label>
        <input type="date" id="checkOutDate" name="checkOutDate" value={bookingData.checkOutDate} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <label htmlFor="roomType">Tipe Kamar:</label>
        <select id="roomType" name="roomType" value={bookingData.roomType} onChange={handleChange} required>
          <option value="">Pilih Tipe Kamar</option>
          <option value="Premium King Room">Premium King Room</option>
          <option value="Deluxe Room">Deluxe Room</option>
          <option value="Room With View">Room With View</option>
        </select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="specialRequests">Permintaan Khusus:</label>
        <textarea id="specialRequests" name="specialRequests" value={bookingData.specialRequests} onChange={handleChange}></textarea>
      </FormGroup>
      <SubmitButton type="submit">Pesan Sekarang</SubmitButton>
    </BookingForm>
  );
};


export default Booking;