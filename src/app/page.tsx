import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="cv-container">
      <Header />
      <Summary />
      <Experience />
      <Project />
      <Education />
      <Awards />
      <Skills />
    </main>
  );
}
