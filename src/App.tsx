import {
  Switch,
  Route,
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import useCart from "hooks/useCart";
import CartContext from "CartContext";
import Navbar from "components/navbar/Navbar";
import Footer from "components/shared/Footer";
import HomePage from "pages/HomePage";
import CheckoutPage from "pages/CheckoutPage";
import CategoryPage from "pages/CategoryPage";
import ProductPage from "pages/ProductPage";
import { useEffect } from "react";

const queryClient = new QueryClient();

export function ScrollRestoration(): null {
  const history = useHistory();
  const location = useLocation();
  useEffect(
    () =>
      history.listen(({ pathname }, action) => {
        if (action === "PUSH" && pathname !== location.pathname)
          window.scrollTo(0, 0);
      }),
    [location.pathname, history]
  );
  return null;
}

function App() {
  const cart = useCart();

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={cart}>
        <Router>
          <ScrollRestoration />
          <Navbar />
          <Switch>
            <Route path="/headphones">
              <CategoryPage category="headphones" />
            </Route>
            <Route path="/earphones">
              <CategoryPage category="earphones" />
            </Route>
            <Route path="/speakers">
              <CategoryPage category="speakers" />
            </Route>
            <Route path="/products/:slug" children={<ProductPage />} />
            <Route path="/checkout">
              <CheckoutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </CartContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
