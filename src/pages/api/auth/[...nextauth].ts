import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../../prisma/shared-client";
import NextAuth, { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";

export const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "abc@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data, headers } = await http.post(API_ENDPOINTS.LOGIN, {
            user: { ...credentials },
          });
          const id = data.id;
          const userAttributes = data.attributes;
          const token = headers.authorization.replace("Bearer ", "");

          return { id, ...userAttributes, token };
        } catch (e: any) {
          // pass the error message to frontend
          throw new Error(e.response.data.error);
        }

        // return { email: credentials?.email };
      },
      name: "Account",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
      checks: ["state"],
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      checks: ["state"],
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      checks: ["state"],
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: { maxAge: 30 * 24 * 0 * 60 },

  debug: true,
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.id = token.id as string;
      session.token = token.accessToken as string;
      return session;
    },
    async jwt({ token, user }) {
      // The `token` is actually the JWT object itself
      const isUserSignedIn = !!user;
      if (isUserSignedIn) {
        const { id, email, token: accessToken } = user;
        token.id = id;
        if (!user.token) {
          const newToken = jwt.sign(
            {
              sub: id,
              jti: uuidv4(),
              iat: Math.round(Date.now() / 1000),
              scp: "user",
              email,
              picture: token.picture,
              // accessToken: token,
              // "https://hasura.io/jwt/claims": {
              //   "x-hasura-allowed-roles": ["user"],
              //   "x-hasura-default-role": "user",
              //   "x-hasura-role": "user",
              //   "x-hasura-user-id": token.id,
              // },
            },
            process.env.NEXTAUTH_SECRET as string,
            { expiresIn: "30d" }
          );
          token.accessToken = newToken;
        } else {
          token.accessToken = accessToken;
        }
      }

      return token;
    },
    async redirect({ baseUrl, url }) {
      return url;
    },
  },
};

export default NextAuth(nextAuthOptions);
