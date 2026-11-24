"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { SETUP_FEEDBACK_VERSION, type SetupFeedbackPayload, type FeedbackSubmissionResult, type FeedbackState } from "@/lib/setup-feedback";
import { useI18n } from "@/lib/i18n";

export type SubmitSetupFeedback = (payload: SetupFeedbackPayload, submissionId: string) => Promise<FeedbackSubmissionResult>;

interface SetupFeedbackDialogProps {
  submit: SubmitSetupFeedback;
  onDismiss: () => void;
  onSubmitted: (state: FeedbackState) => void;
  closing: boolean;
  dismissError: string | null;
  preview?: boolean;
}

export default function SetupFeedbackDialog({ submit, onDismiss, onSubmitted, closing, dismissError, preview = false }: SetupFeedbackDialogProps) {
  const [rating, setRating] = useState<number | null>(null);
  const { t } = useI18n();
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sendingRef = useRef(false);
  const submissionId = useRef<string | null>(null);
  const submittedPayload = useRef<string | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  const send = async (event: FormEvent) => {
    event.preventDefault();
    if (rating === null || sendingRef.current || accepted || closing) return;
    if (preview) {
      window.alert(t("Feedback submission is not implemented yet."));
      onDismiss();
      return;
    }
    sendingRef.current = true;
    setSending(true);
    setError(null);
    try {
      const payload: SetupFeedbackPayload = {
        version: SETUP_FEEDBACK_VERSION,
        rating,
        ...(comment.trim() ? { comment: comment.trim() } : {}),
      };
      const serialized = JSON.stringify(payload);
      if (submittedPayload.current !== serialized) {
        submissionId.current = crypto.randomUUID();
        submittedPayload.current = serialized;
      }
      const result = await submit(payload, submissionId.current!);
      if (result.status < 200 || result.status >= 300 || !result.state.submittedAt) throw new Error("Feedback was not saved");
      if (!mounted.current) return;
      onSubmitted(result.state);
      setAccepted(true);
    } catch {
      if (mounted.current) setError(t("We couldn’t send your feedback. Please try again."));
    } finally {
      sendingRef.current = false;
      if (mounted.current) setSending(false);
    }
  };

  if (accepted) {
    return (
      <ConfirmDialog
        key="thanks"
        open
        title={t("Thanks for your feedback")}
        description={t("Your feedback helps us improve copilot setup.")}
        confirmLabel={t("Done")}
        cancelLabel={t("Close")}
        onConfirm={onDismiss}
        onCancel={onDismiss}
      />
    );
  }

  return (
    <ConfirmDialog
      key="form"
      open
      title={t("How easy was it to set up your copilot?")}
      description={t("Tell us what worked and what we can improve.")}
      confirmLabel={sending ? t("Sending…") : t("Send feedback")}
      cancelLabel={
        closing
          ? preview
            ? t("Closing…")
            : t("Saving reminder…")
          : t("Not now")
      }
      loading={sending || closing}
      confirmDisabled={rating === null}
      onConfirm={() => formRef.current?.requestSubmit()}
      onCancel={onDismiss}
    >
      <form ref={formRef} onSubmit={send}>
        <fieldset disabled={sending || closing} className="space-y-3">
          <legend className="text-sm font-semibold text-gray-900">{t("Your rating")} <span className="text-gray-500">{t("(required)")}</span></legend>
          <div className="mt-3 flex justify-between gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="setup-rating"
                  value={value}
                  required
                  checked={rating === value}
                  onChange={() => setRating(value)}
                  className="peer sr-only"
                  aria-label={t("{value} out of 5", { value })}
                />
                <span className="flex h-11 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 transition-colors hover:bg-primary/5 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2">
                  {value}
                </span>
              </label>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500"><span>{t("Very difficult")}</span><span>{t("Very easy")}</span></div>
          <label htmlFor="setup-feedback-comment" className="block pt-2 text-sm font-semibold text-gray-900">
            {t("Comment")} <span className="font-normal text-gray-500">{t("(optional)")}</span>
          </label>
          <textarea
            id="setup-feedback-comment"
            rows={3}
            maxLength={2000}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder={t("What could we make easier?")}
            className="w-full resize-y rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400"
          />
        </fieldset>
        {error && <p role="alert" className="mt-3 text-sm text-error">{error}</p>}
        {dismissError && <p role="alert" className="mt-3 text-sm text-error">{t(dismissError)}</p>}
      </form>
    </ConfirmDialog>
  );
}
