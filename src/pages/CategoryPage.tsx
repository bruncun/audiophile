import CategoryLayout from "components/category/CategoryLayout";
import CategoryHeader from "components/category/CategoryHeader";
import About from "components/shared/About";
import CategoryList from "components/shared/CategoryList";
import { useProductsByCategory } from "hooks/useApi";
import CategoryProductList from "components/category/CategoryProductList";
import Spinner from "components/shared/Spinner";

interface CategoryProps {
  category: string;
}

function Category({ category }: CategoryProps) {
  const { isLoading, data: products } = useProductsByCategory(category);

  if (isLoading) return <Spinner />;

  return (
    <CategoryLayout
      category={category}
      categoryHeader={<CategoryHeader category={category} />}
      categoryProductList={<CategoryProductList products={products} />}
      categoryList={<CategoryList />}
      about={<About />}
    />
  );
}

export default Category;
