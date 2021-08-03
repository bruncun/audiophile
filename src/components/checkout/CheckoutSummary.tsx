import CartContext from "contexts/CartContext";
import { useContext } from "react";
import { formatter } from "utils";
import { useProductsById, useSavePurchase } from "hooks/useApi";
import CheckoutProduct from "./CheckoutProduct";

function CheckoutSummary() {
  const { isLoading } = useSavePurchase();
  const { getCosts, selectedProductIds, cart } = useContext(CartContext);
  const selectedProductQueries = useProductsById(selectedProductIds);

  const selectedProducts = selectedProductQueries.map(
    ({ data }) => data as Product
  );
  const { total, shipping, vat, grandTotal } = getCosts(selectedProducts);

  return (
    <div className="card bg-white">
      <div className="card-body p-4 my-2 mx-xxl-2">
        <h6 className="fw-bold mb-4 pb-2 d-md-none d-xxl-block">Summary</h6>
        <h3 className="fw-bold mb-4 d-none d-md-block d-xxl-none">Summary</h3>
        <ul className="list-unstyled mb-0">
          {selectedProducts.map((product, index) => (
            <CheckoutProduct
              product={product}
              quantity={cart[product.id]}
              key={index}
            />
          ))}
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
          disabled={isLoading}
          data-cy="checkout-pay"
        >
          Continue & Pay
        </button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
