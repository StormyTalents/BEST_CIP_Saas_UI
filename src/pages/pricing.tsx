import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Plans from "@components/plans/plans";
import Link from "@components/ui/link";

import { RefreshIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import Features from "@components/plans/features";
import {
  tiers,
  facebookReviews,
  textReviews,
  samples,
  soldOnImage,
  features,
  paypalImage,
  partners,
} from "@components/plans/dummy-data";
import { getPlans, Plan } from "@framework/plan/get-plans";

type PricingPageProps = {
  plans: Plan[];
};
export default function PricingPage({ plans }: PricingPageProps) {
  return (
    <>
      <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32">
        <Container>
          <div className="text-center">
            <h1 className="text-github text-3xl font-bold mb-3">
              SIGN UP FOR THE PRO MEMBERSHIP
            </h1>
            <h2 className="text-github text-2xl font-bold mb-3">
              Download anything you want from our 33k design items library
            </h2>
            <p>
              Use our library to design clothing, merch, logos, brochures,
              websites, wedding invitations, and everything in between.
            </p>
            <p>
              Use for dropshipping or print on demand products like t-shirts,
              hoodies, posters, or mugs with our designs on:
            </p>
            <div className="flex justify-center mt-8">
              <img src={soldOnImage} alt="Sold on" />
            </div>
          </div>
          <Plans plans={plans} />
          <Features features={features} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="mb-8 border 1px solid bg-gray-50 rounded-md border-borderBottom p-8 col-span-2 flex">
              <div className="flex items-center">
                <RefreshIcon className="h-10 mr-6" />
              </div>
              <div>
                <div className="text-2xl font-bold mb-4">
                  14-Day Money-Back Guarantee
                </div>
                <div>
                  If you’re not happy within the first 14 days of the
                  subscription we provide you with a{" "}
                  <Link href="/refund-policy"> full refund</Link>*.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={paypalImage} />
            </div>
          </div>
        </Container>
      </div>
      <div className="mt-6 lg:mt-8 xl:mt-10 lg:py-1 xl:py-0 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32">
        <Container>
          <h2 className="flex items-center justify-center text-2xl font-bold mb-20">
            People <HeartIcon className="h-8 text-primary mx-1" /> Designious
          </h2>
          <div className="grid auto-cols-max grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {facebookReviews.map((src, i) => (
              <div className="flex justify-center" key={i}>
                <img className="w-full" src={src} alt="testimonial" />
              </div>
            ))}
          </div>
          <div className="grid auto-cols-max grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {textReviews.map((review, i) => (
              <div
                className="italic text-lg border-l-2 border-green-500 pl-8"
                key={i}
              >
                <div className="mb-6">{review.description}</div>
                <div>{review.author}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-20">
            <img src={partners} alt="partners" />
          </div>
          <div className="mb-20">
            <div className="flex justify-center text-xl font-bold mb-10">
              Samples from our design library
            </div>
            <div className="flex justify-center">
              <div
                className="grid auto-cols-max grid-cols-1 sm:grid-cols-3 md:grid-cols-4"
                style={{ maxWidth: 1000 }}
              >
                {samples.map((src, i) => (
                  <div className="flex justify-center" key={i}>
                    <img
                      className="w-full"
                      style={{ maxWidth: 250, maxHeight: 250 }}
                      src={src}
                      alt="testimonial"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-20 grid auto-cols-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-center mb-4">
                BONUS #1: Access to Our{" "}
                <a href="https://designious.com/online-designer/">
                  Online Product Designer
                </a>{" "}
                – VALUE $119.4
              </h2>
              <div>
                This is an easy to use online editor to create a number of print
                on demand products: t-shirts, mugs, totes, phone cases, pillows,
                tote bags and many others.
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-center mb-4">
                BONUS #2:{" "}
                <a
                  href="https://designious.com/product-category/zilla/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zilla Super Premium Bundles
                </a>{" "}
                – VALUE $1477
              </h2>
              <div>Access and download 22 amazing super-premium bundles.</div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-center mb-4">
                BONUS #3: Astra Pro WooCommerce Theme – VALUE $169
              </h2>
              <div>
                description:{" "}
                <p style={{ textAlign: "left" }}>
                  You can now create an amazing Print on Demand WooCommerce
                  store with our designs using Astra Pro.
                </p>
                <p style={{ textAlign: "left" }}>
                  Follow our{" "}
                  <a
                    href="https://designious.com/2020/08/03/printondemand-store-designious-woocommerce-printful/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    easy to follow tutorial to create you store
                  </a>{" "}
                  in no time.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-center mb-4">
                Bonus #4: GeneratePress Premium WordPress Theme
              </h2>
              <div>
                <p>
                  The perfect WordPress theme that is lightweight and extremely
                  fast.
                </p>
                <p>
                  Build your next e-commerce store with this theme and you won’t
                  look back.
                </p>
                <p>
                  It comes with an amazing number of ready-made templates for
                  all your web design needs, these are editable using Elementor.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-center mb-4">
                Bonus #5: Build An Ecommerce Store With WordPress and
                WooCommerce Course
              </h2>
              <div>
                <p>
                  In this course, I will teach you how to build your very own
                  online store so you can charge clients and customers for your
                  products or services.
                </p>
                <p>
                  You’ll build an amazing, professional-looking online store
                  from scratch in no time at all. And the best part is you
                  <strong>&nbsp;don’t need any technical skills,&nbsp;</strong>
                  in fact, if you can use a web browser you are fully qualified
                  to take this course!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <h2 className="mb-10 py-20 bg-red-500 text-center px-6 text-2xl font-bold text-white">
        Designious Gives You An Amazing Library for Your Design Needs
      </h2>
      <Container>
        <div className="flex justify-center text-xl font-bold mb-10">
          Frequently Asked Questions
        </div>
        <div className="mb-8">
          <div className="font-bold mb-4">What do I get?</div>
          <div>
            <p>
              You get access to our entire library of design assets: ready-made{" "}
              <a href="https://designious.com/product-category/t-shirt-designs/">
                t-shirt designs
              </a>
              ,{" "}
              <a href="https://designious.com/product-category/vector-packs/">
                vector art
              </a>
              ,{" "}
              <a href="https://designious.com/product-category/vector-illustrations/">
                illustrations
              </a>
              , fonts, and Photoshop brushes. Our license allows you to use our
              digital assets in your projects or to create your own products for
              dropshipping on Print on Demand websites like t-shirts, prints,
              hats and more.
            </p>
          </div>
          <div className="font-bold mb-4">
            Once I pay the membership do I still have to pay for the designs
            too?
          </div>
          <div>
            <p>
              No, you will be able to download anything you want that is covered
              by your membership plan for free.
            </p>
          </div>
          <div className="font-bold mb-4">
            What is Designious and how does it work?
          </div>
          <div>
            <p>
              Designious is the best place for designers, scrapbooking, and
              Print On Demand enthusiasts that offers access to a library of
              unique digital assets that help you create your own products. We
              offer instant access to our entire library.
            </p>
            <p>
              You can use our products on{" "}
              <a
                href="https://www.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Etsy
              </a>
              ,{" "}
              <a
                href="https://www.cafepress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cafepress
              </a>
              ,{" "}
              <a
                href="https://merch.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merch by Amazon
              </a>
              ,{" "}
              <a
                href="https://www.zazzle.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zazzle
              </a>
              ,{" "}
              <a
                href="https://printify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Printify
              </a>
              , and{" "}
              <a href="https://designious.com/2020/01/23/the-ultimate-list-of-print-on-demand-websites/">
                many others, read our blog post here
              </a>
              .
            </p>
            <p>
              You can use our designs to print them on t-shirts, mugs, pillows,
              shoes, hats, iPhone cases, totes, posters and anything you can
              think of.
            </p>
          </div>
          <div className="font-bold mb-4">
            Under what license are Designious assets covered?
          </div>
          <div>
            <p>
              No matter what plan you chose, your assets will be licensed under
              our Merch and Commercial License. This license provides flexible
              rights that give you the right to use them for commercial projects
              and more. Read more about the{" "}
              <a href="https://designious.com/license/">license here</a>.
            </p>
            <p>
              You may use the files in Digital reproduction in non Vector
              formats ( jpg, gif, png ) on POD(print on demand) websites such as
              Cafepress, Amazon Merch, Zazzle etc.
            </p>
          </div>
          <div className="font-bold mb-4">
            What can I create with the library?
          </div>
          <div>
            <p>
              You may use the files on items such as t-shirts and fabric prints,
              flags, postcards, stickers, posters, coffee mugs, calendars or the
              like for resale with no limitations regarding the number of copies
              or print run.
            </p>
            <p>
              You can use our library also for logos, infographics,
              illustrations, brochures, websites, presentations and many other
              digital assets.
            </p>
          </div>
          <div className="font-bold mb-4">
            How many times can I use an asset?
          </div>
          <div>
            <p>A downloaded asset may be used as many times as you want.</p>
          </div>
          <div className="font-bold mb-4">
            Is there a limit on the number of prints per design?
          </div>
          <div>
            <p>No, you can print it as many times as you want.</p>
          </div>
          <div className="font-bold mb-4">
            Can I keep using the resources after my subscription has expired?
          </div>
          <div>
            <p>
              In the case of using our designs for Merch, the Licenses expire
              when your subscription does and you must take down any products
              you have on sale which use our designs. The Lifetime membership
              has a lifetime license for Merch.
            </p>
            <p>
              In the case of premium, non-Merch graphics, you may continue to
              use them for Commercial (but no-Merch) purposes.
            </p>
          </div>
          <div className="font-bold mb-4">
            What printing technique can I use?
          </div>
          <div>
            <p>
              You can use any printing technique you want including
              dye-sublimation, screen printing, DTG printing, heat transfer.
            </p>
          </div>
          <div className="font-bold mb-4">
            Can I cancel my subscription and get a refund of my purchase?
          </div>
          <div>
            <p>
              You can always cancel your subscription via your account, email,
              or chat with us. Within the first 14 days, if you’re not happy
              with your subscription we offer a full refund,{" "}
              <a href="https://designious.com/refund-policy/">details here</a>.
            </p>
            <p>
              If you have more questions go to our{" "}
              <a href="https://support.designious.com/">help center here</a>, or
              please reach us at{" "}
              <a href="mailto:support@designious.com">support@designious.com</a>
              , we are always happy to help.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

PricingPage.Layout = Layout;

export const getStaticProps: GetStaticProps<PricingPageProps> = async ({
  locale,
}) => {
  const plans = await getPlans();

  return {
    props: {
      plans,
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
