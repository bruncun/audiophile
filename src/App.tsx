import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import useCart from "hooks/useCart";
import CartContext from "CartContext";
import AppLayout from "components/AppLayout";
import HomePage from "pages/HomePage";
import CheckoutPage from "pages/CheckoutPage";
import CategoryPage from "pages/CategoryPage";
import ProductPage from "pages/ProductPage";
import "./App.scss";

const queryClient = new QueryClient();

function App() {
  const cart = useCart();

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={cart}>
        <Router>
          <AppLayout>
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
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </AppLayout>
        </Router>
      </CartContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
