import { Product } from "types";
import ResponsiveImage from "features/shared/ResponsiveImage";

type HeroProps = {
  product: Product;
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

function Hero({
  product: { isNew, image, name, description, price },
}: HeroProps) {
  return (
    <div className="container-md">
      <a
        href="#"
        className="text-black-50 mb-4 d-block text-decoration-none mt-3 mt-lg-5"
      >
        Go Back
      </a>
      <div className="mb-6 row">
        <div className="col-12 col-sm-5">
          <ResponsiveImage
            image={image}
            imgClassName="rounded mb-4 mb-md-0 img-fluid"
            alt="Xx99 Mark Two Headphones"
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
              <button type="button" className="btn btn-light">
                -
              </button>
              <button type="button" className="btn btn-light px-2">
                1
              </button>
              <button type="button" className="btn btn-light">
                +
              </button>
            </div>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
