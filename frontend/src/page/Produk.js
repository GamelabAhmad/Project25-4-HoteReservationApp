import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
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

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data produk dari API atau sumber data lainnya
    const fetchData = async () => {
      try {
        // Contoh: Ambil data produk dari API
        const response = await fetch('api/products');
        if (!response.ok) {
          throw new Error('Gagal mengambil data produk');
        }
        const data = await response.json();
        setProducts(data); // Menggunakan setProducts untuk mengatur state products
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddProduct = () => {
    // Implementasi untuk menambahkan produk
    // Contoh: Navigasi atau tindakan untuk menambahkan produk baru
    // alert('Tambahkan produk baru');
  };

  return (
    <Container>
        {products.length === 0 ? (
            <Message>Kamar belum tersedia.</Message>
        ) : (
            // Tampilkan daftar produk jika ada
            <ul>
            {products.map((product) => (
                <li key={product.id}>
                {/* Tampilkan informasi produk */}
                <p>Nama Produk: {product.name}</p>
                <p>Harga: {product.price}</p>
                {/* Tambahkan informasi lain sesuai kebutuhan */}
                </li>
            ))}
            </ul>
        )}
        <Button onClick={handleAddProduct}><Link to="/tambah-kamar" style={{ textDecoration: "none" }}>Tambahkan Kamar</Link></Button>
    </Container>
  );
};

export default Products;
