import Product from "../shared/Product";
import data from "data.json";

function EarphonesList() {
  return (
    <>
      <Product product={data[0]} />
    </>
  );
}

export default EarphonesList;
