import ConfirmationFooter from "components/checkout/confirmation-modal/ConfirmationFooter";
import ConfirmationBody from "components/checkout/confirmation-modal/ConfirmationBody";
import { useEffect, useRef } from "react";
import { modifyBodyClassList } from "utils";
import { useSavePurchase } from "hooks/useApi";

function ConfirmationModal() {
  const modalEl = useRef<HTMLDivElement>(null);
  const { isSuccess } = useSavePurchase();

  if (isSuccess) {
    modifyBodyClassList("overflow-hidden", "add");
    localStorage.removeItem("audiophile-cart");
  } else {
    modifyBodyClassList("overflow-hidden", "remove");
  }

  useEffect(function () {
    if (!modalEl.current) throw Error("modalEl is not assigned");
    modalEl.current.focus();
  });

  return (
    <>
      <div
        className="modal fade show d-block"
        ref={modalEl}
        tabIndex={-1}
        role="dialog"
        data-cy="confirmation-modal"
      >
        <div className="container-md">
          <div className="modal-dialog mt-6 pt-2 mx-auto z-9999">
            <div className="modal-content">
              <div className="modal-body p-4 p-md-5 pb-0">
                <ConfirmationBody />
              </div>
              <div className="modal-footer px-md-5 pb-md-5 pt-md-0">
                <ConfirmationFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export default ConfirmationModal;
