import BillingDetails from "components/checkout/BillingDetails";
import PaymentDetails from "components/checkout/PaymentDetails";
import ShippingInfo from "components/checkout/ShippingInfo";
import CashOnDelivery from "components/checkout/CashOnDelivery";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import Input from "./Input";

interface CheckoutFormProps {
  register: UseFormRegister<ICheckoutFormValues>;
  errors: FieldErrors<ICheckoutFormValues>;
  paymentMethod: string;
}

function CheckoutForm({ paymentMethod }: CheckoutFormProps) {
  return (
    <div className="card bg-white">
      <div className="card-body py-4 my-md-1 px-md-4 mx-md-2 p-xxl-5 m-xxl-0">
        <h3 className="fw-bold mb-4 pb-2 pb-md-3 d-md-none">Checkout</h3>
        <h2 className="fw-bold mb-4 pb-2 pb-md-3 d-none d-md-block">
          Checkout
        </h2>
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
        {paymentMethod === "e-money" && (
          <div className="row gx-3">
            <div className="col-md-6 mb-2">
              <Input
                id="e-money-number"
                type="tel"
                name="eMoneyNumber"
                label="e-Money Number"
              />
            </div>
            <div className="col-md-6">
              <Input
                id="e-money-pin"
                type="tel"
                name="eMoneyPin"
                label="e-Money PIN"
              />
            </div>
          </div>
        )}
        {paymentMethod === "cash-on-delivery" && <CashOnDelivery />}
      </div>
    </div>
  );
}

export default CheckoutForm;
