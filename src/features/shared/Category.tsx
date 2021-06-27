import About from "./About";
import CategoryCardList from "./CategoryCardList";

interface CategoryProps {
  name: string;
  productList: React.ReactNode;
}

function Category({ name, productList }: CategoryProps) {
  return (
    <div data-cy={name}>
      <div className="bg-dark py-4 text-center py-md-6">
        <h1 className="fw-bold text-white mb-0 d-md-none h2">{name}</h1>
        <h1 className="fw-bold text-white mb-0 d-none d-md-block display-1">
          {name}
        </h1>
      </div>
      <div className="container-md py-5">
        {productList}
        <CategoryCardList />
        <About />
      </div>
    </div>
  );
}

export default Category;
