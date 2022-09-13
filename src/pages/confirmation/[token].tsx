import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type ConfirmationPageProps = {
  message: string;
};

export default function ConfirmationPage(props: ConfirmationPageProps) {
  // TODO: Handle confirmation result
  return props.message;
}

export const getServerSideProps: GetServerSideProps<
  ConfirmationPageProps
> = async ({ query, locale }) => {
  const token = query?.token;
  const confirmationResult = await http
    .get(API_ENDPOINTS.CONFIRMATION, {
      params: { confirmation_token: token },
    })
    .then((r) => r.data.message)
    .catch((e) => {
      return e.response.data.errors[0];
    });

  return {
    props: {
      message: confirmationResult,
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
