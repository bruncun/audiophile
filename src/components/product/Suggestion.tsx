import ResponsiveImage from "components/shared/ResponsiveImage";
import { Link } from "react-router-dom";
import usePrefetchProductBySlugOnInView from "hooks/usePrefetchProductBySlugOnInView";

type SuggestionProps = {
  suggestion: {
    slug: string;
    name: string;
    image: Image;
  };
};

function Suggestion({ suggestion: { image, name, slug } }: SuggestionProps) {
  const ref = usePrefetchProductBySlugOnInView(slug);

  return (
    <div
      className="text-center mb-5 mb-xxl-0 col-md-4 pb-2 pb-md-1"
      key={slug}
      ref={ref}
    >
      <div className="mb-4 pb-2 pb-md-3">
        <div className="suggestion-wrapper position-relative overflow-hidden">
          <Link to={`/products/${slug}`} data-cy={`${slug}-link`}>
            <ResponsiveImage
              image={image}
              imgClassName="rounded position-absolute w-100 h-100 top-0 start-0"
              alt={name}
            />
          </Link>
        </div>
      </div>
      <Link className="text-decoration-none text-body" to={`/products/${slug}`}>
        <h4 className="fw-bold mb-4 pb-2">{name}</h4>
      </Link>
      <Link className="btn btn-primary" to={`/products/${slug}`}>
        See Product
      </Link>
    </div>
  );
}

export default Suggestion;
