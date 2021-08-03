import { createContext, Dispatch, SetStateAction } from "react";

interface CartContextInterface {
  dispatch: (action: CartAction) => void;
  selectedProductIds: number[];
  getCosts: (selectedProducts: Product[]) => Costs;
  cart: Cart;
  showCart: Boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextInterface>({
  dispatch: () => {},
  cart: {},
  getCosts: () => ({ shipping: 0, vat: 0, grandTotal: 0, total: 0 }),
  selectedProductIds: [],
  showCart: false,
  setShowCart: () => {},
});

export default CartContext;
