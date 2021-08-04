import { useContext } from "react";
import CheckoutLayout from "components/checkout/CheckoutLayout";
import GoBackButton from "components/checkout/GoBackButton";
import CheckoutForm from "components/checkout/CheckoutForm";
import CheckoutSummary from "components/checkout/CheckoutSummary";
import ConfirmationModal from "components/checkout/ConfirmationModal";
import CartContext from "contexts/CartContext";
import { modifyBodyClassList } from "utils";
import { useForm, SubmitHandler } from "react-hook-form";
import CheckoutFormContext from "contexts/CheckoutFormContext";
import { useSavePurchase, useProductsById } from "hooks/useApi";
import { Redirect } from "react-router-dom";
import Spinner from "components/shared/Spinner";

function CheckoutPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<ICheckoutFormValues>();
  const paymentMethod = watch("paymentMethod", "");
  const { cart, selectedProductIds } = useContext(CartContext);
  const selectedProductQueries = useProductsById(selectedProductIds);
  const { mutate, isSuccess } = useSavePurchase();

  if (selectedProductQueries.some(({ isLoading }) => isLoading))
    return <Spinner />;

  if (isSuccess) {
    modifyBodyClassList("overflow-hidden", "add");
    localStorage.removeItem("audiophile-cart");
  } else {
    modifyBodyClassList("overflow-hidden", "remove");
  }

  const onFormSubmit: SubmitHandler<ICheckoutFormValues> = (form) => {
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

  if (selectedProductIds.length === 0) {
    return <Redirect to="/" />;
  } else {
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
            checkoutConfirmation={isSuccess && <ConfirmationModal />}
            checkoutSummary={<CheckoutSummary />}
          />
        </form>
      </CheckoutFormContext.Provider>
    );
  }
}

export default CheckoutPage;
