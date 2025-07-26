import React, { useState } from 'react';
import passportPic from '../images/passport_pic.png';
import camIcon from '../images/cam.png';
// import recordIcon from '../images/record.png';
import '../CSS/BioDataForm.css';

const BioDataForm = () => {
  const [profileImage, setProfileImage] = useState(passportPic);

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="biodata-container">
      <div className="biodata">
        <img src={profileImage} className="dp" alt="Profile Picture" />
        <img
          src={camIcon}
          className="profile-selection"
          alt="Camera Icon"
          onClick={triggerFileInput}
        />
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={previewImage}
        />
        <p id="name">Pyla Chaitanya</p>
        <p id="mail">@p.chaitanyapyla@gmail.com</p>
        <div className="public">
          <p>Public</p>
          <button className="record-button">
            {/* <img src={recordIcon} className="record-icon" alt="Record" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BioDataForm;