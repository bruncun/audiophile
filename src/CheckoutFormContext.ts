import { createContext } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface CheckoutFormContextInterface {
  register: UseFormRegister<ICheckoutFormValues>;
  errors: FieldErrors;
  paymentMethod: string;
}

const CheckoutFormContext = createContext<CheckoutFormContextInterface | null>(
  null
);

export default CheckoutFormContext;
