// import React from 'react';

// const Booksession = () => {
//   return (
//     <div>
//       boook
//     </div>
//   );
// };

// export default Booksession;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Header.css'; // Ensure to import your CSS file
import weddingImage from '../Images/bookwedding.jpg';
import babyImage from '../Images/bookbirthday.jpg';
import pregnancyImage from '../Images/bookpregnancy.jpg';
import Footer from '../Components/Footer'

const BookingSession = ({ image, title, duration, description }) => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };

  return (
    <div className="bookonline">
      <img src={image} alt={title} />
      <h3 className="title">{title}</h3>
      <span className="duration">{duration}</span>
      <p className="description">{description}</p>
      <button className="talk-button" onClick={handleBookingClick}>
        Book Now
      </button>
    </div>
  );
};

const Booksession = () => {
  return (
    <div className="booking-container">
      <BookingSession 
        image={weddingImage}
        title="Wedding Collection"
        duration="1hr"
        description="$150"
      />
      <BookingSession 
        image={babyImage}
        title="Baby Photography"
        duration="2hr 30 min"
        description="$150"
      />
      <BookingSession
        image={pregnancyImage}
        title="Pregnancy Photography"
        duration="1hr"
        description="$200"
      />
      <Footer />
    </div>
  );
};

export default Booksession;
