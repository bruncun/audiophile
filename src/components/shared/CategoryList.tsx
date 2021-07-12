import CategoryCard from "./CategoryCard";
import headphones from "assets/shared/desktop/image-headphones.png";
import speakers from "assets/shared/desktop/image-speakers.png";
import earphones from "assets/shared/desktop/image-earphones.png";

function CategoryList() {
  return (
    <div className="row gx-md-3">
      <div className="col-md-4 mb-4 pb-3 mb-md-0 pb-md-0">
        <CategoryCard imgSrc={headphones} name="headphones" />
      </div>
      <div className="col-md-4 mb-4 pb-3 mb-md-0 pb-md-0">
        <CategoryCard imgSrc={speakers} name="speakers" />
      </div>
      <div className="col-md-4">
        <CategoryCard imgSrc={earphones} name="earphones" />
      </div>
    </div>
  );
}

export default CategoryList;
