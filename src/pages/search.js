import Container from "@components/ui/container";
import Layout from "@components/layout/layout";

// import ActiveLink from "@components/ui/active-link";
// import { BreadcrumbItems } from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { ROUTES } from "@utils/routes";
// import { useTranslation } from "next-i18next";
// import { GetStaticProps } from "next";
// import { Router, useRouter } from "next/router";
// import Button from "@components/ui/button";

// import "instantsearch.css/themes/algolia-min.css";
// import "instantsearch.css/themes/reset.css";
import { HitItem } from "@components/instantsearch/hit-item";
import { CustomHits } from "@components/instantsearch/custom-hits";

import {
  InstantSearch,
  RefinementList,
  SearchBox,
  Hits,
  HitsPerPage,
  Highlight,
  Snippet,
  SortBy,
  Configure,
  Pagination,
} from "react-instantsearch-hooks-web";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

// https://www.algolia.com/doc/api-reference/widgets/react-hooks/
// const searchClient = instantMeiliSearch(
//   "https://integration-demos.meilisearch.com",
//   "q7QHwGiX841a509c8b05ef29e55f2d94c02c00635f729ccf097a734cbdf7961530f47c47"
// );

// TODO: use env var for search server
const searchClient = instantMeiliSearch(
  process.env.NEXT_PUBLIC_MEILISEARCH_HOST,
  process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY,
  {
    keepZeroFacets: true,
    paginationTotalHits: 5000,
    finitePagination: true,
  }
);

export default function Search() {
  return (
    <>
      <Container>
        <div>
          <InstantSearch
            indexName="products"
            searchClient={searchClient}
            routing={true}
            // initialUiState={{
            //   products: {
            //     query: "skulls",
            //   },
            // }}
          >
            {/* MORE RESULTS PER PAGE */}
            <Configure hitsPerPage={100} />
            <SearchBox
              classNames={{
                // root: "mr-4 hidden lg:block lg:w-1/4",
                // form: "block",
                // input:
                //   "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary",
                // // submit: "",
                // submitIcon: "",
                loadingIcon: "",
              }}
            />
            {/* 
            <HitsPerPage
              items={[
                { label: "50 hits per page", value: 50, default: true },
                { label: "75 hits per page", value: 75 },
                { label: "100 hits per page", value: 100 },
                { label: "150 hits per page", value: 150 },
              ]}
            /> */}

            <div className="left-panel">
              {/* <h2>Image Types</h2>
              <RefinementList attribute="product_type" /> */}
              <h2>Status</h2>

              <RefinementList
                attribute="status"
                classNames={{
                  // root: "MyCustomRefinementList",
                  // list: "items-center",
                  // item: "items-center",
                  label: "flex item-center",
                  checkbox:
                    "m-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",
                  count: "ml-1 item-center",
                  // labelText: "m-1",
                }}
              />
            </div>

            {/* <Hits
              hitComponent={Hit}
              classNames={{
                root: "masonry-box mb-4",
                // list: "masonry-box mb-4",
                // item: "masonry-box mb-4",
              }}
            /> */}
            <CustomHits />

            <Pagination
              // Optional props
              totalPages={1000}
              // padding={number}
              // showFirst={boolean}
              // showPrevious={boolean}
              // showNext={boolean}
              // showLast={boolean}
              // classNames={object}
              // ...props={ComponentProps<'div'>}
            />
          </InstantSearch>
        </div>
      </Container>
    </>
  );
}

Search.Layout = Layout;

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
