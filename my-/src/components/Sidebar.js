import React from 'react';
import { Link } from 'react-router-dom';
import graduateImage from '../images/graduated.png'; 
import '../CSS/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={graduateImage} alt="Graduate" className="graduate" />
      <div className="top">
        <div className="profile">
          <Link to="/">Profile</Link>
        </div>
      </div>
      <hr />
      <div className="middle">
        <div className="profile">
          <Link to="/subjects">Subjects</Link>
        </div>
        <div className="profile">
          <Link to="/Attendence">Attendence</Link>
        </div>
        <div className="profile">
          <Link to="/internal-marks">Internal Marks</Link>
        </div>
        <div className="profile">
          <Link to="/faculty">Faculty</Link>
        </div>
        <div className="profile">
          <Link to="/complaint">Complaint</Link> 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;