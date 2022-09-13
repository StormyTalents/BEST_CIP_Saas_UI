import { getSession } from "next-auth/react";
import { request } from "graphql-request";
/**
 * Custom fetcher to append auth token to request.
 *
 * When using `graphql-request` directly with `graphql-codegen` (`fetcher: graphql-request` in codegen.yml),
 * it is required to pass `client` on each query, which is troublesome.
 * Therefore we create a custom fetcher to provide the endpoint directly to simplify code.
 */
export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async () => {
    const session = await getSession();
    const data = await request<TData, TVariables>(
      process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
      query,
      variables,
      session?.token
        ? {
            authorization: `Bearer ${session.token}`,
          }
        : {}
    );
    // Leave error handle on react-query QueryClient in _app.tsx
    return data;
  };
};
