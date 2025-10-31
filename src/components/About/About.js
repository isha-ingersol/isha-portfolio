// ============================================
// About.js (WITH IMAGE)
// Location: src/components/About/About.js
// ============================================

import React from 'react';
import './About.css';
import pfp from '../../assets/my-images/pfp.jpg';

const About = () => {
    return (
        <section id="about" className="feature-section light">
            <div className="feature-content">
                <div className="feature-eyebrow">First Class Honours</div>
                <h2 className="feature-headline">More than just code.<br/>It's innovation.</h2>
                <p className="feature-subheadline">5+ years of experience. Limitless possibilities.</p>
                <p className="feature-description">
                    A passionate Computer Science and Software Engineering graduate with proven expertise in AI, 
                    full-stack development, and data science. I bring real-world insights and an adaptive, agile 
                    approach to solving complex problems.
                </p>
                <div className="feature-image-container">
                    <img 
                        src={pfp} 
                        alt="Isha Ingersol - Professional Portrait" 
                        className="feature-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;