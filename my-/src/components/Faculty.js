import React from "react";
import "../CSS/Faculty.css"
const FacultyTable = () => {
  // Faculty data extracted from your input
  const facultyData = [
    { code: "20IT361", subName: "Machine Learning Techniques", facultyName: "Mrs. D.PADMAI (ADJUNCT FACULTY, DBS TECHNOLOGIES, HYDERABAD)" },
    { code: "20IT362", subName: "Modern Web Applications", facultyName: "Mr. CHILPANEETH" },
    { code: "20E5162", subName: "Internet of Things", facultyName: "Dr. V.S.D. REKHA" },
    { code: "20IT461D", subName: "Artificial Intelligence and Expert Systems", facultyName: "Dr. Y.PADMA" },
    { code: "20IT401D", subName: "Cloud Computing (Room. No. 30)", facultyName: "Dr. R.V. SUBBA RAO" },
    { code: "20ME261B", subName: "Human Factors in Engineering", facultyName: "Mrs. NAGA SWAMY SRI" },
    { code: "20IT361", subName: "Machine Learning Lab", facultyName: "Mrs. K.SWARUPA RANI" },
    { code: "20IT362", subName: "Full Stack Technologies Lab", facultyName: "Mr. GRESHMA" },
    { code: "20E5162", subName: "Internet of Things Lab", facultyName: "Dr. B.SURYAPRASAD" },
    { code: "20IT362", subName: "Mobile Application Development", facultyName: "Mr. I.M.V KRISHNA" },
  ];

  return (
    <div className="faculty-table-container">
      <h2>Faculty Information</h2>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Subject Name</th>
            <th>Faculty Name</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((faculty, index) => (
            <tr key={index}>
              <td>{faculty.code}</td>
              <td>{faculty.subName}</td>
              <td>{faculty.facultyName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyTable;