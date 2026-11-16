import { ArrowDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  const { contact, profile } = portfolioData;

  return (
    <section id="contact" aria-labelledby="heading-contact" className="pb-16 sm:pb-20">
      <div id="heading-contact" className="sr-only">
        Contact
      </div>
      <SectionHeader index="05" title="Contact" />

      <p className="text-[15px] leading-[24px] text-[var(--color-text-secondary)] max-w-xl">
        {contact.prompt}
      </p>

      <div className="mt-5">
        <a
          href={`mailto:${contact.email}`}
          className="inline-block text-[22px] sm:text-[25.6px] leading-[1.3] font-medium tracking-[-0.02em] text-[var(--color-text-primary)] underline decoration-[var(--color-border-default)] underline-offset-[6px] hover:decoration-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] break-all"
        >
          {contact.email}
        </a>
      </div>

      <p className="text-[13px] leading-[20px] text-[var(--color-text-secondary)] mt-3">
        <a
          href={profile.phoneHref}
          className="hover:text-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)]"
        >
          {contact.phone}
        </a>
        {" · "}
        <span>{contact.location}</span>
      </p>

      <div className="mt-7 no-print">
        <a
          href={profile.cvPath}
          download={profile.cvFilename}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[var(--color-surface-inverse)] text-[var(--color-text-inverse)] text-[14px] font-medium hover:opacity-90 active:scale-[0.99] transition-all duration-[var(--motion-duration-instant)]"
        >
          <span>Download CV</span>
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
