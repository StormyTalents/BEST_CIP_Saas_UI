import Layout from "@components/layout/layout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export default function ThankYouPage() {
  const { query } = useRouter();

  const paymentIntentId = (query.payment_intent as string) || "";
  const clientSecret = (query.payment_intent_client_secret as string) || "";
  const status = query.redirect_status as string;
  // TODO: Retrieve order detail
  return (
    <pre>
      Thank you for purchasing {paymentIntentId}. Go to orders {">>"}
      <br />
      {JSON.stringify(query, null, 2)}
    </pre>
  );
}

ThankYouPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};
