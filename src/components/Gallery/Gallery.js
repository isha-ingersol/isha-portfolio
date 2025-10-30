import React, { useState } from 'react';
import { galleryData } from '../../data/galleryData';
import './Gallery.css';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredGallery = activeCategory === 'all'
        ? galleryData
        : galleryData.filter(item => item.category === activeCategory);

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
                {filteredGallery.map(item => (
                    <div key={item.id} className="gallery-item">
                        <div className="gallery-image">{item.image}</div>
                        <p className="gallery-caption">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;