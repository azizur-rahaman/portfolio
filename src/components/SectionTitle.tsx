interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="section-title-container">
      <div className="section-title-top">
        <div className="section-title-line"></div>
        <h2 className="section-title-text">{title}</h2>
        <div className="section-title-line"></div>
      </div>
      <div className="section-title-bottom"></div>
    </div>
  );
}
