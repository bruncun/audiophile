import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ICheckoutFormValues } from "types";
import Input from "./Input";

interface CheckoutFormProps {
  register: UseFormRegister<ICheckoutFormValues>;
  errors: FieldErrors<ICheckoutFormValues>;
  paymentMethod: string;
}

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const ZIPCODE_REGEX = /^\d{5}(?:[- ]?\d{4})?$/;

function CheckoutForm({ paymentMethod, register, errors }: CheckoutFormProps) {
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
            <Input
              name="name"
              label="Name"
              register={register}
              error={errors.name}
            />
          </div>
          <div className="col-md-6 mb-4">
            <Input
              type="email"
              name="email"
              label="Email Address"
              register={register}
              error={errors.email}
              pattern={EMAIL_REGEX}
            />
          </div>
        </div>
        <div className="row mb-4 pb-2">
          <div className="col-md-6 mb-md-4">
            <Input
              type="tel"
              name="phoneNumber"
              label="Phone Number"
              register={register}
              error={errors.phoneNumber}
              pattern={PHONE_REGEX}
            />
          </div>
        </div>
        <h6 className="text-primary fw-bold mb-3 fs-7">Shipping Info</h6>
        <div className="mb-4">
          <Input
            name="address"
            label="Your Address"
            autocomplete="street-address"
            register={register}
            error={errors.address}
          />
        </div>
        <div className="row gx-3">
          <div className="col-md-6 mb-2">
            <Input
              name="zipCode"
              type="tel"
              label="ZIP Code"
              autocomplete="postal-code"
              register={register}
              error={errors.zipCode}
              pattern={ZIPCODE_REGEX}
            />
          </div>
          <div className="col-md-6 mb-4">
            <Input
              name="city"
              label="City"
              autocomplete="address-level-2"
              register={register}
              error={errors.city}
            />
          </div>
        </div>
        <div className="row mb-4 pb-2">
          <div className="col-md-6 mb-4">
            <Input
              name="country"
              label="Country"
              autocomplete="country-id"
              register={register}
              error={errors.country}
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
        {paymentMethod === "e-money" && (
          <div className="row gx-3">
            <div className="col-md-6 mb-2">
              <Input
                type="tel"
                name="eMoneyNumber"
                label="e-Money Number"
                register={register}
                error={errors.eMoneyNumber}
              />
            </div>
            <div className="col-md-6">
              <Input
                type="tel"
                name="eMoneyPin"
                label="e-Money PIN"
                register={register}
                error={errors.eMoneyPin}
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
