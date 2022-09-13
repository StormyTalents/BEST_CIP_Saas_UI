import Layout from "@components/layout/layout";
import CheckoutCard from "@components/subscribe/checkout-card";
import CheckoutForm from "@components/subscribe/checkout-form";
import { StripeElementsWrapper } from "@components/subscribe/stripe-elements-wrapper";
import Container from "@components/ui/container";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import axios from "axios";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { nextAuthOptions } from "src/pages/api/auth/[...nextauth]";

// const plan = "simple_plan";

type SubscribePageProps = {
  clientSecret: string;
};
export default function SubscribePage({ clientSecret }: SubscribePageProps) {
  const { query } = useRouter();
  const plan = query.plan as string;

  return (
    <>
      {/* <PageHeader pageHeader="text-page-checkout" /> */}
      <Container>
        <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
          <div className="md:w-full lg:w-3/5 flex  h-full flex-col -mt-1.5">
            <StripeElementsWrapper plan={plan} clientSecret={clientSecret}>
              <CheckoutForm />
            </StripeElementsWrapper>
          </div>
          <div className="md:w-full lg:w-2/5 md:ms-7 lg:ms-10 xl:ms-14 flex flex-col h-full -mt-1.5">
            <CheckoutCard />
          </div>
        </div>
      </Container>
    </>
  );
}

SubscribePage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
  req,
}) => {
  const token = await getToken({ req });

  try {
    const { data } = await axios.post(
      (process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
        API_ENDPOINTS.SUBSCRIBE) as string,
      { plan: params?.plan },
      {
        timeout: 30000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.accessToken}`,
        },
      }
    );

    return {
      props: {
        clientSecret: data.client_secret,
        ...(await serverSideTranslations(locale!, [
          "common",
          "forms",
          "menu",
          "footer",
        ])),
      },
    };
  } catch (e) {
    console.error(JSON.stringify(e));
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
