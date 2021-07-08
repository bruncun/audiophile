import Hero from "./Hero";
import Details from "./Details";
import Gallery from "./Gallery";
import Suggestions from "./Suggestions";
import CategoryCardList from "../shared/CategoryCardList";
import About from "components/shared/about/About";
import { useParams } from "react-router-dom";
import useProduct from "hooks/useProduct";

interface ProductParams {
  slug: string;
}

function Product() {
  const { slug } = useParams<ProductParams>();
  const { data: product } = useProduct(slug);

  return (
    <div data-cy={slug}>
      {product && product[0] && (
        <>
          <Hero product={product[0]} />
          <Details product={product[0]} />
          <Gallery product={product[0]} />
          <Suggestions product={product[0]} />
          <CategoryCardList />
          <About />
        </>
      )}
    </div>
  );
}

export default Product;
