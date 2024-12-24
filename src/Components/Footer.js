import React from 'react';
import '../CSS/Header.css'; // Ensure to import your CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="boxer1">
        <h1>Photozone</h1>
        <p>
          The intangible part of photography, a part that might not be immediately apparent until the photographer says something about the photograph, either orally or through writing.
        </p>
        <br/>
        <i className="fa-solid fa-location-dot"></i> 123 Street, Chennai, Tamil Nadu.
        <br />
        <br/>
        <i className="fa-solid fa-phone"></i> +0123456789
        <br /> <br/>
        <i className="fa-solid fa-envelope"></i> info@example.com
        <br />
        <div className="social-icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
      <hr/>
      
      <div className="boxer2">
        <br/>
        <h2>Quick Links</h2>
        <p>&gt; About Us</p>
        <p>&gt; Contact Us</p>
        <p>&gt; Our Services</p>
        <p>&gt; Terms & Conditions</p>
        <p>&gt; Support</p>
      </div>
    <hr/>
      <div className="boxer3">
        <br/>
        <h2>Popular Links</h2>
        <p>&gt; About Us</p>
        <p>&gt; Contact Us</p>
        <p>&gt; Our Services</p>
        <p>&gt; Terms & Conditions</p>
        <p>&gt; Support</p>
      </div>
    </div>
    
  );
};

export default Footer;
