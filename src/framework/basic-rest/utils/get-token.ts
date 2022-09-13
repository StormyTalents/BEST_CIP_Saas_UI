import { getSession } from "next-auth/react";

export const getToken = async () => {
  if (typeof window === undefined) {
    return null;
  }
  const session = await getSession();
  return session?.token;
};
