import ProductFeature from "../shared/ProductFeature";
import data from "data.json";

function EarphonesList() {
  return (
    <>
      <ProductFeature product={data[0]} />
    </>
  );
}

export default EarphonesList;
