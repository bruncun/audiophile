import { useReducer, useEffect, useMemo } from "react";

const storedCartState = localStorage.getItem("audiophile-cart");
const initialCartState = storedCartState ? JSON.parse(storedCartState) : {};

function cartReducer(state: Cart, action: CartAction) {
  switch (action.type) {
    case "REMOVE_ALL_ORDERS":
      return {};
    case "ADD_ORDER":
      const { productId, quantity } = action.payload;
      const newState = { ...state };

      if (!(productId in newState)) newState[productId] = 0;
      const newQuantity = newState[productId] + quantity;
      newState[productId] = newQuantity > 1 ? newQuantity : 1;

      return newState;
  }
}

function useCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const selectedProductIds = useMemo(
    function () {
      return Object.keys(cart).map((key) => parseInt(key));
    },
    [cart]
  );

  function getCosts(selectedProducts: Product[]) {
    const total = selectedProducts.reduce(
      (total, { price, id }) => total + price * cart[id],
      0
    );
    const shipping = 50;
    const vat = (total + shipping) * 0.2;
    const grandTotal = total + shipping + vat;

    return {
      total,
      vat,
      shipping,
      grandTotal,
    };
  }

  useEffect(
    function () {
      localStorage.setItem("audiophile-cart", JSON.stringify(cart));
    },
    [cart]
  );

  return {
    cart,
    dispatch,
    getCosts,
    selectedProductIds,
  };
}

export default useCart;
