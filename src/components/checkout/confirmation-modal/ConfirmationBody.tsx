import MobileReceipt from "components/checkout/confirmation-modal/MobileReceipt";
import TabletReceipt from "components/checkout/confirmation-modal/TabletReceipt";
import { useState } from "react";

function ConfirmationBody() {
  const [showAllProducts, setShowAllProducts] = useState(false);

  function onToggleShowAllProductsClick() {
    setShowAllProducts(!showAllProducts);
  }

  return (
    <>
      <img
        src="/assets/checkout/icon-check.svg"
        className="mb-4 pb-md-2"
        alt="Checkmark"
        aria-hidden="true"
        width="64"
        height="64"
      />
      <span className="fw-bold me-md-6 pe-5 d-none d-md-block mb-4 h2">
        Thank you for your order
      </span>
      <span className="fw-bold mb-3 pe-5 d-md-none h4 d-block">
        Thank you for your order
      </span>
      <p className="text-black-50 mb-4 pb-md-2">
        You will receive an email confirmation shortly.
      </p>
      <div className="d-md-none">
        <MobileReceipt
          onToggleShowAllProductsClick={onToggleShowAllProductsClick}
          showAllProducts={showAllProducts}
        />
      </div>
      <div className="d-none d-md-flex w-100">
        <TabletReceipt
          onToggleShowAllProductsClick={onToggleShowAllProductsClick}
          showAllProducts={showAllProducts}
        />
      </div>
    </>
  );
}

export default ConfirmationBody;
