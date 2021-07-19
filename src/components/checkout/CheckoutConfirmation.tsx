import { useHistory } from "react-router-dom";
import { OrdersContext } from "OrdersContext";
import { useContext } from "react";
import { useProductsById } from "hooks/useApi";
import { Product } from "types";
import { formatter } from "utils";

function CheckoutConfirmation() {
  const history = useHistory();
  const { orders, removeAll } = useContext(OrdersContext);
  const queriesInfo = useProductsById(Object.keys(orders));

  if (queriesInfo.every(({ isLoading }) => isLoading)) return <></>;

  if (queriesInfo.every(({ isSuccess }) => isSuccess)) {
    var {
      price,
      image: { mobile },
      shortName,
      name,
      id,
    } = queriesInfo[0].data as Product;
  }

  const total = queriesInfo.reduce((sum, { data }) => {
    const { price, id } = data as Product;
    return sum + price * orders[id];
  }, 0);

  function onBackToHomeClick() {
    removeAll();
    history.push("/");
  }

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
                <img
                  src="assets/checkout/icon-check.svg"
                  className="mb-4 pb-md-2"
                  alt="Checkmark"
                  width="64"
                  height="64"
                />
                <h2 className="fw-bold me-md-6 pe-5 d-none d-md-block mb-4">
                  Thank you for your order
                </h2>
                <h4 className="fw-bold mb-3 pe-5 d-md-none">
                  Thank you for your order
                </h4>
                <p className="text-black-50 mb-4 pb-md-2">
                  You will receive an email confirmation shortly.
                </p>
                <div className="d-md-none">
                  <div className="rounded-top bg-light d-flex p-4 flex-column">
                    <ul className="list-unstyled mb-2">
                      <li>
                        <div className="d-flex align-items-center border-bottom pb-2">
                          <img
                            src={mobile}
                            width="50"
                            height="50"
                            className="rounded me-4"
                            alt={name}
                          />
                          <div className="d-flex justify-content-between w-100 align-items-center mb-1">
                            <div className="w-100">
                              <div className="d-flex justify-content-between">
                                <span className="fw-bold d-block">
                                  {shortName}
                                </span>
                                <span className="fw-bold text-black-50 mb-0 text-end">
                                  x{orders[id]}
                                </span>
                              </div>
                              <span className="fw-bold text-black-50 mb-0">
                                {formatter.format(price * orders[id])}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <span className="text-black-50 fw-bold text-center mb-0 fs-7 mt-1">
                      and {Object.keys(orders).length - 1} other item(s)
                    </span>
                  </div>
                  <div className="rounded-bottom bg-dark d-flex px-4 py-3 flex-column">
                    <span className="text-white-50 text-uppercase mb-2">
                      Grand Total
                    </span>
                    <h6 className="text-white fw-bold mb-0">
                      {formatter.format(total)}
                    </h6>
                  </div>
                </div>
                <div className="d-none d-md-flex w-100">
                  <div className="rounded-start bg-light d-flex p-4 flex-column w-100">
                    <ul className="list-unstyled">
                      <li>
                        <div className="d-flex align-items-center border-bottom pb-2">
                          <img
                            src={mobile}
                            width="50"
                            height="50"
                            className="rounded me-4"
                            alt={name}
                          />
                          <div className="d-flex justify-content-between w-100 align-items-center">
                            <div className="w-100">
                              <div className="d-flex justify-content-between">
                                <span className="fw-bold d-block">
                                  {shortName}
                                </span>
                                <span className="fw-bold text-black-50 mb-0 text-end">
                                  x{orders[id]}
                                </span>
                              </div>
                              <span className="fw-bold text-black-50 mb-0">
                                {formatter.format(price * orders[id])}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <span className="text-black-50 fw-bold text-center mb-0 fs-7 mt-1">
                      and {Object.keys(orders).length - 1} other item(s)
                    </span>
                  </div>
                  <div className="rounded-end bg-dark d-flex p-4 flex-column w-75 justify-content-center">
                    <span className="text-white-50 text-uppercase mb-2">
                      Grand Total
                    </span>
                    <h6 className="text-white fw-bold mb-0">
                      {formatter.format(total)}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="modal-footer px-md-5 pb-md-5 pt-md-0">
                <button
                  onClick={onBackToHomeClick}
                  className="btn btn-primary d-block w-100"
                  data-cy="cart-checkout"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export default CheckoutConfirmation;
