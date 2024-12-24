import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Pages from './Pages/Pages';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import BookSession from './Components/Booksession'; // Ensure correct casing
import Booking from './Components/Booking'; // Import the Booking component



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booksession" element={<BookSession />} /> {/* Ensure this is correct */}
        <Route path="/booking" element={<Booking />} /> {/* Add the Booking route */}

      </Routes>
    </Router>
  );
};

export default App;

 




