import React from 'react';
import './Volunteering.css';

const Volunteering = () => {
    const volunteerData = [
        {
            id: 1,
            title: "Computing & Media Teacher",
            org: "The Blue Coat School",
            date: "Feb 2025 - Mar 2025",
            achievements: [
                "Co-led 8 creative coding workshops for Years 1–6 using Scratch and game-based learning",
                "Reduced project timelines by 33% through streamlined digital workflows",
                "Enabled student-led teaching by final session through progressive skill building",
                "Supported podcasting, animation, and digital quiz creation"
            ],
            skills: ["Scratch", "Teaching", "Game-based Learning", "Video Editing"]
        },
        {
            id: 2,
            title: "Breast Cancer Awareness Volunteer",
            org: "Community Initiative",
            date: "October 2025",
            achievements: [
                "Contributed to breast cancer awareness campaigns during October 2025",
                "Engaged with community members to promote early detection and support",
                "Participated in fundraising and educational events"
            ],
            skills: ["Community Engagement", "Awareness Campaigns", "Event Support"]
        }
    ];

    return (
        <section id="volunteering" className="feature-section dark">
            <div className="feature-content">
                <div className="feature-eyebrow">Community Impact</div>
                <h2 className="feature-headline">Giving back.<br/>Making a difference.</h2>
                <p className="feature-subheadline">Education. Empowerment. Engagement.</p>
                
                <div className="volunteer-cards">
                    {volunteerData.map(volunteer => (
                        <div key={volunteer.id} className="volunteer-card">
                            <div className="volunteer-header">
                                <h3>{volunteer.title}</h3>
                                <div className="volunteer-meta">
                                    <span className="volunteer-org">{volunteer.org}</span>
                                    <span className="volunteer-date">{volunteer.date}</span>
                                </div>
                            </div>
                            <ul className="volunteer-achievements">
                                {volunteer.achievements.map((achievement, idx) => (
                                    <li key={idx}>{achievement}</li>
                                ))}
                            </ul>
                            <div className="volunteer-skills">
                                {volunteer.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="feature-image-placeholder" style={{ marginTop: '60px' }}>
                    [Volunteering Group Photo]
                </div>
            </div>
        </section>
    );
};

export default Volunteering;