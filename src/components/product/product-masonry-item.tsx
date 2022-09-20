import classnames from "classnames";
import { Product } from "@framework/types";
import isUndefined from "lodash/isUndefined";
import { useUI } from "@contexts/ui.context";
import { FC, useRef, useMemo, useState } from "react";

interface ProductMasonryItemProps {
  product: Product;
  hidden?: boolean;
  onLoad?: () => void;
}

export const ProductMasonryItem: FC<ProductMasonryItemProps> = ({
  product,
  hidden,
  onLoad,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const { openModal, setModalView, setModalData } = useUI();

  // https://codepen.io/jasonsturges/pen/pRdemq
  const sizes = useMemo(() => {
    if (isUndefined(width) || isUndefined(height)) {
      return { grow: 0, basis: 0, bottomSpace: 0 };
    }

    return {
      grow: (width * 100) / height,
      basis: (width * 240) / height,
      bottomSpace: (height / width) * 100,
    };
  }, [width, height]);

  return (
    <button
      type="button"
      title={product.attributes.name}
      className={classnames("masonry-item", hidden ? "hidden" : "block")}
      style={{ flexGrow: sizes.grow, flexBasis: `${sizes.basis}px` }}
      onClick={() => {
        setModalData({ data: product });
        setModalView("PRODUCT_VIEW");
        return openModal();
      }}
    >
      <i
        className="masonry-item-spacer"
        style={{ paddingBottom: `${sizes.bottomSpace}%` }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={product.attributes.thumbnail}
        alt={product.attributes.name}
        className="masonry-item-img"
        onLoad={() => {
          if (imgRef.current) {
            setWidth(imgRef.current.naturalWidth);
            setHeight(imgRef.current.naturalHeight);
          }
          if (onLoad) {
            onLoad();
          }
        }}
      />
    </button>
  );
};
