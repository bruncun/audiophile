import { useContext } from "react";
import CartContext from "contexts/CartContext";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { UseMutateFunction } from "react-query";
import { AxiosResponse } from "axios";

interface PurchaseFormProps {
  children: JSX.Element;
  handleSubmit: UseFormHandleSubmit<IPurchaseFieldsValues>;
  mutate: UseMutateFunction<AxiosResponse<any>, unknown, Purchase, unknown>;
}

function PurchaseForm({ children, handleSubmit, mutate }: PurchaseFormProps) {
  const { cart } = useContext(CartContext);

  const onFormSubmit: SubmitHandler<IPurchaseFieldsValues> = (form) => {
    const orders = Object.keys(cart).map((id) => {
      const productId = parseInt(id);

      return {
        productId,
        quantity: cart[productId],
      };
    });
    const data = { ...form, orders };
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
      {children}
    </form>
  );
}

export default PurchaseForm;
