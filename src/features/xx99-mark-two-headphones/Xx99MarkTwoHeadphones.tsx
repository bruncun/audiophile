import Hero from "./Hero";
import Details from "./Details";
import Gallery from "./Gallery";
import Suggestions from "./Suggestions";
import CategoryCardList from "../shared/CategoryCardList";
import About from "../shared/About";
import data from "data.json";

function Xx99MarkTwoHeadphones() {
  return (
    <div data-cy="xx99-mark-two-headphones">
      <Hero product={data[3]} />
      <Details product={data[3]} />
      <Gallery product={data[3]} />
      <Suggestions product={data[3]} />
      <CategoryCardList />
      <About />
    </div>
  );
}

export default Xx99MarkTwoHeadphones;
