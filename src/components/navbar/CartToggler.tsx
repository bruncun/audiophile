import CartContext from "CartContext";
import { useProductsById } from "hooks/useApi";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

interface CartTogglerProps {
  onCartTogglerClick: () => void;
}

function CartToggler({ onCartTogglerClick }: CartTogglerProps) {
  const { selectedProductIds } = useContext(CartContext);
  const productQueries = useProductsById(selectedProductIds);
  const location = useLocation() as LocationWithNavState;
  let isLoading = false;

  if (productQueries.some(({ isLoading }) => isLoading)) isLoading = true;

  const linkClass =
    location.pathname === "/checkout" ||
    selectedProductIds.length === 0 ||
    isLoading
      ? "disabled"
      : "";

  return (
    <button
      className={`btn btn-link p-0 ${linkClass}`}
      onClick={onCartTogglerClick}
      data-cy="cart-toggler"
    >
      <img
        src="/assets/shared/desktop/icon-cart.svg"
        alt="Cart"
        width="23"
        height="20"
      />
    </button>
  );
}

export default CartToggler;
