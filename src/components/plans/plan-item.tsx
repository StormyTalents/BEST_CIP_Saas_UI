import { CheckIcon } from "@heroicons/react/outline";
import Link from "@components/ui/link";
import { Plan } from "@framework/plan/get-plans";
import { features } from "@components/plans/dummy-data";
type PlanItemProps = {
  plan: Plan;
};
export const PlanItem = ({ plan }: PlanItemProps) => {
  const {
    "interval-count": intervalCount,
    interval,
    amount,
    currency,
    name,
  } = plan.attributes;

  const amountInDollors = (amount / 100).toFixed(2);
  // TODO: should use slug instead of name
  const slug = name;
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div>
          <h3
            className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
            id="tier-standard"
          >
            {name}
          </h3>
        </div>
        <div className="mt-4 flex items-baseline text-6xl font-extrabold">
          {currency.toUpperCase()} ${amountInDollors} / {intervalCount}{" "}
          {interval}
        </div>
        <p className="mt-5 text-lg">TODO: description of the plan here</p>
      </div>
      <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
        <ul role="list" className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <div className="flex-shrink-0">
                <CheckIcon
                  className="h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
              </div>
              <p className="ml-3 text-base text-gray-700">{feature.title}</p>
            </li>
          ))}
        </ul>
        <div className="rounded-md shadow">
          <Link
            href={`/subscribe/${slug}`}
            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
            aria-describedby="tier-standard"
          >
            Sign Up & Download
          </Link>
        </div>
      </div>
    </div>
  );
};
