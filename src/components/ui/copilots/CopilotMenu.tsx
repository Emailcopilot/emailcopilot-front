"use client";

import { useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import {
  Pencil,
  Copy,
  Play,
  Pause,
  Archive,
  Trash2,
  Mail,
  Users,
} from "lucide-react";
import { Copilot } from "@/components/layout/features/copilots/CopilotTable";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { copilotsApi, flightSchedulesApi } from "@/lib/api";
import { apiErrorMessage } from "@/lib/helpers";
import {
  currentPlanId,
  emailQuota,
  higherTiers,
  isCopilotLimitError,
} from "@/lib/limits";
import { useBilling } from "@/lib/useBilling";
import { useSetupFeedbackActions } from "@/lib/SetupFeedbackProvider";
import EmailLimitDialog from "@/components/ui/limits/EmailLimitDialog";
import { useI18n } from "@/lib/i18n";

export default function CopilotMenu({
  copilot,
  onRefresh,
  onClose,
}: {
  copilot: Copilot;
  onRefresh: () => void;
  onClose?: () => void;
}) {
  const { t } = useI18n();
  const feedback = useSetupFeedbackActions();
  const [runningScrape, setRunningScrape] = useState(false);
  const [sendingTest, setSendingTest] = useState(false);
  const [showEmailLimit, setShowEmailLimit] = useState(false);
  const router = useRouter();
  const { limits, plans } = useBilling();
  const hasNoActivePlan = !!limits && !limits.hasActivePlan;
  const mailQuota = emailQuota(limits);
  const mailTiers = higherTiers(plans, currentPlanId(limits));
  const showLaunchButton =
    copilot.status !== "running" &&
    copilot.status !== "paused" &&
    copilot.status !== "archived" &&
    copilot.status !== "active" &&
    copilot.status !== "completed";
  const showPauseButton =
    copilot.status === "running" || copilot.status === "active";
  const showResumeButton = copilot.status === "paused";

  const isComplete =
    !!copilot.name?.trim() &&
    copilot.emailAccountId != null &&
    copilot.targetAudienceId != null &&
    copilot.templateId != null &&
    copilot.flightScheduleId != null;

  const noAccount = copilot.emailAccountId == null;
  const noTemplate = copilot.templateId == null;
  const canTestEmail = !noAccount && !noTemplate;
  const missingText =
    noAccount && noTemplate
      ? t("Add an email account and an email template before sending a test email")
      : noAccount
        ? t("Add an email account before sending a test email")
        : t("Add an email template before sending a test email");
  const testEmailTooltip = canTestEmail
    ? t("Send a test email to your connected account")
    : missingText;

  async function handleTestEmail(event?: MouseEvent<HTMLButtonElement>) {
    if (sendingTest || feedback.isBusy() || (event?.detail ?? 0) > 1) return;
    if (!canTestEmail) {
      toast.error(`${missingText}.`);
      return;
    }
    try {
      setSendingTest(true);
      await feedback.testEmail(() => copilot.id, () => {
        toast.success(t("Test email request accepted. Check your connected inbox."));
      }, async () => {
        if (copilot.flightScheduleId == null) return null;
        // Read the saved schedule through the existing API; no backend changes.
        try {
          const { data } = await flightSchedulesApi.getById(copilot.flightScheduleId);
          if (!data) throw new Error("Missing schedule");
          return data;
        }
        catch { throw new Error("Unable to check sending hours. Please try again before sending a test email."); }
      });
    } catch (error) {
      toast.error(
        apiErrorMessage(error, t("Failed to send test email. Please try again.")),
      );
    } finally {
      setSendingTest(false);
    }
  }

  async function toggleStatus(next: "active" | "paused") {
    if (next === "active" && !isComplete) return;
    if (next === "active" && hasNoActivePlan) {
      router.push("/dashboard/billing?required=plan");
      return;
    }
    if (next === "active" && mailQuota?.atLimit) {
      setShowEmailLimit(true);
      return;
    }
    try {
      await copilotsApi.updateStatus(copilot.id, next);
      onRefresh();
      onClose?.();
    } catch (error) {
      toast.error(apiErrorMessage(error, t("Failed to update status.")));
    }
  }

  async function handleRunScrape() {
    if (!isComplete || feedback.isBusy()) return;
    if (hasNoActivePlan) {
      router.push("/dashboard/billing?required=plan");
      return;
    }
    if (mailQuota?.atLimit) {
      setShowEmailLimit(true);
      return;
    }
    try {
      setRunningScrape(true);
      await feedback.launch(async () => {
        await copilotsApi.run(copilot.id);
        return copilot.id;
      }, () => {
        toast.success(t("Copilot launch request accepted."));
        onRefresh();
        onClose?.();
      });
    } catch (error) {
      toast.error(apiErrorMessage(error, t("Failed to launch. Please try again.")));
    } finally {
      setRunningScrape(false);
    }
  }

  async function handleArchive() {
    if (!confirm(t("Archive this copilot?"))) return;
    try {
      await copilotsApi.updateStatus(copilot.id, "archived");
      onRefresh();
      onClose?.();
    } catch {
      toast.error(t("Failed to archive."));
    }
  }

  async function handleDelete() {
    if (!confirm(t("Permanently delete this copilot? This cannot be undone.")))
      return;
    try {
      await copilotsApi.delete(copilot.id);
      onRefresh();
      onClose?.();
    } catch {
      toast.error(t("Failed to delete."));
    }
  }

  function handleDuplicate() {
    if (hasNoActivePlan) {
      router.push("/dashboard/billing?required=plan");
      return;
    }
    if (
      !confirm(
        t('Duplicate "{name}"? This will create a new draft copy.', {
          name: copilot.name ?? "",
        }),
      )
    )
      return;
    copilotsApi
      .duplicate(copilot.id)
      .then(() => {
        onRefresh();
        toast.success(t("Copilot duplicated."));
      })
      .catch((error) => {
        // The backend enforces the copilot allowance on duplicate too.
        if (isCopilotLimitError(error)) {
          router.push("/dashboard/copilots?limit=copilots");
          return;
        }
        toast.error(apiErrorMessage(error, t("Failed to duplicate.")));
      })
      .finally(() => {
        onClose?.();
      });
  }

  return (
    <>
      <div className="fixed inset-0 z-10" onClick={() => onClose?.()} />
      <div className="absolute right-0 top-0 bg-white border border-gray-200 rounded-xl shadow-lg z-20 w-44 py-1 overflow-hidden">
        <Link
          href={`/dashboard/copilots/new?edit=${copilot.id}`}
          onClick={() => onClose?.()}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Pencil size={13} /> {t("Edit")}
        </Link>
        <button
          onClick={handleDuplicate}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Copy size={13} /> {t("Duplicate")}
        </button>
        <Link
          href={`/dashboard/departure?copilotId=${copilot.id}&name=${encodeURIComponent(copilot.name ?? "")}`}
          onClick={() => onClose?.()}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Users size={13} /> Departure
        </Link>
        <span className="block" title={testEmailTooltip}>
          <button
            onClick={handleTestEmail}
            aria-disabled={!canTestEmail || sendingTest}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors aria-disabled:opacity-50 aria-disabled:cursor-not-allowed"
          >
            <Mail size={13} className={sendingTest ? "animate-pulse" : ""} />
            {sendingTest ? t("Sending...") : t("Send Test Email")}
          </button>
        </span>
        {showLaunchButton && (
          <span
            className="block"
            title={
              isComplete
                ? undefined
                : t("Complete all setup steps before launching")
            }
          >
            <button
              onClick={handleRunScrape}
              disabled={runningScrape || !isComplete}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play
                size={13}
                className={runningScrape ? "animate-pulse" : ""}
              />
              {runningScrape ? t("Launching...") : t("Launch")}
            </button>
          </span>
        )}
        {showPauseButton ? (
          <button
            onClick={() => toggleStatus("paused")}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Pause size={13} /> {t("Pause")}
          </button>
        ) : showResumeButton ? (
          <span
            className="block"
            title={
              isComplete
                ? undefined
                : t("Complete all setup steps before resuming")
            }
          >
            <button
              onClick={() => toggleStatus("active")}
              disabled={!isComplete}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play size={13} /> {t("Resume")}
            </button>
          </span>
        ) : null}
        {copilot.status !== "archived" && (
          <button
            onClick={handleArchive}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Archive size={13} /> {t("Archive")}
          </button>
        )}
        <div className="border-t border-gray-100 my-1" />
        <button
          onClick={handleDelete}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
        >
          <Trash2 size={13} /> {t("Delete")}
        </button>
      </div>

      {showEmailLimit &&
        createPortal(
          <EmailLimitDialog
            open
            currentPlanId={currentPlanId(limits)}
            used={mailQuota?.used ?? 0}
            max={mailQuota?.max ?? 0}
            resetAt={mailQuota?.resetAt ?? null}
            tiers={mailTiers}
            onClose={() => setShowEmailLimit(false)}
          />,
          document.body,
        )}
    </>
  );
}
