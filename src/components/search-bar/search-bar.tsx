import React from "react";
import Input from "@components/ui/input";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";
import Button from "@components/ui/button";
import shuffle from "lodash/shuffle";
import SearchIcon from "@components/icons/search-icon";

const RANDOM_SEARCH_TERMS = [
  "Handwritten Typefaces",
  "Vector Illustrations",
  "Free Design Resources",
  "Graphics Packs",
  "Holiday Collections",
  "Exclusive Bundles",
  "T-shirt Designs",
  "Mask Designs",
  "SVG Clip Art",
  "Photoshop Textures",
];

const SearchBar: React.FC = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    defaultValues: { q: router.query.search as string },
  });

  const onSubmit = handleSubmit(async ({ q }) => {
    router.push({
      pathname: `/search`,
      query: q ? { "products[query]": q } : undefined,
    });
  });
  return (
    <form
      className="mx-4 md:mx-8 2xl:mx-16 mb-4 py-6 lg:py-8 flex space-x-4 items-center justify-center rounded-md"
      onSubmit={onSubmit}
    >
      <Input
        type="search"
        // placeholder={`Search ${shuffle(RANDOM_SEARCH_TERMS)[0]}...`}
        placeholder={`Search...`}
        size={64}
        variant="solid"
        inputClassName="text-base font-semibold"
        {...register("q")}
      />
      <Button
        type="submit"
        className="hidden md:inline-flex lg:py-3.5 max-h-12"
      >
        <SearchIcon className="mr-4" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
