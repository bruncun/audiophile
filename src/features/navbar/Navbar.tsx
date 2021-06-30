// TODO: Implement collapse
// TODO: Redirect to root on 404
// TODO: Refactor html semantics

import logo from "assets/shared/desktop/logo.svg";
import cart from "assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showCart, setShowCart] = useState(false);
  function onModalBackdropClick(event: React.MouseEvent) {
    let isModal = false;
    let { parentElement } = event.target as Element;
    while (parentElement) {
      const classList = parentElement.classList;
      if (classList.contains("modal-dialog")) isModal = true;
      parentElement = parentElement.parentElement;
    }
    setShowCart(isModal);
  }

  return (
    <>
      {showCart && (
        <div
          className="modal fade show d-block"
          onClick={onModalBackdropClick}
          id="staticBackdrop"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          data-cy="cart-modal"
        >
          <div className="modal-dialog mt-6 pt-2 mx-4 modal-sm ms-sm-auto z-9999">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="staticBackdropLabel">
                  Cart (3)
                </h5>
                <a href="#" className="text-black-50">
                  Remove all
                </a>
              </div>
              <div className="modal-body">
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/cart/image-xx99-mark-two-headphones.jpg"
                        width="64"
                        height="64"
                        className="rounded me-4"
                      />
                      <div className="d-flex justify-content-between w-100 align-items-center">
                        <div>
                          <h6 className="fw-bold">XX99 MK II</h6>
                          <h6 className="fw-bold text-black-50 mb-0">
                            $2,9999
                          </h6>
                        </div>
                        <div>
                          <div
                            className="btn-group btn-group-sm"
                            role="group"
                            aria-label="Quantity"
                          >
                            <button type="button" className="btn btn-light">
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-light px-2"
                            >
                              1
                            </button>
                            <button type="button" className="btn btn-light">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/cart/image-xx99-mark-two-headphones.jpg"
                        width="64"
                        height="64"
                        className="rounded me-4"
                      />
                      <div className="d-flex justify-content-between w-100 align-items-center">
                        <div>
                          <h6 className="fw-bold">XX99 MK II</h6>
                          <h6 className="fw-bold text-black-50 mb-0">
                            $2,9999
                          </h6>
                        </div>
                        <div>
                          <div
                            className="btn-group btn-group-sm"
                            role="group"
                            aria-label="Quantity"
                          >
                            <button type="button" className="btn btn-light">
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-light px-2"
                            >
                              1
                            </button>
                            <button type="button" className="btn btn-light">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/cart/image-xx99-mark-two-headphones.jpg"
                        width="64"
                        height="64"
                        className="rounded me-4"
                      />
                      <div className="d-flex justify-content-between w-100 align-items-center">
                        <div>
                          <h6 className="fw-bold">XX99 MK II</h6>
                          <h6 className="fw-bold text-black-50 mb-0">
                            $2,9999
                          </h6>
                        </div>
                        <div>
                          <div
                            className="btn-group btn-group-sm"
                            role="group"
                            aria-label="Quantity"
                          >
                            <button type="button" className="btn btn-light">
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-light px-2"
                            >
                              1
                            </button>
                            <button type="button" className="btn btn-light">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="d-flex justify-content-between pt-2">
                  <span className="text-black-50 text-uppercase">Total</span>
                  <span className="text-black fw-bold">$5,396</span>
                </div>
              </div>
              <div className="modal-footer pt-2">
                <Link
                  to="/checkout"
                  className="btn btn-primary d-block w-100"
                  data-cy="cart-checkout"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top z-9999">
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
          <a className="d-lg-none" href="#" onClick={() => setShowCart(true)}>
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
                  to="/category/headphones"
                  data-cy="headphones-nav-link"
                >
                  Headphones
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/category/earphones"
                  data-cy="earphones-nav-link"
                >
                  Earphones
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/category/speakers"
                  data-cy="speakers-nav-link"
                >
                  Speakers
                </Link>
              </li>
            </ul>
            <a
              href="#"
              onClick={() => setShowCart(true)}
              data-cy="cart-toggler"
            >
              <img src={cart} alt="Cart" />
            </a>
          </div>
        </div>
      </nav>
      {showCart && <div className="modal-backdrop fade show" />}
    </>
  );
}

export default Navbar;
