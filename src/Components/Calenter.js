import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../CSS/Header.css';

const Calenter = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setError(''); // Reset error message
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) {
      setError('Please select both date and time.');
    } else {
      setError('');
      alert(`Booking confirmed for ${date.toLocaleDateString()} at ${time}`);
    }
  };

  const handleReset = () => {
    setDate(null); // Clear the selected date
    setTime('');   // Clear the selected time
    setError('');  // Clear any error message
    setActiveStartDate(new Date()); // Reset to the current month
  };

  const isDateSelected = (date) => {
    return date.toDateString() === (date ? date.toDateString() : '').toString();
  };

  return (
    <div className="calendar-container">
      <h2>Select a Date and Time</h2>
      <div className="calendar-time-wrapper">
        <div className="calendar">
          <h3>Calendar</h3>
          <Calendar
            onChange={handleDateChange}
            value={date}
            activeStartDate={activeStartDate}
            tileClassName={({ date }) => (isDateSelected(date) ? 'selected-date' : '')}
          />
        </div>
        <div className="time-picker">
          <h3>Time Picker</h3>
          <input type="time" value={time} onChange={handleTimeChange} />
        </div>
      </div>
      
      {date && time && (
        <div className="selected-info">
          <h3>Selected Details</h3>
          <p><strong>Date:</strong> {date.toLocaleDateString()}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Service:</strong> Wedding Collection</p>
          <p><strong>Location:</strong> San Francisco</p>
          <p><strong>Duration:</strong> 1 hour</p>
          <p><strong>Description:</strong> Introductory Meeting</p>
        </div>
      )}

      <div className="actions">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <button className="reset-button" onClick={handleReset}>Reset</button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Calenter;
