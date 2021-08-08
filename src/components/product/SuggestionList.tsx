import Suggestion from "components/product/Suggestion";

type SuggestionListProps = {
  product: Product;
};

function SuggestionList({ product: { others } }: SuggestionListProps) {
  return (
    <>
      <h4 className="fw-bold mb-4 pb-3 text-center d-md-none">
        You May Also Like
      </h4>
      <h2 className="fw-bold mb-2 pb-3 mb-md-5 pb-md-2 text-center d-none d-md-block">
        You May Also Like
      </h2>
      <div className="row g-md-2 g-xxl-4">
        {others.map((suggestion) => (
          <Suggestion suggestion={suggestion} />
        ))}
      </div>
    </>
  );
}

export default SuggestionList;
