import arrowRight from "assets/shared/desktop/icon-arrow-right.svg";
import "./CategoryCardList.scss";

interface CategoryCardProps {
  imgSrc: string;
  heading: string;
  linkHref: string;
}

function CategoryCard({ imgSrc, heading, linkHref }: CategoryCardProps) {
  return (
    <div className="py-4">
      <div className="card text-center mt-5 bg-light">
        <div className="card-body position-relative py-4">
          <img
            className="position-absolute top-0 start-50 translate-middle category-card-image"
            src={imgSrc}
          />
          <h6 className="mt-5 fw-bold mb-3">{heading}</h6>
          <a
            href={linkHref}
            className="text-black-50 text-uppercase text-decoration-none fw-bold"
          >
            <div className="d-flex align-items-center justify-content-center">
              <span className="fs-7 pe-2">Shop</span>
              <img src={arrowRight} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
