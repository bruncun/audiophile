import { Link } from "react-router-dom";
import SocialIcons from "components/shared/SocialIcons";

function Footer() {
  return (
    <footer className="bg-dark py-5 text-center text-md-start position-relative">
      <div className="container-md position-absolute top-0 start-50 translate-middle-x orange-rectangle">
        <img
          className="align-top"
          src="/assets/shared/desktop/image-orange-rectangle.svg"
          alt="Orange rectangle"
          width="101"
          height="4"
          aria-hidden="true"
        />
      </div>
      <div className="container">
        <nav className="d-xxl-flex justify-content-between">
          <div className="text-center text-md-start mb-5">
            <Link to="/">
              <img
                src="/assets/shared/desktop/logo.svg"
                alt="Audiophile"
                width="143"
                height="25"
              />
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="text-white text-primary-hover text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-3 d-block d-md-inline-block me-md-4"
            >
              Home
            </Link>
            <Link
              to="/headphones"
              className="text-white text-primary-hover text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-3 d-block d-md-inline-block me-md-4"
            >
              Headphones
            </Link>
            <Link
              to="/headphones"
              className="text-white text-primary-hover text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-3 d-block d-md-inline-block me-md-4"
            >
              Speakers
            </Link>
            <Link
              to="/earphones"
              className="text-white text-primary-hover text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-5 d-block d-md-inline-block"
            >
              Earphones
            </Link>
          </div>
        </nav>
        <div className="row">
          <div className="col-xxl-5">
            <p className="text-white-50 mb-5 mb-md-6 mb-xxl-5">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
        </div>
        <div className="d-md-flex justify-content-between align-items-center">
          <p className="text-white-50 mb-5 fw-bold d-md-inline-block mb-md-0">
            Copyright 2021. All Rights Reserved
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
