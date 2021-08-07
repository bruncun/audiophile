import ConfirmationFooter from "components/checkout/confirmation-modal/ConfirmationFooter";
import ConfirmationBody from "components/checkout/confirmation-modal/ConfirmationBody";
import { useEffect, useRef } from "react";
import { modifyBodyClassList } from "utils";

interface ConfirmationModalProps {
  isSuccess: boolean;
}

function ConfirmationModal({ isSuccess }: ConfirmationModalProps) {
  const modalEl = useRef<HTMLDivElement>(null);

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
        className="modal fade show d-flex align-items-center"
        ref={modalEl}
        tabIndex={-1}
        role="dialog"
        data-cy="confirmation-modal"
      >
        <div className="container-md">
          <div className="modal-dialog mx-auto modal-dialog-scrollable">
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
