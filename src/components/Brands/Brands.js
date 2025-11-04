import React from 'react';
import './Brands.css';

const Brands = () => {
    const brands = [
        "American Eagle", "Ulta Beauty", "Ford", "Hublot", "Jotun", "Orebella", "Caffè Nero"
    ];

    return (
        <section className="brands-section">
            <div className="brands-header">
                <h2>Brands I've supported.</h2>
                <p>Through Alphabot Studio, I've contributed to memorable brand experiences.</p>
            </div>
            <div className="brands-marquee">
                <div className="brands-track">
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={index} className="brand-logo">
                            <div className="logo-placeholder">{brand}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;