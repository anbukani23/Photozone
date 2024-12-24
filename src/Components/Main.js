import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import hero1 from '../Images/hero-1.jpg';
import hero2 from '../Images/hero-2.jpg';
import hero3 from '../Images/hero-3.jpg';
import hero4 from '../Images/hero-4.jpg';

import '../CSS/Header.css'; // Assuming you save your CSS in Header.css

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <div 
        className="heading" 
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3 style={{ color: 'rgb(235, 158, 17)' }}>WELCOME TO PHOTOZONE</h3>
        <br />
        <h1 
          className="animate__animated animate__slideInLeft" 
          style={{ fontSize: '55px', fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          Wedding and Portrait Studio Based in Chennai.
        </h1>
        <br />
        <p style={{ fontSize: 'large', fontFamily: 'sans-serif' }}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
        </p>
        <br />
        <button className="button">Explore More</button>
      </div>
      <div className="image">
        <div className="heroimage animate__animated animate__slideInLeft" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <img src={hero1} alt="Hero Image 1" style={{ width: '300px' }} />
          <img src={hero2} alt="Hero Image 2" />
          {/* Uncomment the following images if needed */}
          {/* <img src={hero3} alt="Hero Image 3" style={{ marginLeft: '100px' }} />
          <img src={hero4} alt="Hero Image 4" style={{ marginLeft: '100px' }} /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;

