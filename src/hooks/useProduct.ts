import { useQuery } from "react-query";
import axios from "axios";
import { Product } from "types";

const getProductBySlug = async (slug: string): Promise<Product[]> => {
  const { data } = await axios.get(
    `http://localhost:3004/products?slug=${slug}`
  );
  return data;
};

export default function useProduct(slug: string) {
  return useQuery(["product", slug], () => getProductBySlug(slug));
}
