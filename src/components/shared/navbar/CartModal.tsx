import CartBody from "components/shared/navbar/CartBody";
import CartFooter from "components/shared/navbar/CartFooter";
import CartHeader from "components/shared/navbar/CartHeader";
import { useProductsById } from "hooks/useApi";
import CartContext from "contexts/CartContext";
import { useContext } from "react";
import { useEffect, useRef } from "react";

interface CartModalProps {
  toggleCart: () => void;
}

function CartModal({ toggleCart }: CartModalProps) {
  const { selectedProductIds } = useContext(CartContext);
  const productQueries = useProductsById(selectedProductIds);
  const modalEl = useRef<HTMLDivElement>(null);

  function onModalBackdropClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    const showCart = Boolean(target.closest(".modal-dialog"));
    if (!showCart) toggleCart();
  }

  const isLoading = productQueries.some(({ isLoading }) => isLoading);

  useEffect(function () {
    if (!modalEl.current) throw Error("modalEl is not assigned");
    modalEl.current.focus();
  });

  return (
    <div
      className="modal fade show d-block"
      ref={modalEl}
      onClick={onModalBackdropClick}
      tabIndex={-1}
      role="dialog"
      aria-describedby="CartHeader"
      data-cy="cart-modal"
    >
      <div className="container-md pt-xxl-2">
        <div className="modal-dialog mt-6 pt-4 mx-auto me-md-0 modal-sm ms-md-auto z-9999">
          <div className="modal-content">
            {isLoading ? (
              <div className="modal-body justify-content-center d-flex">
                <div className="spinner-border text-primary my-6" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                <div className="modal-header px-md-4 mx-md-2">
                  <CartHeader />
                </div>
                <div className="modal-body pt-0 pb-3 px-md-4 mx-md-2">
                  <CartBody />
                </div>
                <div className="modal-footer pt-0 px-4 mx-md-2 pb-4 mb-2">
                  <CartFooter />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
