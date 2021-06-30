import { Link } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  function onModalBackdropClick(event: React.MouseEvent) {
    let isModal = false;
    let { parentElement } = event.target as Element;
    while (parentElement) {
      const classList = parentElement.classList;
      if (classList.contains("modal-dialog")) isModal = true;
      parentElement = parentElement.parentElement;
    }
    setShowConfirmation(isModal);
  }

  return (
    <div data-cy="checkout">
      {showConfirmation && (
        <div
          className="modal fade show d-block"
          onClick={onModalBackdropClick}
          id="staticBackdrop"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          data-cy="cart-modal"
        >
          <div className="modal-dialog mt-6 pt-2 mx-auto z-9999">
            <div className="modal-content">
              <div className="modal-body p-4">
                <img src="assets/checkout/icon-check.svg" className="mb-4" />
                <h2 className="fw-bold mb-3 me-md-6 pe-md-5">
                  Thank you for your order
                </h2>
                <p className="text-black-50 mb-4">
                  You will receive an email confirmation shortly.
                </p>
                <div className="d-md-none">
                  <div className="rounded-top bg-light d-flex p-4 flex-column">
                    <ul className="list-unstyled">
                      <li>
                        <div className="d-flex align-items-center border-bottom pb-2">
                          <img
                            src="assets/cart/image-xx99-mark-two-headphones.jpg"
                            width="50"
                            height="50"
                            className="rounded me-4"
                          />
                          <div className="d-flex justify-content-between w-100 align-items-center">
                            <div className="w-100">
                              <div className="d-flex justify-content-between">
                                <h6 className="fw-bold">XX99 MK II</h6>
                                <h6 className="fw-bold text-black-50 mb-0 text-end">
                                  x1
                                </h6>
                              </div>
                              <h6 className="fw-bold text-black-50 mb-0">
                                $2,9999
                              </h6>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h6 className="text-black-50 fw-bold text-center mb-0">
                      and 2 other item(s)
                    </h6>
                  </div>
                  <div className="rounded-bottom bg-dark d-flex p-4 flex-column">
                    <span className="text-white-50 text-uppercase mb-2">
                      Grand Total
                    </span>
                    <h6 className="text-white fw-bold mb-0">$5,446</h6>
                  </div>
                </div>
                <div className="d-none d-md-flex w-100">
                  <div className="rounded-left bg-light d-flex p-4 flex-column w-100">
                    <ul className="list-unstyled">
                      <li>
                        <div className="d-flex align-items-center border-bottom pb-2">
                          <img
                            src="assets/cart/image-xx99-mark-two-headphones.jpg"
                            width="50"
                            height="50"
                            className="rounded me-4"
                          />
                          <div className="d-flex justify-content-between w-100 align-items-center">
                            <div className="w-100">
                              <div className="d-flex justify-content-between">
                                <h6 className="fw-bold">XX99 MK II</h6>
                                <h6 className="fw-bold text-black-50 mb-0 text-end">
                                  x1
                                </h6>
                              </div>
                              <h6 className="fw-bold text-black-50 mb-0">
                                $2,9999
                              </h6>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h6 className="text-black-50 fw-bold text-center mb-0">
                      and 2 other item(s)
                    </h6>
                  </div>
                  <div className="rounded-right bg-dark d-flex p-4 flex-column w-75 justify-content-center">
                    <span className="text-white-50 text-uppercase mb-2">
                      Grand Total
                    </span>
                    <h6 className="text-white fw-bold mb-0">$5,446</h6>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-2">
                <Link
                  to="/checkout"
                  className="btn btn-primary d-block w-100"
                  data-cy="cart-checkout"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container-md">
        <a
          href="#"
          className="mt-3 mb-4 text-black-50 text-decoration-none d-block"
        >
          Go Back
        </a>
        <div className="row">
          <div className="col-lg-8">
            <div className="card bg-white mb-4 p-lg-5">
              <div className="card-body">
                <h2 className="fw-bold mb-4">Checkout</h2>
                <h6 className="text-primary fw-bold mb-3">Billing Details</h6>
                <div className="row g-3">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6 mb-md-4">
                    <label htmlFor="tel" className="form-label">
                      Telephone
                    </label>
                    <input type="tel" className="form-control" id="tel" />
                  </div>
                </div>
                <h6 className="text-primary fw-bold mb-3">Payment Details</h6>
                <div className="mb-4">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    autoComplete="street-address"
                    className="form-control"
                    id="address"
                  />
                </div>
                <div className="row g-3">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="zip-code" className="form-label">
                      Zip Code
                    </label>
                    <input
                      type="tel"
                      autoComplete="postal-code"
                      className="form-control"
                      id="zip-code"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      autoComplete="address-level-2"
                      className="form-control"
                      id="city"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <input
                      type="text"
                      autoComplete="country-name"
                      className="form-control"
                      id="country"
                    />
                  </div>
                </div>
                <h6 className="text-primary fw-bold mb-3">Shipping Details</h6>
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label">Payment Method</label>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <div className="form-check py-3 rounded border">
                        <input
                          className="form-check-input ms-0 me-2"
                          type="radio"
                          name="payment-method"
                          id="e-money"
                        />
                        <label
                          className="form-check-label fw-bold"
                          htmlFor="e-money"
                        >
                          e-Money
                        </label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="form-check py-3 rounded border">
                        <input
                          className="form-check-input ms-0 me-2"
                          type="radio"
                          name="payment-method"
                          id="cash-on-delivery"
                        />
                        <label
                          className="form-check-label fw-bold"
                          htmlFor="cash-on-delivery"
                        >
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="e-money-number" className="form-label">
                      e-Money Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="e-money-number"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="e-money-pin" className="form-label">
                      e-Money PIN
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="e-money-pin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-white">
              <div className="card-body">
                <h3 className="fw-bold mb-4">Summary</h3>
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
                        <h6 className="fw-bold text-black-50 mb-0">x1</h6>
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
                        <h6 className="fw-bold text-black-50 mb-0">x2</h6>
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
                        <h6 className="fw-bold text-black-50 mb-0">x1</h6>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="d-flex justify-content-between py-2">
                  <span className="text-black-50 text-uppercase">Total</span>
                  <span className="text-black fw-bold">$5,396</span>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <span className="text-black-50 text-uppercase">Shipping</span>
                  <span className="text-black fw-bold">$50</span>
                </div>
                <div className="d-flex justify-content-between py-2 mb-3">
                  <span className="text-black-50 text-uppercase">
                    VAT (Included)
                  </span>
                  <span className="text-black fw-bold">$1,079</span>
                </div>
                <div className="d-flex justify-content-between py-2 mb-3">
                  <span className="text-black-50 text-uppercase">
                    Grand Total
                  </span>
                  <span className="text-primary fw-bold">$5,446</span>
                </div>
                <button
                  className="btn btn-primary d-block w-100"
                  onClick={() => setShowConfirmation(true)}
                  data-cy="checkout-pay"
                >
                  Continue & Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showConfirmation && <div className="modal-backdrop fade show" />}
    </div>
  );
}

export default Checkout;
