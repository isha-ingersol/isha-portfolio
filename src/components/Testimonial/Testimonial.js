// ============================================
// Testimonial.js (WITH CAROUSEL)
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
            author: "Candice",
            title: "Judge at AtkinsRéalis Hackafuture"
        },
        {
            id: 2,
            quote: "She is undoubtedly the type of student that has the potential for great success at the university level.",
            details: "Isha has proved herself as an independent learner with excellent analytical skills. She has a comprehensive understanding of subjects and consistently demonstrates her commitment and intellectual ability. Her natural abilities, combined with her work ethic and ability to evolve academically, are recipes for success in the years to come.",
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
        <section className="testimonial-section">
            <div className="testimonial-container">
                <div className="testimonial-content" key={activeIndex}>
                    <div className="quote-icon">"</div>
                    <h2 className="testimonial-quote">
                        {currentTestimonial.quote}
                    </h2>
                    <p className="testimonial-details">
                        {currentTestimonial.details}
                    </p>
                    <div className="testimonial-author">
                        <div className="author-info">
                            <p className="author-name">{currentTestimonial.author}</p>
                            <p className="author-title">{currentTestimonial.title}</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    {testimonials.length > 1 && (
                        <div className="testimonial-nav">
                            <button 
                                className="nav-arrow" 
                                onClick={prevTestimonial}
                                aria-label="Previous testimonial"
                            >
                                ‹
                            </button>
                            
                            <div className="testimonial-dots">
                                {testimonials.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => goToTestimonial(index)}
                                    />
                                ))}
                            </div>

                            <button 
                                className="nav-arrow" 
                                onClick={nextTestimonial}
                                aria-label="Next testimonial"
                            >
                                ›
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;