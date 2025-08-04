import {useQuery} from "@tanstack/react-query";
import {Product} from "../types";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      return data.products;
    },
    select: (data) => data || [],
    staleTime: 5 * 60 * 1000,
  });
};
