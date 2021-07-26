import ConfirmationFooter from "components/checkout/ConfirmationFooter";
import ConfirmationBody from "components/checkout/ConfirmationBody";

function ConfirmationModal() {
  return (
    <>
      <div
        className="modal fade show d-block"
        id="staticBackdrop"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
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
