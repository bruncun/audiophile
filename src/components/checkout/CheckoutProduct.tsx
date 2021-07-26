import { formatter } from "utils";
import { Link } from "react-router-dom";

interface CheckoutProductProps {
  product: Product;
  quantity: number;
}

function CheckoutProduct({
  product: {
    image: { mobile },
    price,
    shortName,
    slug,
    name,
  },
  quantity,
}: CheckoutProductProps) {
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
