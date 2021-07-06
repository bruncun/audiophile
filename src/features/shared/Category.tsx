import About from "./About";
import CategoryCardList from "./CategoryCardList";
import useProductsByCategory from "hooks/useProductsByCategory";
import ProductList from "../shared/ProductList";

interface CategoryProps {
  category: string;
}

function Category({ category }: CategoryProps) {
  const { data: products } = useProductsByCategory(category);

  return (
    <div data-cy={category}>
      <div className="bg-dark py-4 text-center py-md-6">
        <h1 className="fw-bold text-white mb-0 d-md-none h2">{category}</h1>
        <h1 className="fw-bold text-white mb-0 d-none d-md-block display-1">
          {category}
        </h1>
      </div>
      <div className="container-md py-5">
        {products && <ProductList products={products} />}
        <CategoryCardList />
        <About />
      </div>
    </div>
  );
}

export default Category;
