import BestGearImage from "./BestGearImage";
import AboutContent from "./AboutContent";

function About() {
  return (
    <aside className="row">
      <div className="col-xxl-6 order-xxl-2 pb-3 mb-4 pb-xxl-0 mb-xxl-0">
        <BestGearImage />
      </div>
      <div className="col-xxl-6 align-items-center d-flex">
        <AboutContent />
      </div>
    </aside>
  );
}

export default About;
