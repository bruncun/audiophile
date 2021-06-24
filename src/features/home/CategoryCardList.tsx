import CategoryCard from "./CategoryCard";
import xx99MarkOneHeadphones from "assets/home/mobile/image-feature-xx99-mark-one-headphones.png";
import zx9Speaker from "assets/home/mobile/image-feature-zx-9-speaker.png";
import yx1EarPhones from "assets/home/mobile/image-feature-yx-1-earphones.png";

function CategoryCardList() {
  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-12 col-sm-4">
          <CategoryCard
            imgSrc={xx99MarkOneHeadphones}
            heading="Headphones"
            linkHref="#"
          />
        </div>
        <div className="col-12 col-sm-4">
          <CategoryCard imgSrc={zx9Speaker} heading="Speakers" linkHref="#" />
        </div>
        <div className="col-12 col-sm-4">
          <CategoryCard
            imgSrc={yx1EarPhones}
            heading="Earphones"
            linkHref="#"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryCardList;
