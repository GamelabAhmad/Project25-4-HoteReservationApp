import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
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
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font-size: 16px;
`;

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
  );
};

export default AddProduct;
