import orangeRectangle from "assets/shared/desktop/image-orange-rectangle.svg";
import logo from "assets/shared/desktop/logo.svg";
import instagram from "assets/shared/desktop/icon-instagram.svg";
import twitter from "assets/shared/desktop/icon-twitter.svg";
import facebook from "assets/shared/desktop/icon-facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-5 bg-dark py-5 text-center text-md-start position-relative">
      <div className="container-md position-absolute top-0 start-50 translate-middle-x orange-rectangle">
        <img
          className="align-top"
          src={orangeRectangle}
          alt="Orange rectangle"
        />
      </div>
      <div className="container">
        <div className="d-lg-flex justify-content-between">
          <div className="text-center text-md-start mb-5">
            <img src={logo} alt="Audiophile" />
          </div>
          <div>
            <Link
              to="/"
              className="text-white text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-3 d-block d-md-inline-block me-md-4"
            >
              Home
            </Link>
            <Link
              to="/headphones"
              className="text-white text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-3 d-block d-md-inline-block me-md-4"
            >
              Headphones
            </Link>
            <Link
              to="/headphones"
              className="text-white text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-3 d-block d-md-inline-block me-md-4"
            >
              Speakers
            </Link>
            <Link
              to="/earphones"
              className="text-white text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-5 d-block d-md-inline-block"
            >
              Earphones
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <p className="text-white-50 mb-5 mb-md-6 mb-lg-5">
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
          <ul className="list-inline d-md-inline-block mb-0">
            <li className="list-inline-item">
              <a href="https://facebook.com/audiophile">
                <img src={facebook} alt="Facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/audiophile">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://instagram.com/audiophile">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;