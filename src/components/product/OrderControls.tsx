import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import CartContext from "CartContext";

type OrderControlsProps = {
  product: Product;
};

function OrderControls({ product: { id } }: OrderControlsProps) {
  const history = useHistory();
  const location = useLocation() as LocationWithNavState;
  const { dispatch } = useContext(CartContext);
  let [quantity, setQuantity] = useState(1);

  function onAddToCartButtonClick() {
    dispatch({ type: "ADD_ORDER", payload: { quantity, productId: id } });
    history.replace({
      ...location,
      state: { ...location.state, showCart: true },
    });
  }

  return (
    <>
      <div className="btn-group me-3" role="group" aria-label="Quantity">
        <button
          type="button"
          className="btn btn-light px-3 text-black-n0"
          data-cy="decrement-quantity"
          onClick={() => setQuantity(quantity > 1 ? --quantity : quantity)}
        >
          -
        </button>
        <div
          className="bg-light d-flex align-items-center justify-content-center"
          style={{ width: "3rem" }}
        >
          <span className="fw-bold" data-cy="quantity">
            {quantity}
          </span>
        </div>
        <button
          type="button"
          data-cy="increment-quantity"
          className="btn btn-light px-3 text-black-50"
          onClick={() => setQuantity(++quantity)}
        >
          +
        </button>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={onAddToCartButtonClick}
      >
        Add to cart
      </button>
    </>
  );
}

export default OrderControls;