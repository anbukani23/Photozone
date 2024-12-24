// import React from 'react';

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>Information about us...</p>
//     </div>
//   );
// };

// export default About;
import React, { useState, useEffect, useRef } from 'react';
import aboutImage from '../Images/aboutimage.jpg';
import bestphotographer from '../Images/bestphotographer.jpg';
import '../CSS/Header.css';
import Footer from '../Components/Footer'
import team1 from '../Images/team1.jpg';
import team2 from '../Images/team2.jpg';
import team3 from '../Images/team3.jpg';
import team4 from '../Images/team4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Headabout from '../Components/Headabout'; // Import Headabout

const TeamMember = ({ image, name, title, description, facebookUrl, twitterUrl, instagramUrl }) => (
  <div className="team-member">
    <img src={image} alt={name} />
    <div className="content">
      <p><b>{name}</b></p>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="social-icons">
        {facebookUrl && (
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="facebook-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        )}
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="twitter-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
        {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="instagram-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      image: team1,
      name: 'Lucifer Jhones',
      title: 'Photographer',
      description: 'The intangible part of photography...',
      facebookUrl: 'https://facebook.com/example1',
      twitterUrl: 'https://twitter.com/example1',
      instagramUrl: 'https://instagram.com/example1',
    },
    {
      image: team2,
      name: 'Jessie Joselin',
      title: 'Videographer',
      description: 'The intangible part of Videography...',
      facebookUrl: 'https://facebook.com/example2',
      twitterUrl: 'https://twitter.com/example2',
      instagramUrl: 'https://instagram.com/example2',
    },
    {
      image: team3,
      name: 'Richard Archer',
      title: 'Retoucher',
      description: 'The intangible part of Retoucher...',
      facebookUrl: 'https://facebook.com/example3',
      twitterUrl: 'https://twitter.com/example3',
      instagramUrl: 'https://instagram.com/example3',
    },
    {
      image: team4,
      name: 'April Ryan',
      title: 'Editor',
      description: 'The intangible part of Editor...',
      facebookUrl: 'https://facebook.com/example4',
      twitterUrl: 'https://twitter.com/example4',
      instagramUrl: 'https://instagram.com/example4',
    },
  ];

  return (
    <div>
      <p style={{ textAlign: 'center', fontSize: '20px',color:'orange' }}>OUR TEAM</p>
      <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Creative Photographer and Videographer</h1>
      <div className="team-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      });
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounting = () => {
    const targetCounts = [35, 45, 100];

    const incrementCount = (setCount, target) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count++;
          setCount(count);
        } else {
          clearInterval(interval);
          setCount(target);
        }
      }, 50);
    };

    incrementCount(setCount1, targetCounts[0]);
    incrementCount(setCount2, targetCounts[1]);
    incrementCount(setCount3, targetCounts[2]);
  };

  return (
    <div>
      <Headabout /> {/* Include Headabout component here */}
      <div className="container">
        <div className="aboutimage" data-aos="fade-right">
          <img className="aboutimage1" src={aboutImage} alt="About Us 1" />
          <img className="aboutimage3" src={bestphotographer} alt="Best Photographer" />
        </div>

        <div className='aboutus'>
          <div className="para">
            <div className='para1'>
              <p>ABOUT US</p>
              <h1>We Are Creative and Professional Photographers</h1>
              <p className='line1'>A Photographer is responsible for capturing moments and telling stories through images.</p>
              <p className='line2'>They collaborate with art teams, understand project requirements, and develop concepts accordingly.</p>
              <p className='line3'>Photographers take photographs, process them using various editing methods, and continuously strive to improve image quality.</p>
            </div>

            <div className='checkbox'>
              <div>
                <i className="fa fa-check custom-check-icon me-3"></i> Quality Products
              </div>
              <div>
                <i className="fa fa-check custom-check-icon me-3"></i> Online Order
              </div>
              <div className="right-aligned">
                <div>
                  <i className="fa fa-check custom-check-icon me-3"></i> Custom Products
                </div>
                <div>
                  <i className="fa fa-check custom-check-icon me-3"></i> Home Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text'>
        <p style={{color:'orange'}}>Why Choose Us!</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 className="display-6 mb-5">The Leading Photo Studio In The Country</h1>
        </div>
      </div>

      <div className="container" ref={countRef}>
        <div className="box1">
          <div style={{ textAlign: 'center', fontSize: '20px', fontFamily: 'cursive' }}>
            <h1>{count1}</h1>
          </div>
          <div>
            <h4 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '10px', fontFamily: 'serif', height: '60px' }}>Award Winning</h4>
          </div>
          <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
        </div>

        <div className="box2">
          <h1 style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'cursive' }}>{count2}</h1>
          <h4 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px', fontFamily: 'serif' }}>Years Experience</h4>
          <span>Aliqu diam amet diam amet eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
        </div>

        <div className="box3">
          <h1 style={{ textAlign: 'center', fontSize: '30px', fontFamily: 'cursive' }}>{count3}</h1>
          <h4 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px', fontFamily: 'serif' }}>Happy Clients</h4>
          <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</span>
        </div>
      </div>
      <br />
      <br />
      
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;

