import CategoryCard from "./CategoryCard";
import headphones from "assets/shared/desktop/image-headphones.png";
import speakers from "assets/shared/desktop/image-speakers.png";
import earphones from "assets/shared/desktop/image-earphones.png";

function CategoryCardList() {
  return (
    <div className="container-md py-5 mt-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <CategoryCard imgSrc={headphones} heading="Headphones" linkHref="#" />
        </div>
        <div className="col-12 col-md-4">
          <CategoryCard imgSrc={speakers} heading="Speakers" linkHref="#" />
        </div>
        <div className="col-12 col-md-4">
          <CategoryCard imgSrc={earphones} heading="Earphones" linkHref="#" />
        </div>
      </div>
    </div>
  );
}

export default CategoryCardList;
