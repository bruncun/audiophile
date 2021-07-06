// TODO: Add cart image to product data
import { Link } from "react-router-dom";
import { OrdersContext } from "OrdersContext";
import { useContext } from "react";
import useProductsBySlugs from "hooks/useProductsBySlugs";
import { Product } from "types";
import { formatter } from "utils";
import CartProduct from "./CartProduct";

interface CartProps {
  onModalBackdropClick: (event: React.MouseEvent) => void;
}

function Cart({ onModalBackdropClick }: CartProps) {
  const { orders, removeAll, addOne } = useContext(OrdersContext);
  const queriesInfo = useProductsBySlugs(Object.keys(orders));

  const total = queriesInfo.reduce((sum, { data }) => {
    const [{ price, slug }] = data as Product[];
    return sum + price * orders[slug];
  }, 0);

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
      <div className="container-lg">
        {queriesInfo.every(({ isSuccess }) => isSuccess) && (
          <div className="modal-dialog mt-6 pt-2 mx-4 me-lg-0 modal-sm ms-sm-auto z-9999">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="staticBackdropLabel">
                  Cart ({queriesInfo.length})
                </h5>
                <button
                  className="btn btn-link p-0 ls-0 text-black-50 text-capitalize"
                  onClick={removeAll}
                >
                  Remove <span className="text-lowercase">all</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-unstyled">
                  {queriesInfo.map(({ data }) => {
                    const [product] = data as Product[];
                    const { slug } = product;
                    return (
                      <CartProduct
                        product={product}
                        quantity={orders[slug]}
                        onDecrementClick={() =>
                          addOne({
                            quantity: -1,
                            productSlug: slug,
                          })
                        }
                        onIncrementClick={() =>
                          addOne({
                            quantity: 1,
                            productSlug: slug,
                          })
                        }
                      />
                    );
                  })}
                </ul>
                <div className="d-flex justify-content-between pt-2">
                  <span className="text-black-50 text-uppercase">Total</span>
                  <span className="text-black fw-bold">
                    {formatter.format(total)}
                  </span>
                </div>
              </div>
              <div className="modal-footer pt-2">
                <Link
                  to="/checkout"
                  className="btn btn-primary d-block w-100"
                  data-cy="cart-checkout"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
