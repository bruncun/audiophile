import CartContext from "contexts/CartContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

interface CartTogglerProps {
  onCartTogglerClick: () => void;
}

function CartToggler({ onCartTogglerClick }: CartTogglerProps) {
  const { selectedProductIds } = useContext(CartContext);
  const location = useLocation() as LocationWithNavState;

  const linkClass =
    location.pathname === "/checkout" || selectedProductIds.length === 0
      ? "disabled"
      : "";

  return (
    <button
      className={`btn btn-link p-0 ${linkClass} lh-1`}
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
