import { Lock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

function CopilotFooter() {
  const { t } = useI18n();
  return (
    <div className="mt-6 bg-primary-light border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Lock size={16} className="text-primary shrink-0" />
        <p className="text-xs text-gray-700">
          {t(
            "Your data is encrypted and secure. We only use your email account to send emails on your behalf.",
          )}
        </p>
      </div>
      <Link
        href="https://emailcopilot.io/privacy"
        target="_blank"
        className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors whitespace-nowrap ml-4"
      >
        {t("Learn more")} <ExternalLink size={14} />
      </Link>
    </div>
  );
}

export default CopilotFooter;
