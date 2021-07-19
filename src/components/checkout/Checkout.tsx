import { useState, useContext } from "react";
import CheckoutLayout from "./CheckoutLayout";
import GoBackButton from "./GoBackButton";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutConfirmation from "./CheckoutConfirmation";
import { OrdersContext } from "OrdersContext";
import axios from "axios";

function Checkout() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { orders } = useContext(OrdersContext);

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
    localStorage.removeItem("orders");
    const items = Object.keys(orders).map((id) => ({
      id,
      quantity: orders[id],
    }));
    const data = { ...form, items };
    axios.post("http://localhost:3004/orders", data);
    setShowConfirmation(true);
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
        checkoutConfirmation={showConfirmation && <CheckoutConfirmation />}
        checkoutSummary={<CheckoutSummary />}
      />
    </form>
  );
}

export default Checkout;
