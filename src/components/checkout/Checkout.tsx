import { useContext, useState } from "react";
import CheckoutLayout from "./CheckoutLayout";
import GoBackButton from "./GoBackButton";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutConfirmation from "./CheckoutConfirmation";
import CartContext from "CartContext";
import axios from "axios";
import { modifyBodyClassList } from "utils";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICheckoutFormValues } from "types";

function Checkout() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<ICheckoutFormValues>();
  const paymentMethod = watch("paymentMethod", "");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { cart } = useContext(CartContext);

  if (showConfirmation) {
    modifyBodyClassList("overflow-hidden", "add");
  } else {
    modifyBodyClassList("overflow-hidden", "remove");
  }

  const onFormSubmit: SubmitHandler<ICheckoutFormValues> = (form) => {
    localStorage.removeItem("audiophile-cart");
    const items = Object.keys(cart).map((id) => ({
      id,
      quantity: cart[id],
    }));
    const data = { ...form, items };
    axios.post("http://localhost:3004/orders", data);
    setShowConfirmation(true);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
      <CheckoutLayout
        goBackButton={<GoBackButton />}
        checkoutForm={
          <CheckoutForm
            register={register}
            paymentMethod={paymentMethod}
            errors={errors}
          />
        }
        checkoutConfirmation={showConfirmation && <CheckoutConfirmation />}
        checkoutSummary={<CheckoutSummary />}
      />
    </form>
  );
}

export default Checkout;
