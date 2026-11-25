import React from "react";
import { Shield } from "lucide-react";
import { useCopilotStore } from "../../../../store/copilotStore";
import { useI18n } from "@/lib/i18n";

function CopilotSummary({ draftId }: { draftId?: string }) {
  const { copilotData, mode, editingLive } = useCopilotStore();
  const isRelaunch = mode === "edit" && editingLive;
  const { t } = useI18n();
  return (
    <div data-tour="tour-step1-summary" className="w-full ">
      <h2 className="text-lg font-bold mb-1">{t("Copilot Summary")}</h2>
      <p className="text-md text-gray-500 mb-5">
        {t("Here’s a summary of your copilot.")}
      </p>
      <div className="flex flex-col gap-2 ">
        <div className="py-2">
          <p className="block text-sm font-semibold text-gray-900 mb-1.5">
            {t("Copilot Name")}
          </p>
          <p className="mt-1.5 text-xs text-gray-500">
            {copilotData.name || t("Private Jet Operators")}
          </p>
        </div>
        <div className="py-2">
          <p className="block text-sm font-semibold text-gray-900 mb-1.5">
            {t("Description")}
          </p>
          <p className="mt-1.5 text-xs text-gray-500">
            {copilotData.description ||
              t("Book more appointments and generate qualified leads")}
          </p>
        </div>
        <div className="py-2">
          <p className="block text-sm font-semibold text-gray-900 mb-1.5">
            {t("Goal")}
          </p>
          <p className="mt-1.5 text-xs text-gray-500">
            {copilotData.goal ||
              t("Book more appointments and generate qualified leads")}
          </p>
        </div>
        <div className="p-4 mt-5 border border-primary flex gap-2 bg-primary/5 rounded-xl">
          <Shield size={24} className="text-primary" />
          <p className=" text-xs text-gray-700">
            {t("You can edit all settings later at any time.")}
          </p>
        </div>
      </div>

      {/* Draft status card */}
      {draftId && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 mt-5">
          <p className="text-xs font-medium text-gray-900 mb-0.5">
            {isRelaunch ? t("Paused while editing") : t("Draft saved")}
          </p>
          <p className="text-xs text-gray-400">
            {isRelaunch
              ? t("Your changes are saved. Re-launch to start sending again.")
              : t("Your progress is saved. Come back anytime to finish.")}
          </p>
        </div>
      )}
    </div>
  );
}

export default CopilotSummary;
