// ============================================
// Navigation.js (UPDATED FOR NEW STRUCTURE)
// Location: src/components/Navigation/Navigation.js
// ============================================

import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="nav-content">
                <div className="logo">Isha</div>
                <button 
                    className="mobile-menu-btn" 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className={`nav-links-mobile ${mobileMenuOpen ? 'active' : ''}`}>
                <a href="#about" onClick={closeMobileMenu}>About</a>
                <a href="#projects" onClick={closeMobileMenu}>Projects</a>
                <a href="#experience" onClick={closeMobileMenu}>Experience</a>
                <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
                <a href="#skills" onClick={closeMobileMenu}>Skills</a>
                <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            </div>
        </nav>
    );
};

export default Navigation;