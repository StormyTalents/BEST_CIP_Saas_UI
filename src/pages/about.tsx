import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import PageHeader from "@components/ui/page-header";
import { Link } from "react-scroll";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(" ").join("_");
}

export default function AboutPage() {
  return (
    <>
      <PageHeader pageHeader="About Us" />
      <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24">
        <Container>
          <div className="flex flex-col md:flex-row">
            <nav className="md:w-72 xl:w-3/12 mb-8 md:mb-0">
              <ol className="sticky md:top-16 lg:top-28 z-10">
                <li key={1}>
                  <Link
                    spy={true}
                    offset={-120}
                    smooth={true}
                    duration={500}
                    to={makeTitleToDOMId("About Designious")}
                    activeClass="text-heading font-semibold"
                    className="block cursor-pointer py-3 lg:py-3.5  text-sm lg:text-base  text-gray-700 uppercase"
                  >
                    {"0" + 0 + " " + "About Designious"}
                  </Link>
                </li>
                <li key={1}>
                  <Link
                    spy={true}
                    offset={-120}
                    smooth={true}
                    duration={500}
                    to={makeTitleToDOMId("Designious meaning")}
                    activeClass="text-heading font-semibold"
                    className="block cursor-pointer py-3 lg:py-3.5  text-sm lg:text-base  text-gray-700 uppercase"
                  >
                    {"1" + 1 + " " + "Designious meaning"}
                  </Link>
                </li>
              </ol>
            </nav>
            {/* End of section scroll spy menu */}

            <div className="md:w-9/12 md:ps-8 pt-0 lg:pt-2">
              <div id={makeTitleToDOMId("About Designious")} className="mb-10">
                <h2 className="text-lg md:text-xl lg:text-2xl text-heading font-bold mb-4">
                  About Designious
                </h2>
                <div className="text-heading text-sm leading-7 lg:text-base lg:leading-loose">
                  <p>
                    Launched in 2008 as a vector art library dedicated to
                    graphic designers Designious has evolved offering multiple
                    products and services. From vector clip art to vector
                    illustrations and store setup services for Print on Demand,
                    now counting over 30.000 items and growing.
                  </p>
                  <p>
                    Our design library is helping designers, freelancers, and
                    companies around the world to create new designs or improve
                    theirs by providing them with amazing digital assets.
                    Creatives and creators all over the world use our design
                    templates, bundles, PS brushes, and fonts to create digital
                    and physical products.
                  </p>
                  <p>———–</p>
                </div>
              </div>
              <div
                id={makeTitleToDOMId("Designious meaning")}
                className="mb-10"
              >
                <h2 className="text-lg md:text-xl lg:text-2xl text-heading font-bold mb-4">
                  Designious meaning
                </h2>
                <div className="text-heading text-sm leading-7 lg:text-base lg:leading-loose">
                  <p>
                    Definition of <em>designious</em>:
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      <em>de-sign-i-ous</em> – full of or having the qualities
                      of design.
                    </span>
                  </p>
                  <p>———–</p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      People in the print on demand industry rely on our designs
                      to generate income through their websites but also
                      different marketplaces. Our Online Designer App is used
                      daily by our users to create their own designs and make a
                      mark through design. We believe good design changes lives
                      and we try to offer the tools to create it.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Our clients are graphic designers, print on demand
                      enthusiasts, entrepreneurs but also advertising agencies
                      and apparel creators and all find our products cool to use
                      in their artwork. The products we sell here are used for
                      the web, print, and the apparel industry.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Every month we release new design assets for{" "}
                      <a href="https://designious.com/product-category/t-shirt-designs/">
                        t-shirts
                      </a>{" "}
                      and Print on Demand. We have over 3500 t-shirt designs
                      that can be edited but also that can be used right away in
                      any product.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Our{" "}
                      <a href="https://designious.com/product-category/zilla/">
                        Zilla Bundles
                      </a>{" "}
                      are an amazing resource for any graphic designer looking
                      to add to his design toolbox a great number of easy-to-use
                      assets, especially for print.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Our latest product is the{" "}
                      <a href="https://designious.com/developers-api/">
                        Designious API
                      </a>
                      , with it our users can integrate the library directly in
                      their apps or software enriching them with a growing
                      library of more than 15.000 design elements. With it,
                      their users can create anything they want from, websites
                      to videos and different printed products.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      You can use our design assets in any designs and also on
                      products on Zazzle, Etsy, Cafepress, Merch by Amazon,
                      Printify, Printful, and many others. You can print them on
                      t-shirts, mugs, pillows, shoes, hats, iPhone cases, totes,
                      posters, and anything you can think of.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Our team is a blend of talented artists with a passion for
                      design, marketers, and programmers that help the wheels
                      spin and grow the library and our community.&nbsp;
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Hear from them every month via{" "}
                      <a href="/blog/">our blog</a> where we release resources
                      for entrepreneurs, print on demand, marketing, and
                      ecommerce.
                    </span>
                  </p>
                  <div>
                    <p>
                      Please connect with us via{" "}
                      <a
                        href="https://www.twitter.com/designious"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://www.facebook.com/designious"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>{" "}
                      also don’t forget to sign up for our{" "}
                      <a href="https://designious.com/newsletter/">
                        newsletter
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              {/* End of content */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

AboutPage.Layout = Layout;

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
