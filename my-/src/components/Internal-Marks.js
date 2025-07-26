import React, { useState } from "react";
import { useCheckedTopics } from "../CheckedTopicsContext";

const subjects = [
  { name: "Modern Web Applications", maxMarks: 30 },
  { name: "ML", maxMarks: 30 },
  { name: "Artificial Intelligence", maxMarks: 30 },
  { name: "Internet Of Things", maxMarks: 30 },
  { name: "Human Factors", maxMarks: 30 },
  { name: "Constitution Of India", maxMarks: 30 },
  { name: "web-technologies-Lab", maxMarks: 20 },
  { name: "Operating-Systems-Lab", maxMarks: 20 },
];

const labs = [
  { name: "Full Stack Technologies Lab", maxMarks: 20 },
  { name: "Machine Learning Lab", maxMarks: 20 },
  { name: "Internet of Things Lab", maxMarks: 20 },
];

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

const InternalMarks = ({ adminUsername }) => {
  const { checkedTopics } = useCheckedTopics();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userType, setUserType] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [marks, setMarks] = useState({});
  const [tempMarks, setTempMarks] = useState({});

  const totalMWATopics = 25;
  const attendedMWATopics = Object.keys(checkedTopics).length;

  const calculateMWAMarks = (maxMarks) => {
    const percentage = totalMWATopics > 0 ? (attendedMWATopics / totalMWATopics) * 100 : 0;
    return Math.round((percentage / 100) * maxMarks);
  };

  React.useEffect(() => {
    const initialMarks = {
      "Modern Web Applications": calculateMWAMarks(30),
      "Full Stack Technologies Lab": calculateMWAMarks(20),
    };
    setMarks(initialMarks);
    setTempMarks(initialMarks);
  }, [checkedTopics]);

  const handleAuthentication = () => {
    if (userType === "admin") {
      if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        setIsAuthenticated(true);
        setIsAdmin(true);
      } else {
        alert("Invalid username or password!");
      }
    } else if (userType === "student") {
      setIsAuthenticated(true);
      setIsAdmin(false);
    }
  };

  const handleMarksChange = (courseName, value) => {
    if (isAdmin) {
      const maxMarks = subjects.find(s => s.name === courseName)?.maxMarks || 
                      labs.find(l => l.name === courseName)?.maxMarks || 0;
      const numValue = value === '' ? 0 : Math.min(Math.max(0, Number(value)), maxMarks);
      setTempMarks((prev) => ({
        ...prev,
        [courseName]: numValue,
      }));
    }
  };

  const handleSubmitMarks = () => {
    setMarks({ ...tempMarks });
    // Force a re-render by updating state
    setTempMarks({ ...tempMarks });
    alert("Marks updated successfully!");
  };

  const allCourses = [
    ...subjects.map((subject) => ({
      name: subject.name,
      maxMarks: subject.maxMarks,
      marks: marks[subject.name] || 0,
    })),
    ...labs.map((lab) => ({
      name: lab.name,
      maxMarks: lab.maxMarks,
      marks: marks[lab.name] || 0,
    })),
  ];

  const totalMaxMarks = allCourses.reduce((sum, course) => sum + course.maxMarks, 0);
  const totalMarks = allCourses.reduce((sum, course) => sum + (marks[course.name] || 0), 0);
  const overallPercentage = totalMaxMarks > 0 ? ((totalMarks / totalMaxMarks) * 100).toFixed(2) : 0;

  if (!isAuthenticated) {
    return (
      <div className="internal-marks-container">
        <h2>Authentication Required</h2>
        <div className="auth-form">
          <p>Are you a Student or Admin?</p>
          <div>
            <button onClick={() => setUserType("student")}>Student</button>
            <button onClick={() => setUserType("admin")}>Admin</button>
          </div>
          {userType === "admin" && (
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleAuthentication}>Login</button>
            </div>
          )}
          {userType === "student" && (
            <button onClick={handleAuthentication}>Proceed as Student</button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="internal-marks-container">
      <h2>Internal Marks Summary</h2>
      <div className="marks-stats">
        <h3>Overall Performance</h3>
        <p>Total Marks: {totalMarks} / {totalMaxMarks}</p>
        <p>Overall Percentage: {overallPercentage}%</p>
        {overallPercentage < 50 && (
          <p className="warning">
            Warning: Overall percentage is below 50%. You need to improve your performance.
          </p>
        )}
      </div>
      <div className="marks-details">
        <h3>Marks by Course</h3>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Marks</th>
              <th>Max Marks</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {allCourses.map((course) => {
              const courseMarks = isAdmin ? (tempMarks[course.name] || 0) : (marks[course.name] || 0);
              const percentage = course.maxMarks > 0 ? ((courseMarks / course.maxMarks) * 100).toFixed(2) : 0;
              return (
                <tr key={course.name}>
                  <td>{course.name}</td>
                  <td>
                    {isAdmin ? (
                      <input
                        type="number"
                        value={tempMarks[course.name] !== undefined ? tempMarks[course.name] : marks[course.name] || 0}
                        onChange={(e) => handleMarksChange(course.name, e.target.value)}
                        min="0"
                        max={course.maxMarks}
                        style={{ width: "60px" }}
                      />
                    ) : (
                      courseMarks || "Not Entered"
                    )}
                  </td>
                  <td>{course.maxMarks}</td>
                  <td>{percentage}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {isAdmin && (
          <button 
            onClick={handleSubmitMarks}
            style={{ marginTop: "20px", padding: "10px 20px" }}
          >
            Submit Marks
          </button>
        )}
      </div>
    </div>
  );
};

export default InternalMarks;