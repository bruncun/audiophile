import { Link } from "react-router-dom";

function Yx1CtaCard() {
  return (
    <div className="card bg-light yx1-cta-card">
      <div className="card-body py-4 my-3 mx-3 px-xxl-6 d-flex align-items-center">
        <div>
          <Link
            to="/products/yx1-earphones"
            className="h3 fw-bold mb-4 pb-2 text-dark text-decoration-none d-block"
            data-cy="yx1-earphones-link"
          >
            Yx1 Earphones
          </Link>
          <Link to="/products/yx1-earphones" className="btn btn-outline-dark">
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Yx1CtaCard;
