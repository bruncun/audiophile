import { useState } from "react";
import CheckoutLayout from "./CheckoutLayout";
import GoBackButton from "./GoBackButton";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutConfirmation from "./CheckoutConfirmation";

function Checkout() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
  });

  function onInputChange(event: React.FormEvent) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    setShowConfirmation(true);
  }

  function onModalBackdropClick(event: React.MouseEvent) {
    let isModal = false;
    let { parentElement } = event.target as Element;
    while (parentElement) {
      const classList = parentElement.classList;
      if (classList.contains("modal-dialog")) isModal = true;
      parentElement = parentElement.parentElement;
    }
    setShowConfirmation(isModal);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <CheckoutLayout
        goBackButton={<GoBackButton />}
        checkoutForm={
          <CheckoutForm
            onInputChange={onInputChange}
            paymentMethod={form.paymentMethod}
          />
        }
        checkoutConfirmation={
          showConfirmation && (
            <CheckoutConfirmation onModalBackdropClick={onModalBackdropClick} />
          )
        }
        checkoutSummary={<CheckoutSummary />}
      />
    </form>
  );
}

export default Checkout;
