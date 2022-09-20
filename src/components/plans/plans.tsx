import { PlanItem } from "@components/plans/plan-item";
import Link from "@components/ui/link";
import { Plan } from "@framework/plan/get-plans";

interface Props {
  plans: Plan[];
}

const Plans = ({ plans }: Props) => {
  return (
    <div className="bg-gray-900 pt-1 mt-8 mb-8">
      <div className="mt-8 pb-8 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-10">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {plans.map((plan) => (
                <PlanItem plan={plan} key={plan.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="italic text-center mb-4">
          * VAT & local taxes may apply. All prices in USD.
        </div>
        <div className="text-center">
          Need a more personalized solution?{" "}
          <Link href="/contacts">Contact us</Link> and we’ll find the perfect
          plan for you.
        </div>
      </div>
    </div>
  );
};

export default Plans;
