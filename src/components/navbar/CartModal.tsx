import CartBody from "components/navbar/CartBody";
import CartFooter from "components/navbar/CartFooter";
import CartHeader from "components/navbar/CartHeader";
import { useEffect, useRef } from "react";

interface CartModalProps {
  toggleCart: () => void;
}

function CartModal({ toggleCart }: CartModalProps) {
  const modalEl = useRef<HTMLDivElement>(null);

  function onModalBackdropClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    const showCart = Boolean(target.closest(".modal-dialog"));
    if (!showCart) toggleCart();
  }

  useEffect(function () {
    if (!modalEl.current) throw Error("modalEl is not assigned");
    modalEl.current.focus();
  });

  return (
    <section
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
            <div className="modal-header px-md-4 mx-md-2">
              <CartHeader />
            </div>
            <div className="modal-body pt-0 pb-3 px-md-4 mx-md-2">
              <CartBody />
            </div>
            <div className="modal-footer pt-0 px-4 mx-md-2 pb-4 mb-2">
              <CartFooter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartModal;
