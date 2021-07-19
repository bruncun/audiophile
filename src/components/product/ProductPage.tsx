import ProductLayout from "./ProductLayout";
import Hero from "./Hero";
import Details from "./Details";
import Gallery from "./Gallery";
import Suggestions from "./Suggestions";
import CategoryList from "components/shared/CategoryList";
import About from "components/shared/about/About";
import { useParams } from "react-router-dom";
import { useProductBySlug } from "hooks/useApi";
import { Product } from "types";

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
