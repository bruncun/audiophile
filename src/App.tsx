import Navbar from "features/navbar/Navbar";
import Home from "features/home/Home";
import Footer from "features/shared/Footer";
import Headphones from "features/headphones/Headphones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/headphones">
          <Headphones />
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
