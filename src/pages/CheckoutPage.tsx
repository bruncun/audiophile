import { useContext } from "react";
import CheckoutLayout from "components/checkout/CheckoutLayout";
import GoBackButton from "components/checkout/GoBackButton";
import PurchaseFields from "components/checkout/purchase-fields/PurchaseFields";
import Summary from "components/checkout/Summary";
import ConfirmationModal from "components/checkout/confirmation-modal/ConfirmationModal";
import CartContext from "contexts/CartContext";
import { useForm } from "react-hook-form";
import PurchaseFormContext from "contexts/PurchaseFormContext";
import { useSavePurchase, useProductsById } from "hooks/useApi";
import { Redirect } from "react-router-dom";
import Spinner from "components/shared/Spinner";
import PurchaseForm from "components/checkout/PurchaseForm";

function CheckoutPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<IPurchaseFieldsValues>();
  const paymentMethod = watch("paymentMethod", "");
  const { selectedProductIds } = useContext(CartContext);
  const selectedProductQueries = useProductsById(selectedProductIds);
  const { mutate, isSuccess } = useSavePurchase();

  if (selectedProductQueries.some(({ isLoading }) => isLoading))
    return <Spinner />;

  if (selectedProductIds.length === 0) {
    return <Redirect to="/" />;
  } else {
    return (
      <PurchaseFormContext.Provider value={{ register, errors, paymentMethod }}>
        <PurchaseForm handleSubmit={handleSubmit} mutate={mutate}>
          <CheckoutLayout
            goBackButton={<GoBackButton />}
            purchaseForm={<PurchaseFields paymentMethod={paymentMethod} />}
            confirmation={isSuccess && <ConfirmationModal />}
            summary={<Summary />}
          />
        </PurchaseForm>
      </PurchaseFormContext.Provider>
    );
  }
}

export default CheckoutPage;
