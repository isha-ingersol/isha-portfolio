import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
            }
        };

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="hero-container">
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    background: #000;
                    overflow-x: hidden;
                }

                .hero-container {
                    height: 100vh;
                    background: #000;
                    position: relative;
                    overflow: hidden;
                }

                .hero {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    position: relative;
                    z-index: 2;
                }

                .gradient-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    opacity: 0.15;
                    pointer-events: none;
                    transition: transform 0.3s ease-out;
                }

                .orb-1 {
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(0, 113, 227, 0.4), transparent);
                    top: -200px;
                    left: -100px;
                }

                .orb-2 {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(88, 86, 214, 0.3), transparent);
                    bottom: -150px;
                    right: -100px;
                }

                .hero-content {
                    z-index: 2;
                    max-width: 980px;
                    padding: 0 20px;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    color: #86868b;
                    letter-spacing: 0.02em;
                    margin-bottom: 24px;
                    opacity: 0;
                    animation: fadeInUp 1s ease forwards;
                    backdrop-filter: blur(10px);
                }

                .badge-dot {
                    width: 6px;
                    height: 6px;
                    background: #30d158;
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); }
                }

                .hero h1 {
                    font-size: 96px;
                    font-weight: 700;
                    letter-spacing: -0.025em;
                    line-height: 1.05;
                    margin-bottom: 16px;
                    opacity: 0;
                    animation: fadeInUp 1s ease 0.2s forwards;
                    background: linear-gradient(180deg, #fff 0%, #999 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .hero .subtitle {
                    font-size: 32px;
                    font-weight: 500;
                    letter-spacing: -0.01em;
                    line-height: 1.2;
                    color: #f5f5f7;
                    margin-bottom: 12px;
                    opacity: 0;
                    animation: fadeInUp 1s ease 0.4s forwards;
                }

                .hero .tagline {
                    font-size: 24px;
                    line-height: 1.4;
                    font-weight: 400;
                    letter-spacing: 0.007em;
                    color: #86868b;
                    margin-bottom: 40px;
                    opacity: 0;
                    animation: fadeInUp 1s ease 0.6s forwards;
                }

                .hero-cta {
                    display: flex;
                    gap: 16px;
                    justify-content: center;
                    margin-top: 32px;
                    opacity: 0;
                    animation: fadeInUp 1s ease 0.8s forwards;
                }

                .cta-link {
                    position: relative;
                    font-size: 17px;
                    line-height: 1.2;
                    font-weight: 400;
                    letter-spacing: -0.022em;
                    padding: 14px 28px;
                    border-radius: 980px;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                }

                .cta-link.primary {
                    background: #0071e3;
                    color: #fff;
                }

                .cta-link.primary:hover {
                    background: #0077ed;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(0, 113, 227, 0.3);
                }

                .cta-link.secondary {
                    background: transparent;
                    color: #2997ff;
                    border: 2px solid rgba(41, 151, 255, 0.3);
                }

                .cta-link.secondary:hover {
                    border-color: #2997ff;
                    background: rgba(41, 151, 255, 0.1);
                    transform: translateY(-2px);
                }

                .cta-link::after {
                    display: none;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .scroll-indicator {
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    opacity: 0;
                    animation: fadeInUp 1s ease 1.2s forwards, bounce 2s ease-in-out 2.2s infinite;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                }

                .scroll-indicator::before {
                    content: '';
                    width: 2px;
                    height: 40px;
                    background: linear-gradient(to bottom, transparent, rgba(245, 245, 247, 0.5));
                    display: block;
                }

                .scroll-text {
                    font-size: 11px;
                    font-weight: 500;
                    color: rgba(245, 245, 247, 0.5);
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                }

                @keyframes bounce {
                    0%, 100% { 
                        transform: translateX(-50%) translateY(0); 
                    }
                    50% { 
                        transform: translateX(-50%) translateY(10px); 
                    }
                }

                .floating-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }

                .float-item {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    animation: float 20s ease-in-out infinite;
                }

                .float-item:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; animation-duration: 15s; }
                .float-item:nth-child(2) { top: 60%; left: 80%; animation-delay: 2s; animation-duration: 18s; }
                .float-item:nth-child(3) { top: 40%; left: 70%; animation-delay: 4s; animation-duration: 20s; }
                .float-item:nth-child(4) { top: 70%; left: 20%; animation-delay: 1s; animation-duration: 17s; }

                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0) translateX(0);
                        opacity: 0.3;
                    }
                    50% { 
                        transform: translateY(-50px) translateX(20px);
                        opacity: 0.6;
                    }
                }

                @media (max-width: 1068px) {
                    .hero h1 {
                        font-size: 72px;
                    }
                    .hero .subtitle {
                        font-size: 28px;
                    }
                    .hero .tagline {
                        font-size: 21px;
                    }
                }

                @media (max-width: 734px) {
                    .hero h1 {
                        font-size: 48px;
                    }
                    .hero .subtitle {
                        font-size: 24px;
                    }
                    .hero .tagline {
                        font-size: 19px;
                    }
                    .hero-cta {
                        flex-direction: column;
                        align-items: stretch;
                        padding: 0 20px;
                    }
                    .orb-1, .orb-2 {
                        width: 400px;
                        height: 400px;
                    }
                }
            `}</style>

            <div className="floating-elements">
                <div className="float-item"></div>
                <div className="float-item"></div>
                <div className="float-item"></div>
                <div className="float-item"></div>
            </div>

            <div 
                className="gradient-orb orb-1" 
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
            ></div>
            <div 
                className="gradient-orb orb-2"
                style={{
                    transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
                }}
            ></div>

            <section className="hero">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Available for opportunities</span>
                    </div>
                    <h1>Isha Ingersol.</h1>
                    <p className="subtitle">Software Engineer | Data Scientist</p>
                    <p className="tagline">Crafting intelligent solutions. Building the future.</p>
                    <div className="hero-cta">
                        <a href="#projects" className="cta-link primary">Explore my work</a>
                        <a href="#contact" className="cta-link secondary">Get in touch</a>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span className="scroll-text">Scroll</span>
                </div>
            </section>
        </div>
    );
};

export default Hero;