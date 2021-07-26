import CategoryProduct from "./CategoryProduct";

interface CategoryProductListProps {
  products?: Product[];
}

function CategoryProductList({ products = [] }: CategoryProductListProps) {
  return (
    <>
      {products.map((product, idx) => (
        <div
          className={idx !== products.length - 1 ? "mb-6 pb-4" : ""}
          key={idx}
        >
          <CategoryProduct product={product} swapColOrder={idx % 2 !== 0} />
        </div>
      ))}
    </>
  );
}

export default CategoryProductList;
