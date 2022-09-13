import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { ShopFilters } from "@components/shop/filters";
import StickyBox from "react-sticky-box";
import SearchTopBar from "@components/shop/top-bar";
import ActiveLink from "@components/ui/active-link";
import { BreadcrumbItems } from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useSearchQuery } from "@framework/search/use-search";
import Button from "@components/ui/button";
import { ProductMasonry } from "@components/product/product-masonry";

export default function Search() {
  const { t } = useTranslation("common");

  const { query, push, pathname } = useRouter();
  const q = (query.q ?? "") as string;
  const page = parseInt((query.page as string) ?? "1");
  const pageSize = parseInt((query.pageSize as string) ?? "25");

  const { data, isLoading } = useSearchQuery({ page, pageSize, q });

  // TODO: Product/SearchResult type is completely different now
  // TODO: Need to refactor product-related list and types
  const results = data?.data;

  const links = data?.links;

  const lastPage = links?.last
    ? parseInt(new URL(links?.last).searchParams.get("page[number]") ?? "1")
    : 1;

  return (
    <>
      <Container>
        <div className={`flex pt-8 pb-16 lg:pb-20`}>
          <div className="flex-shrink-0 pe-24 hidden lg:block w-72">
            <StickyBox offsetTop={50} offsetBottom={20}>
              <div className="pb-7">
                <BreadcrumbItems separator="/">
                  <ActiveLink
                    href={"/"}
                    activeClassName="font-semibold text-heading"
                  >
                    <a>{t("breadcrumb-home")}</a>
                  </ActiveLink>
                  <ActiveLink
                    href={ROUTES.SEARCH}
                    activeClassName="font-semibold text-heading"
                  >
                    <a className="capitalize">{t("breadcrumb-search")}</a>
                  </ActiveLink>
                </BreadcrumbItems>
              </div>
              <ShopFilters />
            </StickyBox>
          </div>

          <div className="w-full lg:-ms-9">
            <SearchTopBar />

            <ProductMasonry products={results} />

            <div className="mb-4 flex space-x-2">
              <Button
                disabled={page <= 1}
                variant={page <= 1 ? "smoke" : "slim"}
                onClick={() => {
                  if (page > 1)
                    push({ pathname: pathname, query: { ...query, page: 1 } });
                }}
              >
                First
              </Button>
              <Button
                disabled={page <= 1}
                variant={page <= 1 ? "smoke" : "slim"}
                onClick={() => {
                  if (page > 1)
                    push({
                      pathname: pathname,
                      query: { ...query, page: page - 1 },
                    });
                }}
              >
                Previous
              </Button>
              <Button
                disabled={page >= lastPage}
                variant={page >= lastPage ? "smoke" : "slim"}
                onClick={() => {
                  if (page < lastPage)
                    push({
                      pathname: pathname,
                      query: { ...query, page: page + 1 },
                    });
                }}
              >
                Next
              </Button>
              <Button
                disabled={page >= lastPage}
                variant={page >= lastPage ? "smoke" : "slim"}
                onClick={() => {
                  if (page < lastPage)
                    push({
                      pathname: pathname,
                      query: { ...query, page: lastPage },
                    });
                }}
              >
                Last
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

Search.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
