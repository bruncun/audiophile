import ProductFeature from "../shared/ProductFeature";
import data from "data.json";

function HeadphonesList() {
  return (
    <>
      <ProductFeature product={data[3]} />
      <ProductFeature product={data[2]} swapColOrder />
      <ProductFeature product={data[1]} />
    </>
  );
}

export default HeadphonesList;
