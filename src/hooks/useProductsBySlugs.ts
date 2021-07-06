import { useQueries } from "react-query";
import axios from "axios";
import { Product } from "types";

const getProductBySlug = async (slug: string): Promise<Product[]> => {
  const { data } = await axios.get(
    `http://localhost:3004/products?slug=${slug}`
  );
  return data;
};

export default function useProductsByCategory(slugs: string[]) {
  return useQueries(
    slugs.map((slug) => ({
      queryKey: ["product", slug],
      queryFn: () => getProductBySlug(slug),
    }))
  );
}
