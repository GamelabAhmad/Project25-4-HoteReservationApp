import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
`;

const FileInput = styled.input`
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const EditKamar = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [roomName, setRoomName] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [capacity, setCapacity] = useState('');
  const [bedType, setBedType] = useState('');
  const [services, setServices] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/rooms/${id}`);
        const roomData = response.data;
        setRoomName(roomData.room_name);
        setPrice(roomData.price);
        setSize(roomData.ukuran);
        setCapacity(roomData.kapasitas);
        setBedType(roomData.tempat_tidur);
        setServices(roomData.layanan.join(', ')); // Convert array to string for textarea
        setExistingImage(roomData.image);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

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
      await axios.put(`http://localhost:5000/api/rooms/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Data kamar diperbarui');
      // Redirect back to products page using Link
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Title>Edit Kamar</Title>
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

        <Label htmlFor="size">Ukuran:</Label>
        <Input 
          type="text" 
          id="size" 
          name="size" 
          placeholder="Ukuran" 
          required 
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        <Label htmlFor="capacity">Kapasitas:</Label>
        <Input 
          type="text" 
          id="capacity" 
          name="capacity" 
          placeholder="Jumlah Orang" 
          required 
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />

        <Label htmlFor="bedType">Tempat Tidur:</Label>
        <Input 
          type="text" 
          id="bedType" 
          name="bedType" 
          placeholder="Jenis Kasur" 
          required 
          value={bedType}
          onChange={(e) => setBedType(e.target.value)}
        />

        <Label htmlFor="services">Layanan:</Label>
        <Input 
          type="text" 
          id="services" 
          name="services" 
          placeholder="Layanan" 
          required 
          value={services}
          onChange={(e) => setServices(e.target.value)}
        />

        <Label htmlFor="image">Gambar:</Label>
        {existingImage && (
          <div>
            <img 
              src={`http://localhost:5000/uploads/${existingImage}`} 
              alt="Gambar Kamar" 
              style={{ width: '100%', marginBottom: '10px' }}
            />
          </div>
        )}
        <FileInput 
          type="file" 
          id="image" 
          name="image" 
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <Button type="submit">Perbarui</Button>
        <Link to="/products">Kembali ke Produk</Link>
      </Form>
    </Container>
  );
};

export default EditKamar;
