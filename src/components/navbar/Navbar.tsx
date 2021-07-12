import logo from "assets/shared/desktop/logo.svg";
import cart from "assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Cart from "./Cart";

function Navbar() {
  const [showCart, setShowCart] = useState(false);
  function onModalBackdropClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    setShowCart(Boolean(target.closest(".modal-dialog")));
  }

  return (
    <>
      {showCart && <Cart onModalBackdropClick={onModalBackdropClick} />}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top z-9999 py-xxl-1 lh-1">
        <div className="container-md py-4 my-2">
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
            <Link to="/" className="d-none d-md-inline-block lh-1">
              <img
                className="ms-4 ps-3 d-lg-none"
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
          <button
            className="btn btn-link p-0 d-lg-none"
            onClick={() => setShowCart(true)}
          >
            <img src={cart} alt="Cart" />
          </button>
          <div
            className="collapse navbar-collapse position-relative justify-content-between align-items-center"
            id="navbarTogglerDemo02"
          >
            <Link to="/" className="lh-1">
              <img src={logo} alt="Audiophile" width="143" height="24" />
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0 position-absolute translate-middle start-50 top-50">
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
            <button
              className="btn btn-link p-0"
              onClick={() => setShowCart(true)}
              data-cy="cart-toggler"
            >
              <img src={cart} alt="Cart" />
            </button>
          </div>
        </div>
      </nav>
      {showCart && <div className="modal-backdrop fade show" />}
    </>
  );
}

export default Navbar;
