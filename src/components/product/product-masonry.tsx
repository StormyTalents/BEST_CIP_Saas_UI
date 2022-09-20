import { Product } from "@framework/types";
import { FC, useCallback, useMemo, useState } from "react";
import { ProductMasonryItem } from "./product-masonry-item";

interface ProductMasonryProps {
  products?: Product[];
}

export const ProductMasonry: FC<ProductMasonryProps> = ({ products }) => {
  const [loaded, setLoaded] = useState(0);

  const busy = useMemo(() => {
    if (!products) {
      return true;
    }

    return loaded !== products.length;
  }, [loaded, products]);

  const onLoad = useCallback(() => {
    setLoaded((count) => count + 1);
  }, [setLoaded]);

  if (!products) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <>
      {busy && <div className="p-8 text-center">Loading...</div>}

      <div className="masonry-box mb-4">
        {products &&
          products.map((product) => (
            <ProductMasonryItem
              key={product.id}
              product={product}
              hidden={busy}
              onLoad={onLoad}
            />
          ))}
      </div>
    </>
  );
};
