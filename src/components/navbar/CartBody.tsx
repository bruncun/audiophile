import CartContext from "contexts/CartContext";
import CartProduct from "./CartProduct";
import { formatter } from "utils";
import { useContext } from "react";
import { useProductsById } from "hooks/useApi";

function CartBody() {
  const { cart, getCosts, selectedProductIds } = useContext(CartContext);
  const productQueries = useProductsById(selectedProductIds);
  const products = productQueries.map(({ data }) => data as Product);
  const { total } = getCosts(products);
  const formattedTotal = formatter.format(total);

  return (
    <>
      <ul className="list-unstyled">
        {products.map((product, index) => (
          <CartProduct
            product={product}
            quantity={cart[product.id]}
            key={index}
          />
        ))}
      </ul>
      <div className="d-flex justify-content-between">
        <span className="text-black-50 text-uppercase">Total</span>
        <span className="text-black fw-bold">{formattedTotal}</span>
      </div>
    </>
  );
}

export default CartBody;
