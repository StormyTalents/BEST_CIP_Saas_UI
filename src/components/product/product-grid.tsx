import ProductCard from "@components/product/product-card";
import Button from "@components/ui/button";
import type { FC } from "react";

import { useRouter } from "next/router";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useTranslation } from "next-i18next";
import { useInfiniteProductsQuery } from "@gql/generated";
import { Product } from "@framework/types";

interface ProductGridProps {
  className?: string;
  products: Product[];
  isLoading?: boolean;
}
export const ProductGrid: FC<ProductGridProps> = ({
  className = "",
  products,
  isLoading,
}) => {
  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
      >
        {isLoading && !products.length ? (
          <ProductFeedLoader limit={20} uniqueKey="search-product" />
        ) : (
          products?.map((product) => {
            return (
              <ProductCard
                key={`product--key${product.id}`}
                product={product}
                variant="grid"
              />
            );
          })
        )}
      </div>
    </>
  );
};
