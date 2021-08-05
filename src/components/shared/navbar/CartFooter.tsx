import { Link } from "react-router-dom";

function CartFooter() {
  return (
    <Link
      to="/checkout"
      className="btn btn-primary d-block w-100 m-0"
      data-cy="cart-checkout"
    >
      Checkout
    </Link>
  );
}

export default CartFooter;
