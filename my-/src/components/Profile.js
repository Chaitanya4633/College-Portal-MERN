import React, { useState } from "react";
import passportPic from "../images/Human.png";
import camIcon from "../images/cam.png";
import "../CSS/Profile.css";
import { useCheckedTopics } from "../CheckedTopicsContext";
import { mwaUnits } from "./MWADetails"; // import unit data

const Profile = () => {
  const [profileImage, setProfileImage] = useState(passportPic);
  const { checkedTopics } = useCheckedTopics();

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
    document.getElementById("fileInput").click();
  };

  return (
    <div className="Profile-Container">
      <div className="User-Details">
        <div className="profile-pic-container" onClick={triggerFileInput}>
          <img src={profileImage} alt="Profile" className="profile-pic" />
          <img src={camIcon} alt="Upload" className="cam-icon" />
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={previewImage}
            style={{ display: "none" }}
          />
        </div>
        <p>Virat Kohli</p>
        <p>18@pvpsit.ac.in</p>
      </div>

      <div className="Course-Details">
        <h2 style={{ color: "#FF5733", marginBottom: "1rem" }}>Topics Covered</h2>

        {mwaUnits.map((unit) => {
          const total = unit.concepts.length;
          const coveredTopics = Object.values(checkedTopics).filter(
            (topic) => topic.unitId === unit.id
          );
          const covered = coveredTopics.length;
          const percent = Math.round((covered / total) * 100);

          return (
            <div
              key={unit.id}
              style={{
                marginBottom: "1rem",
                backgroundColor: "#1e1e1e",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 0 8px rgba(255, 87, 51, 0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.3rem",
                }}
              >
                <span style={{ color: "#fff" }}>{unit.title}</span>
                <span style={{ color: "#ccc" }}>
                  {percent}% &nbsp; {covered}/{total}
                </span>
              </div>
              <div
                style={{
                  backgroundColor: "#333",
                  height: "6px",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    width: `${percent}%`,
                    height: "100%",
                    backgroundColor: "#FF5733",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
