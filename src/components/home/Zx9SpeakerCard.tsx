import { Link } from "react-router-dom";
import zx9SpeakerMobile from "assets/home/mobile/image-speaker-zx9.png";
import zx9SpeakerTablet from "assets/home/tablet/image-speaker-zx9.png";
import zx9SpeakerDesktop from "assets/home/desktop/image-speaker-zx9.png";
import ovalsMobile from "assets/home/mobile/image-ovals.svg";
import ovalsTablet from "assets/home/tablet/image-ovals.svg";
import ovalsDesktop from "assets/home/desktop/image-ovals.svg";
import ResponsiveImage from "components/shared/ResponsiveImage";
import "./Zx9SpeakerCard.scss";

function Zx9SpeakerFeatureCard() {
  return (
    <div className="card bg-primary text-white text-center text-lg-start overflow-hidden pt-lg-1">
      <div className="card-body position-relative pb-5">
        <ResponsiveImage
          imgClassName="position-absolute translate-middle ovals w-100"
          image={{
            mobile: ovalsMobile,
            tablet: ovalsTablet,
            desktop: ovalsDesktop,
          }}
          alt="Ovals"
        />
        <div className="row">
          <div className="col-lg-7 text-lg-center z-1">
            <Link to="/products/zx9-speaker">
              <ResponsiveImage
                imgClassName="zx9-speaker mb-4 mt-4 mb-md-4 mt-md-2 position-relative mb-lg-0"
                image={{
                  mobile: zx9SpeakerMobile,
                  tablet: zx9SpeakerTablet,
                  desktop: zx9SpeakerDesktop,
                }}
                alt="Zx9 Speaker"
              />
            </Link>
          </div>
          <div className="col-lg-5 z-1">
            <Link
              to="/products/zx9-speaker"
              className="h1 fw-bold display-2 my-4 mx-md-6 px-md-5 ms-lg-0 ps-lg-0 mt-lg-5 pt-lg-4 text-white text-decoration-none d-block mb-lg-0"
            >
              Zx9 Speaker
            </Link>
            <p className="lh-lg mb-4 text-white-75 mx-md-6 px-md-5 ms-lg-0 ps-lg-0 pe-lg-6">
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
