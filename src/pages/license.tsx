import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Container from "@components/ui/container";
const licenseImage =
  "/assets/images/license/designious-tshirt-design-1153.jpeg";
const licenseImage2 = "/assets/images/license/Shoes-08-preview-580x580.png";

export default function LicensePage() {
  return (
    <>
      <div className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32">
        <Container>
          <h3 className="font-bold text-3xl mb-4">License Agreement</h3>
          <p>
            This license grants you the User, and User accepts, a non-exclusive,
            non-transferable right and sub-license to use those Files for which
            User has paid any applicable fee, all in accordance with the license
            terms, for the duration of your subscription and membership status.
          </p>
          <p>
            Your use of the Files for the Personal License is limited to 1(one)
            user.
          </p>
          <p>
            Your use of the Files for the Business License is limited to 5(five)
            users.
          </p>
          <p>All the files are under the royalty-free license.</p>
          <p>
            You may use the Template Files like t-shirt designs and
            illustrations as they are or you may incorporate the Files into
            another artwork you are creating.
          </p>
          <p>You may edit the Template Files and create new artwork from it.</p>
          <p>
            You may not use single elements Files alone, you need to incorporate
            the single elements Files into another artwork you are creating.
            Single elements are included in our vector packs, svg/png and other
            categories.
          </p>
          <p>
            You may use the Files in an artwork that you are creating for your
            own purposes or for your client who has asked you to create it.
          </p>
          <p>
            <strong>Example:</strong>
          </p>
          <div className="my-4">This is a template/composition:</div>
          <img
            style={{ width: 300 }}
            src={licenseImage}
            alt="My spirit animal"
          />
          <div className="my-4">This is a single element:</div>
          <img style={{ width: 300 }} src={licenseImage2} alt="Shoe" />
          <h3 className="font-bold text-3xl mb-4">License Comparison</h3>
          <table className="w-full text-heading text-sm lg:text-base mb-4">
            <thead>
              <tr>
                <th className="bg-gray-150 p-4 text-start first:rounded-ts-md w-1/3">
                  TYPES OF PERMITTED USAGE
                </th>
                <th className="bg-gray-150 p-4 text-start last:rounded-te-md w-1/3">
                  DESIGNIOUS LICENSE
                </th>
                <th className="bg-gray-150 p-4 text-start last:rounded-te-md w-1/3">
                  OTHERS LICENSE
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr className="odd:bg-gray-150">
                <td className="p-4">
                  Advertisement designs for online, newspapers, magazines, and
                  or other printed materials.
                </td>
                <td className="p-4">
                  Unlimited Prints (Included in the price)
                </td>
                <td className="p-4">
                  No more than 50,000 print or digital documents or pay 7x costs
                  of asset
                </td>
              </tr>
              <tr className="odd:bg-gray-150">
                <td className="p-4">
                  Printed promotional projects including packaging, catalogs,
                  brochures, promotional seasonal greeting/postcards and
                  promotional posters. Promotional only, not items for resale.
                </td>
                <td className="p-4">
                  Unlimited Prints (Included in the price)
                </td>
                <td className="p-4">
                  No more than 50,000 print or digital documents or pay 7x costs
                  of asset
                </td>
              </tr>
              <tr className="odd:bg-gray-150">
                <td className="p-4">
                  In-house multimedia, interactive and video presentations.
                </td>
                <td className="p-4">
                  Unlimited viewers (Included in the price)
                </td>
                <td className="p-4">
                  Usage of product with visibility of more than 500,000 viewers.
                  7x costs of asset
                </td>
              </tr>
              <tr className="odd:bg-gray-150">
                <td className="p-4">
                  Designs used for books, book covers, CD & DVDs, commercial
                  films, movies or theatrical presentations.
                </td>
                <td className="p-4">
                  Unlimited Usage. (Included in the price)
                </td>
                <td className="p-4">
                  Usage of image in no more than 50,000 print or digital
                  documents. Unlimited Usage is 7x costs of asset
                </td>
              </tr>
              <tr className="odd:bg-gray-150">
                <td className="p-4">
                  Used in editorial mediums such as printed magazines,
                  newspapers, editorials and newsletters.
                </td>
                <td className="p-4">
                  Unlimited Usage. (Included in the price)
                </td>
                <td className="p-4">
                  Usage of image in no more than 50,000 print or digital
                  documents. Unlimited Usage is 7x costs of asset
                </td>
              </tr>
              <tr className="odd:bg-gray-150">
                <td className="p-4">
                  Creating products for resale such as prints, posters,
                  calendars, stationery, clothing, T-shirts, video games, etc.
                </td>
                <td className="p-4">
                  Allow for unlimited sales (digital or physical) (Included in
                  the price)
                </td>
                <td className="p-4">
                  Allow for up to 1,000 sales (digital or physical) or allow for
                  unlimited sales (digital or physical). 7x cost the price
                </td>
              </tr>
              <tr className="odd:bg-gray-150">
                <td className="p-4">
                  Electronic design templates for resale such as website
                  templates, application templates, business cards, brochures
                  and greeting cards.
                </td>
                <td className="p-4">Yes (Included in the price) </td>
                <td className="p-4">
                  Requires Digital Items for Resale extended license. 25x the
                  price
                </td>
              </tr>
              <tr className="odd:bg-gray-150">
                <td className="p-4">
                  Use in a web-based or desktop design application such as a
                  “Canva” app.
                </td>
                <td className="p-4">Yes, via our API</td>
                <td className="p-4">
                  Requires Digital Items for Resale extended license. 25x the
                  price
                </td>
              </tr>
            </tfoot>
          </table>
          <h3 className="font-bold text-3xl mb-4">
            1) Permitted License Uses:
          </h3>
          <p>
            <strong>a)</strong> You may use the files in advertising, marketing
            and design, promotional graphics, broadcast TV, film or TVC, film
            commercials, flyers, brochures and catalogs – digital or hard copy.
            Website design. Promotional postcards, greeting cards, and
            calendars. Books and book covers, product packaging, editorial in
            magazines and newspapers, general editorial and newsletters. Ebooks,
            screen savers, and digital banner advertising. Posters and
            billboards. Signwriting, logo, and branding design. Web and on-line
            digital publications. Software, gaming and computer GUI design, i.e.
            iPhone apps.
          </p>
          <p>
            <strong>b)</strong> You may reproduce the files:
          </p>
          <p>1. in a printed format or;</p>
          <p>
            2.&nbsp; in an electronic document such as a PowerPoint presentation
            or an ebook or;
          </p>
          <p>3. as part of software you create or;</p>
          <p>4. in video production;</p>
          <p>
            <strong>c)</strong> You may use the files on items (digital or
            hardcopy) for resale such as t-shirts and fabric prints, flags,
            postcards, stickers, posters, coffee mugs, calendars or the like for
            resale with no limitations regarding the number of copies or print
            run.
          </p>
          <p>
            <strong>d</strong>)&nbsp; You may use the files in Digital
            reproduction in non Vector formats ( jpg, gif, bmp ) on POD(print on
            demand) websites such as Amazon Merch, Cafepress, Zazzle, or Digital
            Scrapbooking kits.
          </p>
          <p>
            <strong>e</strong>) You may use the files in commercial software
            applications or GUI design to be sold as templates.
          </p>
          <p>
            You may use the Image in website templates, document templates,
            wallpapers, screensavers, e-cards or similar products for resale
            with no limitations regarding the number of copies.
          </p>
          <h3 className="font-bold text-3xl my-4">
            2) Not permitted License Uses:
          </h3>
          <p>
            <strong>a)</strong> All license agreements prohibit the resale or
            redistribution of any part or element of the content as a vector, or
            in any format that will allow a third party access to the file in
            digital vector format i.e EPS, Ai, Flash, SVG and the like.
          </p>
          <p>
            <strong>b)</strong> &nbsp;Only you the purchaser are licensed to use
            the files, although you may transfer files containing content to
            your clients, printers, or ISP for the purpose of reproduction for
            permitted uses only, provided that such parties shall have no
            further or additional rights to use the content and cannot access or
            extract it from any file you provide. You may make ONE copy of the
            content for back-up purposes.
          </p>
          <p>
            <strong>c)</strong> Using our vector art individual elements in
            online/offline design creators for others to create designs or
            modify them is not permitted. Ex. the usage of our vector elements
            in online t-shirt creators where users can create their own
            composition. Except if you are using our{" "}
            <a href="https://designious.com/developers-api/">
              design library API
            </a>{" "}
            or related software we provide. Please contact us for this type of
            licensing.
          </p>
          <p>
            <strong>d)</strong> &nbsp;You are not allowed to use the files in
            any way that:
          </p>
          <ul className="list-disc list-inside my-4">
            <li>
              Violates any applicable laws, including intellectual property
              rights of others;
            </li>
            <li>Spreads malware (e.g., viruses, worms, Trojan horses);</li>
            <li>Is ethnically, racially, or otherwise objectionable;</li>
            <li>
              Is sexually explicit, libelous, harassing, defamatory, abusive,
              profane, vulgar, threatening, hateful, obscene;
            </li>
            <li>Spreads spam or other illegal messaging; and</li>
            <li>
              Copies, distributes, rents, resells, modifies, compromises,
              damages, disables, impairs, and overburdens the Website.
            </li>
          </ul>
          <h3 className="font-bold text-3xl mb-4">3) Termination</h3>
          <p>
            The license rights granted under this Agreement will immediately and
            automatically terminate without notice if you fail to comply with
            any terms or conditions of this License.
          </p>
          <p>
            Any <a href="https://designious.com/refund-policy/">refund</a>{" "}
            automatically cancels your rights and license to use our files in
            any way or form.
          </p>
          <p>
            The files must not be used in any obscene, immoral, infringing,
            defamatory nature, be involved in any material that may bring any
            person or property reflected or described in the content into
            disrepute or cause any legal action.
          </p>
          <p>
            All files&nbsp; MAY NOT BE sub-licensed, re-sold, rented, lent,
            assigned, gifted, transferred, or redistributed.
          </p>
          <p>
            Designious.com may terminate this License Agreement at any time if
            User breaches any of the terms of this or any other agreement with
            Designious.com, in which case User must immediately: cease using the
            License Asset; delete or destroy any copies; and, if requested,
            confirm to Designious.com in writing that the User has complied with
            these requirements. If User uses the Licensed Asset on a social
            media platform or other third party website and the platform or
            website uses (or announces that it plans to use) the Licensed Asset
            for its own purpose or in a way that is contrary to this License
            Agreement, the rights granted for such use shall immediately
            terminate, and in that event, upon Designious.com request, User
            agrees to remove any content from such platform or website.
          </p>
          <p>
            If there is any doubt as to a permitted use, please contact
            info@designious.com.
          </p>
          <p>
            We reserve the right to amend or modify this license agreement at
            any time and you the user, and user accepts any changes made if
            continue to use the website and it’s files. Latest update 04 January
            2022.
          </p>
        </Container>
      </div>
    </>
  );
}

LicensePage.Layout = Layout;

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
