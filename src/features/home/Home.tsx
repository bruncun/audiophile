// TODO: Optimize responsive images across all sections

import Header from "./Header";
import CategoryCardList from "./CategoryCardList";
import FeatureCardList from "./FeatureCardList";
import About from "./About";
import Footer from "./Footer";

function Home() {
  return (
    <div data-cy="home">
      <Header />
      <CategoryCardList />
      <FeatureCardList />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
