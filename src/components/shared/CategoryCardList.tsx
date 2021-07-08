import CategoryCard from "./CategoryCard";
import headphones from "assets/shared/desktop/image-headphones.png";
import speakers from "assets/shared/desktop/image-speakers.png";
import earphones from "assets/shared/desktop/image-earphones.png";

function CategoryCardList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <CategoryCard imgSrc={headphones} name="headphones" />
      </div>
      <div className="col-sm-4">
        <CategoryCard imgSrc={speakers} name="speakers" />
      </div>
      <div className="col-sm-4">
        <CategoryCard imgSrc={earphones} name="earphones" />
      </div>
    </div>
  );
}

export default CategoryCardList;
