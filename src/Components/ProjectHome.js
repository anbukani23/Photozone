import React from 'react';
import '../CSS/Header.css';
import Headproject from '../Components/Headproject'; // Import the Headproject component
import weddingImg from '../Images/weddingproject.jpg';
import memoryImg from '../Images/memory.jpg';
import portraitImg from '../Images/portraitproject.jpg';
import travelImg from '../Images/travel.jpg';
import weddingImg1 from '../Images/weddingproject1.jpg';
import portraitImg1 from '../Images/portraitproject1.jpg';
import travelImg1 from '../Images/travel1.jpg';
import memoryImg1 from '../Images/bg.jpg';

const ProjectHome = () => {
  const images = [
    { src: weddingImg, alt: "Wedding", size: { width: '250px', height: '300px' } },
    { src: memoryImg, alt: "Memory", size: { width: '280px', height: '400px' } },
    { src: portraitImg, alt: "Portrait", size: { width: '300px', height: '300px' } },
    { src: travelImg, alt: "Travel", size: { width: '300px', height: '350px' } },
    { src: weddingImg1, alt: "Wedding", size: { width: '300px', height: '400px' } },
    { src: portraitImg1, alt: "Portrait", size: { width: '300px', height: '300px' } },
    { src: memoryImg1, alt: "Memory", size: { width: '250px', height: '400px' } },
    { src: travelImg1, alt: "Travel", size: { width: '250px', height: '250px' } },
  ];

  return (
    <div>
      {/* <Headproject />  */}

      <div className="projectheading">
        <h3>OUR WORKS</h3>
        <h1>Discover Our Unique And Creative Photoshoot</h1>
        <div className="images-container">
          {images.map((image, index) => (
            <div className="image-wrapper" key={index}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="background-image" 
                style={{ width: image.size.width, height: image.size.height }} 
              />
              <div className="overlay">
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectHome;
