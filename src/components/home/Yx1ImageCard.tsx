import { Link } from "react-router-dom";
import "./Yx1ImageCard.scss";

function Yx1ImageCard() {
  return (
    <Link to="/products/yx1-earphones">
      <div className="card bg-earphones-yx-1" />
    </Link>
  );
}

export default Yx1ImageCard;
