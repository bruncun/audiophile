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
            <h6 className="fw-bold">{name}</h6>
            <h6 className="fw-bold text-black-50 mb-0">
              {formatter.format(price)}
            </h6>
          </div>
          <h6 className="fw-bold text-black-50 mb-0">x{quantity}</h6>
        </div>
      </div>
    </li>
  );
}

export default CheckoutProduct;
