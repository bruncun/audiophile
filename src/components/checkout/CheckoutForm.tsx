interface CheckoutFormProps {
  onInputChange: (event: React.FormEvent) => void;
  paymentMethod: string;
}

function CheckoutForm({ onInputChange, paymentMethod }: CheckoutFormProps) {
  return (
    <div className="card bg-white">
      <div className="card-body py-4 my-md-1 px-md-4 mx-md-2 p-xxl-5 m-xxl-0">
        <h3 className="fw-bold mb-4 pb-2 pb-md-3 d-md-none">Checkout</h3>
        <h2 className="fw-bold mb-4 pb-2 pb-md-3 d-none d-md-block">
          Checkout
        </h2>
        <h6 className="text-primary fw-bold mb-3 fs-7">Billing Details</h6>
        <div className="row gx-3">
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
        <div className="row mb-4 pb-2">
          <div className="col-md-6 mb-md-4">
            <label htmlFor="tel" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              name="tel"
              onChange={onInputChange}
            />
          </div>
        </div>
        <h6 className="text-primary fw-bold mb-3 fs-7">Shipping Info</h6>
        <div className="mb-4">
          <label htmlFor="address" className="form-label">
            Your Address
          </label>
          <input
            type="text"
            autoComplete="street-address"
            className="form-control"
            name="address"
            onChange={onInputChange}
          />
        </div>
        <div className="row gx-3">
          <div className="col-md-6 mb-2">
            <label htmlFor="zipCode" className="form-label">
              ZIP Code
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
        <div className="row mb-4 pb-2">
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
        <h6 className="text-primary fw-bold mb-3 fs-7">Payment Details</h6>
        <div className="row gx-3">
          <div className="col-md-6">
            <label className="form-label">Payment Method</label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <div className="form-check py-3 rounded border">
                <input
                  className="form-check-input ms-0 me-2"
                  type="radio"
                  name="paymentMethod"
                  value="e-money"
                  id="e-money"
                  onChange={onInputChange}
                />
                <label className="form-check-label fw-bold" htmlFor="e-money">
                  e-Money
                </label>
              </div>
            </div>
            <div className="mb-4 pb-2 pb-xxl-0">
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
        {paymentMethod === "e-money" && (
          <div className="row gx-3">
            <div className="col-md-6 mb-2">
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
            <div className="col-md-6">
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
        {paymentMethod === "cash-on-delivery" && (
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                src="/assets/checkout/icon-cash-on-delivery.svg"
                alt="Cash on Delivery"
              />
            </div>
            <div className="flex-grow-1 ms-4">
              <p className="text-black-50 mb-0">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutForm;
