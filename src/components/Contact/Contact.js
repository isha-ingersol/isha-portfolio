import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-content">
                <h2>Let's create something<br/>extraordinary.</h2>
                <p>Open to Software Engineering and Data Science roles.</p>
                <div className="contact-links">
                    <a href="mailto:ingersol.isha@gmail.com" className="contact-card">
                        <h3>Email</h3>
                        <p>ingersol.isha@gmail.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/isha-ingersol" target="_blank" rel="noopener noreferrer" className="contact-card">
                        <h3>LinkedIn</h3>
                        <p>isha-ingersol</p>
                    </a>
                    <a href="https://github.com/isha-ingersol" target="_blank" rel="noopener noreferrer" className="contact-card">
                        <h3>GitHub</h3>
                        <p>isha-ingersol</p>
                    </a>
                    {/* <a href="https://ishaingersol.com" target="_blank" rel="noopener noreferrer" className="contact-card">
                        <h3>Portfolio</h3>
                        <p>ishaingersol.com</p>
                    </a> */}
                </div>

                {/* Resume */}
                {/* <a 
                    href="/path-to-your-resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-resume-btn"
                >
                    View Resume
                </a> */}
            </div>
        </section>
    );
};

export default Contact;