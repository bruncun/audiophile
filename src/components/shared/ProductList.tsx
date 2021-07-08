import ProductFeature from "./ProductFeature";
import { Product } from "types";

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <>
      {products.map((product, idx) => (
        <ProductFeature
          product={product}
          key={idx}
          swapColOrder={idx % 2 !== 0}
        />
      ))}
    </>
  );
}

export default ProductList;
