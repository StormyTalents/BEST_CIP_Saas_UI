import { Elements } from "@stripe/react-stripe-js";
import getStripe from "@utils/get-stripe";

import { PropsWithChildren } from "react";

export const StripeElementsWrapper = ({
  children,
  plan,
  clientSecret,
}: PropsWithChildren<{ plan: string; clientSecret: string }>) => {
  return (
    <Elements stripe={getStripe()} options={{ clientSecret }}>
      {children}
    </Elements>
  );
};
