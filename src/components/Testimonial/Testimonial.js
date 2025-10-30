import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className="parallax-section">
            <div className="parallax-content">
                <h2>"She would be a real asset to<br/>any team that has the pleasure<br/>of working with her."</h2>
                <p className="testimonial-quote">
                    "Her work on improving localization accuracy in traditional SLAM models using a Gated Recurrent Unit 
                    in MATLAB was incredible. To say I was impressed is an understatement."
                </p>
                <p className="testimonial-author">— Candice, Judge at AtkinsRéalis Hackafuture</p>
            </div>
        </div>
    );
};

export default Testimonial;