import SectionTitle from "./SectionTitle";

export default function Project() {
    return (
        <section>
            <SectionTitle title="PROJECT" />
            <div className="project-item">
                <h3 className="project-name">Zabihaty — E-Commerce & Event Catering App</h3>
                <p className="project-tech">
                    Flutter | Riverpod | REST APIs | JWT | Dio | Session Management (Refresh-Token) | Clean-Architecture
                </p>
                <a
                    href="https://play.google.com/store/apps/details?id=com.zabihaty.app.zabihaty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    https://play.google.com/store/apps/details?id=com.zabihaty.app.zabihaty
                </a>
            </div>
        </section>
    );
}
