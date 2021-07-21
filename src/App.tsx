import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import useCart from "hooks/useCart";
import CartContext from "CartContext";
import Navbar from "components/navbar/Navbar";
import Footer from "components/shared/Footer";
import Home from "pages/Home";
import Checkout from "components/checkout/Checkout";
import Category from "components/shared/Category";
import ProductPage from "components/product/ProductPage";

const queryClient = new QueryClient();

function App() {
  const cart = useCart();

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={cart}>
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
      </CartContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
