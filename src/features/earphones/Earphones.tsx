import EarphonesList from "./EarphonesList";
import Category from "../shared/Category";

function Earphones() {
  return <Category name="earphones" productList={<EarphonesList />} />;
}

export default Earphones;
