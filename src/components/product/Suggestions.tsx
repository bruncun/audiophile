import { Product } from "types";
import ResponsiveImage from "components/shared/ResponsiveImage";
import { Link } from "react-router-dom";

type SuggestionsProps = {
  product: Product;
};

function Suggestions({ product: { others } }: SuggestionsProps) {
  return (
    <>
      <h4 className="fw-bold mb-4 pb-3 text-center d-md-none">
        You May Also Like
      </h4>
      <h2 className="fw-bold mb-2 pb-3 mb-md-5 pb-md-2 text-center d-none d-md-block">
        You May Also Like
      </h2>
      <div className="row g-md-2 g-xxl-4">
        {others.map(({ image, name, slug }, idx) => (
          <div
            className="text-center mb-5 mb-xxl-0 col-md-4 pb-2 pb-md-1"
            key={idx}
          >
            <Link to={`/products/${slug}`} data-cy={`${slug}-link`}>
              <ResponsiveImage
                image={image}
                imgClassName="rounded img-fluid mb-4 pb-2 pb-md-3 w-100"
                alt={name}
              />
            </Link>
            <Link
              className="text-decoration-none text-body"
              to={`/products/${slug}`}
            >
              <h4 className="fw-bold mb-4 pb-2">{name}</h4>
            </Link>
            <Link className="btn btn-primary" to={`/products/${slug}`}>
              See Product
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Suggestions;
