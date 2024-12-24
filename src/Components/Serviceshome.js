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

const Services = () => {
    const services = [
        { title: 'MARRIAGE', imgSrc: marriageImage, alt: 'Marriage', size: { width: '300px', height: '400px' } },
        { title: 'PORTRAIT', imgSrc: portraitImage, alt: 'Portraits', size: { width: '300px', height: '500px' } },
        { title: 'FAFHION', imgSrc: fashionImage, alt: 'Fashion', size: { width: '300px', height: '400px' } },
        { title: 'EDITORIAL', imgSrc: editorialImage, alt: 'Editorial', size: { width: '270px', height: '500px' } },
        { title: 'PREGNANCY', imgSrc: pregnancyImage, alt: 'Pregnancy', size: { width: '290px', height: '400px' } },
        { title: 'HOME CERONOMY', imgSrc: homeceronomyImage, alt: 'Home Ceremony', size: { width: '500px', height: '400px' } },
        { title: 'BIRTHDAY', imgSrc: birthdayImage, alt: 'Birthday', size: { width: '350px', height: '360px' } },
    ];

    return (
        <div>
            {/* <Headservice /> */}
            <div>
                <div className="ourservice">
                    <br />
                    <h3 style={{ fontSize: '20px', color: 'orange' }}>OUR SERVICES</h3>
                    <br />
                    <h1>We Provide Best Professional Services</h1>
                </div>
                <div className="img">
                    {services.map((service, index) => (
                        <div className="img-container" key={index}>
                            <img 
                                src={service.imgSrc} 
                                alt={service.alt} 
                                style={{ width: service.size.width, height: service.size.height }} 
                            />
                            <div className="overlay">{service.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
