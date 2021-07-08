import { useState } from "react";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutConfirmation from "./CheckoutConfirmation";

function Checkout() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
  });

  function onInputChange(event: React.FormEvent) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    setShowConfirmation(true);
    console.log(form);
  }

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
        <CheckoutConfirmation onModalBackdropClick={onModalBackdropClick} />
      )}
      <div className="container-md">
        <span className="mt-3 mb-4 text-black-50 d-block">Go Back</span>
        <form onSubmit={onFormSubmit}>
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
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={onInputChange}
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6 mb-md-4">
                      <label htmlFor="tel" className="form-label">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="tel"
                        onChange={onInputChange}
                      />
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
                      name="address"
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="zipCode" className="form-label">
                        Zip Code
                      </label>
                      <input
                        type="tel"
                        autoComplete="postal-code"
                        className="form-control"
                        name="zipCode"
                        onChange={onInputChange}
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
                        name="city"
                        onChange={onInputChange}
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
                        autoComplete="country-id"
                        className="form-control"
                        name="country"
                        onChange={onInputChange}
                      />
                    </div>
                  </div>
                  <h6 className="text-primary fw-bold mb-3">
                    Shipping Details
                  </h6>
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
                            name="paymentMethod"
                            value="e-money"
                            id="e-money"
                            onChange={onInputChange}
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
                            name="paymentMethod"
                            value="cash-on-delivery"
                            id="cash-on-delivery"
                            onChange={onInputChange}
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
                  {form.paymentMethod === "e-money" && (
                    <div className="row g-3">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="e-money-number" className="form-label">
                          e-Money Number
                        </label>
                        <input
                          type="tel"
                          id="e-money-number"
                          className="form-control"
                          name="e-money-number"
                          onChange={onInputChange}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="e-money-pin" className="form-label">
                          e-Money PIN
                        </label>
                        <input
                          type="tel"
                          id="e-money-pin"
                          className="form-control"
                          onChange={onInputChange}
                        />
                      </div>
                    </div>
                  )}
                  {form.paymentMethod === "cash-on-delivery" && (
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="/assets/checkout/icon-cash-on-delivery.svg"
                          alt="Cash on Delivery"
                        />
                      </div>
                      <div className="flex-grow-1 ms-4">
                        <p className="text-black-50 mb-0">
                          The ‘Cash on Delivery’ option enables you to pay in
                          cash when our delivery courier arrives at your
                          residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <CheckoutSummary />
            </div>
          </div>
        </form>
      </div>
      {showConfirmation && <div className="modal-backdrop fade show" />}
    </div>
  );
}

export default Checkout;
