import { Product } from "types";
import { formatter } from "utils";

interface CheckoutProductProps {
  product: Product;
  quantity: number;
}

function CheckoutProduct({
  product: {
    image: { mobile },
    price,
    shortName,
    name,
  },
  quantity,
}: CheckoutProductProps) {
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
            <span className="fw-bold d-block">{shortName}</span>
            <span className="fw-bold text-black-50 mb-0 d-block">
              {formatter.format(price)}
            </span>
          </div>
          <span className="fw-bold text-black-50 mb-0 d-block">
            x{quantity}
          </span>
        </div>
      </div>
    </li>
  );
}

export default CheckoutProduct;
