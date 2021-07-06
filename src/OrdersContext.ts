import React from "react";
import { Order } from "types";

interface OrdersContextProps {
  orders: { [k: string]: number };
  addOne: (order: Order) => void;
  removeAll: () => void;
}

export const OrdersContext = React.createContext<OrdersContextProps>({
  orders: {},
  addOne: function () {},
  removeAll: function () {},
});
