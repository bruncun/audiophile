import orangeRectangle from "assets/shared/desktop/image-orange-rectangle.svg";
import logo from "assets/shared/desktop/logo.svg";
import instagram from "assets/shared/desktop/icon-instagram.svg";
import twitter from "assets/shared/desktop/icon-twitter.svg";
import facebook from "assets/shared/desktop/icon-facebook.svg";

function Footer() {
  return (
    <div className="mt-5 bg-dark py-5 text-center position-relative">
      <img
        className="position-absolute top-0 start-50 translate-middle-x"
        src={orangeRectangle}
        alt="Orange rectangle"
      />
      <div className="container">
        <img className="mb-5" src={logo} alt="Audiophile" />
        <a
          href="#"
          className="text-white text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-3 d-block"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-3 d-block"
        >
          Headphones
        </a>
        <a
          href="#"
          className="text-white text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-3 d-block"
        >
          Speakers
        </a>
        <a
          href="#"
          className="text-white text-decoration-none fs-7 fw-bold ls-3 text-uppercase mb-5 d-block"
        >
          Earphones
        </a>
        <p className="text-white-50 mb-5">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="text-white-50 mb-5 fw-bold">
          Copyright 2021. All Rights Reserved
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
