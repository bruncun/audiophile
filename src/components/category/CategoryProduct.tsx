import { Link } from "react-router-dom";
import ResponsiveImage from "components/shared/ResponsiveImage";
import usePrefetchProductBySlugOnInView from "hooks/usePrefetchProductBySlugOnInView";

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
    categoryImage: { mobile, tablet, desktop },
  },
  swapColOrder,
}: ProductProps) {
  const ref = usePrefetchProductBySlugOnInView(slug);

  return (
    <div className="row" data-cy="product" ref={ref}>
      <div
        className={`col-12 col-xxl-6 ${
          swapColOrder ? "order-xxl-2 offset-xxl-1" : ""
        }`}
      >
        <div className="mb-4 mb-xxl-0 pb-2 pb-md-0">
          <div className="position-relative overflow-hidden category-product-wrapper bg-light">
            <Link to={`/products/${slug}`} data-cy={`${slug}-link`}>
              <ResponsiveImage
                imgClassName="rounded w-100 h-100 position-absolute w-100 start-0 top-0"
                image={{ mobile, tablet, desktop }}
                alt={name}
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`text-center col-12 col-xxl-5 d-xxl-flex align-items-center text-xxl-start ${
          swapColOrder ? "" : "offset-xxl-1"
        }`}
      >
        <div className="mx-md-5">
          {isNew && (
            <small className="ls-5 text-primary fw-light mb-4 text-uppercase d-block">
              New Product
            </small>
          )}
          <Link
            to={`/products/${slug}`}
            className="text-decoration-none text-body"
          >
            <h3 className="fw-bold me-xxl-6 mb-4 d-md-none">{name}</h3>
            <h1 className="fw-bold me-xxl-6 mb-4 d-none d-md-block mx-md-5 ms-xxl-0 me-xxl-4">
              {name}
            </h1>
          </Link>
          <p className="text-black-50 mb-5 lh-base me-xxl-4">{description}</p>
          <Link className="btn btn-primary" to={`/products/${slug}`}>
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
