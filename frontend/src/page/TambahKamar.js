import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  text-align: center;
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

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  resize: vertical; /* Memungkinkan textarea untuk diresize secara vertikal */
`;

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementasi untuk menambahkan produk
    // Contoh: Kirim data produk ke server atau lakukan operasi lainnya
    alert('Data produk dikirim');
  };

  return (
<Container>
      <Title>Form Penambahan Kamar</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="productName">Nama Produk:</Label>
        <Input type="text" id="productName" name="productName" placeholder="Nama Kamar" required />

        <Label htmlFor="productPrice">Harga:</Label>
        <Input type="text" id="productPrice" name="productPrice" placeholder="IDR /Malam" required />

        <Label htmlFor="productSize">Ukuran:</Label>
        <Input type="text" id="productSize" name="productSize" placeholder="Ukuran" required />

        <Label htmlFor="productCapacity">Kapasitas:</Label>
        <Input type="text" id="productCapacity" name="productCapacity" placeholder="Jumlah Orang" required />

        <Label htmlFor="productBed">Tempat Tidur:</Label>
        <Input type="text" id="productBed" name="productBed" placeholder="Jenis Kasur" required />

        <Label htmlFor="productServices">Layanan:</Label>
        <TextArea id="productServices" name="productServices" rows="4" placeholder="Layanan" required />

        <Button type="submit">Tambahkan</Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
