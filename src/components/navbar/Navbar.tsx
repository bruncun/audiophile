import Nav from "components/navbar/Nav";
import OffcanvasNav from "components/navbar/OffcanvasNav";
import { useHistory, useLocation } from "react-router-dom";
import CartModal from "./CartModal";
import { modifyBodyClassList } from "utils";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  if (showCart) {
    modifyBodyClassList("overflow-hidden", "add");
  } else {
    modifyBodyClassList("overflow-hidden", "remove");
  }

  function toggleNavbar() {
    setShowNavbar(!showNavbar);
  }

  function toggleCart() {
    setShowCart(!showCart);
  }

  useEffect(function () {
    function onKeyDown({ code }: KeyboardEvent) {
      if (code === "Escape" && showCart) setShowCart(!showCart);
      if (code === "Escape" && showNavbar) setShowNavbar(!showNavbar);
    }
    document.addEventListener("keydown", onKeyDown);

    return function () {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  useEffect(
    function () {
      history.listen(function () {
        setShowCart(false);
        setShowNavbar(false);
      });
    },
    [location, history]
  );

  return (
    <>
      {showCart && <CartModal toggleCart={toggleCart} />}
      <nav className="navbar navbar-expand-xxl navbar-dark bg-dark z-9999 py-1 lh-1">
        <div className="container-md py-4 my-2">
          <Nav
            onCartTogglerClick={toggleCart}
            onNavbarTogglerClick={toggleNavbar}
          />
        </div>
      </nav>
      {showNavbar && <OffcanvasNav />}
      {showCart && (
        <div className="modal-backdrop fade show" onClick={toggleCart} />
      )}
    </>
  );
}

export default Navbar;
