import Hero from "../components/Home/Hero";
import ExperienceStats from "../components/Home/ExperienceStats";
import Skills from "../components/Home/Skills";
import Experience from "../components/Home/Experience";
import Education from "../components/Home/Education";
import FeaturedProjects from "../components/Home/FeaturedProjects";

function Home() {
  return (
    <main className="overflow-hidden bg-[#050505]">
      <Hero />
      <ExperienceStats />
      <Skills />
      <Experience />
      <Education />
      <FeaturedProjects />
    </main>
  );
}

export default Home;