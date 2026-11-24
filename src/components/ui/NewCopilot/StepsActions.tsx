import { ArrowRight, Rocket } from "lucide-react";
import { useState } from "react";
import { useCopilotStore } from "@/store/copilotStore";
import { useI18n } from "@/lib/i18n";
import { useDemoMode } from "@/lib/demo/demo-mode";
import { toast } from "sonner";

function StepsActions({
  canContinue,
  onPress,
  isLoading = false,
  inline = false,
}: {
  canContinue: boolean;
  isLoading?: boolean;
  inline?: boolean;
  onPress: () => void | Promise<void>;
}) {
  const { mode, editingLive, setRelaunchPending } = useCopilotStore();
  const [relaunching, setRelaunching] = useState(false);
  const { t } = useI18n();
  const { isDemo } = useDemoMode();
  const showRelaunch = mode === "edit" && editingLive;

  // Saves the current step exactly like "Save & Continue"; the store turns
  // the step change at the end of that save into a re-launch.
  const handleRelaunch = async () => {
    if (!canContinue || isLoading || relaunching) return;
    if (isDemo) {
      toast.info(t("Demo mode is read only. Create your own item to start."));
      return;
    }
    setRelaunching(true);
    setRelaunchPending(true);
    try {
      await onPress();
    } finally {
      // Save failed or was refused → nothing consumed the flag; clear it so
      // a later "Save & Continue" just moves on.
      setRelaunchPending(false);
      setRelaunching(false);
    }
  };

  return (
    <div
      className={
        inline
          ? "mt-4 flex justify-end w-full"
          : "pt-5 flex justify-end w-full border-t border-gray-200 mt-12 mb-4"
      }
    >
      {showRelaunch && (
        <button
          type="button"
          onClick={handleRelaunch}
          disabled={!canContinue || isLoading || relaunching}
          className="mr-3 border border-primary text-primary bg-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Rocket size={15} />
          {relaunching ? t("Re-launching...") : t("Re-launch Copilot")}
        </button>
      )}
      <button
        type="button"
        data-tour={inline ? undefined : "tour-steps-continue"}
        onClick={() => {
          if (!canContinue) return;
          onPress();
        }}
        disabled={!canContinue || isLoading}
        className="btn-cta border border-transparent text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center">
            <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
            {t("Saving...")}
          </span>
        ) : (
          <>
            {t("Save & Continue")} <ArrowRight size={15} />
          </>
        )}
      </button>
    </div>
  );
}

export default StepsActions;
