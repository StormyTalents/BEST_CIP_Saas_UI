import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { signIn, signOut, useSession } from "next-auth/react";

export const useAuth = () => {
  const { data, status } = useSession();

  const handleSocialLogin = (provider: "facebook" | "google" | "github") => {
    signIn(provider);
  };

  const handleCredentialsLogin = async (
    email: string,
    password: string,
    onSuccess?: () => void
  ) => {
    try {
      const result = await signIn<"credentials">("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        // TODO: handle error
        alert(result.error);
      } else {
        onSuccess?.();
      }
    } catch (e) {
      // TODO: error handling
      console.error("credential login error", e);
    }
  };

  const handleLogout = async () => {
    await http.delete(API_ENDPOINTS.LOGOUT);
    signOut({ callbackUrl: "/" });
  };

  return {
    status,
    sessionData: data,
    handleSocialLogin,
    handleCredentialsLogin,
    handleLogout,
  };
};
