import { useQuery } from '@tanstack/react-query';
import { Product } from '../types';

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['https://fakestoreapi.com/products'],
    select: (data: Product[]) => data || [],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
