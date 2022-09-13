import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Container from "@components/ui/container";

export default function RefundPolicyPage() {
  return (
    <>
      <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32">
        <Container>
          <p>
            At Designious.com,&nbsp;
            <strong>we want you to be fully satisfied</strong> with the products
            and services you purchase from us. If you have any questions,
            concerns, or problems, please let us know. Open a ticket on our
            support platform and we will be happy to help you or email us at
            support@designious.com.
          </p>
          <p>
            The products we sell on the platform are digital goods and cannot be
            “returned”, so your entitlement to a refund is designed with this in
            mind.
          </p>
          <h3 className="font-bold text-xl mb-4">Refunds Request</h3>
          <p>
            If an item doesn’t work the way it should then we will promptly fix
            the issue by updating the item. If an item is “not as described” or
            materially different from the item description or preview. If the
            issue can’t be fixed or it turns out that the item is “not as
            described” then you would be entitled to a refund{" "}
            <strong>
              Within 14 days of purchase, Designious will reimburse the full
              price paid on request.
            </strong>
          </p>
          <p>
            Refund requests are to be sent via ticket to our Support help desk,
            contact page or email at support@designious.com. In order to receive
            a quick answer, please let us know that you would like a refund,
            with a clear explanation of why you are not happy with the item. We
            love to know where things went wrong or how we can improve our work.
            No refunds are provided after 14 days of your date of purchase.
          </p>
          <h3 className="font-bold text-xl mb-4">Refund Exceptions</h3>
          <p>
            <em>No refunds are provided for:</em>
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <em>More than 5 premium resources were downloaded;</em>
            </li>
            <li>
              <em>
                Membership renewals for which you can cancel easily anytime the
                automatic payment at the deadline directly from your My Account
                page or{" "}
                <a href="https://designious.com/contacts/">contacting us</a>;
              </em>
            </li>
            <li>
              <em>Requesting a refund twice (partial refunds);</em>
            </li>
            <li>
              <em>Designious USB Drive that are already shipped ;</em>
            </li>
            <li>
              <em>You don’t want it after you’ve downloaded it;</em>
            </li>
            <li>
              <em>
                The item did not meet your expectations or you feel the item is
                of low quality;
              </em>
            </li>
            <li>
              <em>You simply change your mind;</em>
            </li>
            <li>
              <em>You bought an item by mistake;</em>
            </li>
            <li>
              <em>You do not have sufficient expertise to use the item;</em>
            </li>
            <li>
              <em>
                You claim that you are entitled to a refund but do not provide
                sufficient information as to why you are entitled to a refund;
              </em>
            </li>
            <li>
              <em>
                Store Setup Services and any amount of work has been done.
              </em>
            </li>
            <li>
              <em>Sign up fees or handling fees.</em>
            </li>
          </ul>
          <h3 className="font-bold text-xl mb-4">Payment of refunds</h3>
          <p>
            Your request will be processed and refunded automatically to your
            credit card or original method of payment. This generally takes up
            to 7-10 working days since your request has been approved.
          </p>
          <h3 className="font-bold text-xl mb-4">
            Late or missing refunds (if applicable)
          </h3>
          <p>
            If you have not received a refund yet, first please check your bank
            account again, than contact your credit card company, . It may take
            some time before your refund is officially issued. If you have done
            all of this and you still have not received your refund, please
            contact us. Thank you for purchasing our products.
          </p>
        </Container>
      </div>
    </>
  );
}

RefundPolicyPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "privacy",
        "footer",
      ])),
    },
  };
};
