import { useQuery } from "react-query";
import axios from "axios";
import { Product } from "types";

const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const { data } = await axios.get(
    `http://localhost:3004/products?category=${category}&_sort=id&_order=desc`
  );
  return data;
};

export default function useProductsByCategory(category: string) {
  return useQuery<Product[], Error>(["products", category], () =>
    getProductsByCategory(category)
  );
}
