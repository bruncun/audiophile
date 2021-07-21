import { createContext } from "react";
import { CartContextInterface } from "types";

const CartContext = createContext<CartContextInterface>({
  cart: {},
  addOrder: () => {},
  removeAllOrders: () => {},
  getCosts: () => ({ shipping: 0, vat: 0, grandTotal: 0, total: 0 }),
  selectedProductIds: [],
});

export default CartContext;
