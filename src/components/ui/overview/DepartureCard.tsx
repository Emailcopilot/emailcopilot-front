import Link from "next/link";
import { useLeadStore } from "@/store/leadStore";
import { formatDateTime } from "@/lib/helpers";
import type { Lead } from "@/lib/types";
import NoData from "./NoData";
import { useI18n } from "@/lib/i18n";
import LeadStatus from "../departure/LeadStatus";
import { getHiddenLeadIds } from "../departure/LeadMenu";

export default function DepartureCard({
  leads: demoLeads,
}: {
  leads?: Lead[];
}) {
  const { t } = useI18n();
  const { leads: storeLeads } = useLeadStore();
  // Leads the user removed from the Departure overview stay hidden here too.
  const hidden = getHiddenLeadIds();
  const leads = demoLeads
    ? demoLeads
    : storeLeads.filter((lead) => !hidden.has(lead.id));

  return (
    <div
      data-tour="tour-dash-departure-card"
      className="bg-white border border-gray-200 rounded-lg p-5  w-full "
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Departure</h2>
        {leads.length > 0 && (
          <Link
            href="/dashboard/departure"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {t("View all")}
          </Link>
        )}
      </div>
      {leads.length === 0 ? (
        <NoData title={t("No departure found")} />
      ) : (
        <table className="w-full">
          <tbody>
            {leads.slice(0, 3).map((item) => (
              <tr key={item.id}>
                <td className="py-3 pr-3 text-sm font-semibold text-gray-900 max-w-0 w-full truncate">
                  {item.copilotName}
                </td>
                <td className="py-3 text-xs text-gray-500 text-right pr-3 whitespace-nowrap w-[1%]">
                  {formatDateTime(item.createdAt)}
                </td>
                <td className="py-3 text-right w-[1%] whitespace-nowrap">
                  <LeadStatus status={item.status || "sent"} isSmall />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
