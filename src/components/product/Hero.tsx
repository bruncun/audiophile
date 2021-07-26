import { Link } from "react-router-dom";
import { formatter } from "utils";
import OrderControls from "components/product/OrderControls";
import ResponsiveImage from "components/shared/ResponsiveImage";

interface HeroProps {
  product: Product;
}

function Hero({ product }: HeroProps) {
  const { isNew, image, name, description, price, category } = product;

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
            <OrderControls product={product} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
