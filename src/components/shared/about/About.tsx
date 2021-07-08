import BestGearCard from "./BestGearCard";
import AboutContent from "./AboutContent";
import AboutLayout from "./AboutLayout";

function About() {
  return (
    <AboutLayout
      bestGearCard={<BestGearCard />}
      aboutContent={<AboutContent />}
    />
  );
}

export default About;
