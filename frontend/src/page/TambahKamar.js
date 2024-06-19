import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { 
  Container, 
  Title,
  Form,
  Label,
  Input,
  FileInput, 
  Button,
  TextArea,
  StyledAdmin,
} from "../component/StyledTambahKamar";

const AddProduct = () => {
  const [roomName, setRoomName] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [capacity, setCapacity] = useState('');
  const [bedType, setBedType] = useState('');
  const [services, setServices] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('room_name', roomName);
    formData.append('price', price);
    formData.append('ukuran', size);
    formData.append('kapasitas', capacity);
    formData.append('tempat_tidur', bedType);
    formData.append('layanan', services);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/rooms', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Data produk dikirim');
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <StyledAdmin>
      <header className="navbar">
        <nav className="container navbar-expand-lg">
          <a className="navbar-brand" href="#home">Admin Dashboard</a>
          <button className="navbar-toggler" type="button" aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="basic-navbar-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#link">Link</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="admin-body">
        <aside className="bg-light border-right sidebar-wrapper">
          <div className="sidebar-heading">Menu</div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/admin">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profileAdmin">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/produk">Produk</a>
            </li>
          </ul>
        </aside>
        <Container>
          <Title>Form Penambahan Kamar</Title>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="room_name">Nama Kamar:</Label>
            <Input 
              type="text" 
              id="room_name" 
              name="room_name" 
              placeholder="Nama Kamar" 
              required 
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />

            <Label htmlFor="price">Harga:</Label>
            <Input 
              type="text" 
              id="price" 
              name="price" 
              placeholder="IDR /Malam" 
              required 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <Label htmlFor="ukuran">Ukuran:</Label>
            <Input 
              type="text" 
              id="ukuran" 
              name="ukuran" 
              placeholder="Ukuran" 
              required 
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />

            <Label htmlFor="kapasitas">Kapasitas:</Label>
            <Input 
              type="text" 
              id="kapasitas" 
              name="kapasitas" 
              placeholder="Jumlah Orang" 
              required 
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />

            <Label htmlFor="tempat_tidur">Tempat Tidur:</Label>
            <Input 
              type="text" 
              id="tempat_tidur" 
              name="tempat_tidur" 
              placeholder="Jenis Kasur" 
              required 
              value={bedType}
              onChange={(e) => setBedType(e.target.value)}
            />

            <Label htmlFor="layanan">Layanan:</Label>
            <TextArea 
              id="layanan" 
              name="layanan" 
              rows="4" 
              placeholder="Layanan" 
              required 
              value={services}
              onChange={(e) => setServices(e.target.value)}
            />

            <Label htmlFor="image">Gambar:</Label>
            <FileInput 
              type="file" 
              id="image" 
              name="image" 
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <Button type="submit">Tambahkan</Button>
          </Form>
        </Container>
      </div>
    </StyledAdmin>
  );
};

export default AddProduct;
