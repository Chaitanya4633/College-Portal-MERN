import React, { useState } from "react";
import shuffleIcon from "../images/suffle.png";
import gfgIcon from "../images/gfg.png";
import youtubeIcon from "../images/youtube.png";
import "../CSS/MWADetails.css";
import { useCheckedTopics } from "../CheckedTopicsContext";

export const mwaUnits = [
  {
    id: "unit1",
    title: "Unit 1",
    concepts: [
      "Introduction to MERN, MERN Components, Serverless Hello World Application",
      "ES6, DOM, JSON, Installation",
      "React Basics: Introduction, Virtual DOM, Components in React, Tradeoffs",
      "using JSX, React Project Structure, State, Component Communication",
      "One-way data flow, Rendering and Life Cycle methods",
    ],
    mappedCO: "CO1, CO2",
  },
  {
    id: "unit2",
    title: "Unit 2",
    concepts: [
      "Updating React Components, Creating a Newsfeed",
      "Forms, Libraries & Routing: Working with Forms & Third Party libraries",
      "Routing: Redux: Application Architecture, Integrating Redux with React",
      "Node.js: Getting Started with Node.js, Using Events, Listeners, Timers, and Callbacks in Node.js",
      "Handling Data I/O in Node.js, Accessing the File System from Node.js",
    ],
    mappedCO: "CO1, CO2",
  },
  {
    id: "unit3",
    title: "Unit 3",
    concepts: [
      "Implementing HTTP Services in Node.js",
      "Express with Node.js, Routes, Request and Response objects",
      "Template engine, Understanding middleware, Query middleware",
      "Serving static files, Handling POST body data, Cookies, Sessions",
      "Authentication",
    ],
    mappedCO: "CO1, CO3",
  },
  {
    id: "unit4",
    title: "Unit 4",
    concepts: [
      "MongoDB: Understanding NoSQL and MongoDB",
      "Getting Started with MongoDB",
      "Getting Started with MongoDB and Node.js, Manipulating MongoDB Documents from Node.js",
      "Accessing MongoDB from Node.js",
      "Advanced MongoDB Queries and Indexing",
    ],
    mappedCO: "CO1, CO3, CO4",
  },
  {
    id: "unit5",
    title: "Unit 5",
    concepts: [
      "Full-Stack Integration with MERN Stack",
      "Deploying MERN Applications",
      "Optimizing MERN Applications for Performance",
      "Security Best Practices in MERN Stack",
      "Scaling MERN Applications",
    ],
    mappedCO: "CO1, CO2, CO4",
  },
];

const MWADetails = () => {
  const { toggleTopic } = useCheckedTopics();
  const units = mwaUnits;

  const [visibleSections, setVisibleSections] = useState({
    key: false,
    note: false,
    unit1: false,
    unit2: false,
    unit3: false,
    unit4: false,
    unit5: false,
  });

  const [checkedState, setCheckedState] = useState({});

  const toggleHighlights = (section) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (unitId, topicIndex, topic) => {
    const key = `${unitId}-${topicIndex}`;
    setCheckedState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    toggleTopic(unitId, topicIndex, topic);
  };

  return (
    <div className="mwa-details">
      <h2>Modern Web Applications Course</h2>
      <br />
      <p>
        This course is designed for people who want to learn Modern Web Applications from A to Z. Upon successful completion of the course, the student will be able to build full-stack web applications using React, Express, and MongoDB, manage components efficiently, integrate APIs, and ensure scalability and performance.
      </p>

      {/* Highlights Section */}
      <div className="highlights">
        <button className="key" onClick={() => toggleHighlights("key")}>
          Key Highlights
        </button>
        <div
          id="highlights-content-key"
          className="highlights-content"
          style={{ display: visibleSections.key ? "block" : "none" }}
        >
          <p>
            1) Understand core concepts of both the frontend and backend technologies. <br /><br />
            2) Apply Express JS, React JS which are used extensively to handle both the 
               Front-end and Back-end development processes. <br /><br />
            3) Construct server-side web applications by applying Node.js elements<br /><br />
            4) Build applications for accessing data using MongoDB 
          </p>
        </div>

        <button className="note" onClick={() => toggleHighlights("note")}>
          Notes
        </button>
        <div
          id="highlights-content-note"
          className="highlights-content"
          style={{ display: visibleSections.note ? "block" : "none" }}
        >
          <h3 className="book">
            Syllabus Copy [contains topics of each and every unit]
            <a href="/Syllabus-Sheet.pdf" download="Syllabus-Sheet.pdf">
              <button type="button" className="download">Download</button>
            </a>
          </h3>
          <h3 className="book">
            3 Previous Year Question Papers @2023 @2022 @2021
            <a href="/path-to-papers.pdf" download="papers.pdf">
              <button type="button" className="download">Download</button>
            </a>
          </h3>
          <div className="all-units-pdfs">
            <h3 className="book">All Units PDFs</h3>
            <div className="unit-list">
              {units.map((unit) => (
                <div key={unit.id} className="unit-item">
                  <span>{unit.title}</span>
                  <a href={`/${unit.id}.pdf`} download={`${unit.id}.pdf`}>
                    <button type="button" className="download">Download</button>
                  </a>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="progress">
        <div className="progress-left">
          <h3>Topics covered: {Object.keys(checkedState).length}/50</h3>
        </div>
        <div className="progress-right">
          <img src={shuffleIcon} className="suffle-img" alt="Shuffle" />
          <button className="revision-button">Show Revision</button>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="syllabus">
        {units.map((unit) => (
          <div key={unit.id}>
            <button className={unit.id} onClick={() => toggleHighlights(unit.id)}>
              {unit.title}
            </button>
            <div
              id={`highlights-content-${unit.id}`}
              className="highlights-content"
              style={{ display: visibleSections[unit.id] ? "block" : "none" }}
            >
              <table>
                <thead>
                  <tr>
                    <th className="Status">STATUS</th>
                    <th>PROBLEM</th>
                    <th>ARTICLE</th>
                    <th>YOUTUBE</th>
                    <th>REVISION</th>
                  </tr>
                </thead>
                <tbody>
                  {unit.concepts.map((concept, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          checked={checkedState[`${unit.id}-${index}`] || false}
                          onChange={() => handleCheckboxChange(unit.id, index, concept)}
                        />
                      </td>
                      <td>{concept}</td>
                      <td>
                        <a
                          href="https://www.geeksforgeeks.org/web-development/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={gfgIcon} alt="GeeksforGeeks" />
                        </a>
                      </td>
                      <td>
                        <a
                          href="https://youtu.be/zB29znClyBs?si=E3VXUEhCWUzvGp1X"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={youtubeIcon} alt="YouTube" />
                        </a>
                      </td>
                      <td>{index === 0 ? "No" : "Yes"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MWADetails;
