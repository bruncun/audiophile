import { useHistory, useLocation } from "react-router-dom";
import CartBody from "components/navbar/CartBody";
import CartFooter from "components/navbar/CartFooter";
import CartHeader from "components/navbar/CartHeader";

function CartModal() {
  const location = useLocation();
  const history = useHistory();

  function onModalBackdropClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    const showCart = Boolean(target.closest(".modal-dialog"));
    if (!showCart)
      history.replace({
        ...location,
        state: { showCollapse: false, showCart },
      });
  }

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
    </div>
  );
}

export default CartModal;
