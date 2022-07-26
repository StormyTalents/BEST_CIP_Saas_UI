import { Product } from "@framework/types";
import isEmpty from "lodash/isEmpty";

export function generateCartItem(item: Product, attributes: object) {
  const {
    id,
    attributes: { slug, thumbnail, name, price },
  } = item;
  return {
    id: !isEmpty(attributes)
      ? `${id}.${Object.values(attributes).join(".")}`
      : id,
    name,
    slug,
    thumbnail,
    price,
    attributes,
  };
}
