import CheckoutFormContext from "CheckoutFormContext";
import { useContext } from "react";

function PaymentDetails() {
  const checkoutFormContext = useContext(CheckoutFormContext)!;
  const { register } = checkoutFormContext!;

  return (
    <>
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
                {...register("paymentMethod", { required: true })}
                value="e-money"
                id="e-money"
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
                {...register("paymentMethod", { required: true })}
                value="cash-on-delivery"
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
    </>
  );
}

export default PaymentDetails;
