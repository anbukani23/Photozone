// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       mmithraaaa
//     </div>
//   )
// }

// export default Contact
import React, { useState } from 'react';
import '../CSS/Header.css'; // Adjust the path as needed
import Footer from '../Components/Footer'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.subject) newErrors.subject = "Subject is required.";
        if (!formData.message) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully:", formData);
            setSuccessMessage("Message submitted successfully!");
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setErrors({});
        }
    };

    return (
        <div className="headpoint">
            <h3 style={{ color: 'orange' }}>CONTACT US</h3>
            <h2 className="paras">If You Have Any Query, Please Contact Us</h2>
            <p className="inactive-message">
                The contact form is currently inactive.<br />
                Get a functional and working contact form with Ajax & PHP in a few minutes.
            </p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="name-email-container">
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{ width: '100%' }}
                    />
                    {errors.subject && <span className="error">{errors.subject}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', height: '200px' }}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Send Message</button>
                {successMessage && <div className="success-message">{successMessage}</div>}
            </form>

            <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
              <br></br>
              <br/>
                {/* <h2 className="text-center" style={{marginRight:'400px'}}>Our Location</h2> */}
                <iframe 
                    className="w-100 mb-n2"
                    style={{ height: '450px', width:'1200px' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    frameBorder="0" 
                    allowFullScreen 
                    aria-hidden="false" 
                    tabIndex="0"
                ></iframe>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;



