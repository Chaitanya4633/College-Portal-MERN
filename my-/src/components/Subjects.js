import React from "react";
import "../CSS/Subjects.css";
import { useNavigate } from "react-router-dom";

const subjects = [
  { name: "Modern Web Applications", description: "After learning MWA, You can build full-stack web applications using React, Express, and MongoDB, managing components and APIs efficiently." },
  { name: "ML", description: "After learning ML, You can preprocess data, apply algorithms, optimize models, and deploy intelligent systems for predictions and pattern recognition." },
  { name: "Artificial Intelligence", description: "After learning AI, I can develop intelligent systems, automate tasks, optimize decision-making, and implement algorithms for problem-solving and pattern recognition." },
  { name: "Internet Of Things", description: "After learning IoT, You can develop smart systems, integrate sensors, analyze data, and enable real-time automation for connected devices." },
  { name: "Human Factors", description: "We learn about managing hardware and software resources to ensure efficient execution of processes and provide services to applications." },
  { name: "Constitution Of India", description: "After learning HFE (Human Factors Engineering), I can optimize user experience, enhance system usability, improve safety, and design human-centered solutions." },
  { name: "web-technologies-Lab", description: "Practical skills in designing, developing, and deploying web applications using various programming languages and frameworks." },
  { name: "Operating-Systems-Lab", description: "We learn to implement and experiment with OS concepts like process management and system calls through hands-on exercises." }
];

const Labs = [
  { name: "Full Stack Technologies Lab", description: "After completing the MWA lab, You can develop full-stack web applications using React, Express, and MongoDB, manage components efficiently, integrate APIs, and ensure scalability and performance." },
  { name: "Machine Learning Lab", description: "After completing the ML lab, I can preprocess data, implement machine learning algorithms, train and optimize models, analyze results, and develop predictive systems." },
  { name: "Internet of Things Lab", description: "IoT connects devices to the internet, enabling real-time data exchange, automation, and smart system integration for improved efficiency and decision-making." }
];

const Subjects = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleMWAClick = () => {
    navigate("/mwa-details"); // Navigate to MWADetails component
  };

  return (
    <div className="subjects-container">
      <div className="subjects-search">
        <input type="text" placeholder="Search A Subject" />
      </div>

      {/* Course Work Section */}
      <h1 className="Headers">Course Work</h1>
      <div className="courses">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="subject"
            onClick={subject.name === "Modern Web Applications" ? handleMWAClick : undefined}
          >
            <h2>{subject.name}</h2>
            <p>{subject.description}</p>
          </div>
        ))}
      </div>

      {/* Labs Section */}
      <h1 className="Headers">Labs</h1>
      <div className="courses">
        {Labs.map((lab, index) => (
          <div
            key={index}
            className="subject"
            onClick={lab.name === "Full Stack Technologies Lab" ? handleMWAClick : undefined}
          >
            <h2>{lab.name}</h2>
            <p>{lab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;