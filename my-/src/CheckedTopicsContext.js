import React, { createContext, useState, useContext } from "react";

// Create the context
const CheckedTopicsContext = createContext();

// Create a provider component
export const CheckedTopicsProvider = ({ children }) => {
  const [checkedTopics, setCheckedTopics] = useState({});

  // Function to toggle a topic's checked status
  const toggleTopic = (unitId, topicIndex, topic) => {
    setCheckedTopics((prev) => {
      const key = `${unitId}-${topicIndex}`;
      const newCheckedTopics = { ...prev };
      if (newCheckedTopics[key]) {
        delete newCheckedTopics[key]; // Uncheck: remove from state
      } else {
        newCheckedTopics[key] = { unitId, topicIndex, topic }; // Check: add to state
      }
      return newCheckedTopics;
    });
  };

  return (
    <CheckedTopicsContext.Provider value={{ checkedTopics, toggleTopic }}>
      {children}
    </CheckedTopicsContext.Provider>
  );
};

// Custom hook to use the context
export const useCheckedTopics = () => useContext(CheckedTopicsContext);