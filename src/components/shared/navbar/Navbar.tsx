import Nav from "components/shared/navbar/Nav";
import OffcanvasNav from "components/shared/navbar/OffcanvasNav";
import { useHistory } from "react-router-dom";
import CartModal from "./CartModal";
import { modifyBodyClassList } from "utils";
import { useContext, useEffect, useState } from "react";
import CartContext from "contexts/CartContext";
import { useQueryClient } from "react-query";
import { getProductsByCategory } from "hooks/useApi";
import { useInView } from "react-intersection-observer";

function Navbar() {
  const { showCart, setShowCart } = useContext(CartContext);
  const history = useHistory();
  const [showNavbar, setShowNavbar] = useState(false);
  const [isSeen, setIsSeen] = useState(false);
  const queryClient = useQueryClient();
  const { ref, inView } = useInView();

  if (showCart) {
    modifyBodyClassList("overflow-hidden", "add");
  } else {
    modifyBodyClassList("overflow-hidden", "remove");
  }

  if (showNavbar) {
    modifyBodyClassList("prevent-navbar-scroll", "add");
  } else {
    modifyBodyClassList("prevent-navbar-scroll", "remove");
  }

  function toggleNavbar() {
    if (showCart && !showNavbar) setShowCart(false);
    setShowNavbar(!showNavbar);
  }

  function toggleCart() {
    if (showNavbar && !showCart) setShowNavbar(false);
    setShowCart(!showCart);
  }

  if (!isSeen && inView) {
    ["headphones", "speakers", "earphones"].map(async function (category) {
      await queryClient.prefetchQuery(["products", category], () =>
        getProductsByCategory(category)
      );
    });
    setIsSeen(true);
  }

  useEffect(function () {
    function onKeyDown({ code }: KeyboardEvent) {
      if (code === "Escape" && showCart) setShowCart(!showCart);
    }
    document.addEventListener("keydown", onKeyDown);

    return function () {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  useEffect(function () {
    history.listen(function () {
      setShowCart(false);
      setShowNavbar(false);
    });
  });

  return (
    <>
      {showCart && <CartModal toggleCart={toggleCart} />}
      <nav
        className="navbar navbar-expand-xxl navbar-dark bg-dark py-1 lh-1 z-9999"
        ref={ref}
      >
        <div className="container-md py-4 my-2">
          <Nav
            onCartTogglerClick={toggleCart}
            onNavbarTogglerClick={toggleNavbar}
          />
        </div>
      </nav>
      {showNavbar && <OffcanvasNav />}
      {showNavbar && (
        <div
          className="modal-backdrop fade show d-xxl-none"
          onClick={toggleNavbar}
        />
      )}
      {showCart && (
        <div className="modal-backdrop fade show" onClick={toggleCart} />
      )}
    </>
  );
}

export default Navbar;
