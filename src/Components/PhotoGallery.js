import React from 'react';
import '../CSS/Header.css'; // Adjust this if necessary
import about1 from '../Images/about-1.jpg';
import baby from '../Images/baby.jpg';
import birthday from '../Images/birthday.jpg';
import birthday2 from '../Images/birthday2.jpg';
import marriage1 from '../Images/marriage1.jpg'; 
import pregnancy from '../Images/pregnancy.jpg';
import wedding from '../Images/wedding.jpg';
import housewarming from '../Images/photohome.jpg';
import manitary from '../Images/manitary.jpg'

const PhotoGallery = () => {
  const images = [
    about1,
    baby,
    birthday,
    birthday2,
    marriage1,
    pregnancy,
    wedding,
    housewarming,
    manitary
  ];

  return (
    <div className="container1">
      <div className="photoimage">
        {images.map((src, index) => (
          <div key={index} className="card">
            <img src={src} alt={`Gallery Image ${index}`} className="img-fluid" />
            <div className="card-content">
              <h4></h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

