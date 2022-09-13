import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useRouter } from "next/router";
import { useSubscribeMutation } from "@framework/subscribe/use-subscribe";
import Layout from "@components/layout/layout";

// const createSubscription = async (priceId) => {
//   const {subscriptionId, clientSecret} = await fetch('/create-subscription', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       priceId
//     }),
//   }).then(r => r.json());

//   setSubscriptionData({ subscriptionId, clientSecret });
// }

export default function Subscribe() {
  const { query } = useRouter();
  const plan = query.plan as string;

  const { mutateAsync } = useSubscribeMutation();

  return (
    <>
      <button
        onClick={() => {
          mutateAsync({ plan });
        }}
      >
        subscribe.
      </button>
    </>
  );
}

Subscribe.Layout = Layout;
