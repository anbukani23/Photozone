
import React from 'react';
import '../CSS/Header.css';
import marriageImage from '../Images/servicemarriage.jpg';
import portraitImage from '../Images/serviceportrait.jpg';
import fashionImage from '../Images/servicefashion.jpg';
import editorialImage from '../Images/serviceeditorial.jpg';
import birthdayImage from '../Images/servicebirthday.jpg';
import pregnancyImage from '../Images/servicepregnancy.jpg';
import homeceronomyImage from '../Images/servicehome.jpg';
import Headservice from '../Components/Headservice';
import Footer from '../Components/Footer';

const Services = () => {
    const services = [
        { title: 'MARRIAGE', imgSrc: marriageImage, alt: 'Marriage' },
        { title: 'PORTRAIT', imgSrc: portraitImage, alt: 'Portraits' },
        { title: 'FASHION', imgSrc: fashionImage, alt: 'Fashion' },
        { title: 'EDITORIAL', imgSrc: editorialImage, alt: 'Editorial'},
        { title: 'PREGNANCY', imgSrc: pregnancyImage, alt: 'Pregnancy' },
        { title: 'HOME CEREMONY', imgSrc: homeceronomyImage, alt: 'Home Ceremony' },
        { title: 'BIRTHDAY', imgSrc: birthdayImage, alt: 'Birthday' },
    ];

    return (
        <div>
            {/* <Headservice /> */}
            <div>
                <div className="ourservice">
                    <br />
                    <h3 style={{ fontSize: '15px', color: 'orange' }}>OUR SERVICES</h3>
                    <br />
                    <h1>We Provide Best Professional Services</h1>
                </div>
                <div className="services-container">
    {services.map((service, index) => (
        <div className="service-item" key={index}>
            <img 
                src={service.imgSrc} 
                alt={service.alt} 
                className="service-image" 
            />
            <h2>{service.title}</h2>
        </div>
    ))}
</div>

            </div>
            <Testimonial />
            {/* <Footer /> */}
        </div>
    );
};

const Testimonial = () => {
    const testimonials = [
        {
            name: 'MURUGAVEL',
            profession: 'Photographer',
            image: require('../Images/clientname.jpg'),
            review: 'All materials, information, photography, writings, and other creative content provided by the client for use in the preparation of and/or incorporation in the deliverables.',
        },
        {
            name: 'ANGEL',
            profession: 'Studio Profession',
            image: require('../Images/clientname1.jpg'),
            review: 'A client brief is a vital document in agency project management, serving as a foundational guide for the entire project.',
        },
        {
            name: 'RAHAVA',
            profession: 'Best studio and Photo',
            image: require('../Images/clientname2.jpg'),
            review: 'Studio and Audio of the content is used.....',
        },
        {
            name: 'SABARISH',
            profession: 'Photographer',
            image: require('../Images/clientname3.jpg'),
            review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
        },
        {
            name: 'MITHRA',
            profession: 'Photographer',
            image: require('../Images/clientname4.jpg'),
            review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
        },
    ];

    return (
        <div className="testimonial-section">
            <br/>
            <br/>
            <h1 style={{ textAlign:'center'}}>Our Clients</h1>
            <div className="testimonial-wrapper">
                <button className="scroll-button left" onClick={() => scrollTestimonials(-1)}>❮</button>
                <div className="testimonial-carousel">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-item bg-white p-4" key={index}>
                            <div className="d-flex align-items-center mb-4">
                                <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial.image} alt={testimonial.name} />
                                <div className="ms-4">
                                    <h5 className="mb-1">{testimonial.name}</h5>
                                    <span>{testimonial.profession}</span>
                                </div>
                            </div>
                            <p>{testimonial.review}</p>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scrollTestimonials(1)}>❯</button>
            </div>
        </div>
    );

    function scrollTestimonials(direction) {
        const carousel = document.querySelector('.testimonial-carousel');
        carousel.scrollBy({ left: direction * 300, behavior: 'smooth' }); // Adjust '300' for the width of your items
    }
};



  

export default Services;

