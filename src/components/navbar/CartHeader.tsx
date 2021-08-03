import CartContext from "contexts/CartContext";
import { useContext } from "react";

function CartHeader() {
  const { selectedProductIds, dispatch } = useContext(CartContext);

  function onRemoveAllClick() {
    dispatch({ type: "REMOVE_ALL_ORDERS" });
  }

  return (
    <>
      <h2 className="modal-title fw-bold h6" id="CartHeader">
        Cart ({selectedProductIds.length})
        <span className="visually-hidden">Press escape to close cart.</span>
      </h2>
      <button
        className="btn btn-link p-0 ls-0 text-black-50 text-capitalize text-primary-hover"
        onClick={onRemoveAllClick}
      >
        Remove <span className="text-lowercase">all</span>
      </button>
    </>
  );
}

export default CartHeader;
