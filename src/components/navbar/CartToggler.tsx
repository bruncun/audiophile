import cart from "assets/shared/desktop/icon-cart.svg";
import CartContext from "CartContext";
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
      className={`btn btn-link p-0 ${linkClass}`}
      onClick={onCartTogglerClick}
    >
      <img src={cart} alt="Cart" width="23" height="20" />
    </button>
  );
}

export default CartToggler;
