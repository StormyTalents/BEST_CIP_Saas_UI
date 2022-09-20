import { Elements } from "@stripe/react-stripe-js";
import getStripe from "@utils/get-stripe";
import axios from "axios";
import { PropsWithChildren, useEffect, useState } from "react";
import type Stripe from "stripe";

export const StripeElementsWrapper = ({
  children,
  amount,
}: PropsWithChildren<{ amount: number }>) => {
  const [paymentIntent, setPaymentIntent] =
    useState<Stripe.PaymentIntent | null>(null);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads using our local API
    axios
      .post("/api/stripe-intent", {
        // TODO: !IMPORTANT amount should be determined in server
        // We should pass suitable info to the API (e.g. plan id)
        amount,
        // TODO: customer_id should be generated on server during registration
        // TODO: Not supporting saving cards yet
        // customer_id: user.customerId,
      })
      .then(({ data }) => {
        setPaymentIntent(data);
      });
  }, [amount]);

  return paymentIntent?.client_secret ? (
    <Elements
      stripe={getStripe()}
      options={{
        clientSecret: paymentIntent.client_secret,
        // appearance: {
        //   theme: "none",
        //   labels: "floating",
        // },
      }}
    >
      {children}
    </Elements>
  ) : null;
};
