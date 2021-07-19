// TODO: Refactor context consumer to useContext
import { useContext } from "react";
import { Product } from "types";
import ResponsiveImage from "components/shared/ResponsiveImage";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { OrdersContext } from "OrdersContext";
import { formatter } from "utils";
import { LocationWithNavState } from "types";

type HeroProps = {
  product: Product;
};

function Hero({
  product: { isNew, image, name, description, price, category, slug },
}: HeroProps) {
  const history = useHistory();
  const location = useLocation() as LocationWithNavState;
  const { addOne } = useContext(OrdersContext);
  let [quantity, setQuantity] = useState(1);

  function onAddToCartButtonClick() {
    addOne({ quantity, productSlug: slug });
    history.replace({
      ...location,
      state: { ...location.state, showCart: true },
    });
  }

  return (
    <>
      <Link
        to={`/${category}`}
        data-cy="go-back-link"
        className="text-black-50 mb-4 d-block text-decoration-none mb-xxl-5 pb-xxl-2"
      >
        Go Back
      </Link>
      <div className="row gx-md-2 gx-xxl-4">
        <div className="col-md-5 col-xxl-6">
          <ResponsiveImage
            image={image}
            imgClassName="rounded mb-4 pb-2 pb-md-0 mb-md-0 img-fluid"
            alt={name}
          />
        </div>
        <div className="text-start col-md-6 col-xxl-5 d-md-flex align-items-center offset-md-1">
          <div>
            {isNew && (
              <small className="ls-5 text-primary fw-light mb-4 text-uppercase d-block">
                New Product
              </small>
            )}
            <h3 className="d-xxl-none fw-bold me-xxl-6 mb-4 pb-md-2">{name}</h3>
            <h1 className="d-none d-xxl-block fw-bold me-xxl-6 mb-4">{name}</h1>
            <p className="text-black-50 mb-4 me-xxl-2">{description}</p>
            <h6 className="ls-3 mb-4 pb-2 fw-bold">
              {formatter.format(price)}
            </h6>
            <div className="btn-group me-3" role="group" aria-label="Quantity">
              <button
                type="button"
                className="btn btn-light px-3 text-black-n0"
                data-cy="decrement-quantity"
                onClick={() =>
                  setQuantity(quantity > 1 ? --quantity : quantity)
                }
              >
                -
              </button>
              <div
                className="bg-light d-flex align-items-center justify-content-center"
                style={{ width: "3rem" }}
              >
                <span className="fw-bold" data-cy="quantity">
                  {quantity}
                </span>
              </div>
              <button
                type="button"
                data-cy="increment-quantity"
                className="btn btn-light px-3 text-black-50"
                onClick={() => setQuantity(++quantity)}
              >
                +
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onAddToCartButtonClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
