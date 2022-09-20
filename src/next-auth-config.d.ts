import NextAuth from "next-auth";

declare module "next-auth" {
  export interface Session {
    id: string;
    token: string;
  }

  /**
   * Hover the type for see when it will be used
   */
  export interface User {
    token?: string;
  }
}
