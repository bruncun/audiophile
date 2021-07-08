import { Link } from "react-router-dom";
import "./Yx1CtaCard.scss";

function Yx1CtaCard() {
  return (
    <div className="card bg-light yx1-cta-card">
      <div className="card-body py-5 px-lg-6 d-flex align-items-center">
        <div>
          <Link
            to="/products/yx1-earphones"
            className="h2 fw-bold mb-4 text-dark text-decoration-none d-block"
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
