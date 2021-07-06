import Navbar from "features/navbar/Navbar";
import Home from "features/home/Home";
import Checkout from "features/checkout/Checkout";
import Footer from "features/shared/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "features/shared/Category";
import Product from "features/product/Product";
import { OrdersContext } from "OrdersContext";
import { useState } from "react";
import { Order } from "types";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [orders, setOrders] = useState<{ [k: string]: number }>({});

  const addOne = ({ productSlug, quantity }: Order) => {
    const newOrders = { ...orders };
    if (!(productSlug in newOrders)) newOrders[productSlug] = 0;
    newOrders[productSlug] =
      newOrders[productSlug] + quantity > 1
        ? newOrders[productSlug] + quantity
        : 1;
    setOrders(newOrders);
  };

  const removeAll = () => setOrders({});

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <OrdersContext.Provider value={{ orders, addOne, removeAll }}>
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
            <Route path="/products/:slug" children={<Product />} />
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </OrdersContext.Provider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
