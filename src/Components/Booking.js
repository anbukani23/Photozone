// src/Pages/Booking.js
import React from 'react';
import Calenter from './Calenter';

const Booking = () => {
  return (
    <div>
        <br/>
      <h2 style={{marginLeft:'30px', color:'orange'}}>Wedding Collection</h2>
      
      <p style={{marginLeft:'20px'}}>Check out our availability and book the date and time that works for you</p>


      <Calenter />
    </div>
  );
};

export default Booking;
