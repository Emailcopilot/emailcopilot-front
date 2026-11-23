"use client";

import { useEffect } from "react";
import {
  CheckCircle2,
  Loader2,
  Mail,
  Rocket,
  TriangleAlert,
  X,
} from "lucide-react";

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
                  Test email sent
                </h2>
              </div>

              <p className="mt-3 text-sm text-gray-500">
                Check{" "}
                <span className="font-medium text-gray-900">
                  {sentTo || "your connected inbox"}
                </span>{" "}
                and make sure everything looks right. When you&apos;re happy
                with it, {relaunch ? "re-launch" : "launch"} your copilot.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-6">
              <button
                type="button"
                onClick={onCancel}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Not now
              </button>
              <button
                type="button"
                onClick={onLaunch}
                className="flex items-center gap-2 rounded-lg btn-cta border border-transparent px-4 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                <Rocket size={14} />{" "}
                {relaunch ? "Re-launch copilot" : "Launch copilot"}
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
                  {relaunch ? "Re-launch" : "Launch"} without testing?
                </h2>
                <button
                  type="button"
                  onClick={onCancel}
                  disabled={sending}
                  aria-label="Close"
                  className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-3 text-sm text-gray-500">
                This copilot will {relaunch ? "start emailing again" : "start emailing"}
                {audienceLabel ? (
                  <>
                    {" "}
                    <span className="font-medium text-gray-900">
                      {audienceLabel}
                    </span>
                  </>
                ) : null}
                {sentTo ? (
                  <>
                    {" "}
                    from{" "}
                    <span className="font-medium text-gray-900">{sentTo}</span>
                  </>
                ) : null}
                . You haven&apos;t read the email yourself yet.
              </p>

              <div className="mt-4 flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                <p className="text-xs leading-relaxed text-emerald-700">
                  A test takes about a minute and reaches nobody but you. Test
                  emails don&apos;t count toward your monthly limit.
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
                {relaunch ? "Re-launch anyway" : "Launch anyway"}
              </button>
              <button
                type="button"
                onClick={onSend}
                disabled={sending}
                className="flex items-center gap-2 rounded-lg btn-cta border border-transparent px-4 py-2.5 text-sm font-medium text-white transition-colors disabled:opacity-50"
              >
                {sending ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Mail size={14} />
                )}
                {sending ? "Sending..." : "Send a test first"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
