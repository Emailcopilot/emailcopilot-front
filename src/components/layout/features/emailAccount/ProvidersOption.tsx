"use client";

import { CheckCircle, ChevronRight, Zap, Inbox, Loader2 } from "lucide-react";

import Image from "next/image";
import { useCopilotStore } from "@/store/copilotStore";
import { useEmailAccountStore } from "@/store/emailAccountStore";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";
import { useDemoMode } from "@/lib/demo/demo-mode";
interface ProvidersOptionProps {
  setShowOtherProviderPopUp: (show: boolean) => void;
  setSelectedProfileName: (name: string) => void;
  selectedProfileName: string;
  returnTo?: string;
}

function ProvidersOption({
  setShowOtherProviderPopUp,
  setSelectedProfileName,
  selectedProfileName,
  returnTo,
}: ProvidersOptionProps) {
  const { t } = useI18n();
  const { isDemo } = useDemoMode();
  const { oauthConnecting, oauthConnect } = useEmailAccountStore();
  const { updateCopilotData, copilotData } = useCopilotStore();
  const guardDemo = () => {
    if (!isDemo) return false;
    toast.info(t("Demo mode is read only. Create your own item to start."));
    return true;
  };
  return (
    <div>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {t("Connect your email account")}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {t("Choose the email account your copilot will use to send emails.")}
          </p>
        </div>

        {/* Recommended section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-800 mb-3">
            {t("Recommended")}
          </h3>

          <div data-tour="tour-step2-oauth" className="space-y-3">
            {/* Connect with Gmail - highlighted */}
            <button
              type="button"
              disabled={oauthConnecting}
              className={`w-full flex items-center cursor-pointer justify-between gap-4 p-4 rounded-xl border ${
                selectedProfileName === "gmail"
                  ? "border-primary bg-primary-light"
                  : "border-gray-200 hover:border-primary hover:bg-primary-light"
              } transition-colors text-left`}
              onClick={() => {
                if (guardDemo()) return;
                setSelectedProfileName("gmail");
                oauthConnect("gmail", returnTo);
              }}
            >
              <div className="flex items-center gap-4">
                <Image src="/gmail.svg" alt="Gmail" width={40} height={40} />
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-semibold text-sm text-gray-900">
                      {t("Connect with Gmail")}
                    </span>
                    <span className="flex items-center gap-1 text-[8px] font-medium text-success bg-success/5 px-2 py-0.5 rounded-full">
                      <CheckCircle size={8} /> {t("Recommended")}
                    </span>
                    <span className="flex items-center gap-1 text-[8px] font-medium text-primary bg-primary/5  px-2 py-0.5 rounded-full">
                      <Zap size={8} /> {t("Easy setup")}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {t("Connect your Gmail account with OAuth in a few clicks.")}
                  </p>
                </div>
              </div>
              {oauthConnecting && selectedProfileName === "gmail" ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <ChevronRight size={18} className="text-gray-400 shrink-0" />
              )}
            </button>

            {/* Connect with Outlook */}
            <button
              type="button"
              disabled={oauthConnecting}
              className={`w-full flex items-center cursor-pointer justify-between gap-4 p-4 rounded-xl border ${
                selectedProfileName === "outlook"
                  ? "border-primary bg-primary-light"
                  : "border-gray-200 hover:border-primary hover:bg-primary-light"
              } transition-colors text-left`}
              onClick={() => {
                if (guardDemo()) return;
                setSelectedProfileName("outlook");
                oauthConnect("outlook", returnTo);
              }}
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/outlook.svg"
                  alt="Outlook"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-semibold text-sm text-gray-900">
                      {t("Connect with Outlook")}
                    </span>
                    <span className="flex items-center gap-1 text-[8px] font-medium text-success bg-success/5 px-2 py-0.5 rounded-full">
                      <CheckCircle size={8} /> {t("Recommended")}
                    </span>
                    <span className="flex items-center gap-1 text-[8px] font-medium text-primary bg-primary/5  px-2 py-0.5 rounded-full">
                      <Zap size={8} /> {t("Easy setup")}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {t("Connect your Outlook account with OAuth in a few clicks.")}
                  </p>
                </div>
              </div>
              {oauthConnecting && selectedProfileName === "outlook" ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <ChevronRight size={18} className="text-gray-400 shrink-0" />
              )}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="relative py-1">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs font-semibold text-gray-800">
              {t("Other options")}
            </span>
          </div>
        </div>

        {/* Connect other provider */}
        <button
          type="button"
          data-tour="tour-step2-smtp"
          onClick={() => {
            if (guardDemo()) return;
            setShowOtherProviderPopUp(true);
            setSelectedProfileName("other");
          }}
          className={`w-full flex items-center cursor-pointer justify-between gap-4 p-4 rounded-xl border ${
            selectedProfileName === "other"
              ? "border-primary bg-primary-light"
              : "border-gray-200 hover:border-primary hover:bg-primary-light"
          } transition-colors text-left`}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200 shrink-0">
              <Inbox size={18} className="text-gray-500" />
            </div>
            <div>
              <span className="font-semibold text-sm text-gray-900">
                {t("Connect other email provider")}
              </span>
              <p className="text-xs text-gray-500 mt-1">
                {t("Use SMTP / IMAP to connect any email provider.")}
              </p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-400 shrink-0" />
        </button>
      </div>
    </div>
  );
}

export default ProvidersOption;
