import { createContext } from "react";

interface CartContextInterface {
  dispatch: (action: CartAction) => void;
  selectedProductIds: string[];
  getCosts: (selectedProducts: Product[]) => Costs;
  cart: Cart;
}

const CartContext = createContext<CartContextInterface>({
  dispatch: () => {},
  cart: {},
  getCosts: () => ({ shipping: 0, vat: 0, grandTotal: 0, total: 0 }),
  selectedProductIds: [],
});

export default CartContext;
