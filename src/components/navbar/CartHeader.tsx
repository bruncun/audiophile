import CartContext from "CartContext";
import { useContext } from "react";

function CartHeader() {
  const { selectedProductIds, dispatch } = useContext(CartContext);

  function onRemoveAllClick() {
    dispatch({ type: "REMOVE_ALL_ORDERS" });
  }

  return (
    <>
      <h6 className="modal-title fw-bold" id="staticBackdropLabel">
        Cart ({selectedProductIds.length})
      </h6>
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
