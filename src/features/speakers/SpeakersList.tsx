import ProductFeature from "../shared/ProductFeature";
import data from "data.json";

function EarphonesList() {
  return (
    <>
      <ProductFeature product={data[4]} />
      <ProductFeature product={data[5]} />
    </>
  );
}

export default EarphonesList;
