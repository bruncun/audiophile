function About() {
  return (
    <div className="container-md py-5">
      <div className="row">
        <div className="col-12 col-lg-6 order-lg-2">
          <div className="card bg-best-gear mb-5" />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-start align-items-center d-flex">
          <div>
            <h2 className="fw-bold px-4 mb-4 d-md-none">
              Bringing you the <span className="text-primary">best</span> audio
              gear
            </h2>
            <h1 className="fw-bold px-4 mb-4 d-none d-md-block d-lg-none display-2">
              Bringing you the <span className="text-primary">best</span> audio
              gear
            </h1>
            <h1 className="fw-bold px-4 mb-4 d-none d-lg-block ps-lg-0 pe-lg-6 me-lg-5">
              Bringing you the <span className="text-primary">best</span> audio
              gear
            </h1>
            <p className="text-black-50 mx-md-5 ms-lg-0 me-lg-6 pe-lg-5">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
