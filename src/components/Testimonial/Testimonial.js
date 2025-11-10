// ============================================
// Testimonial.js (Apple-inspired Design)
// Location: src/components/Testimonial/Testimonial.js
// ============================================

import React, { useState } from 'react';
import './Testimonial.css';

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "She would be a real asset to any team that has the pleasure of working with her.",
            details: "Her work on improving localization accuracy in traditional SLAM models using a Gated Recurrent Unit in MATLAB was incredible. To say I was impressed is an understatement.",
            author: "Candice Long",
            title: "Judge at AtkinsRéalis Hackafuture 2025"
        },
        {
            id: 2,
            quote: "Her natural abilities, combined with her work ethic and ability to evolve academically, are recipes for success in the years to come.",
            details: "I have seen in her the desire to change the world in her own way for the better, and she seeks to do so by placing education as her number one priority. She will be a valuable addition to any team or community she joins.",
            author: "Jayakumar Nagasamy",
            title: "Head of the Mathematics Department, JSS International School"
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setActiveIndex(index);
    };

    const currentTestimonial = testimonials[activeIndex];

    return (
        <section className="testimonial-section" id="testimonials">
            <div className="testimonial-container">
                <div className="section-header">
                    <h2 className="section-eyebrow">Testimonials</h2>
                    <h3 className="section-title">What people say.</h3>
                </div>
                
                <div className="testimonial-carousel">
                    <div className="testimonial-card" key={activeIndex}>
                        <div className="card-content">
                            <div className="quote-mark">❝</div>
                            <blockquote className="testimonial-quote">
                                {currentTestimonial.quote}
                            </blockquote>
                            <p className="testimonial-details">
                                {currentTestimonial.details}
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="author-info">
                                    <p className="author-name">{currentTestimonial.author}</p>
                                    <p className="author-title">{currentTestimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    {testimonials.length > 1 && (
                        <div className="testimonial-controls">
                            <button 
                                className="control-btn prev-btn" 
                                onClick={prevTestimonial}
                                aria-label="Previous testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            
                            <div className="testimonial-indicators">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`indicator ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => goToTestimonial(index)}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button 
                                className="control-btn next-btn" 
                                onClick={nextTestimonial}
                                aria-label="Next testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;