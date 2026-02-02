import AboutHero from "../components/About/AboutHero";
import OurStory from "../components/About/OurStory";
import Values from "../components/About/Values";
import Team from "../components/About/Team";
import Awards from "../components/About/Awards";
import AboutCTA from "../components/About/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <Values />
      <Team />
      <Awards />
      <AboutCTA />
    </div>
  );
};

export default About;
