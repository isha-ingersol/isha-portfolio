// ============================================
// experienceData.js (ENHANCED VERSION)
// Location: src/data/experienceData.js
// ============================================

export const experienceData = [
    {
        id: 1,
        title: "AI Engineer Intern",
        company: "iboothme",
        date: "April 2024 - June 2024",
        type: "internship", // Type tag
        achievements: [
            "Developed 20+ AI avatars using generative models",
            "Boosted user engagement by 10% through enhanced UI",
            "Improved data retrieval efficiency by 15% with vector databases",
            "Mastered GPT and LLMs with fine-tuning, RAG, and hybrid approaches"
        ],
        skills: ["PyTorch", "Generative AI", "Vector DB", "UI/UX", "GPT"]
    },
    {
        id: 2,
        title: "Computing & Media Teacher",
        company: "The Blue Coat School",
        date: "February 2025 - March 2025",
        type: "volunteering", // Type tag
        achievements: [
            "Co-led 8 creative coding workshops for Years 1–6 using Scratch and game-based learning",
            "Reduced project timelines by 33% through streamlined digital workflows",
            "Enabled student-led teaching by final session through progressive skill building",
            "Supported podcasting, animation, and digital quiz creation"
        ],
        skills: ["Scratch", "Teaching", "Game-based Learning", "Video Editing", "Mentoring"]
    },
    {
        id: 3,
        title: "Marketing Student Ambassador",
        company: "University of Birmingham Dubai",
        date: "June 2023 - February 2025",
        type: "leadership", // Type tag
        achievements: [
            "Created 40+ compelling social media posts",
            "Extended University's digital reach through strategic content",
            "Guided 40+ potential students in educational decisions",
            "Served as Computer Science Student Representative"
        ],
        skills: ["Social Media", "Content Creation", "Leadership", "Communication", "Marketing"]
    },
    {
        id: 4,
        title: "Breast Cancer Awareness Volunteer",
        company: "Community Initiative",
        date: "October 2024",
        type: "volunteering", // Type tag
        achievements: [
            "Contributed to breast cancer awareness campaigns during October 2024",
            "Engaged with community members to promote early detection and support",
            "Participated in fundraising and educational events"
        ],
        skills: ["Community Engagement", "Awareness Campaigns", "Event Support", "Public Speaking"]
    },
    {
        id: 5,
        title: "Digital Marketing Intern",
        company: "Girls in Marketing",
        date: "August 2023 - September 2023",
        type: "internship", // Type tag
        achievements: [
            "Completed comprehensive programme with industry experts",
            "Developed SEO strategies to increase organic traffic by 20%",
            "Learned to boost social media engagement by 30%",
            "Mastered productivity and personal branding techniques"
        ],
        skills: ["SEO", "Digital Marketing", "Social Media", "Branding", "Analytics"]
    },
    {
        id: 6,
        title: "Software Engineer Intern",
        company: "blackNgreen",
        date: "July 2023 - September 2023",
        type: "internship", // Type tag
        achievements: [
            "Integrated 3+ core features for AI assistant",
            "Increased user interaction by 25% with UX improvements",
            "Used TypeScript, JavaScript XML, and Material UI",
            "Participated in bi-weekly product meetings"
        ],
        skills: ["TypeScript", "React", "Material UI", "JavaScript", "UX Design"]
    },
    {
        id: 7,
        title: "Partnership Lead",
        company: "Startupscale360 FZCO",
        date: "July 2022 - October 2022",
        type: "leadership", // Type tag
        achievements: [
            "Engaged with 50+ potential sponsors for Entrepreneurship World Cup",
            "Identified and vetted 25+ promising startups",
            "Delivered strategic presentations to Steering Committee",
            "Reduced meeting time by 25% through efficiency improvements"
        ],
        skills: ["Partnership Development", "Business Strategy", "Presentations", "Networking", "Project Management"]
    }
];

// Helper function to get experiences by type
export const getExperiencesByType = (type) => {
    if (type === 'all') return experienceData;
    return experienceData.filter(exp => exp.type === type);
};

// Get all unique types
export const experienceTypes = [
    { value: 'all', label: 'All Experience' },
    { value: 'internship', label: 'Internships' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'volunteering', label: 'Volunteering' }
];