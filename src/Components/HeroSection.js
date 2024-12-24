import React from 'react';
import '../CSS/Header.css'; // Optional: Import your CSS file
import hero1 from '../Images/hero-1.jpg';
import hero2 from '../Images/hero-2.jpg';


const HeroSection = () => {
    return (
        <div className="container-fluid hero-header bg-light py-5 mb-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <p className="text-primary text-uppercase mb-2 animated slideInDown">
                            Welcome To Photozone
                        </p>
                        <h1 className="display-4 mb-3 animated slideInDown">
                            Wedding And Portrait Studio Based in New York
                        </h1>
                        <p className="animated slideInDown">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                        </p>
                        <div className="d-flex align-items-center pt-4 animated slideInDown">
                            <a href="#" className="btn btn-primary py-3 px-4 me-5">Explore More</a>
                            <button type="button" className="btn-play" data-bs-toggle="modal"
                                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                            <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 animated fadeIn">
                        <div className="row g-3">
                        <div className="col-6 text-end">
    <img className="img-fluid bg-white p-3 w-100 mb-3" src={hero1} alt="Hero 1" />
    <img className="img-fluid bg-white p-3" src={hero2} alt="Hero 2" style={{ width: '100%' }} />
</div>
{/* 
                            <div className="col-6">
                                <img className="img-fluid bg-white p-3 w-50 mb-3" src={hero3} alt="Hero 3" />
                                <img className="img-fluid bg-white p-3 w-100" src={hero4} alt="Hero 4" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

