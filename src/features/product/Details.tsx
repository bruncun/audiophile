import { Product } from "types";

type DetailsProps = {
  product: Product;
};

function Details({ product: { features, includes } }: DetailsProps) {
  return (
    <div className="container-md pt-3 py-5">
      <div className="row">
        <div className="col-12 col-lg-7 mb-6">
          <h1 className="fw-bold mb-4">Features</h1>
          <p className="text-black-50">{features}</p>
        </div>
        <div className="col-12 col-lg-4 offset-lg-1">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-12">
              <h1 className="fw-bold mb-4">In The Box</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-12">
              <ul className="list-unstyled">
                {includes.map(({ quantity, item }, idx) => (
                  <li
                    className={idx !== includes.length ? "mb-2" : ""}
                    key={idx}
                  >
                    <span className="text-primary fw-bold d-inline-block me-3">
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
    </div>
  );
}

export default Details;
