import { OrdersContext } from "OrdersContext";
import { useContext } from "react";
import { formatter } from "utils";
import { Product } from "types";
import { useProductsById } from "hooks/useApi";
import CheckoutProduct from "./CheckoutProduct";

function CheckoutSummary() {
  const { orders } = useContext(OrdersContext);
  const queriesInfo = useProductsById(Object.keys(orders));

  if (queriesInfo.every(({ isLoading }) => isLoading)) return <></>;

  const total = queriesInfo.reduce((sum, { data }) => {
    const { price, id } = data as Product;
    return sum + price * orders[id];
  }, 0);

  const shipping = 50;

  const vat = (total + shipping) * 0.2;

  const grandTotal = total + shipping + vat;

  return (
    <div className="card bg-white">
      <div className="card-body p-4 my-2 mx-xxl-2">
        <h6 className="fw-bold mb-4 pb-2 d-md-none d-xxl-block">Summary</h6>
        <h3 className="fw-bold mb-4 d-none d-md-block d-xxl-none">Summary</h3>
        <ul className="list-unstyled mb-0">
          {queriesInfo.map(({ data }) => {
            const product = data as Product;
            const { id } = product;
            return <CheckoutProduct product={product} quantity={orders[id]} />;
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
        <div className="d-flex justify-content-between py-2 mb-4">
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
