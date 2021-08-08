import { Link } from "react-router-dom";
import usePrefetchProductBySlugOnInView from "hooks/usePrefetchProductBySlugOnInView";

function Zx7SpeakerCard() {
  const ref = usePrefetchProductBySlugOnInView("zx7-speaker");

  return (
    <div className="card bg-speaker-zx-7" ref={ref}>
      <div className="card-body py-6 px-md-5 px-xxl-6 my-2 mx-md-3">
        <Link
          to="/products/zx7-speaker"
          className="h3 fw-bold mb-4 pb-2 text-decoration-none d-block text-dark"
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
