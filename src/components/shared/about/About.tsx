import BestGearCard from "./BestGearCard";
import AboutContent from "./AboutContent";

function About() {
  return (
    <div className="row">
      <div className="col-xxl-6 order-xxl-2 pb-3 mb-4 pb-xxl-0 mb-xxl-0">
        <BestGearCard />
      </div>
      <div className="col-xxl-6 align-items-center d-flex">
        <AboutContent />
      </div>
    </div>
  );
}

export default About;
