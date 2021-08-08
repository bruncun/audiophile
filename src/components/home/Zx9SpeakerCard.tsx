import { Link } from "react-router-dom";
import ResponsiveImage from "components/shared/ResponsiveImage";
import usePrefetchProductBySlugOnInView from "hooks/usePrefetchProductBySlugOnInView";

function Zx9SpeakerFeatureCard() {
  const ref = usePrefetchProductBySlugOnInView("zx9-speaker");

  return (
    <div
      className="card bg-primary text-white text-center text-xxl-start overflow-hidden"
      ref={ref}
    >
      <div className="card-body position-relative pb-5 pt-xxl-5">
        <div aria-hidden="true">
          <ResponsiveImage
            imgClassName="position-absolute translate-middle ovals"
            image={{
              mobile: "/assets/home/mobile/image-ovals.svg",
              tablet: "/assets/home/tablet/image-ovals.svg",
              desktop: "/assets/home/desktop/image-ovals.svg",
            }}
            alt="Ovals"
          />
        </div>
        <div className="row gx-xxl-5">
          <div className="col-xxl-6 offset-xl-1 text-xxl-center z-1">
            <Link to="/products/zx9-speaker">
              <ResponsiveImage
                imgClassName="zx9-speaker my-4 mb-md-4 ms-xxl-4 my-xxl-0 position-relative"
                image={{
                  mobile: "/assets/home/mobile/image-speaker-zx9.png",
                  tablet: "/assets/home/tablet/image-speaker-zx9.png",
                  desktop: "/assets/home/desktop/image-speaker-zx9.png",
                }}
                alt="Zx9 Speaker"
              />
            </Link>
          </div>
          <div className="col-xxl-4 z-1 mt-xxl-5">
            <Link to="/products/zx9-speaker" className="text-decoration-none">
              <h2 className="h1 fw-bold display-4 d-none d-md-block pe-5 mb-4 pt-3 text-white">
                Zx9 Speaker
              </h2>
              <h2 className="h2 fw-bold d-md-none mb-4 mt-2 mx-4 mx-md-6 px-md-5 text-white d-block">
                Zx9 Speaker
              </h2>
            </Link>
            <p className="mb-4 text-white-75 mx-sm-6 px-md-5 mx-xxl-0 ps-xxl-0">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              to="/products/zx9-speaker"
              className="btn btn-dark"
              data-cy="zx9-speaker-link"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zx9SpeakerFeatureCard;
