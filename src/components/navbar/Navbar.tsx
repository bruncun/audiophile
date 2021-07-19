import logo from "assets/shared/desktop/logo.svg";
import cart from "assets/shared/desktop/icon-cart.svg";
import CategoryList from "components/shared/CategoryList";
import { Link, useLocation, useHistory } from "react-router-dom";
import Cart from "./Cart";
import { LocationWithNavState } from "types";
import "./Navbar.scss";
import { modifyBodyClassList } from "utils";

function Navbar() {
  const history = useHistory();
  const location = useLocation() as LocationWithNavState;
  const { showCollapse, showCart } = location.state || false;

  if (showCollapse) {
    modifyBodyClassList("collapse-open", "add");
  } else {
    modifyBodyClassList("collapse-open", "remove");
  }

  if (showCart) {
    modifyBodyClassList("overflow-hidden", "add");
  } else {
    modifyBodyClassList("overflow-hidden", "remove");
  }

  function onModalBackdropClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    const showCart = Boolean(target.closest(".modal-dialog"));
    if (!showCart)
      history.replace({
        ...location,
        state: { showCollapse: false, showCart },
      });
  }

  return (
    <>
      {showCart && <Cart onModalBackdropClick={onModalBackdropClick} />}
      <nav className="fixed-top navbar navbar-expand-xxl navbar-dark bg-dark z-9999 py-1 lh-1">
        <div className="container-md py-4 my-2">
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
          <Link
            className={`btn btn-link p-0 d-xxl-none ${
              location.pathname === "/checkout" ? "disabled" : ""
            }`}
            to={{
              ...location,
              state: { showCollapse: false, showCart: !showCart },
            }}
            replace
          >
            <img src={cart} alt="Cart" />
          </Link>
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
            <Link
              className={`btn btn-link p-0 ${
                location.pathname === "/checkout" ? "disabled" : ""
              }`}
              to={{
                ...location,
                state: { showCollapse: false, showCart: !showCart },
              }}
              replace
            >
              <img src={cart} alt="Cart" />
            </Link>
          </div>
        </div>
      </nav>
      {showCollapse && (
        <div className="fixed-top bg-white rounded-bottom d-xxl-none pt-2 py-md-5 mt-6 overflow-scroll z-9999">
          <div className="container-md pt-5 pt-md-2">
            <div className="pt-1 pb-6 mb-4 mb-md-2 pb-md-2 pt-md-4 mt-md-1">
              <CategoryList />
            </div>
          </div>
        </div>
      )}
      {showCart && <div className="modal-backdrop fade show" />}
      {showCollapse && <div className="modal-backdrop fade show d-xxl-none" />}
    </>
  );
}

export default Navbar;
