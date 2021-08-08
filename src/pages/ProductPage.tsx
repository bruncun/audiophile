import ProductLayout from "components/product/ProductLayout";
import Hero from "components/product/Hero";
import Details from "components/product/Details";
import Gallery from "components/product/Gallery";
import SuggestionList from "components/product/SuggestionList";
import CategoryList from "components/shared/CategoryList";
import About from "components/shared/About";
import { useParams, Redirect } from "react-router-dom";
import { useProductBySlug } from "hooks/useApi";
import Spinner from "components/shared/Spinner";

interface ProductPageParams {
  slug: string;
}

function ProductPage() {
  const { slug } = useParams<ProductPageParams>();
  const { isLoading, data } = useProductBySlug(slug);

  if (isLoading) return <Spinner />;

  const [product] = data as [Product];

  if (!product) {
    return <Redirect to="/" />;
  } else {
    return (
      <ProductLayout
        slug={slug}
        hero={<Hero product={product} />}
        details={<Details product={product} />}
        gallery={<Gallery product={product} />}
        suggestionList={<SuggestionList product={product} />}
        categoryList={<CategoryList />}
        about={<About />}
      />
    );
  }
}

export default ProductPage;
