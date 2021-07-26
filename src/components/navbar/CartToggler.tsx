import cart from "assets/shared/desktop/icon-cart.svg";
import CartContext from "CartContext";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { selectedProductIds } = useContext(CartContext);
  const location = useLocation() as LocationWithNavState;
  const { showCart } = location.state || false;

  const linkClass =
    location.pathname === "/checkout" || selectedProductIds.length === 0
      ? "disabled"
      : "";

  return (
    <Link
      className={`btn btn-link p-0 ${linkClass}`}
      to={{
        ...location,
        state: { showCollapse: false, showCart: !showCart },
      }}
      replace
    >
      <img src={cart} alt="Cart" width="23" height="20" />
    </Link>
  );
}

export default Navbar;
