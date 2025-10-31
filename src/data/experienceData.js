// ============================================
// experienceData.js (ENHANCED VERSION)
// Location: src/data/experienceData.js
// ============================================

export const experienceData = [
    {
        id: 1,
        title: "AI/ML Intern",
        company: "Alphabot Studio",
        date: "October 2025 - Present",
        type: "internship", // Type tag
        achievements: [
            "Ongoing"
        ],
        skills: ["Prompt Engineering", "Nano Banana", "Google AI Studio", "Hugging Face", "APIs"]
    },
    {
        id: 2,
        title: "Computing & Media Teacher",
        company: "The Blue Coat School Birmingham",
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
        company: "AIESEC United Arab Emirates",
        date: "October 2025",
        type: "volunteering", // Type tag
        achievements: [
            "Contributed to breast cancer awareness campaigns during Pinktober 2025",
            "Engaged with community members and attended panel discussions promoting early detection and support",
        ],
        skills: ["Community Engagement", "Awareness Campaigns", "Event Support"]
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
        skills: ["React", "JavaScript", "TypeScript", "Material UI", "UX Design"]
    },
    {
        id: 7,
        title: "Partnership Lead",
        company: "Startupscale360 FZCO",
        date: "July 2022 - October 2022",
        type: "internship", // Type tag
        achievements: [
            "Engaged with 50+ potential sponsors for Entrepreneurship World Cup",
            "Identified and vetted 25+ promising startups",
            "Delivered strategic presentations to Steering Committee",
            "Reduced meeting time by 25% through efficiency improvements"
        ],
        skills: ["Partnership Development", "Business Strategy", "Presentations", "Networking", "Project Management"]
    },
    {
        id: 8,
        title: "Software Engineer Intern",
        company: "blackNgreen",
        date: "December 2023 - February 2024",
        type: "internship", // Type tag
        achievements: [
            "Developed 20+ AI avatars using generative models",
            "Boosted user engagement by 10% through enhanced UI",
            "Improved data retrieval efficiency by 15% with vector databases",
            "Mastered GPT and LLMs with fine-tuning, RAG, and hybrid approaches"
        ],
        skills: ["Python", "PyTorch", "Generative AI", "Vector DB", "UI/UX Design", "GPT"]
    },
    {
        id: 9,
        title: "Student Ambassador",
        company: "University of Birmingham Dubai",
        date: "X XXXX - X XXXX",
        type: "leadership", // Type tag
        achievements: [
            "X",
        ],
        skills: ["X", "X", "X", "X"]
    },
    {
        id: 10,
        title: "Student Volunteer",
        company: "Emirates Red Crescent (ERC)",
        date: "March 2023",
        type: "volunteering",
        achievements: [
            "Packed over 50 food and aid boxes for Turkey and Syria in collaboration with Global Initiatives and Red Crescent",
            "Contributed to humanitarian relief efforts supporting communities affected by natural disasters"
        ],
        skills: ["Humanitarian Aid", "Disaster Relief", "Volunteering", "Teamwork"]
    },
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