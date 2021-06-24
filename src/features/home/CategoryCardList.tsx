import CategoryCard from "./CategoryCard";
import xx99MarkOneHeadphones from "assets/home/mobile/image-feature-xx99-mark-one-headphones.png";
import zx9Speaker from "assets/home/mobile/image-feature-zx-9-speaker.png";
import yx1EarPhones from "assets/home/mobile/image-feature-yx-1-earphones.png";

function CategoryCardList() {
  return (
    <div className="container py-5">
      <CategoryCard
        imgSrc={xx99MarkOneHeadphones}
        heading="Headphones"
        linkHref="#"
      />
      <CategoryCard imgSrc={zx9Speaker} heading="Speakers" linkHref="#" />
      <CategoryCard imgSrc={yx1EarPhones} heading="Earphones" linkHref="#" />
    </div>
  );
}

export default CategoryCardList;
