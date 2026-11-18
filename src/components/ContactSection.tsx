import { ArrowDownToLine, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  const { contact, profile } = portfolioData;

  return (
    <section id="contact" aria-labelledby="heading-contact" className="pb-16 sm:pb-20">
      <SectionHeader index="06" title="Contact" headingId="heading-contact" />

      <p className="text-[15px] leading-[24px] text-[var(--color-text-secondary)] max-w-xl">
        {contact.prompt}
      </p>

      <div className="mt-5">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2.5 text-[21px] sm:text-[25.6px] leading-[1.3] font-medium tracking-[-0.02em] text-[var(--color-text-primary)] underline decoration-[var(--color-border-default)] underline-offset-[6px] hover:decoration-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] break-all"
        >
          <Mail size={20} strokeWidth={1.75} className="shrink-0" aria-hidden="true" />
          <span>{contact.email}</span>
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] leading-[20px] text-[var(--color-text-secondary)] mt-3.5">
        <a
          href={profile.phoneHref}
          className="inline-flex items-center gap-1.5 hover:text-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)]"
        >
          <Phone size={13} strokeWidth={1.75} aria-hidden="true" />
          <span>{contact.phone}</span>
        </a>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={13} strokeWidth={1.75} aria-hidden="true" />
          <span>{contact.location}</span>
        </span>
      </div>

      <div className="mt-7 no-print">
        <a
          href={profile.cvPath}
          download={profile.cvFilename}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-surface-inverse)] text-[var(--color-text-inverse)] text-[14px] font-medium hover:opacity-90 active:scale-[0.99] transition-all duration-[var(--motion-duration-instant)]"
        >
          <span>Download CV</span>
          <ArrowDownToLine size={14} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
