import SectionTitle from "./SectionTitle";

interface ExperienceEntry {
    title: string;
    company: string;
    location: string;
    date: string;
    bullets: string[];
}

const experiences: ExperienceEntry[] = [
    {
        title: "Flutter Developer",
        company: "Zabihaty LLC",
        location: "USA Remote",
        date: "May 2023 – December 2025",
        bullets: [
            "Developed and maintained 3 cross-platform Flutter applications with shared codebases",
            "Implemented 90+ UI screens from Figma with responsive layouts for multiple device sizes",
            "Integrated 15+ REST API endpoints for authentication, product data, orders, and notifications",
            "Applied Riverpod, Provider, and Bloc to manage state across 10+ feature modules",
            "Resolved 30+ bugs related to UI, API handling, and state inconsistencies",
            "Improved screen load consistency and navigation flow through refactoring and optimization",
        ],
    },
    {
        title: "Flutter Developer (Freelance – Top Rated)",
        company: "Upwork",
        location: "Remote",
        date: "September 2019 – Present",
        bullets: [
            "Delivered 5+ Flutter applications/features for international clients",
            "Implemented JWT authentication, API integration, and real-time updates",
            "Maintained 100% client delivery completion with clean, documented code",
        ],
    },
    {
        title: "Instructor & Content Creator",
        company: "YouTube",
        location: "Bangladesh",
        date: "May 2025 – Present",
        bullets: [
            "Created 15+ Flutter tutorial videos covering widgets, state management, and app structure",
            "Explained beginner-to-intermediate Flutter concepts to hundreds of learners",
        ],
    },
];

export default function Experience() {
    return (
        <section>
            <SectionTitle title="EXPERIENCE" />
            {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                    <div className="experience-header">
                        <div>
                            <h3 className="experience-title">{exp.title}</h3>
                            <p className="experience-company">{exp.company}</p>
                        </div>
                        <span className="experience-date">
                            {exp.date}, {exp.location}
                        </span>
                    </div>
                    <ul className="experience-bullets">
                        {exp.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
