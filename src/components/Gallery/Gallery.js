import React, { useState, useEffect, useRef } from 'react';
import { galleryData } from '../../data/galleryData';
import './Gallery.css';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isExpanded, setIsExpanded] = useState(false);
    const [filteredGallery, setFilteredGallery] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [initialVisibleCount, setInitialVisibleCount] = useState(6); // default for desktop
    const gridRef = useRef(null);

    // Parse date strings to Date objects
    const parseDate = (dateString) => {
        if (!dateString) return new Date(0);

        const [monthPart, year] = dateString.split(' ');
        const tempDate = new Date(`${monthPart} 1, ${year}`);
        if (isNaN(tempDate)) return "Invalid Date";
        return tempDate;
    };

    const formatFullMonth = (dateString) => {
        const date = parseDate(dateString);
        if (typeof date === "string") return date;
        return date.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
    };

    // Update filtered gallery on category change
    useEffect(() => {
        const filtered = activeCategory === 'all'
            ? galleryData
            : galleryData.filter(item => item.category === activeCategory);

        // Sort newest to oldest
        filtered.sort((a, b) => parseDate(b.date) - parseDate(a.date));

        setFilteredGallery(filtered);
        setIsExpanded(false);
    }, [activeCategory]);

    // Adjust visible card count based on device width
    const updateInitialVisibleCount = () => {
        const width = window.innerWidth;
        if (width > 1024) setInitialVisibleCount(6); // desktop 2x3
        else if (width > 734) setInitialVisibleCount(4); // tablet 2x2
        else setInitialVisibleCount(3); // mobile 3x1
    };

    useEffect(() => {
        updateInitialVisibleCount();
        window.addEventListener('resize', updateInitialVisibleCount);
        return () => window.removeEventListener('resize', updateInitialVisibleCount);
    }, []);

    // Equalize card heights dynamically based on tallest card
    useEffect(() => {
        const adjustHeights = () => {
            if (!gridRef.current) return;
            const cards = Array.from(gridRef.current.children);
            let maxHeight = 0;

            // Reset first
            cards.forEach(card => card.style.height = 'auto');

            // Find tallest card
            cards.forEach(card => {
                const h = card.offsetHeight;
                if (h > maxHeight) maxHeight = h;
            });

            // Apply max height to all cards
            cards.forEach(card => card.style.height = `${maxHeight}px`);
        };

        adjustHeights(); // initial adjustment
        window.addEventListener('resize', adjustHeights);
        return () => window.removeEventListener('resize', adjustHeights);
    }, [filteredGallery, isExpanded]);

    // Slice visible gallery based on expansion
    const visibleGallery = isExpanded ? filteredGallery : filteredGallery.slice(0, initialVisibleCount);

    // Show More / Show Less logic
    const showMoreButton = filteredGallery.length > initialVisibleCount;

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
            {/* Header */}
            <div className="gallery-header">
                <h2>Moments that matter.</h2>
                <p>A visual journey through achievements and experiences.</p>
            </div>

            {/* Category Tabs */}
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

            {/* Gallery Grid */}
            <div className="gallery-grid" ref={gridRef}>
                {visibleGallery.map(item => (
                    <div className="gallery-item" key={item.title}>
                        {/* Image */}
                        <div className="gallery-image">
                            {item.image ? (
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            ) : (
                                <span>{item.title}</span>
                            )}
                        </div>

                        {/* Company */}
                        {item.company && <div className="gallery-company">{item.company}</div>}

                        {/* Title / Caption */}
                        <p className="gallery-caption">{item.title}</p>

                        {/* Date */}
                        {item.date && <div className="gallery-date">{formatFullMonth(item.date)}</div>}
                    </div>
                ))}
            </div>

            {/* Show More / Show Less Button */}
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