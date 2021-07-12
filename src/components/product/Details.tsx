import { Product } from "types";

type DetailsProps = {
  product: Product;
};

function Details({ product: { features, includes } }: DetailsProps) {
  return (
    <div className="row">
      <div className="col-xxl-7 mb-6 pb-md-3 mb-xxl-0 pb-xxl-0">
        <h3 className="fw-bold mb-4 d-xxl-none">Features</h3>
        <h2 className="fw-bold mb-4 pb-2 d-none d-xxl-block">Features</h2>
        <p className="text-black-50">{features}</p>
      </div>
      <div className="col-xxl-4 offset-xxl-1">
        <div className="row">
          <div className="col-md-6 col-xxl-12">
            <h3 className="fw-bold mb-4 d-xxl-none">In The Box</h3>
            <h2 className="fw-bold mb-4 pb-2 d-none d-xxl-block">In The Box</h2>
          </div>
          <div className="col-md-6 col-xxl-12">
            <ul className="list-unstyled mb-0">
              {includes.map(({ quantity, item }, idx) => (
                <li
                  className={idx !== includes.length - 1 ? "mb-2" : ""}
                  key={idx}
                >
                  <span className="text-primary fw-bold d-inline-block me-3 pe-1">
                    {quantity}x
                  </span>
                  <span className="text-black-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
