import React, { useState, useEffect } from 'react';
import { galleryData } from '../../data/galleryData';
import './Gallery.css';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isExpanded, setIsExpanded] = useState(false);
    const [filteredGallery, setFilteredGallery] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const filtered = activeCategory === 'all'
            ? galleryData
            : galleryData.filter(item => item.category === activeCategory);
        setFilteredGallery(filtered);
        setIsExpanded(false); // collapse when category changes
    }, [activeCategory]);

    const visibleGallery = isExpanded ? filteredGallery : filteredGallery.slice(0, 8);
    const showMoreButton = filteredGallery.length > 8;

    const toggleExpanded = () => {
        if (!isExpanded) {
            setScrollPosition(window.scrollY);
            setIsExpanded(true);
        } else {
            setIsExpanded(false);
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const categories = ['all', 'certificates', 'presentations', 'volunteering', 'events'];

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-header">
                <h2>Moments that matter.</h2>
                <p>A visual journey through achievements and experiences.</p>
            </div>
            <div className="gallery-tabs">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`gallery-tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="gallery-grid">
                {visibleGallery.map(item => (
                    <div key={item.id} className="gallery-item">
                        <div className="gallery-image">{item.image}</div>
                        {item.date && <div className="gallery-date">{item.date}</div>}
                        <p className="gallery-caption">{item.title}</p>
                    </div>
                ))}
            </div>

            {/* Show More/Less Button */}
            {showMoreButton && (
                <div className="gallery-show-more-container">
                    <button 
                        className={`gallery-show-more-btn ${isExpanded ? 'expanded' : ''}`}
                        onClick={toggleExpanded}
                    >
                        <span className="toggle-text">
                            {isExpanded ? 'Show Less' : 'Show More'}
                        </span>
                        <span className="toggle-icon">↓</span>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Gallery;
