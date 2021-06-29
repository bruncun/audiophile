import Navbar from "features/navbar/Navbar";
import Home from "features/home/Home";
import Footer from "features/shared/Footer";
import Headphones from "features/headphones/Headphones";
import Speakers from "features/speakers/Speakers";
import Earphones from "features/earphones/Earphones";
import Xx99MarkTwoHeadphones from "features/xx99-mark-two-headphones/Xx99MarkTwoHeadphones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/category/headphones">
          <Headphones />
        </Route>
        <Route path="/category/earphones">
          <Earphones />
        </Route>
        <Route path="/category/speakers">
          <Speakers />
        </Route>
        <Route path="/product/xx99-mark-two-headphones">
          <Xx99MarkTwoHeadphones />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
