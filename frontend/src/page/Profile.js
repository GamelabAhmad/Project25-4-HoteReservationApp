// src/page/Profile.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { 
  Main, 
  ProfileContainer, 
  ProfileLeft, 
  ProfileRight, 
  ProfileImage, 
  ImageUpload, 
  Label, 
} from '../component/StyledProfile'; // Perbarui jalur impor

const Profile = () => {
  const [profileImage, setProfileImage] = useState('default-profile.png');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        setProfileImage(event.target.result);
      }
      reader.readAsDataURL(file);
    }
  };

  return (
    <Main>
        <div style={{ textAlign: 'center', width: '100%' }}>
            <h1 style={{ marginTop: '20px', marginBottom: '50px', fontSize: '3rem', display: 'inline-block', borderBottom: '4px solid black' }}>Profile</h1>
        </div>
        <ProfileContainer>
            <ProfileLeft>
                <div style={{ position: 'relative', width: '230px', height: '230px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#ccc' }}>
                    <ProfileImage id="profileImage" src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <FontAwesomeIcon icon={faCamera} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px', color: '#fff' }} />
                </div>
                <ImageUpload type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} />
                <Label htmlFor="imageUpload">Ganti Foto Profil</Label>
            </ProfileLeft>
            <ProfileRight>
                <div>
                    <label htmlFor="name"><b>Nama:</b></label>
                    <input type="text" id="name" value="John Doe" readOnly />
                </div>
                <div>
                    <label htmlFor="email"><b>Email:</b></label>
                    <input type="text" id="email" value="johndoe@example.com" readOnly />
                </div>
                <div>
                    <label htmlFor="birthdate"><b>Tanggal Lahir:</b></label>
                    <input type="text" id="birthdate" value="1 Januari 1990" readOnly />
                </div>
                <div>
                    <label htmlFor="age"><b>Usia:</b></label>
                    <input type="text" id="age" value="34" readOnly />
                </div>
            </ProfileRight>
      </ProfileContainer>
    </Main>
  );
};

export default Profile;
