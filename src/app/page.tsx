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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
