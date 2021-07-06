import { Product } from "types";
import ResponsiveImage from "features/shared/ResponsiveImage";
import { Link } from "react-router-dom";

type SuggestionsProps = {
  product: Product;
};

function Suggestions({ product: { others } }: SuggestionsProps) {
  return (
    <div className="container-md py-5">
      <h2 className="fw-bold mb-4 text-center">You May Also Like</h2>
      <div className="row">
        {others.map(({ image, name, slug }, idx) => (
          <div className="text-center mb-5 col-12 col-md-4" key={idx}>
            <Link to={`/products/${slug}`}>
              <ResponsiveImage
                image={image}
                imgClassName="rounded img-fluid mb-4 w-100"
                alt={name}
              />
            </Link>
            <Link
              className="text-decoration-none text-body"
              to={`/products/${slug}`}
            >
              <h2 className="fw-bold mb-4">{name}</h2>
            </Link>
            <Link className="btn btn-primary" to={`/products/${slug}`}>
              See Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
