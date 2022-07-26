import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { GetServerSideProps } from "next";
import { Product } from "@framework/types";
import { fetchProduct } from "@framework/product/get-product";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <>
      <NextSeo
        title={product.attributes.name}
        description={product.attributes.description.split("\n")[0]}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${product.id}`,
          images: [
            {
              url: product.attributes.thumbnail,
              alt: product.attributes.name,
            },
          ],
        }}
      />
      <Divider className="mb-0" />
      <Container>
        <div className="pt-8">
          <Breadcrumb />
        </div>
        <ProductSingleDetails product={product} />
        <RelatedProducts sectionHeading="text-related-products" />
        <Subscription />
      </Container>
    </>
  );
}

ProductPage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
}) => {
  let product: Product | undefined;
  try {
    product = await fetchProduct(query.slug as string);
  } catch {
    return { notFound: true };
  }

  return {
    props: {
      product,
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
