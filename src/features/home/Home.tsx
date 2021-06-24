import Navbar from "features/navbar/Navbar";
import Header from "./Header";
import CategoryCardList from "./CategoryCardList";
import FeatureCardList from "./FeatureCardList";
import About from "./About";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CategoryCardList />
      <FeatureCardList />
      <About />
      <Footer />
    </>
  );
}

export default Home;
