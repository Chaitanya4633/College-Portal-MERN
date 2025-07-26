import React from "react";
import { useCheckedTopics } from "../CheckedTopicsContext";
import "../CSS/Attendence.css";

const Attendance = () => {
  const { checkedTopics } = useCheckedTopics();
  const totalTopics = 25; 

  const attendedTopics = Object.keys(checkedTopics).length;
  const attendancePercentage = totalTopics > 0 ? ((attendedTopics / totalTopics) * 100).toFixed(2) : 0;

  return (
    <div className="attendance-container">
      <h2>Attendance Summary</h2>
      <div className="attendance-stats">
        <h3>Modern Web Applications</h3>
        <p>
          Attended Topics: {attendedTopics} / {totalTopics}
        </p>
        <p>Attendance Percentage: {attendancePercentage}%</p>
        {attendancePercentage < 75 && (
          <p className="warning">
            Warning: Attendance is below 75%. You need to attend{" "}
            {Math.ceil((0.75 * totalTopics - attendedTopics))} more topics to reach 75%.
          </p>
        )}
      </div>
      <div className="attended-topics">
        <h3>Attended Topics</h3>
        {attendedTopics === 0 ? (
          <p>No topics attended yet.</p>
        ) : (
          <ul>
            {Object.values(checkedTopics).map((topic, index) => (
              <li key={index}>{topic.topic}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Attendance;