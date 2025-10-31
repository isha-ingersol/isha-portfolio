// ============================================
// Experience.js (USING EXTERNAL DATA FILE)
// Location: src/components/Experience/Experience.js
// ============================================

import React, { useState } from 'react';
import './Experience.css';

// Import from external data file
import { experienceData } from '../../data/experienceData';

const Experience = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredExperiences = activeFilter === 'all' 
        ? experienceData 
        : experienceData.filter(exp => exp.type === activeFilter);

    const getTypeColor = (type) => {
        const colors = {
            internship: '#2997ff',
            leadership: '#f56300',
            volunteering: '#30d158'
        };
        return colors[type] || '#86868b';
    };

    const getTypeLabel = (type) => {
        const labels = {
            internship: 'Internship',
            leadership: 'Leadership',
            volunteering: 'Volunteering'
        };
        return labels[type] || type;
    };

    // Calculate stats dynamically from data
    const stats = {
        total: experienceData.length,
        internships: experienceData.filter(exp => exp.type === 'internship').length,
        leadership: experienceData.filter(exp => exp.type === 'leadership').length,
        volunteering: experienceData.filter(exp => exp.type === 'volunteering').length
    };

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <div className="timeline-header">
                    <div className="feature-eyebrow">Professional Journey</div>
                    <h2>Experience. Leadership.<br/>Community Impact.</h2>
                    <p className="section-subtitle">
                        A comprehensive journey through internships, leadership roles, and volunteer work.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="experience-filters">
                    <button
                        className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Experience
                    </button>
                    <button
                        className={`filter-tab ${activeFilter === 'internship' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('internship')}
                    >
                        Internships
                    </button>
                    <button
                        className={`filter-tab ${activeFilter === 'leadership' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('leadership')}
                    >
                        Leadership
                    </button>
                    <button
                        className={`filter-tab ${activeFilter === 'volunteering' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('volunteering')}
                    >
                        Volunteering
                    </button>
                </div>

                {/* Timeline */}
                <div className="timeline">
                    {filteredExperiences.map((exp, index) => (
                        <div 
                            key={exp.id} 
                            className="timeline-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="timeline-content">
                                {/* Type Badge */}
                                <span 
                                    className="type-badge"
                                    style={{ 
                                        background: `${getTypeColor(exp.type)}15`,
                                        color: getTypeColor(exp.type),
                                        borderColor: `${getTypeColor(exp.type)}30`
                                    }}
                                >
                                    {getTypeLabel(exp.type)}
                                </span>

                                <div className="timeline-date">{exp.date}</div>
                                <h3>{exp.title}</h3>
                                <div className="company">{exp.company}</div>
                                
                                <ul className="achievements-list">
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>

                                {/* Skills Tags */}
                                {exp.skills && exp.skills.length > 0 && (
                                    <div className="skills-tags">
                                        {exp.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div 
                                className="timeline-dot" 
                                style={{ background: getTypeColor(exp.type) }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Summary Stats - Dynamic */}
                <div className="experience-stats">
                    <div className="stat-item">
                        <span className="stat-number">{stats.total}+</span>
                        <span className="stat-label">Total Positions</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{stats.internships}</span>
                        <span className="stat-label">Internships</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{stats.leadership}</span>
                        <span className="stat-label">Leadership Roles</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{stats.volunteering}</span>
                        <span className="stat-label">Volunteer Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;