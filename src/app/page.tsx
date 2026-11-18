import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import AwardsGallerySection from "@/components/AwardsGallerySection";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const { profile, skillGroups } = portfolioData;
  const allSkills = skillGroups.flatMap((g) => g.items);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${profile.website}/#website`,
        url: profile.website,
        name: profile.name,
        description:
          "Portfolio of Azizur Rahaman, Product Engineer building scalable mobile, web, backend, and cloud platforms.",
      },
      {
        "@type": "Person",
        "@id": `${profile.website}/#person`,
        name: profile.name,
        url: profile.website,
        image: `${profile.website}${profile.avatar}`,
        jobTitle: "Product Engineer",
        description:
          "Product Engineer with 5+ years of software engineering experience and 10+ years of programming experience across Flutter, Next.js, Spring Boot, Java, and cloud systems.",
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
        worksFor: {
          "@type": "Organization",
          name: "Plexus Cloud",
          url: "https://plexuscloud.com.bd/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "United International University",
        },
        sameAs: [
          profile.github,
          profile.linkedin,
          profile.googlePlayDev,
        ],
        knowsAbout: allSkills,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={structuredData} />
      <TopNav />
      <main id="main-content" className="editorial-container flex-1">
        <Hero />
        <AwardsGallerySection />
        <WorkSection />
        <ExperienceSection />
        <EducationSection />
        <AwardsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
