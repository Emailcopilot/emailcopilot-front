import React from "react";
import { createPortal } from "react-dom";
import {
  Calendar,
  Mail,
  MoveRight,
  Send,
  Loader2,
  CheckCircle2,
  Pause,
  Archive,
  AlertCircle,
  MoreVertical,
  X,
} from "lucide-react";
import CopilotStatus from "../CopilotStatus";
import { useI18n } from "@/lib/i18n";
import {
  Copilot,
  OverallStatus,
} from "../../layout/features/copilots/CopilotTable";
import CopilotMenu from "./CopilotMenu";
import EmailLimitDialog from "@/components/ui/limits/EmailLimitDialog";
import { currentPlanId, emailQuota, higherTiers } from "@/lib/limits";
import { useBilling } from "@/lib/useBilling";
import { useRouter } from "next/navigation";
import { copilotsApi } from "@/lib/api";
import { toast } from "sonner";
import { getCopilotStatusAppearance } from "@/lib/copilot-status-appearance";

export interface CardContent {
  badgeLabel: string;
  badgeClass: string;
  icon: React.ReactNode;
  subtitle: string;
  buttonLabel: string;
  buttonEnabled: boolean;
}

export const handleCardProp = (status: string) => {
  const { badgeClass } = getCopilotStatusAppearance(status);
  switch (status.toLocaleLowerCase()) {
    case "draft":
      return {
        badgeLabel: "Ready for Take-off",
        badgeClass,
        subtitle: "Fully configured and ready to launch",
        progressBarColor: "bg-gray-200",
        buttonLabel: "Take-off",
        buttonEnabled: true,
        icon: <Send size={15} />,
      };
    case "running":
      return {
        badgeLabel: "In Flight",
        badgeClass,
        progressBarColor: "bg-sky-200",
        subtitle: "Campaign is currently running",
        buttonLabel: "Running",
        buttonEnabled: false,
        icon: <Loader2 size={15} className="animate-spin" />,
      };
    case "completed":
      return {
        badgeLabel: "Completed",
        badgeClass,
        progressBarColor: "bg-success",
        subtitle: "Campaign has finished running",
        buttonLabel: "View Details",
        buttonEnabled: true,
        icon: <CheckCircle2 size={15} />,
      };
    case "active":
      return {
        badgeLabel: "Scheduled",
        badgeClass,
        progressBarColor: "bg-primary",
        subtitle: "Campaign is currently active",
        buttonLabel: "View Details",
        buttonEnabled: true,
        icon: <Send size={15} />,
      };
    case "paused":
      return {
        badgeLabel: "Paused",
        badgeClass,
        progressBarColor: "bg-error",
        subtitle: "Campaign is currently paused",
        buttonLabel: "Resume",
        buttonEnabled: true,
        icon: <Pause size={15} />,
      };
    case "archived":
      return {
        badgeLabel: "Archived",
        badgeClass,
        progressBarColor: "bg-gray-200",
        subtitle: "Campaign is archived",
        buttonLabel: "View Details",
        buttonEnabled: true,
        icon: <Archive size={15} />,
      };
    default:
      return {
        badgeLabel: status,
        badgeClass,
        progressBarColor: "bg-gray-200",
        subtitle: "No further action available right now",
        buttonLabel: status,
        buttonEnabled: false,
        icon: <AlertCircle size={15} />,
      };
  }
};

/** "24 Nov, 14:45" (in the app language), or null when nothing was sent. */
function formatLastSent(
  date: string | null | undefined,
  locale: string,
): string | null {
  if (!date) return null;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleString(locale === "en" ? "en-GB" : locale, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* ------------------------------------------------------------------ */
/* Card                                                                 */
/* ------------------------------------------------------------------ */

export interface CopilotCardProps {
  copilot: Copilot;
  computeStatus?: (copilot: Copilot) => OverallStatus;
  computeCardContent?: (copilot: Copilot, status: OverallStatus) => CardContent;
  onTakeOff?: (copilot: Copilot) => void;
  onActionsClick: () => void;
  showMenu?: boolean;
  onMenuClose?: () => void;
  onRefresh?: () => void;
  className?: string;
}

function CopilotCard({
  copilot,

  onTakeOff,
  onActionsClick,
  showMenu = false,
  onMenuClose,
  onRefresh,
  className = "",
}: CopilotCardProps) {
  const { t, locale } = useI18n();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showEmailLimit, setShowEmailLimit] = React.useState(false);
  const { limits, plans } = useBilling();
  const mailQuota = emailQuota(limits);
  const mailTiers = higherTiers(plans, currentPlanId(limits));
  const router = useRouter();
  const handleResume = async () => {
    if (mailQuota?.atLimit) {
      setShowEmailLimit(true);
      return;
    }
    setIsLoading(true);
    try {
      await copilotsApi.run(copilot.id);

      toast.success(t("Copilot resumed successfully."));
      if (onRefresh) {
        onRefresh();
      }
    } catch (error) {
      toast.error(t("Error resuming copilot. Please try again."));
      console.error("Error resuming copilot:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionButton = (copilot: Copilot) => {
    switch (copilot.status.toLocaleLowerCase()) {
      case "paused":
        return {
          action: () => handleResume(),
          label: "Resume",
        };
      case "draft":
        return {
          action: () =>
            router.push(`/dashboard/copilots/new?edit=${copilot.id}`),
          label: "Continue setup",
        };
      default:
        return {
          action: () => router.push(`/dashboard/departure`),
          label: "View in Departure",
        };
    }
  };

  const { action, label } = handleActionButton(copilot);

  return (
    <div
      onClick={() => router.push(`/dashboard/copilots/new?edit=${copilot.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && e.target === e.currentTarget) {
          router.push(`/dashboard/copilots/new?edit=${copilot.id}`);
        }
      }}
      tabIndex={0}
      className={`flex h-full w-full flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 relative cursor-pointer focus-visible:outline-2 focus-visible:outline-primary/40 ${className}`}
    >
      {/* 1. What is it: name + status */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-col gap-1.5">
          <h3 className="truncate text-[15px] font-semibold text-gray-900">
            {copilot.name}
          </h3>
          <CopilotStatus status={copilot.status} isSmall />
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onActionsClick?.();
          }}
          aria-label={t("Copilot actions")}
          className="shrink-0 text-gray-300 transition-colors hover:text-gray-500"
        >
          {showMenu ? <X size={18} /> : <MoreVertical size={18} />}
        </button>
      </div>

      {/* 2. How is it going */}
      <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-50 px-3 py-2.5">
        <div>
          <div className="text-[11px] text-gray-400">{t("Sent")}</div>
          <div className="text-[15px] font-semibold text-gray-900">
            {(copilot.emailsSent ?? 0).toLocaleString("en-US")}
          </div>
        </div>
        <div>
          <div className="text-[11px] text-gray-400">{t("Last sent")}</div>
          <div className="mt-0.5 text-[13px] font-medium text-gray-900">
            {formatLastSent(copilot.lastRunAt, locale) ?? t("Not yet")}
          </div>
        </div>
      </div>

      {/* 3. How it's set up: who sends, and when */}
      <div className="flex flex-col gap-1.5 text-xs text-[#59637C]">
        <div className="flex min-w-0 items-center gap-1.5">
          <Mail size={14} className="shrink-0 text-gray-400" />
          <span className="truncate">
            {copilot.emailAccount?.email || t("No email account")}
          </span>
        </div>
        <div className="flex min-w-0 items-center gap-1.5">
          <Calendar size={14} className="shrink-0 text-gray-400" />
          <span className="truncate">
            {copilot.flightSchedule?.name || t("No flight schedule")}
          </span>
        </div>
      </div>

      {/* 4. What can I do */}
      <div className="mt-auto flex justify-end border-t border-gray-100 pt-2.5">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            action();
          }}
          disabled={isLoading}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-primary transition-colors hover:text-primary-hover disabled:opacity-50"
        >
          {isLoading ? t("Loading...") : t(label)}
          <MoveRight size={14} />
        </button>
      </div>
      {showMenu && (
        <div
          className="absolute right-4 top-12 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <CopilotMenu
            copilot={copilot}
            onRefresh={onRefresh || (() => {})}
            onClose={onMenuClose || (() => {})}
          />
        </div>
      )}

      {showEmailLimit &&
        createPortal(
          <div onClick={(e) => e.stopPropagation()}>
            <EmailLimitDialog
              open
              currentPlanId={currentPlanId(limits)}
              used={mailQuota?.used ?? 0}
              max={mailQuota?.max ?? 0}
              resetAt={mailQuota?.resetAt ?? null}
              tiers={mailTiers}
              onClose={() => setShowEmailLimit(false)}
            />
          </div>,
          document.body,
        )}
    </div>
  );
}

export default CopilotCard;
