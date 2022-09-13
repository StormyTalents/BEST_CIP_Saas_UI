import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useMutation } from "react-query";

export interface SignUpInputType {
  email: string;
  password: string;
  password_confirmation: string;
}

export type SignUpErrorType = Record<keyof SignUpInputType, string[]>;

export interface SignUpResult {
  id: string;
  name: null;
  email: string;
  email_verified: null;
  image: null;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}

async function signUp(input: SignUpInputType) {
  return http.post(API_ENDPOINTS.REGISTER, { user: input }).catch((e) => {
    throw e.response.data.errors;
  });
}
export const useSignUpMutation = () => {
  return useMutation((input: SignUpInputType) => signUp(input), {
    onSuccess: ({ data }) => {
      // TODO: Handle success
      // TODO: Perhaps tell the user that they need to confirm their email
    },
    onError: (errors: SignUpErrorType) => {},
  });
};
