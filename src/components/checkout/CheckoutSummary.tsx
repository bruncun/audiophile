import { OrdersContext } from "OrdersContext";
import { useContext } from "react";
import { formatter } from "utils";
import { Product } from "types";
import useProductsBySlugs from "hooks/useProductsBySlugs";
import CheckoutProduct from "./CheckoutProduct";

function CheckoutSummary() {
  const { orders } = useContext(OrdersContext);
  const queriesInfo = useProductsBySlugs(Object.keys(orders));

  const total = queriesInfo.reduce((sum, { data }) => {
    const [{ price, slug }] = data as Product[];
    return sum + price * orders[slug];
  }, 0);

  const shipping = 50;

  const vat = (total + shipping) * 0.2;

  const grandTotal = total + shipping + vat;

  return (
    <div className="card bg-white">
      <div className="card-body">
        <h3 className="fw-bold mb-4">Summary</h3>
        <ul className="list-unstyled">
          {queriesInfo.map(({ data }) => {
            const [product] = data as Product[];
            const { slug } = product;
            return (
              <CheckoutProduct product={product} quantity={orders[slug]} />
            );
          })}
        </ul>
        <div className="d-flex justify-content-between py-2">
          <span className="text-black-50 text-uppercase">Total</span>
          <span className="text-black fw-bold">{formatter.format(total)}</span>
        </div>
        <div className="d-flex justify-content-between py-2">
          <span className="text-black-50 text-uppercase">Shipping</span>
          <span className="text-black fw-bold">
            {formatter.format(shipping)}
          </span>
        </div>
        <div className="d-flex justify-content-between py-2 mb-3">
          <span className="text-black-50 text-uppercase">VAT (Included)</span>
          <span className="text-black fw-bold">{formatter.format(vat)}</span>
        </div>
        <div className="d-flex justify-content-between py-2 mb-3">
          <span className="text-black-50 text-uppercase">Grand Total</span>
          <span className="text-primary fw-bold">
            {formatter.format(grandTotal)}
          </span>
        </div>
        <button
          type="submit"
          className="btn btn-primary d-block w-100"
          data-cy="checkout-pay"
        >
          Continue & Pay
        </button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
