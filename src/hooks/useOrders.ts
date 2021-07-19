import { Order } from "types";
import { useState, useEffect } from "react";

export default function useOrders(initialState: Order) {
  const [orders, setOrders] = useState<{ [k: string]: number }>(initialState);

  function addOne({ productId, quantity }: Order) {
    const newOrders = { ...orders };

    if (!(productId in newOrders)) newOrders[productId] = 0;
    newOrders[productId] =
      newOrders[productId] + quantity > 1 ? newOrders[productId] + quantity : 1;
    setOrders(newOrders);
  }

  function removeAll() {
    setOrders({});
  }

  useEffect(
    function () {
      localStorage.setItem("orders", JSON.stringify(orders));
    },
    [orders]
  );

  return { orders, addOne, removeAll };
}
