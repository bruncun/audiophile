import CartToggler from "components/navbar/CartToggler";
import logo from "assets/shared/desktop/logo.svg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Nav() {
  const location = useLocation() as LocationWithNavState;
  const { showCollapse } = location.state || false;

  return (
    <>
      <div>
        <Link
          className="navbar-toggler"
          to={{
            ...location,
            state: { showCart: false, showCollapse: !showCollapse },
          }}
          replace
          aria-controls="collapse-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Link>
        <Link to="/" className="d-none d-md-inline-block lh-1">
          <img
            className="ms-4 ps-3 d-xxl-none"
            src={logo}
            alt="Audiophile"
            width="143"
            height="24"
          />
        </Link>
      </div>
      <Link to="/" className="d-md-none lh-1">
        <img src={logo} alt="Audiophile" width="143" height="24" />
      </Link>
      <div className="d-xxl-none">
        <CartToggler />
      </div>
      <div className="collapse navbar-collapse position-relative justify-content-between">
        <Link to="/" className="lh-1">
          <img src={logo} alt="Audiophile" width="143" height="24" />
        </Link>
        <ul className="navbar-nav mb-2 mb-xxl-0 position-absolute translate-middle start-50 top-50">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
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
              to="/speakers"
              data-cy="speakers-nav-link"
            >
              Speakers
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
        </ul>
        <CartToggler />
      </div>
    </>
  );
}

export default Nav;
