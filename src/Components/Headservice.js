import React from 'react';
import '../CSS/Header.css';
import aboutImage from '../Images/cutebaby.jpg';
import babyImage from '../Images/weddingphoto.jpg';

const Headservice = () => {
  return (
    <div className="container3">
      <div className="service">
      <h1 style={{ fontSize: '50px' }}>Our Services</h1>
      {/* Animation applied here */}
        <p>
          <span className="highlight">Home</span>/
          <span className="highlight">Pages</span>/
          Our Services
        </p>      </div>
      <div className="imager">
        <img src={aboutImage} alt="Service Image 1" />
        <img src={babyImage} alt="Service Image 2" />
      </div>
    </div>
  );
};

export default Headservice;
