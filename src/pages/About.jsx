import AboutHero from "../components/About/AboutHero";
import AboutExperienceStats from "../components/About/AboutExperienceStats";
import AboutExperience from "../components/About/AboutExperience";
import AboutCertification from "../components/About/AboutCertificate";
import AboutEducation from "../components/About/AboutEducation";

function About() {
  return (
    <main className="overflow-hidden bg-[#050505]">
      <AboutHero />
      <AboutExperienceStats />
      <AboutExperience />
      <AboutCertification />
      <AboutEducation />
    </main>
  );
}

export default About;