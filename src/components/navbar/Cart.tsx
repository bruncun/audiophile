// TODO: Add cart image to product data
import { Link } from "react-router-dom";
import CartContext from "CartContext";
import { useContext } from "react";
import { useProductsById } from "hooks/useApi";
import { Product } from "types";
import CartProduct from "./CartProduct";
import { formatter } from "utils";

interface CartProps {
  onModalBackdropClick: (event: React.MouseEvent) => void;
}

function Cart({ onModalBackdropClick }: CartProps) {
  const {
    getCosts,
    selectedProductIds,
    removeAllOrders,
    addOrder,
    cart,
  } = useContext(CartContext);
  const productQueries = useProductsById(selectedProductIds);

  if (productQueries.some(({ isLoading }) => isLoading)) return <></>;

  const products = productQueries.map(({ data }) => data as Product);
  const { total } = getCosts(products);
  const formattedTotal = formatter.format(total);

  return (
    <div
      className="modal fade show d-block"
      onClick={onModalBackdropClick}
      id="staticBackdrop"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      data-cy="cart-modal"
    >
      {productQueries.every(({ isSuccess }) => isSuccess) && (
        <div className="container-md pt-xxl-2">
          <div className="modal-dialog mt-6 pt-4 mx-auto me-md-0 modal-sm ms-md-auto z-9999">
            <div className="modal-content">
              <div className="modal-header px-md-4 mx-md-2">
                <h6 className="modal-title fw-bold" id="staticBackdropLabel">
                  Cart ({productQueries.length})
                </h6>
                <button
                  className="btn btn-link p-0 ls-0 text-black-50 text-capitalize"
                  onClick={removeAllOrders}
                >
                  Remove <span className="text-lowercase">all</span>
                </button>
              </div>
              <div className="modal-body pt-0 pb-3 px-md-4 mx-md-2">
                <ul className="list-unstyled">
                  {productQueries.map(({ data }) => {
                    const product = data as Product;
                    const { id } = product;
                    return (
                      <CartProduct
                        product={product}
                        quantity={cart[id]}
                        onDecrementClick={() =>
                          addOrder({
                            quantity: -1,
                            productId: id,
                          })
                        }
                        onIncrementClick={() =>
                          addOrder({
                            quantity: 1,
                            productId: id,
                          })
                        }
                      />
                    );
                  })}
                </ul>
                <div className="d-flex justify-content-between">
                  <span className="text-black-50 text-uppercase">Total</span>
                  <span className="text-black fw-bold">{formattedTotal}</span>
                </div>
              </div>
              <div className="modal-footer pt-0 px-4 mx-md-2 pb-4 mb-2">
                <Link
                  to="/checkout"
                  className="btn btn-primary d-block w-100 m-0"
                  data-cy="cart-checkout"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
