import { useQuery, useQueries, useMutation } from "react-query";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const { data } = await axios.get(
    `/products?category=${category}&_sort=id&_order=desc`
  );
  return data;
};

export const getProductBySlug = async (slug: string): Promise<Product[]> => {
  const { data } = await axios.get(`/products?slug=${slug}`);
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};

export function useProductsByCategory(category: string) {
  return useQuery<Product[], Error>(["products", category], () =>
    getProductsByCategory(category)
  );
}

export function useProductById(id: number) {
  return useQuery<Product, Error>(["product", id], () => getProductById(id));
}

export function useProductBySlug(slug: string) {
  return useQuery<Product[], Error>(["product", slug], () =>
    getProductBySlug(slug)
  );
}

export function useProductsById(ids: number[]) {
  return useQueries(
    ids.map((id) => ({
      queryKey: ["product", id],
      queryFn: () => getProductById(id),
    }))
  );
}

export function useSavePurchase() {
  return useMutation((newPurchase: Purchase) =>
    axios.post("/purchases", newPurchase)
  );
}

export function prefetchCategories() {}
