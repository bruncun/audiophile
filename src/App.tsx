import Navbar from "components/navbar/Navbar";
import Home from "pages/Home";
import Checkout from "components/checkout/Checkout";
import Footer from "components/shared/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Category from "components/shared/Category";
import ProductPage from "components/product/ProductPage";
import { OrdersContext } from "OrdersContext";
import { useState, useEffect } from "react";
import { Order } from "types";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  const storedOrders = localStorage.getItem("orders");
  const initialOrders = storedOrders ? JSON.parse(storedOrders) : {};
  const [orders, setOrders] = useState<{ [k: string]: number }>(initialOrders);

  const addOne = ({ id, quantity }: Order) => {
    const newOrders = { ...orders };
    if (!(id in newOrders)) newOrders[id] = 0;
    newOrders[id] = newOrders[id] + quantity > 1 ? newOrders[id] + quantity : 1;
    setOrders(newOrders);
  };

  useEffect(() => localStorage.setItem("orders", JSON.stringify(orders)), [
    orders,
  ]);

  const removeAll = () => setOrders({});

  return (
    <QueryClientProvider client={queryClient}>
      <OrdersContext.Provider value={{ orders, addOne, removeAll }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/headphones">
              <Category category="headphones" />
            </Route>
            <Route path="/earphones">
              <Category category="earphones" />
            </Route>
            <Route path="/speakers">
              <Category category="speakers" />
            </Route>
            <Route path="/products/:slug" children={<ProductPage />} />
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </OrdersContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
