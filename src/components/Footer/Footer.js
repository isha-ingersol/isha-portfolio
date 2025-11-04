import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#experience">Experience</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                    <a href="https://www.linkedin.com/in/isha-ingersol" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/isha-ingersol" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <p>© 2025 Isha Ingersol. All rights reserved.</p>
                <p style={{ marginTop: '10px' }}>Crafted with precision. Inspired by excellence.</p>
            </div>
        </footer>
    );
};

export default Footer;