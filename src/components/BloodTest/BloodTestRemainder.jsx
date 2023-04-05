import React, { useState } from 'react';
import "./BloodTestRemainder.css"
function BloodTestReminder() {
  const [bloodTests, setBloodTests] = useState([]);
  const [testType, setTestType] = useState('');
  const [testDate, setTestDate] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [clinicLocation, setClinicLocation] = useState('');

  const handleBloodTestSubmit = (event) => {
    event.preventDefault();
    setBloodTests([
      ...bloodTests,
      {
        testType: testType,
        testDate: testDate,
        clinicName: clinicName,
        clinicLocation: clinicLocation,
      },
    ]);
    setTestType('');
    setTestDate('');
    setClinicName('');
    setClinicLocation('');
  };

  return (
    <div>
      <h1>Blood Test Reminder App</h1>
      <form onSubmit={handleBloodTestSubmit}>
        <label>
          Test Type:
          <input
            type="text"
            value={testType}
            onChange={(event) => setTestType(event.target.value)}
          />
        {/* </label> */}
        {/* <label> */}
          Test Date:
          <input
            type="date"
            value={testDate}
            onChange={(event) => setTestDate(event.target.value)}
          />
        {/* </label> */}
        <label>
          Clinic Name:
          <input
            type="text"
            value={clinicName}
            onChange={(event) => setClinicName(event.target.value)}
          />
        {/* </label> */}
        {/* <label> */}
          Clinic Location:
          <input
            type="text"
            value={clinicLocation}
            onChange={(event) => setClinicLocation(event.target.value)}
          />
          </label>
        </label>
        <button type="submit">Schedule Blood Test</button>
      </form>
      <h2>Blood Test Schedule</h2>
      {bloodTests.map((bloodTest, index) => (
        <div key={index}>
          <p>Test Type:- {bloodTest.testType}</p>
          <p>Test Date:- {bloodTest.testDate}</p>
          <p>Clini Name:- {bloodTest.clinicName}</p>
          <p>Clinic Location:- {bloodTest.clinicLocation}</p>
        </div>
      ))}
    </div>
  );
}

export default BloodTestReminder;
