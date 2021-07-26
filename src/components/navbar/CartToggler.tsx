import cart from "assets/shared/desktop/icon-cart.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation() as LocationWithNavState;
  const { showCart } = location.state || false;

  return (
    <Link
      className={`btn btn-link p-0 ${
        location.pathname === "/checkout" ? "disabled" : ""
      }`}
      to={{
        ...location,
        state: { showCollapse: false, showCart: !showCart },
      }}
      replace
    >
      <img src={cart} alt="Cart" />
    </Link>
  );
}

export default Navbar;
