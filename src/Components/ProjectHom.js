import React from 'react';
import { Link } from 'react-router-dom'; 
import '../CSS/Header.css';
import Headproject from '../Components/Headproject'; 
import weddingImg from '../Images/weddingproject.jpg';
import memoryImg from '../Images/memory.jpg'; 
import portraitImg from '../Images/portraitproject.jpg';
import travelImg from '../Images/travel.jpg';
import weddingImg1 from '../Images/hero-1.jpg';
import portraitImg1 from '../Images/portraitproject1.jpg';
import travelImg1 from '../Images/travel1.jpg';
import memoryImg1 from '../Images/bg.jpg';
import Footer from '../Components/Footer'
const ProjectHom = () => {
  const projects = [
    { id: 1, src: weddingImg, alt: "Wedding" },
    { id: 2, src: memoryImg, alt: "Memory" },
    { id: 3, src: portraitImg, alt: "Portrait" },
    { id: 4, src: travelImg, alt: "Travel" },
    { id: 5, src: weddingImg1, alt: "Wedding" },
    { id: 6, src: portraitImg1, alt: "Portrait" },
    { id: 7, src: memoryImg1, alt: "Memory" },
    { id: 8, src: travelImg1, alt: "Travel" },
  ];

  return (
    <div>
      {/* <Headproject />  */}
      
      <div className="projectheading">
        <br/>
        <br/>
        <h3 style={{color:'orange'}}>OUR WORKS</h3>
        <h1>Discover Our Unique And Creative Photoshoot</h1>
        <br/>
        <div className="images-container">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} className="image-wrapper" key={project.id}>
              <img 
                src={project.src} 
                alt={project.alt} 
                className="background-image" 
              />
              <div className="overlay">
                <p>{project.alt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProjectHom;
