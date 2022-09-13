import { Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { replaceRouteParam } from "@framework/utils/replace-route-param";
import { useRouter } from "next/router";
import { QueryFunction, useQuery } from "react-query";

type GetProductParam = {
  id: string;
};

const fetchSearch: QueryFunction<Product, [string, GetProductParam]> = async ({
  queryKey,
}) => {
  const [key, params] = queryKey;

  return http.get(replaceRouteParam(key, params)).then((r) => r.data);
};

export const useProductQuery = (options: GetProductParam) => {
  // router.query is undefined when the page is rendered for the first time
  // need to wait for isReady, otherwise the fetch fn will be executed before the router.query is set
  const { isReady } = useRouter();
  return useQuery([API_ENDPOINTS.PRODUCT, options], fetchSearch, {
    enabled: isReady,
  });
};

export const fetchProduct = async (slug: string): Promise<Product> => {
  const response = await http.get(
    replaceRouteParam(API_ENDPOINTS.PRODUCT, { id: slug })
  );

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  if (response.data === null) {
    throw new Error("Not Found");
  }

  return response.data.data;
};
