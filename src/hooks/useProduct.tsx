import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/Api";

export const useProduct = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  return { data, isLoading };
};
