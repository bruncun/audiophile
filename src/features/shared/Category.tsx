import About from "./About";
import CategoryCardList from "./CategoryCardList";
import { getProductsByCategory } from "api";
import { useQuery } from "react-query";
import ProductList from "../shared/ProductList";

interface CategoryProps {
  name: string;
}

function Category({ name }: CategoryProps) {
  const { data: products } = useQuery(
    `${name}Products`,
    getProductsByCategory(name)
  );

  return (
    <div data-cy={name}>
      <div className="bg-dark py-4 text-center py-md-6">
        <h1 className="fw-bold text-white mb-0 d-md-none h2">{name}</h1>
        <h1 className="fw-bold text-white mb-0 d-none d-md-block display-1">
          {name}
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
