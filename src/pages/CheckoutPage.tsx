import { useContext, useState } from "react";
import CheckoutLayout from "components/checkout/CheckoutLayout";
import GoBackButton from "components/checkout/GoBackButton";
import CheckoutForm from "components/checkout/CheckoutForm";
import CheckoutSummary from "components/checkout/CheckoutSummary";
import ConfirmationModal from "components/checkout/ConfirmationModal";
import CartContext from "CartContext";
import axios from "axios";
import { modifyBodyClassList } from "utils";
import { useForm, SubmitHandler } from "react-hook-form";
import CheckoutFormContext from "CheckoutFormContext";

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
    axios.post(`${process.env.REACT_APP_API_URL}/orders`, data);
    setShowConfirmation(true);
  };

  return (
    <CheckoutFormContext.Provider value={{ register, errors, paymentMethod }}>
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
          checkoutConfirmation={showConfirmation && <ConfirmationModal />}
          checkoutSummary={<CheckoutSummary />}
        />
      </form>
    </CheckoutFormContext.Provider>
  );
}

export default Checkout;
