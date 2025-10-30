import React from 'react';
import { experienceData } from '../../data/experienceData';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="timeline-header">
                <h2>A journey of innovation.</h2>
            </div>
            <div className="timeline">
                {experienceData.map((exp, index) => (
                    <div 
                        key={exp.id} 
                        className="timeline-item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="timeline-content">
                            <div className="timeline-date">{exp.date}</div>
                            <h3>{exp.title}</h3>
                            <div className="company">{exp.company}</div>
                            <ul>
                                {exp.achievements.map((achievement, idx) => (
                                    <li key={idx}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;