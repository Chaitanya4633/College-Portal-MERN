import React, { useState } from "react";

const Complaint = () => {
  const [complaint, setComplaint] = useState("");
  const [submittedComplaints, setSubmittedComplaints] = useState([]);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!complaint.trim()) {
      setError("Please enter a complaint before submitting.");
      return;
    }

    const newComplaint = {
      id: Date.now(), // Unique ID using timestamp
      text: complaint,
      date: new Date().toLocaleString(),
    };

    setSubmittedComplaints([newComplaint, ...submittedComplaints]);
    setComplaint("");
    setError("");
  };

  // Handle complaint deletion
  const handleDelete = (id) => {
    setSubmittedComplaints(submittedComplaints.filter(complaint => complaint.id !== id));
  };

  return (
    <div className="complaint-container">
      <h2>Submit a Complaint</h2>
      
      {/* Complaint Form */}
      <form onSubmit={handleSubmit} className="complaint-form">
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Enter your complaint here..."
          rows="4"
          cols="50"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Submit Complaint</button>
      </form>

      {/* Display Submitted Complaints */}
      {submittedComplaints.length > 0 && (
        <div className="complaint-list">
          <h3>Submitted Complaints</h3>
          <ul>
            {submittedComplaints.map((item) => (
              <li key={item.id} className="complaint-item">
                <div className="complaint-text">
                  <p>{item.text}</p>
                  <span className="complaint-date">{item.date}</span>
                </div>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {submittedComplaints.length === 0 && (
        <p className="no-complaints">No complaints submitted yet.</p>
      )}
    </div>
  );
};

export default Complaint;