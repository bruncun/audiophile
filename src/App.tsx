import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import useCart from "hooks/useCart";
import CartContext from "contexts/CartContext";
import AppLayout from "components/AppLayout";
import { lazy, Suspense } from "react";
import Spinner from "components/shared/Spinner";
import "styles/app.scss";

const HomePage = lazy(() => import("pages/HomePage"));
const CheckoutPage = lazy(() => import("pages/CheckoutPage"));
const CategoryPage = lazy(() => import("pages/CategoryPage"));
const ProductPage = lazy(() => import("pages/ProductPage"));

const queryClient = new QueryClient();

function App() {
  const cart = useCart();

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={cart}>
        <Router>
          <AppLayout>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
          </AppLayout>
        </Router>
      </CartContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
