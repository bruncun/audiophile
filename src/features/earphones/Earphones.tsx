import Product from "../shared/Product";
import About from "../shared/About";
import CategoryCardList from "../shared/CategoryCardList";
import data from "data.json";

function Earphones() {
  return (
    <div data-cy="earphones">
      <div className="bg-dark py-4 text-center py-md-6">
        <h1 className="fw-bold text-white mb-0 d-md-none h2">Earphones</h1>
        <h1 className="fw-bold text-white mb-0 d-none d-md-block display-1">
          Earphones
        </h1>
      </div>
      <div className="container-md py-5">
        <Product product={data[0]} />
        <CategoryCardList />
        <About />
      </div>
    </div>
  );
}

export default Earphones;
