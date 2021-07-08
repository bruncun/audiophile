import arrowRight from "assets/shared/desktop/icon-arrow-right.svg";
import "./CategoryCardList.scss";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  imgSrc: string;
  name: string;
}

function CategoryCard({ imgSrc, name }: CategoryCardProps) {
  return (
    <div className="py-4">
      <div className="card text-center mt-5 bg-light">
        <div className="card-body position-relative py-4">
          <Link to={`/${name}`} data-cy={`${name}-link`}>
            <img
              className="position-absolute top-0 start-50 translate-middle category-card-image"
              src={imgSrc}
              alt={name}
            />
          </Link>
          <Link className="text-decoration-none text-body" to={`/${name}`}>
            <h6 className="mt-5 fw-bold mb-3">{name}</h6>
          </Link>
          <Link
            className="text-black-50 text-uppercase text-decoration-none fw-bold"
            to={`/${name}`}
          >
            <div className="d-flex align-items-center justify-content-center">
              <span className="fs-7 pe-2">Shop</span>
              <img src={arrowRight} alt="Arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
