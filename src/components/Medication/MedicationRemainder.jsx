import React, { useState } from 'react';
import "./MedicationRemainder.css";
function MedicationReminder() {
  const [medications, setMedications] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');
  const [instructions, setInstructions] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleMedicationSubmit = (event) => {
    event.preventDefault();
    setMedications([
      ...medications,
      {
        medicationName: medicationName,
        dosage: dosage,
        instructions: instructions,
        reminderTime: reminderTime,
      },
    ]);
    setMedicationName('');
    setDosage('');
    setInstructions('');
    setReminderTime('');
  };

  return (
    <div>
      <h1>Medication Reminder</h1>
      <form onSubmit={handleMedicationSubmit}>
        <label>
          Medication Name:
          <input
            type="text"
            value={medicationName}
            onChange={(event) => setMedicationName(event.target.value)}
          />
        {/* </label> */}
        {/* <label> */}
          Dosage:
          <input
            type="text"
            value={dosage}
            onChange={(event) => setDosage(event.target.value)}
          />
        {/* </label> */}
        {/* <label> */}
          Instructions:
          <input
            type="text"
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
          />
        {/* </label> */}
        {/* <label> */}
          Reminder Time:
          <input
            type="time"
            value={reminderTime}
            onChange={(event) => setReminderTime(event.target.value)}
          />
        </label>
        <button type="submit">Add Medication</button>
      </form>
      <h2>Medication Schedule</h2>
      {medications.map((medication, index) => (
        <div key={index}>
          <p>Name:- {medication.medicationName}</p>
          <p>Dosage:- {medication.dosage}Dosage</p>
          <p>Instructions:- {medication.instructions}</p>
          <p>ReminderTime:- {medication.reminderTime}</p>
        </div>
      ))}
    </div>
  );
}

export default MedicationReminder;
