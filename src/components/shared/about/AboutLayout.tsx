interface AboutLayoutProps {
  bestGearCard: React.ReactNode;
  aboutContent: React.ReactNode;
}

function AboutLayout({ bestGearCard, aboutContent }: AboutLayoutProps) {
  return (
    <div className="row">
      <div className="col-12 col-lg-6 order-lg-2 pb-5">{bestGearCard}</div>
      <div className="col-12 col-lg-6 align-items-center d-flex">
        {aboutContent}
      </div>
    </div>
  );
}

export default AboutLayout;
