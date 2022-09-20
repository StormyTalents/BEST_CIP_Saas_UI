/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";
import { useUI } from "@contexts/ui.context";
import Button from "@components/ui/button";
import usePrice from "@framework/product/use-price";
import { useTranslation } from "next-i18next";
import { isEmpty } from "lodash";
import { useState, useEffect } from "react";
import { ProductSearchResult } from "@framework/types";

export default function HitItemPopup() {
  const { t } = useTranslation("common");
  const { modalData, closeModal } = useUI();
  const product: ProductSearchResult = modalData.data;

  // close on escape key
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const { id, thumbnail, name, price: productPrice, description } = product;
  // @todo Add variations
  const variations: Record<string, any> = {};

  const router = useRouter();
  // const [quantity, setQuantity] = useState(1);
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  // const [viewCartBtn, setViewCartBtn] = useState(false);
  // const [addToCartLoader, setAddToCartLoader] = useState(false);

  const { price, basePrice, discount } = usePrice({
    amount: productPrice,
    baseAmount: productPrice,
    currencyCode: "USD",
  });
  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) =>
        attributes.hasOwnProperty(variation)
      )
    : true;

  function navigateToProductPage() {
    closeModal();
    router.push(`${ROUTES.PRODUCT}/${id}`, undefined, {
      locale: router.locale,
    });
  }

  function handleAttribute(attribute: any) {
    setAttributes((prev) => ({
      ...prev,
      ...attribute,
    }));
  }

  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[750px] mx-auto overflow-hidden">
        <div className="flex-shrink-0 flex items-center justify-center w-full overflow-hidden bg-gray-300">
          <img
            src={
              thumbnail ?? "/assets/placeholder/products/product-thumbnail.svg"
            }
            alt={name}
            className="lg:object-cover lg:w-full lg:h-full"
            onClick={navigateToProductPage}
          />
        </div>
      </div>
    </div>
  );
}
