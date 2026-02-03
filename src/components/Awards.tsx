import SectionTitle from "./SectionTitle";

const awards = [
    { place: "1", suffix: "st", title: "Runner-Up — National Signature Hackathon (2025)" },
    { place: "7", suffix: "th", title: "Place - IUT Hackathon 2025" },
    { text: "Finalist — National Collegiate Programming Contest (NCPC 2023)" },
    { text: "Champion (District) — National Science & Technology Week (2020)" },
    { place: "4", suffix: "th", title: "Place - IUT Hackathon - 2024" },
    { text: "District 2nd Champion — National Science & Technology Week (2021)" },
];

export default function Awards() {
    return (
        <section>
            <SectionTitle title="AWARDS" />
            <div className="awards-grid">
                {awards.map((award, index) => (
                    <div key={index} className="award-item">
                        {award.place ? (
                            <>
                                {award.place}<sup>{award.suffix}</sup> {award.title}
                            </>
                        ) : (
                            award.text
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
