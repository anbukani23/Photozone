import React from 'react';
import '../CSS/Header.css';
import aboutImage from '../Images/cutebaby.jpg';
import babyImage from '../Images/weddingphoto.jpg';

const Headabout= () => {
  return (
    <div className="container4">
      <div className="service">
      <h1 style={{ fontSize: '50px' }}>About Us</h1>
      {/* Animation applied here */}
        <p>
          <span className="highlight">Home</span>/
          <span className="highlight">Pages</span>/
          About Us
        </p>      </div>
      <div className="imager">
        <img src={aboutImage} alt="Service Image 1" />
        <img src={babyImage} alt="Service Image 2" />
      </div>
    </div>
  );
};

export default Headabout;
