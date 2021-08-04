import ResponsiveImage from "components/shared/ResponsiveImage";

function About() {
  return (
    <aside className="row">
      <div className="col-xxl-6 order-xxl-2 pb-3 mb-4 pb-xxl-0 mb-xxl-0">
        <ResponsiveImage
          image={{
            mobile: "/assets/shared/mobile/image-best-gear.jpg",
            tablet: "/assets/shared/tablet/image-best-gear.jpg",
            desktop: "/assets/shared/desktop/image-best-gear.jpg",
          }}
          imgClassName="best-gear-image rounded w-100"
          alt="Man wearing headphones"
        />
      </div>
      <div className="col-xxl-6 align-items-center d-flex">
        <div className="text-center text-xxl-start">
          <h3 className="fw-bold mb-4 pb-2 d-md-none">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h3>
          <h1 className="fw-bold px-4 px-md-5 mb-4 d-none d-md-block ps-xl-0 pe-xl-6 me-xxl-5">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h1>
          <p className="text-black-50 mx-md-5 ms-xl-0 me-xl-6 pe-xl-5 mb-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default About;
