import ProductLayout from "components/product/ProductLayout";
import Hero from "components/product/Hero";
import Details from "components/product/Details";
import Gallery from "components/product/Gallery";
import Suggestions from "components/product/Suggestions";
import CategoryList from "components/shared/CategoryList";
import About from "components/shared/about/About";
import { useParams } from "react-router-dom";
import { useProductBySlug } from "hooks/useApi";

interface ProductPageParams {
  slug: string;
}

function ProductPage() {
  const { slug } = useParams<ProductPageParams>();
  const { isLoading, data } = useProductBySlug(slug);

  if (isLoading) return <></>;

  const [product] = data as [Product];

  return (
    <ProductLayout
      slug={slug}
      hero={<Hero product={product} />}
      details={<Details product={product} />}
      gallery={<Gallery product={product} />}
      suggestions={<Suggestions product={product} />}
      categoryList={<CategoryList />}
      about={<About />}
    />
  );
}

export default ProductPage;
