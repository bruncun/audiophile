import Product from "../shared/Product";
import data from "data.json";

function EarphonesList() {
  return (
    <>
      <Product product={data[4]} />
      <Product product={data[5]} />
    </>
  );
}

export default EarphonesList;
