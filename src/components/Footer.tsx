import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="editorial-container pb-12 pt-6 border-t border-[var(--color-border-muted)]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] leading-[18px] text-[var(--color-text-secondary)]">
        <p>© {new Date().getFullYear()} {portfolioData.profile.name}</p>
        <p>{portfolioData.profile.location}</p>
      </div>
    </footer>
  );
}
