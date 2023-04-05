import React, { useState } from 'react';
import './MedicalHistory.css';

function MedicalHistory() {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [newHistory, setNewHistory] = useState('');

  const handleHistorySubmit = (event) => {
    event.preventDefault();
    setMedicalHistory([...medicalHistory, newHistory]);
    setNewHistory('');
  };

  return (
    <div className="medical-history">
      <h1>Medical History</h1>
      <form onSubmit={handleHistorySubmit}>
        <label>
          New History:
          <textarea
            value={newHistory}
            onChange={(event) => setNewHistory(event.target.value)}
            rows="5"
            cols="30"
          ></textarea>
        </label>
        <button type="submit">Add</button>
      </form>
      <h2>Medical History</h2>
      {medicalHistory.map((history, index) => (
        <div key={index} className="history-item">
          <p>{history}</p>
        </div>
      ))}
    </div>
  );
}

export default MedicalHistory;
