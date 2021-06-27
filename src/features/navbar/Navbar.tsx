// TODO: Implement collapse

import logo from "assets/shared/desktop/logo.svg";
import cart from "assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-md border-bottom border-gray1 py-4">
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a href="#" className="d-none d-md-inline-block">
            <img className="ms-5 d-lg-none" src={logo} alt="Audiophile" />
          </a>
        </div>
        <a href="#" className="d-md-none">
          <img src={logo} alt="Audiophile" />
        </a>
        <a className="d-lg-none" href="#">
          <img src={cart} alt="Cart" />
        </a>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarTogglerDemo02"
        >
          <a href="#">
            <img src={logo} alt="Audiophile" />
          </a>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/headphones"
                data-cy="headphones-nav-link"
              >
                Headphones
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/earphones"
                data-cy="earphones-nav-link"
              >
                Earphones
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/speakers"
                data-cy="speakers-nav-link"
              >
                Speakers
              </Link>
            </li>
          </ul>
          <a href="#">
            <img src={cart} alt="Cart" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
