import { useQuery, useQueries } from "react-query";
import axios from "axios";

const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/products?category=${category}&_sort=id&_order=desc`
  );
  return data;
};

const getProductBySlug = async (slug: string): Promise<Product[]> => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/products?slug=${slug}`
  );
  return data;
};

const getProductById = async (id: string): Promise<Product> => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/products/${id}`
  );
  return data;
};

export function useProductsByCategory(category: string) {
  return useQuery<Product[], Error>(["products", category], () =>
    getProductsByCategory(category)
  );
}

export function useProductById(id: string) {
  return useQuery<Product, Error>(["product", id], () => getProductById(id));
}

export function useProductBySlug(slug: string) {
  return useQuery<Product[], Error>(["product", slug], () =>
    getProductBySlug(slug)
  );
}

export function useProductsById(ids: string[]) {
  return useQueries(
    ids.map((id) => ({
      queryKey: ["product", id],
      queryFn: () => getProductById(id),
    }))
  );
}
