"use client";

import React from "react";
import { Building2, Globe, Map, Users } from "lucide-react";
import { useCopilotStore } from "../../../../store/copilotStore";
import { useWizardTargetAudiences } from "@/lib/useWizardOptions";
import { useI18n } from "@/lib/i18n";

function TargetAudienceSummary() {
  const { copilotData } = useCopilotStore();
  const { t, locale } = useI18n();
  const { industries, countries, cities } = copilotData.targetProfile;
  const { data: targetAudiences = [] } = useWizardTargetAudiences();

  const linkedAudience = targetAudiences.find(
    (a) => String(a.id) === String(copilotData.targetAudienceId),
  );
  // Only show a size once the scraper has a real count. There is no reliable
  // estimate before the first run (a back-end estimate is planned).
  const realSize = linkedAudience?.resultsCount ?? 0;
  const hasSize = realSize > 0;
  const estimatedSize = realSize;
  let label = "";

  let colorClass = "text-gray-600 bg-gray-100";

  if (estimatedSize > 6000) {
    label = "Massive";
    colorClass = "text-success bg-success/5";
  } else if (estimatedSize > 4000) {
    label = "Large";
    colorClass = "text-success bg-success/5";
  } else if (estimatedSize > 1000) {
    label = "Healthy";
    colorClass = "text-amber-600 bg-amber-100";
  } else if (estimatedSize > 500) {
    label = "Moderate";
    colorClass = "text-orange-600 bg-orange-100";
  } else if (estimatedSize > 100) {
    label = "Limited";
    colorClass = "text-red-600 bg-red-100";
  }
  return (
    <div className="w-full ">
      <h3 className="font-bold text-sm text-gray-900">
        {t("Target Profile Summary")}
      </h3>
      <p className="text-xs text-gray-500 mt-1 mb-4">
        {t("This is who your copilot will reach.")}
      </p>

      <div className="space-y-5">
        {/* Industry */}
        <div className="flex gap-3 border-t border-gray-200 pt-3">
          <Building2 size={20} className="text-primary shrink-0 mt-1" />
          <div>
            <p className="text-xs font-semibold text-gray-900">{t("Industry")}</p>
            <p className="text-xs text-gray-500 mt-1">
              {industries.length > 0 ? industries.join(", ") : t("None selected")}
            </p>
          </div>
        </div>

        {/* Country */}
        <div className="flex gap-3 border-t border-gray-200 pt-3">
          <Globe size={20} className="text-primary shrink-0 mt-1" />
          <div>
            <p className="text-xs font-semibold text-gray-900">{t("Country")}</p>
            <p className="text-xs text-gray-500 mt-1">
              {countries.length > 0 ? countries.join(", ") : t("All")}
            </p>
          </div>
        </div>

        {/* Cities */}
        <div className="flex gap-3 border-t border-gray-200 pt-3">
          <Map size={20} className="text-primary shrink-0 mt-1" />
          <div>
            <p className="text-xs font-semibold text-gray-900">{t("Cities")}</p>
            <p className="text-xs text-gray-500 mt-1">
              {cities.length > 0 ? cities.join(", ") : t("All")}
            </p>
          </div>
        </div>

        {/* Est. audience size */}
        <div
          data-tour="tour-step3-size"
          className="flex gap-3 items-start border-t border-gray-200 pt-3"
        >
          <Users size={20} className="text-primary shrink-0 mt-1" />
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-900">
              {t("Est. audience size")}
            </p>
            <div className="flex  justify-between mt-1">
              {hasSize ? (
                <p className="text-xl font-bold text-gray-900">
                  {estimatedSize.toLocaleString(locale)}{" "}
                  <span className="text-xs font-normal text-gray-500">
                    {t("companies")}
                  </span>
                </p>
              ) : (
                <p className="text-xs text-gray-500">
                  {t("Calculated after the first run")}
                </p>
              )}
            </div>
          </div>
          {hasSize && label && (
            <span
              className={`text-[8px] font-semibold px-1 py-0.5 rounded-sm ${colorClass}`}
            >
              {t(label)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TargetAudienceSummary;
