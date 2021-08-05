import { createContext } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface PurchaseFormContextInterface {
  register: UseFormRegister<IPurchaseFieldsValues>;
  errors: FieldErrors;
  paymentMethod: string;
}

const PurchaseFormContext = createContext<PurchaseFormContextInterface | null>(
  null
);

export default PurchaseFormContext;
