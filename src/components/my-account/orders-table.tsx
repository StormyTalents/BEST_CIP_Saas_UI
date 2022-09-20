import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import Link from "@components/ui/link";
import { useWindowSize } from "@utils/use-window-size";
import { useTranslation } from "next-i18next";
import { OrderFragment, useOrdersQuery } from "@gql/generated";

const OrdersTable: React.FC = () => {
  const { width } = useWindowSize();
  const { t } = useTranslation("common");
  const { data } = useOrdersQuery();

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t("text-orders")}
      </h2>
      <motion.div
        layout
        initial="from"
        animate="to"
        exit="from"
        //@ts-ignore
        variants={fadeInTop(0.35)}
        className={`w-full flex flex-col`}
      >
        {width >= 1025 ? (
          <table>
            <thead className="text-sm lg:text-base">
              <tr>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start first:rounded-ts-md">
                  {t("text-order")}
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                  {t("text-date")}
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                  {t("text-status")}
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                  {t("text-total")}
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-end last:rounded-te-md">
                  {t("text-actions")}
                </th>
              </tr>
            </thead>
            <tbody className="text-sm lg:text-base">
              {data?.orders.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="w-full space-y-4">
            {data?.orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default OrdersTable;

const OrderCard = ({ order }: { order: OrderFragment }) => {
  const { t } = useTranslation("common");

  const {
    ordered_at,
    status,
    total,
    id,
    // -- Unused --
    // created_at,
    // id,
    // order_type,
    // payment_type,
    // tax,
    // updated_at,
    // user_id,
    // paid_at,
  } = order;

  const orderLink = `/my-account/orders/${id}`;
  return (
    <ul className="text-sm font-semibold text-heading border border-gray-300 rounded-md flex flex-col px-4 pt-5 pb-6 space-y-5">
      <li className="flex items-center justify-between">
        {t("text-order")}
        <span className="font-normal">
          <Link
            href={orderLink}
            className="underline hover:no-underline text-body"
          >
            #{id.slice(0, 6)}
          </Link>
        </span>
      </li>
      <li className="flex items-center justify-between">
        {t("text-date")}
        <span className="font-normal">
          {new Date(ordered_at).toLocaleString()}
        </span>
      </li>
      <li className="flex items-center justify-between">
        {t("text-status")}
        <span className="font-normal">{status}</span>
      </li>
      <li className="flex items-center justify-between">
        {t("text-total")}
        <span className="font-normal">${total.toFixed(2)}</span>
      </li>
      <li className="flex items-center justify-between">
        {t("text-actions")}
        <span className="font-normal">
          <Link
            href={orderLink}
            className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
          >
            {t("button-view")}
          </Link>
        </span>
      </li>
    </ul>
  );
};

const OrderRow = ({ order }: { order: OrderFragment }) => {
  const { t } = useTranslation("common");

  const {
    ordered_at,
    status,
    total,
    id,

    // -- Unused --
    // created_at,
    // order_type,
    // payment_type,
    // tax,
    // updated_at,
    // user_id,
    // paid_at,
  } = order;

  const orderLink = `/my-account/orders/${id}`;
  return (
    <tr className="border-b border-gray-300 last:border-b-0">
      <td className="px-4 py-5 text-start">
        <Link
          href={orderLink}
          className="underline hover:no-underline text-body"
        >
          #{id.slice(0, 6)}
        </Link>
      </td>
      <td className="text-start lg:text-center px-4 py-5 text-heading">
        {new Date(ordered_at).toLocaleString()}
      </td>
      <td className="text-start lg:text-center px-4 py-5 text-heading">
        {status}
      </td>
      <td className="text-start lg:text-center px-4 py-5 text-heading">
        $ {total.toFixed(2)}
      </td>
      <td className="text-end px-4 py-5 text-heading">
        <Link
          href={orderLink}
          className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
        >
          {t("button-view")}
        </Link>
      </td>
    </tr>
  );
};
