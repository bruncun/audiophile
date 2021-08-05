import { formatter } from "utils";
import { Link } from "react-router-dom";

interface ConfirmationProductProps {
  product: Product;
  quantity: number;
}

function CheckoutConfirmation({
  product: {
    slug,
    price,
    image: { mobile },
    shortName,
    name,
  },
  quantity,
}: ConfirmationProductProps) {
  return (
    <li>
      <div className="d-flex align-items-center pb-2">
        <Link to={`/products/${slug}`}>
          <img
            src={mobile}
            width="50"
            height="50"
            className="rounded me-4"
            alt={name}
          />
        </Link>
        <div className="d-flex justify-content-between w-100 align-items-center mb-1 mb-md-0">
          <div className="w-100">
            <div className="d-flex justify-content-between">
              <Link
                to={`/products/${slug}`}
                className="text-decoration-none text-body"
              >
                <span className="fw-bold d-block">{shortName}</span>
              </Link>
              <span className="fw-bold text-black-50 mb-0 text-end">
                x{quantity}
              </span>
            </div>
            <span className="fw-bold text-black-50 mb-0">
              {formatter.format(price * quantity)}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CheckoutConfirmation;
