import React from 'react';
import {
  StyledAdmin,
} from "../component/StyledAdmin";

const Admin = () => {
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

        <main className="container-fluid">
          <h1 className="mt-4">Dashboard</h1>
          <p>Welcome to your dashboard!</p>
        </main>
      </div>
    </StyledAdmin>
  );
};

export default Admin;
