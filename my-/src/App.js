import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CheckedTopicsProvider } from "./CheckedTopicsContext";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Subjects from "./components/Subjects";
import MWADetails from "./components/MWADetails";
import Attendence from './components/Attendence';
import Internal from "./components/Internal-Marks";
import Faculty from "./components/Faculty";
import Complaint from "./components/Complaint";
// Import other components as needed

const App = () => {
  return (
    <CheckedTopicsProvider>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/Attendence" element={<Attendence/>}/>
              <Route path="/mwa-details" element={<MWADetails />} />
              <Route path="/internal-marks" element={<Internal/>}/>
              <Route path="/faculty" element={<Faculty/>}/>
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/complaint" element={<Complaint/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </CheckedTopicsProvider>
  );
};

export default App;