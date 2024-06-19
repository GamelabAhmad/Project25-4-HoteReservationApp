import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Main,
  ProfileContainer,
  ProfileLeft,
  ProfileRight,
  ProfileImage,
  ImageUpload,
  Label,
  StyledAdmin,
} from "../component/StyledProfileAdmin"; // Sesuaikan dengan jalur yang benar

const ProfileAdmin = () => {
  const [profileImage, setProfileImage] = useState("default-profile.png");
  const [profileData, setProfileData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    role: "",
    created_at: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: {
            "x-auth-token": token,
          },
        });
        setProfileData(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err.message);
        // Handle error fetching profile data
      }
    };

    fetchProfileData();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
      // Add logic here to upload file to server if needed
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
      <Main>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "50px",
              fontSize: "3rem",
              display: "inline-block",
              borderBottom: "4px solid black",
            }}
          >
            Profile
          </h1>
        </div>
        <ProfileContainer>
          <ProfileLeft>
            <div
              style={{
                position: "relative",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "#ccc",
              }}
            >
              <ProfileImage
                id="profileImage"
                src={profileImage}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <FontAwesomeIcon
                icon={faCamera}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "24px",
                  color: "#fff",
                }}
              />
            </div>
            <ImageUpload
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <Label htmlFor="imageUpload">Ganti Foto Profil</Label>
          </ProfileLeft>
          <ProfileRight>
            <div>
              <label htmlFor="name">
                <b>Nama:</b>
              </label>
              <input
                type="text"
                id="name"
                value={profileData.full_name}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="email">
                <b>Email:</b>
              </label>
              <input type="text" id="email" value={profileData.email} readOnly />
            </div>
            <div>
              <label htmlFor="phone_number">
                <b>Nomor Telepon:</b>
              </label>
              <input
                type="text"
                id="phone_number"
                value={profileData.phone_number}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="role">
                <b>Peran:</b>
              </label>
              <input type="text" id="role" value={profileData.role} readOnly />
            </div>
            <div>
              <label htmlFor="created_at">
                <b>Dibuat Pada:</b>
              </label>
              <input
                type="text"
                id="created_at"
                value={new Date(profileData.created_at).toLocaleDateString()}
                readOnly
              />
            </div>
          </ProfileRight>
        </ProfileContainer>
      </Main>
    </div>
  </StyledAdmin>
  );
};

export default ProfileAdmin;
