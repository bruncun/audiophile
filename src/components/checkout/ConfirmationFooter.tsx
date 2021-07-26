import { useHistory } from "react-router-dom";
import CartContext from "CartContext";
import { useContext } from "react";

function ConfirmationFooter() {
  const history = useHistory();
  const { dispatch } = useContext(CartContext);

  function onBackToHomeClick() {
    dispatch({ type: "REMOVE_ALL_ORDERS" });
    history.push("/");
  }

  return (
    <button
      onClick={onBackToHomeClick}
      className="btn btn-primary d-block w-100"
      data-cy="cart-checkout"
    >
      Back to Home
    </button>
  );
}

export default ConfirmationFooter;
