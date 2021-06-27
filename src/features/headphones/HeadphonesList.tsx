import Product from "../shared/Product";
import data from "data.json";

function HeadphonesList() {
  return (
    <>
      <Product product={data[3]} />
      <Product product={data[2]} swapColOrder />
      <Product product={data[1]} />
    </>
  );
}

export default HeadphonesList;
