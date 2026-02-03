import SectionTitle from "./SectionTitle";

export default function Skills() {
    return (
        <section>
            <SectionTitle title="SKILLS" />
            <p className="skills-text">
                <span className="skill-category">Flutter & Dart</span> · Responsive UI & Navigation ·
                <span className="skill-category"> State Management</span> (Riverpod, Provider, Bloc/Cubit) ·
                <span className="skill-category"> Backend Integration</span> (REST APIs, JSON, Dio) ·
                <span className="skill-category"> Authentication & Storage</span> (JWT, flutter_secure_storage, Hive, SharedPreferences) ·
                <span className="skill-category"> Local Databases</span> (SQLite, Drift—basic) ·
                <span className="skill-category"> Best Practices</span> (Clean Code, Clean Architecture, Error Handling) ·
                <span className="skill-category"> Tools</span> (Git, Postman, Figma)
            </p>
        </section>
    );
}
