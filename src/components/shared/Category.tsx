import CategoryLayout from "components/category/CategoryLayout";
import Header from "components/category/Header";
import About from "components/shared/about/About";
import CategoryList from "components/shared/CategoryList";
import useProductsByCategory from "hooks/useProductsByCategory";
import ProductList from "components/category/ProductList";

interface CategoryProps {
  category: string;
}

function Category({ category }: CategoryProps) {
  const { isLoading, data: products } = useProductsByCategory(category);

  if (isLoading) return <></>;

  return (
    <CategoryLayout
      category={category}
      header={<Header category={category} />}
      productList={<ProductList products={products} />}
      categoryList={<CategoryList />}
      about={<About />}
    />
  );
}

export default Category;
