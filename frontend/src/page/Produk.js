import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import {
  StyledAdmin,
  Container,
  Message, 
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  ProductImage,
  ActionButton,
} from "../component/StyledProduk";


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
                      <ActionButton>
                        <Link to={`/edit-kamar/${room.room_id}`} style={{ textDecoration: "none", color: "white" }}>
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
      </div>
    </StyledAdmin>
  );
};

export default Products;
