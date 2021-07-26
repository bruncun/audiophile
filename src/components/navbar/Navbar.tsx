import Nav from "components/navbar/Nav";
import CategoryList from "components/shared/CategoryList";
import { useLocation } from "react-router-dom";
import CartModal from "./CartModal";
import "./Navbar.scss";
import { modifyBodyClassList } from "utils";

function Navbar() {
  const location = useLocation() as LocationWithNavState;
  const { showCollapse, showCart } = location.state || false;

  if (showCollapse) {
    modifyBodyClassList("collapse-open", "add");
  } else {
    modifyBodyClassList("collapse-open", "remove");
  }

  if (showCart) {
    modifyBodyClassList("overflow-hidden", "add");
  } else {
    modifyBodyClassList("overflow-hidden", "remove");
  }

  return (
    <>
      {showCart && <CartModal />}
      <nav className="fixed-top navbar navbar-expand-xxl navbar-dark bg-dark z-9999 py-1 lh-1">
        <div className="container-md py-4 my-2">
          <Nav />
        </div>
      </nav>
      {showCollapse && (
        <div className="fixed-top bg-white rounded-bottom d-xxl-none pt-2 py-md-5 mt-6 overflow-scroll z-9999">
          <div className="container-md pt-5 pt-md-2">
            <div className="pt-1 pb-6 mb-4 mb-md-2 pb-md-2 pt-md-4 mt-md-1">
              <CategoryList />
            </div>
          </div>
        </div>
      )}
      {showCart && <div className="modal-backdrop fade show" />}
      {showCollapse && <div className="modal-backdrop fade show d-xxl-none" />}
    </>
  );
}

export default Navbar;
