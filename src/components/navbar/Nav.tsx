import CartToggler from "components/navbar/CartToggler";
import { Link } from "react-router-dom";

interface NavProps {
  onCartTogglerClick: () => void;
  onNavbarTogglerClick: () => void;
}

function Nav({ onCartTogglerClick, onNavbarTogglerClick }: NavProps) {
  return (
    <>
      <div>
        <button
          className="navbar-toggler"
          onClick={onNavbarTogglerClick}
          aria-label="toggle-navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="d-none d-md-inline-block lh-1">
          <img
            className="ms-4 ps-3 d-xxl-none"
            src="/assets/shared/desktop/logo.svg"
            alt="Audiophile"
            width="143"
            height="24"
          />
        </Link>
      </div>
      <Link to="/" className="d-md-none lh-1">
        <img
          src="/assets/shared/desktop/logo.svg"
          alt="Audiophile"
          width="143"
          height="24"
        />
      </Link>
      <div className="d-xxl-none">
        <CartToggler onCartTogglerClick={onCartTogglerClick} />
      </div>
      <div className="collapse navbar-collapse position-relative justify-content-between d-none d-xxl-flex">
        <Link to="/" className="lh-1">
          <img
            src="/assets/shared/desktop/logo.svg"
            alt="Audiophile"
            width="143"
            height="24"
          />
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
        <CartToggler onCartTogglerClick={onCartTogglerClick} />
      </div>
    </>
  );
}

export default Nav;
