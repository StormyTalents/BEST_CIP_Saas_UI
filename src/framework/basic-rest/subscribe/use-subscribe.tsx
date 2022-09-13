import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { PaymentIntent } from "@stripe/stripe-js";
import { useMutation } from "react-query";

export interface SubscribeInputType {
  plan: string;
}

export type SubscribeErrorType = Record<keyof SubscribeInputType, string[]>;

// export interface StripeSubscriptionResult {
//   subscriptionId: string | number;
//   clientSecret: string | number;
// }

async function subscribe(input: SubscribeInputType) {
  return http
    .post<PaymentIntent>(API_ENDPOINTS.SUBSCRIBE, input)
    .then((res) => res.data)
    .catch((e) => {
      throw e.response.data.errors;
    });
}

export const useSubscribeMutation = () => {
  return useMutation((input: SubscribeInputType) => subscribe(input), {
    onSuccess: (data) => {
      // TODO: Handle success
      // TODO: Perhaps tell the user that they need to confirm their email
      // console.log({ clientSecret, subscriptionId });
      data;
    },
    onError: (errors: SubscribeErrorType) => {},
  });
};
