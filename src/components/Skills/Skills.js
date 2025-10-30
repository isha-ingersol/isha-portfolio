import React from 'react';
import { skillsData } from '../../data/skillsData';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-showcase">
            <div className="skills-header">
                <h2>Technical excellence.<br/>Delivered.</h2>
                <p>Proficient across the entire technology stack.</p>
            </div>
            <div className="skills-grid">
                {skillsData.map((skill) => (
                    <div key={skill.id} className="skill-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-name">{skill.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;