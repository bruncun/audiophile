import arrowRight from "assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  imgSrc: string;
  name: string;
}

function CategoryCard({ imgSrc, name }: CategoryCardProps) {
  return (
    <div className="card text-center mt-5 bg-light">
      <div className="card-body position-relative py-4">
        <img
          className="position-absolute top-0 start-50 translate-middle category-card-image"
          src={imgSrc}
          alt={name}
          width="160"
        />
        <h3 className="mt-5 fw-bold mb-3 pb-1 category-card-header d-xxl-none d-block text-uppercase ls-1">
          {name}
        </h3>
        <h3 className="mt-5 fw-bold mb-3 d-none d-xxl-block h6">{name}</h3>
        <Link
          to={`/${name}`}
          data-cy={`${name}-link`}
          className="text-decoration-none text-body"
        >
          <div className="text-black-50 text-uppercase text-decoration-none fw-bold text-primary-hover">
            <div className="d-flex align-items-center justify-content-center">
              <span className="fs-7 pe-2 me-1 ls-1">Shop</span>
              <img
                src={arrowRight}
                alt="Arrow pointing right"
                width="7"
                height="14"
                aria-hidden="true"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
