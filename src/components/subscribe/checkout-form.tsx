import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import Router from "next/router";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

interface CheckoutInputType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  // address: string;
  // city: string;
  zipCode: string;
  // TODO: Not supporting saving cards yet
  // save: boolean;
}

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { t } = useTranslation();
  // const { mutate: updateUser, isLoading } = useCheckoutMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutInputType>();

  const onSubmit = handleSubmit(async (input) => {
    if (!stripe || !elements) return;

    const { email, firstName, lastName, zipCode } = input;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // TODO: Put necessary info into stripe
        payment_method_data: {
          billing_details: {
            address: { postal_code: zipCode },
            name: `${firstName} ${lastName}`,
          },
        },
        receipt_email: email,
        // TODO: use url from env
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you`,
      },

      redirect: "always",
    });

    if (error) {
      // TODO: Handler error
      alert(error.message);
      return;
    }
  });

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="w-full mx-auto flex flex-col justify-center "
        noValidate
      >
        <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
          {/* {t("text-shipping-address")} */}
          Payment Details
        </h2>

        <div className="flex flex-col space-y-4 lg:space-y-5">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              labelKey="forms:label-first-name"
              {...register("firstName", {
                required: "forms:first-name-required",
              })}
              errorKey={errors.firstName?.message}
              variant="solid"
              className="w-full lg:w-1/2 "
            />
            <Input
              labelKey="forms:label-last-name"
              {...register("lastName", {
                required: "forms:last-name-required",
              })}
              errorKey={errors.lastName?.message}
              variant="solid"
              className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
            />
            <Input
              labelKey="forms:label-postcode"
              {...register("zipCode")}
              errorKey={errors.zipCode?.message}
              variant="solid"
              className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
            />
          </div>

          <PaymentElement />

          <div className="flex w-full">
            <Button
              type="submit"
              className="w-full sm:w-auto mt-10 pt-5 bg-green-400 hover:bg-green-500"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {/* {t("common:button-place-order")} */}
              Subscribe
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
