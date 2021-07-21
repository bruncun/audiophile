import { Order, Product, Cart } from "types";
import { useState, useEffect } from "react";

const storedCartState = localStorage.getItem("audiophile-cart");
const initialCartState = storedCartState ? JSON.parse(storedCartState) : {};

function useCart() {
  const [cart, setCart] = useState<Cart>(initialCartState);

  const selectedProductIds = Object.keys(cart);

  useEffect(
    function () {
      localStorage.setItem("audiophile-cart", JSON.stringify(cart));
    },
    [cart]
  );

  function addOrder({ productId, quantity }: Order) {
    const newCart = { ...cart };

    if (!(productId in newCart)) newCart[productId] = 0;
    const newQuantity = newCart[productId] + quantity;
    newCart[productId] = newQuantity > 1 ? newQuantity : 1;
    setCart(newCart);
  }

  function removeAllOrders() {
    setCart({});
  }

  function getCosts(selectedProducts: Product[]) {
    const total = selectedProducts.reduce(
      (sum, { price, id }) => sum + price * cart[id],
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

  return { cart, getCosts, selectedProductIds, addOrder, removeAllOrders };
}

export default useCart;
