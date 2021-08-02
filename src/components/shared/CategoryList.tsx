import CategoryCard from "./CategoryCard";

function CategoryList() {
  return (
    <div className="row gx-md-3">
      <div className="col-md-4 mb-4 pb-3 mb-md-0 pb-md-0">
        <CategoryCard
          imgSrc="/assets/shared/desktop/image-headphones.png"
          name="headphones"
        />
      </div>
      <div className="col-md-4 mb-4 pb-3 mb-md-0 pb-md-0">
        <CategoryCard
          imgSrc="/assets/shared/desktop/image-speakers.png"
          name="speakers"
        />
      </div>
      <div className="col-md-4">
        <CategoryCard
          imgSrc="/assets/shared/desktop/image-earphones.png"
          name="earphones"
        />
      </div>
    </div>
  );
}

export default CategoryList;
