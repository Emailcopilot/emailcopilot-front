"use client";

import { Fragment, useEffect, type ReactNode } from "react";
import {
  CheckCircle2,
  Loader2,
  Mail,
  Rocket,
  TriangleAlert,
  X,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

/** Puts React nodes (e.g. bold names) into a translated "{key}" sentence. */
function rich(text: string, nodes: Record<string, ReactNode>) {
  return text.split(/(\{\w+\})/).map((part, i) => {
    const key = part.match(/^\{(\w+)\}$/)?.[1];
    return key && key in nodes ? (
      <Fragment key={i}>{nodes[key]}</Fragment>
    ) : (
      part
    );
  });
}

interface TestEmailGateModalProps {
  open: boolean;
  sending: boolean;
  sent: boolean;
  sentTo?: string | null;
  /** Who the copilot will email, e.g. "1,200 companies" or the audience name. */
  audienceLabel?: string | null;
  /** Editing a live copilot: wording says "re-launch". */
  relaunch?: boolean;
  onSend: () => void;
  onLaunch: () => void;
  onCancel: () => void;
}

/**
 * Pre-launch gate, shown when no test email was sent yet: recommends a test
 * first, but the user can still launch anyway.
 */
export default function TestEmailGateModal({
  open,
  sending,
  sent,
  sentTo,
  audienceLabel,
  relaunch = false,
  onSend,
  onLaunch,
  onCancel,
}: TestEmailGateModalProps) {
  const { t } = useI18n();
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !sending) onCancel();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, sending, onCancel]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={() => !sending && onCancel()}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="test-email-gate-title"
        className="fixed left-1/2 top-1/2 z-120 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        {sent ? (
          <>
            <div className="px-6 pt-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={18} />
                </span>
                <h2
                  id="test-email-gate-title"
                  className="text-lg font-bold text-gray-900"
                >
                  {t("Test email request accepted")}
                </h2>
              </div>

              <p className="mt-3 text-sm text-gray-500">
                {rich(
                  t(
                    relaunch
                      ? "Check {inbox} and make sure everything looks right. When you're happy with it, re-launch your copilot."
                      : "Check {inbox} and make sure everything looks right. When you're happy with it, launch your copilot.",
                  ),
                  {
                    inbox: (
                      <span className="font-medium text-gray-900">
                        {sentTo || t("your connected inbox")}
                      </span>
                    ),
                  },
                )}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-6">
              <button
                type="button"
                onClick={onCancel}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                {t("Not now")}
              </button>
              <button
                type="button"
                onClick={onLaunch}
                className="flex items-center gap-2 rounded-lg btn-cta border border-transparent px-4 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                <Rocket size={14} />{" "}
                {relaunch ? t("Re-launch copilot") : t("Launch copilot")}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="px-6 pt-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <TriangleAlert size={18} />
                </span>
                <h2
                  id="test-email-gate-title"
                  className="text-lg font-bold text-gray-900"
                >
                  {relaunch
                    ? t("Re-launch without testing?")
                    : t("Launch without testing?")}
                </h2>
                <button
                  type="button"
                  onClick={onCancel}
                  disabled={sending}
                  aria-label={t("Close")}
                  className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-3 text-sm text-gray-500">
                {rich(
                  t(
                    relaunch
                      ? "This copilot will start emailing {audience} again from {sender}. You haven't read the email yourself yet."
                      : "This copilot will start emailing {audience} from {sender}. You haven't read the email yourself yet.",
                  ),
                  {
                    audience: (
                      <span className="font-medium text-gray-900">
                        {audienceLabel || t("your target audience")}
                      </span>
                    ),
                    sender: (
                      <span className="font-medium text-gray-900">
                        {sentTo || t("your email account")}
                      </span>
                    ),
                  },
                )}
              </p>

              <div className="mt-4 flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                <p className="text-xs leading-relaxed text-emerald-700">
                  {t(
                    "A test takes about a minute and reaches nobody but you. Test emails don't count toward your monthly limit.",
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-6 py-6">
              <button
                type="button"
                onClick={onLaunch}
                disabled={sending}
                className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:opacity-50"
              >
                {relaunch ? t("Re-launch anyway") : t("Launch anyway")}
              </button>
              <button
                type="button"
                onClick={(event) => { if (event.detail <= 1) onSend(); }}
                disabled={sending}
                className="flex items-center gap-2 rounded-lg btn-cta border border-transparent px-4 py-2.5 text-sm font-medium text-white transition-colors disabled:opacity-50"
              >
                {sending ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Mail size={14} />
                )}
                {sending ? t("Sending...") : t("Send a test first")}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
