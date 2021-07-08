// TODO: Refactor context consumer to useContext
import { Product } from "types";
import ResponsiveImage from "components/shared/ResponsiveImage";
import { Link } from "react-router-dom";
import { useState } from "react";
import { OrdersContext } from "OrdersContext";
import { formatter } from "utils";

type HeroProps = {
  product: Product;
};

function Hero({
  product: { isNew, image, name, description, price, category, slug },
}: HeroProps) {
  let [quantity, setQuantity] = useState(1);

  return (
    <div className="container-md">
      <Link
        to={`/${category}`}
        className="text-black-50 mb-4 d-block text-decoration-none mt-3 mt-lg-5"
      >
        Go Back
      </Link>
      <div className="mb-6 row">
        <div className="col-12 col-sm-5">
          <ResponsiveImage
            image={image}
            imgClassName="rounded mb-4 mb-md-0 img-fluid"
            alt={name}
          />
        </div>
        <div className="text-start col-12 col-sm-6 d-md-flex align-items-center offset-sm-1">
          <div>
            {isNew && (
              <h6 className="ls-5 text-primary fw-light mb-4">New Product</h6>
            )}
            <h2 className="fw-bold me-lg-6 mb-4">{name}</h2>
            <p className="text-black-50 mb-4 lh-base me-lg-4">{description}</p>
            <h6 className="ls-3 mb-5 fw-bold">{formatter.format(price)}</h6>
            <div className="btn-group me-3" role="group" aria-label="Quantity">
              <button
                type="button"
                className="btn btn-light px-3"
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
                <span className="fw-bold">{quantity}</span>
              </div>
              <button
                type="button"
                className="btn btn-light px-3"
                onClick={() => setQuantity(++quantity)}
              >
                +
              </button>
            </div>
            <OrdersContext.Consumer>
              {({ addOne }) => (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => addOne({ quantity, productSlug: slug })}
                >
                  Add to cart
                </button>
              )}
            </OrdersContext.Consumer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
