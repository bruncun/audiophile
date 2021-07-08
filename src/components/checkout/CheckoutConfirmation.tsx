import { Link } from "react-router-dom";
import { OrdersContext } from "OrdersContext";
import { useContext } from "react";
import useProductsBySlugs from "hooks/useProductsBySlugs";
import { Product } from "types";
import { formatter } from "utils";

interface CheckoutConfirmationProps {
  onModalBackdropClick: (event: React.MouseEvent) => void;
}

function CheckoutConfirmation({
  onModalBackdropClick,
}: CheckoutConfirmationProps) {
  const { orders } = useContext(OrdersContext);
  const queriesInfo = useProductsBySlugs(Object.keys(orders));

  if (queriesInfo.every(({ isSuccess }) => isSuccess)) {
    var [
      {
        price,
        image: { mobile },
        name,
        slug,
      },
    ] = queriesInfo[0].data as Product[];
  }

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
      data-cy="confirmation-modal"
    >
      {queriesInfo.every(({ isSuccess }) => isSuccess) && (
        <div className="modal-dialog mt-6 pt-2 mx-auto z-9999">
          <div className="modal-content">
            <div className="modal-body p-4">
              <img
                src="assets/checkout/icon-check.svg"
                className="mb-4"
                alt="Checkmark"
              />
              <h2 className="fw-bold mb-3 me-md-6 pe-md-5">
                Thank you for your order
              </h2>
              <p className="text-black-50 mb-4">
                You will receive an email confirmation shortly.
              </p>
              <div className="d-md-none">
                <div className="rounded-top bg-light d-flex p-4 flex-column">
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
                              <h6 className="fw-bold">{name}</h6>
                              <h6 className="fw-bold text-black-50 mb-0 text-end">
                                x{orders[slug]}
                              </h6>
                            </div>
                            <h6 className="fw-bold text-black-50 mb-0">
                              {formatter.format(price * orders[slug])}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <h6 className="text-black-50 fw-bold text-center mb-0">
                    and {Object.keys(orders).length - 1} other item(s)
                  </h6>
                </div>
                <div className="rounded-bottom bg-dark d-flex p-4 flex-column">
                  <span className="text-white-50 text-uppercase mb-2">
                    Grand Total
                  </span>
                  <h6 className="text-white fw-bold mb-0">
                    {formatter.format(total)}
                  </h6>
                </div>
              </div>
              <div className="d-none d-md-flex w-100">
                <div className="rounded-left bg-light d-flex p-4 flex-column w-100">
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
                              <h6 className="fw-bold">{name}</h6>
                              <h6 className="fw-bold text-black-50 mb-0 text-end">
                                x{orders[slug]}
                              </h6>
                            </div>
                            <h6 className="fw-bold text-black-50 mb-0">
                              {formatter.format(price * orders[slug])}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <h6 className="text-black-50 fw-bold text-center mb-0">
                    and {Object.keys(orders).length - 1} other item(s)
                  </h6>
                </div>
                <div className="rounded-right bg-dark d-flex p-4 flex-column w-75 justify-content-center">
                  <span className="text-white-50 text-uppercase mb-2">
                    Grand Total
                  </span>
                  <h6 className="text-white fw-bold mb-0">
                    {formatter.format(total)}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer pt-2">
              <Link
                to="/"
                className="btn btn-primary d-block w-100"
                data-cy="cart-checkout"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutConfirmation;
