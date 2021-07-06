// TODO: Add cart image to product data
import { Product } from "types";
import { formatter } from "utils";

interface CartProductProps {
  product: Product;
  quantity: number;
  onDecrementClick: () => void;
  onIncrementClick: () => void;
}

function CartProduct({
  product: {
    image: { mobile },
    price,
    name,
  },
  quantity,
  onDecrementClick,
  onIncrementClick,
}: CartProductProps) {
  return (
    <li className="mb-4">
      <div className="d-flex align-items-center">
        <img
          src={mobile}
          width="64"
          height="64"
          className="rounded me-4"
          alt={name}
        />
        <div className="d-flex justify-content-between w-100 align-items-center">
          <div>
            <h6 className="fw-bold">{name}</h6>
            <h6 className="fw-bold text-black-50 mb-0">
              {formatter.format(price * quantity)}
            </h6>
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
