import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <section className="testimonial-section">
            <div className="testimonial-container">
                <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <h2 className="testimonial-quote">
                        She would be a real asset to any team that has the pleasure of working with her.
                    </h2>
                    <p className="testimonial-details">
                        Her work on improving localization accuracy in traditional SLAM models using a 
                        Gated Recurrent Unit in MATLAB was incredible. To say I was impressed is an understatement.
                    </p>
                    <div className="testimonial-author">
                        <div className="author-info">
                            <p className="author-name">Candice</p>
                            <p className="author-title">Judge at AtkinsRéalis Hackafuture</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;