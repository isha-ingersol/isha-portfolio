import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Isha Ingersol.</h1>
                <p className="subtitle">MEng Computer Science & Software Engineering</p>
                <p className="tagline">Crafting intelligent solutions. Building the future.</p>
                <div className="hero-cta">
                    <a href="#projects" className="cta-link">Explore my work</a>
                    <a href="#contact" className="cta-link">Get in touch</a>
                </div>
            </div>
            <div className="scroll-indicator"></div>
        </section>
    );
};

export default Hero;