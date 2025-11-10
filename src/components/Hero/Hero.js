import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.pageYOffset);
        };

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 30,
                y: (e.clientY / window.innerHeight - 0.5) * 30
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const parallaxContent = {
        transform: `translateY(${scrollY * 0.4}px)`,
        opacity: Math.max(0, 1 - scrollY / 600)
    };

    const parallaxOrb1 = {
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
    };

    const parallaxOrb2 = {
        transform: `translate(${-mousePosition.x * 0.8}px, ${-mousePosition.y * 0.8}px)`
    };

    return (
        <div id="home" className="hero-container">
            {/* Animated gradient orbs */}
            <div className="gradient-orb orb-1" style={parallaxOrb1}></div>
            <div className="gradient-orb orb-2" style={parallaxOrb2}></div>
            <div className="gradient-orb orb-3"></div>

            {/* Floating particles */}
            <div className="floating-elements">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className={`float-item float-item-${i + 1}`}></div>
                ))}
            </div>

            {/* Grid overlay */}
            <div className="grid-overlay"></div>

            {/* Main hero content */}
            <section className="hero">
                <div className="hero-content" style={parallaxContent}>
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Available for opportunities</span>
                    </div>
                    
                    <h1 className="hero-title">
                        <span className="title-line">Isha Ingersol</span>
                    </h1>
                    
                    <div className="hero-subtitle-wrapper">
                        <p className="subtitle">Software Engineer</p>
                        <span className="subtitle-divider">|</span>
                        <p className="subtitle">Data Scientist</p>
                    </div>
                    
                    <p className="tagline">
                        Crafting intelligent solutions.<br />
                        Building the future.
                    </p>

                    {/* Visual elements */}
                    {/* <div className="hero-visuals">
                        <div className="visual-card card-1">
                            <div className="card-icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 4L28 12V20L16 28L4 20V12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 4V28M4 12L28 12M4 20L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <span className="card-label">AI/ML</span>
                        </div>
                        
                        <div className="visual-card card-2">
                            <div className="card-icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M4 12H28M12 4V28" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <span className="card-label">Full Stack</span>
                        </div>
                        
                        <div className="visual-card card-3">
                            <div className="card-icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M16 8V16L22 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <span className="card-label">Analytics</span>
                        </div>
                    </div> */}
                    
                    <div className="hero-cta">
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="cta-link primary"
                        >
                            <span>Resume</span>
                        </a>
                        <a href="#projects" className="cta-link secondary">
                            <span>Explore my work</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a href="#contact" className="cta-link secondary">
                            <span>Get in touch</span>
                        </a>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-line"></div>
                    <span className="scroll-text">Scroll</span>
                </div>
            </section>
        </div>
    );
};

export default Hero;