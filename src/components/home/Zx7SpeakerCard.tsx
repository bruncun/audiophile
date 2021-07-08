import { Link } from "react-router-dom";
import "./Zx7SpeakerCard.scss";

function Zx7SpeakerCard() {
  return (
    <div className="card bg-speaker-zx-7">
      <div className="card-body py-6 px-md-5 px-lg-6">
        <Link
          to="/products/zx7-speaker"
          className="h2 fw-bold mb-4 text-decoration-none d-block text-dark"
          data-cy="zx7-speaker-link"
        >
          Zx7 Speaker
        </Link>
        <Link
          to="/products/zx7-speaker"
          className="btn btn-outline-dark"
          data-cy="zx7-speaker"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}

export default Zx7SpeakerCard;
