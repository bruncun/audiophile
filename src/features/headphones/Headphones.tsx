import HeadphonesList from "./HeadphonesList";
import Category from "../shared/Category";

function Headphones() {
  return <Category name="headphones" productList={<HeadphonesList />} />;
}

export default Headphones;
