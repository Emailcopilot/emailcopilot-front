import React from "react";
import { Copilot, OverallStatus } from "./CopilotTable";
import CopilotCard from "@/components/ui/copilots/CopilotCard";
import { useI18n } from "@/lib/i18n";

export interface CardContent {
  badgeLabel: string;
  subtitle: string;
  buttonLabel: string;
  buttonEnabled: boolean;
}

/* ------------------------------------------------------------------ */
/* List                                                                 */
/* ------------------------------------------------------------------ */

export interface CopilotCardsListProps {
  copilots: Copilot[];
  computeStatus?: (copilot: Copilot) => OverallStatus;
  computeCardContent?: (copilot: Copilot, status: OverallStatus) => CardContent;
  onTakeOff?: (copilot: Copilot) => void;
  /** Called when menu actions require a refresh (e.g., delete, archive, status change). */
  onRefresh?: () => void;
  readOnly?: boolean;
  className?: string;
}

function CopilotCardsList({
  copilots = [],

  onTakeOff,
  onRefresh,
  readOnly = false,
  className = "",
}: CopilotCardsListProps) {
  const { t } = useI18n();
  const [menuCopilotId, setMenuCopilotId] = React.useState<number | null>(null);
  if (!copilots || copilots.length === 0) {
    return (
      <div className="w-full rounded-lg border border-gray-100 bg-white">
        <div className="py-16 text-center text-sm text-gray-400">
          {t("No copilots yet.")}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid  grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
    >
      {copilots.map((copilot) => (
        <CopilotCard
          key={copilot.id}
          copilot={copilot}
          onTakeOff={onTakeOff}
          onActionsClick={() =>
            setMenuCopilotId(menuCopilotId === copilot.id ? null : copilot.id)
          }
          showMenu={menuCopilotId === copilot.id}
          onMenuClose={() => setMenuCopilotId(null)}
          onRefresh={onRefresh || (() => {})}
          readOnly={readOnly}
        />
      ))}
    </div>
  );
}

export default CopilotCardsList;
