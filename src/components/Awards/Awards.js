import React from 'react';
import './Awards.css';

const Awards = () => {
    const awards = [
        "Chancellor's Academic Merit Award",
        "First Place — AIESEC Public Speaking Competition",
        "Third Place — Intra-University Debate Competition",
        "DubAI Student Challenge 2023 Participant"
    ];

    return (
        <section className="feature-section light">
            <div className="feature-content">
                <div className="feature-eyebrow">Recognition</div>
                <h2 className="feature-headline">Excellence recognized.</h2>
                <div className="awards-list">
                    {awards.map((award, index) => (
                        <p key={index} className="award-item">• {award}</p>
                    ))}
                </div>
                <div className="feature-image-placeholder">
                    [Awards/Achievements Image]
                </div>
            </div>
        </section>
    );
};

export default Awards;