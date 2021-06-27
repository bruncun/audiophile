// TODO: Optimize responsive images across all sections

import Header from "./Header";
import CategoryCardList from "../shared/CategoryCardList";
import FeatureCardList from "./FeatureCardList";
import About from "../shared/About";

function Home() {
  return (
    <div data-cy="home">
      <Header />
      <CategoryCardList />
      <FeatureCardList />
      <About />
    </div>
  );
}

export default Home;
