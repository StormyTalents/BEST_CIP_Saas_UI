import { QueryKey } from "react-query";

export type CollectionsQueryOptionsType = {
  text?: string;
  collection?: string;
  status?: string;
  limit?: number;
};

export type CategoriesQueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type ProductsQueryOptionsType = {
  type: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type QueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};

export type ShopsQueryOptionsType = {
  text?: string;
  shop?: Shop;
  status?: string;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Attachment = {
  id: string | number;
  thumbnail: string;
  original: string;
};
export type Category = {
  id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Collection = {
  id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Brand = {
  id: number | string;
  name: string;
  slug: string;
  image?: Attachment;
  background_image?: any;
  [key: string]: unknown;
};
export type Tag = {
  id: string | number;
  name: string;
  slug: string;
};

/**
 * Product Type from API
 */
export type Product = {
  id: string;
  type: string;
  attributes: {
    name: string;
    status: string;
    description: string;
    slug: string | null;
    thumbnail: string;
    featured: boolean;
    visibility: string | null;
    price: number;
    "regular-price": number | null;
    "sale-price": number | null;
    "on-sale": boolean;
    purchasable: boolean;
    downloadable: boolean;
    "download-url": string;
    "tax-status": string | null;
    "product-type": string;
    metadata: {
      license: string;
    };
    "external-id": string;
    "created-by": string | null;
    "updated-by": string | null;
    "canceled-at": string | null;
    "deleted-at": string | null;
    "created-at": string;
    "updated-at": string;
    "external-slug": string;
    "keyword-list": string;
    "tag-list": string[] | null;
  };
};
export type OrderItem = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
};
export type Order = {
  id: string | number;
  name: string;
  slug: string;
  products: OrderItem[];
  total: number;
  tracking_number: string;
  customer: {
    id: number;
    email: string;
  };
  shipping_fee: number;
  payment_gateway: string;
};

export type Shop = {
  id: string | number;
  owner_id: string | number;
  owner_name: string;
  address: string;
  phone: string;
  website: string;
  ratings: string;
  name: string;
  slug: string;
  description: string;
  cover_image: Attachment;
  logo: Attachment;
  socialShare: any;
  created_at: string;
  updated_at: string;
};

export interface JsonApiResult<T> {
  data: T[];
  links: {
    self: string;
    first: string;
    prev: string | null;
    next: string | null;
    last: string;
  };
}

/**
 * Search result types
 */
export type ProductSearchResult = Pick<Product, "id"> &
  Pick<Product["attributes"], "name" | "thumbnail" | "price" | "description">;
