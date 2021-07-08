import { Product } from "types";
import { Link } from "react-router-dom";

type ProductProps = {
  product: Product;
  swapColOrder?: boolean;
};

function ProductFeature({
  product: {
    slug,
    isNew,
    name,
    description,
    image: { mobile },
  },
  swapColOrder,
}: ProductProps) {
  return (
    <div className="mb-6 row" data-cy="product">
      <div
        className={`col-12 col-lg-6 ${
          swapColOrder ? "order-lg-2 offset-lg-1" : ""
        }`}
      >
        <Link to={`/products/${slug}`}>
          <img
            className="rounded img-fluid mb-4 mb-lg-0 w-100"
            srcSet={mobile}
            alt={name}
          />
        </Link>
      </div>
      <div
        className={`text-center col-12 col-lg-5 d-lg-flex align-items-center text-lg-start ${
          swapColOrder ? "" : "offset-lg-1"
        }`}
      >
        <div>
          {isNew && (
            <h6 className="ls-5 text-primary fw-light mb-4">New Product</h6>
          )}
          <h2 className="fw-bold me-lg-6 mb-4 d-md-none">{name}</h2>
          <h1 className="fw-bold me-lg-6 mb-4 d-md-block">{name}</h1>
          <p className="text-black-50 mb-5 lh-base me-lg-4">{description}</p>
          <Link className="btn btn-primary" to={`/products/${slug}`}>
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
