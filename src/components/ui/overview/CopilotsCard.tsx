import Link from "next/link";
import CopilotStatus from "../CopilotStatus";

import { useCopilotStore } from "@/store/copilotStore";
import NoData from "./NoData";
import { useI18n } from "@/lib/i18n";
import { useRouter } from "next/navigation";
import type { Copilot } from "@/components/layout/features/copilots/CopilotTable";
import { sortCopilotsArchivedLast } from "@/lib/sort-copilots";

export default function CopilotsCard({
  copilots: demoCopilots,
}: {
  copilots?: Copilot[];
}) {
  const { t } = useI18n();
  const { copilots: storeCopilots } = useCopilotStore();
  const copilots = demoCopilots ?? storeCopilots;
  const router = useRouter();
  const visibleCopilots = (
    demoCopilots
      ? sortCopilotsArchivedLast(demoCopilots)
      : sortCopilotsArchivedLast(storeCopilots)
  ).slice(0, 3);

  return (
    <div
      data-tour="tour-dash-copilots-card"
      className="bg-white border border-gray-200 rounded-lg p-5  w-full "
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Copilots</h2>
        {copilots.length > 0 && (
          <Link
            href="/dashboard/copilots"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {t("View all")}
          </Link>
        )}
      </div>

      {copilots.length === 0 ? (
        <NoData title={t("No copilots found")} />
      ) : (
        <table className="w-full">
          <tbody>
            {visibleCopilots.map((copilot) => (
              <tr
                key={copilot.id}
                onClick={
                  demoCopilots
                    ? undefined
                    : () =>
                        router.push(
                          `/dashboard/departure?copilotId=${copilot.id}&name=${copilot.name}`,
                        )
                }
                className={demoCopilots ? "group" : "cursor-pointer group"}
              >
                <td className="py-3 text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {copilot.name}
                </td>
                <td className="py-3 text-sm font-semibold text-primary hover:text-primary/80 text-right pr-4 w-[1%] whitespace-nowrap">
                  {copilot.emailsSent}
                </td>
                <td className="py-3 text-right w-[1%] whitespace-nowrap">
                  <CopilotStatus
                    status={copilot?.status || "draft"}
                    isSmall={true}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
