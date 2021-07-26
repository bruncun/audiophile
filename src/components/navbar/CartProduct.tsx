import CartContext from "CartContext";
import { useContext } from "react";
import { formatter } from "utils";
import { Link } from "react-router-dom";

interface CartProductProps {
  product: Product;
  quantity: number;
}

function CartProduct({
  product: {
    image: { mobile },
    price,
    shortName,
    id,
    slug,
    name,
  },
  quantity,
}: CartProductProps) {
  const { dispatch } = useContext(CartContext);

  function onDecrementClick() {
    dispatch({
      type: "ADD_ORDER",
      payload: {
        quantity: -1,
        productId: id,
      },
    });
  }

  function onIncrementClick() {
    dispatch({
      type: "ADD_ORDER",
      payload: {
        quantity: 1,
        productId: id,
      },
    });
  }

  return (
    <li className="mb-4">
      <div className="d-flex align-items-center">
        <Link to={`/products/${slug}`}>
          <img
            src={mobile}
            width="64"
            height="64"
            className="rounded me-4"
            alt={name}
          />
        </Link>
        <div className="d-flex justify-content-between w-100 align-items-center">
          <div>
            <Link
              to={`/products/${slug}`}
              className="text-decoration-none text-body"
            >
              <span className="fw-bold d-block">{shortName}</span>
            </Link>
            <span className="fw-bold text-black-50 mb-0 d-block">
              {formatter.format(price * quantity)}
            </span>
          </div>
          <div>
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="quantity"
            >
              <button
                type="button"
                className="btn btn-light"
                onClick={onDecrementClick}
              >
                -
              </button>
              <button type="button" className="btn btn-light px-2">
                {quantity}
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={onIncrementClick}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartProduct;
