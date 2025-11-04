// ============================================
// Projects.js (FIXED - PDF Opens Correctly)
// Location: src/components/Projects/Projects.js
// ============================================

import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isExpanded, setIsExpanded] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState([]);

    const parseDate = (dateString) => {
        if (!dateString) return new Date(0);
        const [monthPart, year] = dateString.split(' ');
        const months = [
            "Jan", "January", "Feb", "February", "Mar", "March", "Apr", "April",
            "May", "Jun", "June", "Jul", "July", "Aug", "August",
            "Sep", "September", "Oct", "October", "Nov", "November", "Dec", "December"
        ];
        const monthIndex = months.findIndex(m => m.toLowerCase() === monthPart.toLowerCase());
        const correctedMonth = Math.floor(monthIndex / 2);
        return new Date(year, correctedMonth >= 0 ? correctedMonth : 0);
    };

    const formatFullMonth = (dateString) => {
        const date = parseDate(dateString);
        return date.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
    };

    useEffect(() => {
        let filtered = activeCategory === 'all' 
            ? [...projectsData]
            : projectsData.filter(project => project.category === activeCategory);

        filtered.sort((a, b) => parseDate(b.date) - parseDate(a.date));
        setFilteredProjects(filtered);
    }, [activeCategory]);

    const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);
    const showMoreButton = filteredProjects.length > 4;

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setIsExpanded(false);
    };

    const [scrollPosition, setScrollPosition] = useState(0);
    const toggleExpanded = () => {
        if (!isExpanded) {
            setScrollPosition(window.scrollY);
            setIsExpanded(true);
        } else {
            setIsExpanded(false);
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    // FIXED: Handle project link - prevent default for files
    const handleProjectClick = (e, project) => {
        if (project.link && project.linkType === 'file') {
            e.preventDefault(); // Prevent navigation
            e.stopPropagation(); // Stop event bubbling
            window.open(project.link, '_blank'); // Open PDF in new tab
        }
        // For external links (linkType: 'external'), let the <a> tag handle it naturally
    };

    return (
        <section id="projects" className="feature-section dark">
            <div className="feature-content">
                <div className="feature-eyebrow">Proven Impact</div>
                <h2 className="feature-headline">
                    Where creativity<br />meets precision.
                </h2>
                <p className="feature-subheadline">Real projects. Real solutions.</p>

                {/* Project Category Tabs */}
                <div className="project-tabs">
                    <button 
                        className={`project-tab ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('all')}
                    >
                        All
                    </button>
                    <button 
                        className={`project-tab ${activeCategory === 'ai-ml' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('ai-ml')}
                    >
                        AI/ML
                    </button>
                    <button 
                        className={`project-tab ${activeCategory === 'data-science' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('data-science')}
                    >
                        Data Science
                    </button>
                    <button 
                        className={`project-tab ${activeCategory === 'full-stack' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('full-stack')}
                    >
                        Full Stack
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-icon">{project.icon}</div>
                            <span className="project-category">
                                {project.category.replace('-', '/').toUpperCase()}
                            </span>
                            <h3>{project.title}</h3>
                            {project.date && (
                                <span className="project-date">
                                    {formatFullMonth(project.date)}
                                </span>
                            )}
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="project-tag">{tag}</span>
                                ))}
                            </div>

                            {project.link && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="view-project-btn"
                                    onClick={(e) => handleProjectClick(e, project)}
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {showMoreButton && (
                    <div className="projects-show-more-container">
                        <button 
                            className={`projects-show-more-btn ${isExpanded ? 'expanded' : ''}`}
                            onClick={toggleExpanded}
                        >
                            <span className="toggle-text">
                                {isExpanded ? 'Show Less' : 'Show More'}
                            </span>
                            <span className="toggle-icon">↓</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;