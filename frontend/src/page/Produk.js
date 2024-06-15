import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 12px;
  text-align: left;
  vertical-align: middle;
`;

const ProductImage = styled.img`
  max-width: 100px;
  height: auto;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${(props) => (props.delete ? '#dc3545' : '#ffc107')};
  color: white;
  border: none;

  &:hover {
    background-color: ${(props) => (props.delete ? '#c82333' : '#e0a800')};
  }
`;

const Products = () => {
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

  const handleAddProduct = () => {
    // Implementasi untuk menambahkan produk
    // Contoh: Navigasi atau tindakan untuk menambahkan produk baru
    // alert('Tambahkan produk baru');
  };

  const handleDelete = (id) => {
    // Implementasi untuk menghapus produk
    // alert(`Hapus kamar dengan ID: ${id}`);
  };

  const handleEdit = (id) => {
    // Implementasi untuk mengedit produk
    // alert(`Edit kamar dengan ID: ${id}`);
  };

  return (
    <Container>
      {rooms.length === 0 ? (
        <Message>Kamar belum tersedia.</Message>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Gambar</TableCell>
              <TableCell>Nama Kamar</TableCell>
              <TableCell>Harga</TableCell>
              <TableCell>Ukuran</TableCell>
              <TableCell>Kapasitas</TableCell>
              <TableCell>Tempat Tidur</TableCell>
              <TableCell>Layanan</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {rooms.map((room) => (
              <TableRow key={room.room_id}>
                <TableCell><ProductImage src={`http://localhost:5000/uploads/${room.image}`} alt="Gambar Kamar" /></TableCell>
                <TableCell>{room.room_name}</TableCell>
                <TableCell>{`IDR ${room.price.toLocaleString()}`}</TableCell>
                <TableCell>{room.ukuran}</TableCell>
                <TableCell>{room.kapasitas}</TableCell>
                <TableCell>{room.tempat_tidur}</TableCell>
                <TableCell>{room.layanan || "-"}</TableCell>
                <TableCell>
                  <ActionButton delete onClick={() => handleDelete(room.room_id)}>Delete</ActionButton>
                  <ActionButton onClick={() => handleEdit(room.room_id)}>
                    <Link to="/edit-kamar" style={{ textDecoration: "none", color: "white" }}>
                      Edit
                    </Link>
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
      <Button onClick={handleAddProduct}>
        <Link to="/tambah-kamar" style={{ textDecoration: "none", color: "white" }}>
          Tambahkan Kamar
        </Link>
      </Button>
    </Container>
  );
};

export default Products;
