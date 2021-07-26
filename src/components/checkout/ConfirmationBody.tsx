import ConfirmationProduct from "components/checkout/ConfirmationProduct";
import CartContext from "CartContext";
import { useContext } from "react";
import { useProductsById } from "hooks/useApi";
import { formatter } from "utils";

function ConfirmationBody() {
  const { getCosts, cart, selectedProductIds } = useContext(CartContext);
  const selectedProductQueries = useProductsById(selectedProductIds);

  if (selectedProductQueries.some(({ isLoading }) => isLoading)) return <></>;

  const selectedProducts = selectedProductQueries.map(
    ({ data }) => data as Product
  );
  const firstSelectedProduct = selectedProducts[0];
  const { total } = getCosts(selectedProducts);

  return (
    <>
      <img
        src="assets/checkout/icon-check.svg"
        className="mb-4 pb-md-2"
        alt="Checkmark"
        width="64"
        height="64"
      />
      <h2 className="fw-bold me-md-6 pe-5 d-none d-md-block mb-4">
        Thank you for your order
      </h2>
      <h4 className="fw-bold mb-3 pe-5 d-md-none">Thank you for your order</h4>
      <p className="text-black-50 mb-4 pb-md-2">
        You will receive an email confirmation shortly.
      </p>
      <div className="d-md-none">
        <div className="rounded-top bg-light d-flex p-4 flex-column">
          <ul className="list-unstyled mb-2">
            <ConfirmationProduct
              product={firstSelectedProduct}
              quantity={cart[firstSelectedProduct.id]}
            />
          </ul>
          <span className="text-black-50 fw-bold text-center mb-0 fs-7 mt-1">
            and {selectedProductIds.length - 1} other item(s)
          </span>
        </div>
        <div className="rounded-bottom bg-dark d-flex px-4 py-3 flex-column">
          <span className="text-white-50 text-uppercase mb-2">Grand Total</span>
          <h6 className="text-white fw-bold mb-0">{formatter.format(total)}</h6>
        </div>
      </div>
      <div className="d-none d-md-flex w-100">
        <div className="rounded-start bg-light d-flex p-4 flex-column w-100">
          <ul className="list-unstyled">
            <ConfirmationProduct
              product={firstSelectedProduct}
              quantity={cart[firstSelectedProduct.id]}
            />
          </ul>
          <span className="text-black-50 fw-bold text-center mb-0 fs-7 mt-1">
            and {selectedProductIds.length - 1} other item(s)
          </span>
        </div>
        <div className="rounded-end bg-dark d-flex p-4 flex-column w-75 justify-content-center">
          <span className="text-white-50 text-uppercase mb-2">Grand Total</span>
          <h6 className="text-white fw-bold mb-0">{formatter.format(total)}</h6>
        </div>
      </div>
    </>
  );
}

export default ConfirmationBody;
