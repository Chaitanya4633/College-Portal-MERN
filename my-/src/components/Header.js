import React from 'react';
import lightIcon from '../images/light.png'; // Correct import
import userIcon from '../images/user.png'; // Correct import
import '../CSS/Header.css';

const Header = () => {
  return (
    <div className="header">
      <button className="mentor-button">Get 1:1 Mentorship</button>
      <button className="light-button">
        <img src={lightIcon} alt="Light" className="light-img" />
      </button>
      <button className="profile-button">
        <img src={userIcon} alt="Profile" className="profile-img" />
      </button>
    </div>
  );
};

export default Header;