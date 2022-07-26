/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";
import { useUI } from "@contexts/ui.context";
import Button from "@components/ui/button";
import usePrice from "@framework/product/use-price";
import { useTranslation } from "next-i18next";
import { isEmpty } from "lodash";
import { useState } from "react";
import { useCart } from "@contexts/cart/cart.context";
import { generateCartItem } from "@utils/generate-cart-item";
import { ProductAttributes } from "@components/product/product-attributes";
import { Product } from "@framework/types";

export default function ProductPopup() {
  const { t } = useTranslation("common");
  const { modalData, closeModal, openCart } = useUI();
  const product: Product = modalData.data;

  const {
    id,
    attributes: { thumbnail, name, price: productPrice, description },
  } = product;
  // @todo Add variations
  const variations: Record<string, any> = {};

  const router = useRouter();
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [viewCartBtn, setViewCartBtn] = useState(false);
  const [addToCartLoader, setAddToCartLoader] = useState(false);

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

  function addToCart() {
    if (!isSelected) return;
    // to show btn feedback while product carting
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
      setViewCartBtn(true);
    }, 600);
    const item = generateCartItem(product!, attributes);
    addItemToCart(item, quantity);
  }

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

  function navigateToCartPage() {
    closeModal();
    setTimeout(() => {
      openCart();
    }, 300);
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

        {/* <div className="flex flex-col justify-between p-5 md:p-8 w-full">
          <div className="pb-5">
            <div
              className="mb-2 md:mb-2.5 block -mt-1.5"
              onClick={navigateToProductPage}
              role="button"
            >
              <h2 className="text-heading text-lg md:text-xl font-semibold hover:text-black">
                {name}
              </h2>
            </div>
            <p className="text-sm leading-6 md:text-body md:leading-7">
              {description}
            </p>

            <div className="flex items-center mt-3">
              <div className="text-heading font-semibold text-base md:text-xl">
                {price}
              </div>
              {discount && (
                <del className="font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
                  {basePrice}
                </del>
              )}
            </div>
          </div>

          {Object.keys(variations).map((variation) => {
            return (
              <ProductAttributes
                key={`popup-attribute-key${variation}`}
                title={variation}
                attributes={variations[variation]}
                active={attributes[variation]}
                onClick={handleAttribute}
              />
            );
          })}

          <div className="pt-2 md:pt-4">
            <Button
              onClick={navigateToProductPage}
              variant="flat"
              className="w-full h-11 md:h-12 mb-4"
            >
              {t("text-view-details")}
            </Button>

            <div className="flex items-center justify-between mb-4 space-s-3 sm:space-s-4">
              <Button
                onClick={addToCart}
                variant="flat"
                className={`w-full h-11 md:h-12 px-1.5 ${
                  !isSelected && "bg-gray-400 hover:bg-gray-400"
                }`}
                disabled={!isSelected}
                loading={addToCartLoader}
              >
                {t("text-add-to-cart")}
              </Button>
            </div>

            {viewCartBtn && (
              <button
                onClick={navigateToCartPage}
                className="w-full mb-4 h-11 md:h-12 rounded bg-gray-100 text-heading focus:outline-none border border-gray-300 transition-colors hover:bg-gray-50 focus:bg-gray-50"
              >
                {t("text-view-cart")}
              </button>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}
