import Product from "./Product";
import About from "../shared/About";
import CategoryCardList from "../shared/CategoryCardList";
import data from "data.json";

function Headphones() {
  return (
    <div data-cy="headphones">
      <div className="bg-dark py-4 text-center py-md-6">
        <h1 className="fw-bold text-white mb-0 d-md-none h2">Headphones</h1>
        <h1 className="fw-bold text-white mb-0 d-none d-md-block display-1">
          Headphones
        </h1>
      </div>
      <div className="container-md py-5">
        <Product product={data[3]} data-cy="headphone-product" />
        <Product product={data[2]} swapColOrder data-cy="headphone-product" />
        <Product product={data[1]} />
        <CategoryCardList />
        <About />
      </div>
    </div>
  );
}

export default Headphones;
