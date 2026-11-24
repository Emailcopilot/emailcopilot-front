import BillingFaqList, {
  BillingFaqHeader,
} from "@/components/ui/billing/BillingFaqList";

export const metadata = {
  title: "Billing FAQ",
};

export default function BillingFaqPage() {
  return (
    <div className="p-5 w-full max-w-6xl mx-auto">
      <BillingFaqHeader />
      <BillingFaqList />
    </div>
  );
}
