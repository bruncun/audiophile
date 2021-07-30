import ConfirmationProduct from "components/checkout/ConfirmationProduct";
import CartContext from "CartContext";
import { useContext } from "react";
import { useProductsById } from "hooks/useApi";
import { formatter } from "utils";

interface MobilePurchaseSummaryProps {
  showAllProducts: boolean;
  onToggleShowAllProductsClick: () => void;
}

function MobilePurchaseSummary({
  showAllProducts,
  onToggleShowAllProductsClick,
}: MobilePurchaseSummaryProps) {
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
      <div className="rounded-top bg-light d-flex p-4 flex-column">
        <ul className="list-unstyled mb-2">
          {showAllProducts ? (
            selectedProducts.map((product, index) => (
              <ConfirmationProduct
                key={index}
                product={product}
                quantity={cart[product.id]}
              />
            ))
          ) : (
            <ConfirmationProduct
              product={firstSelectedProduct}
              quantity={cart[firstSelectedProduct.id]}
            />
          )}
        </ul>
        <button
          onClick={onToggleShowAllProductsClick}
          className="btn btn-link p-0 text-decoration-none text-capitalize ls-0 border-top pt-2"
        >
          <span className="text-black-50 fw-bold text-center mb-0 fs-7 mt-1">
            {showAllProducts ? (
              <>
                View <span className="text-lowercase">less</span>
              </>
            ) : (
              <>
                And{" "}
                <span className="text-lowercase">
                  {selectedProductIds.length - 1} other item
                  {selectedProductIds.length === 2 ? "" : "s"}
                </span>
              </>
            )}
          </span>
        </button>
      </div>
      <div className="rounded-bottom bg-dark d-flex px-4 py-3 flex-column">
        <span className="text-white-50 text-uppercase mb-2">Grand Total</span>
        <span className="text-white fw-bold mb-0 h6 d-block">
          {formatter.format(total)}
        </span>
      </div>
    </>
  );
}

export default MobilePurchaseSummary;
