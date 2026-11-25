"use client";

import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";

import { useUser } from "@clerk/nextjs";

import DashboardHeader from "@/components/layout/DashboardHeader";
import DashboardContainer from "@/components/layout/DashboardContainer";
import EmailAccountsTable from "@/components/layout/features/emailAccount/EmailAccountTable";

import ProvidersOption from "@/components/layout/features/emailAccount/ProvidersOption";
import { useEmailAccountStore } from "@/store/emailAccountStore";
import OtherProviderPopUp from "@/components/ui/NewCopilot/StepTwo/OtherProviderPopUp";
import { useI18n } from "@/lib/i18n";
import { useDemoMode } from "@/lib/demo/demo-mode";
import { DEMO_EMAIL_ACCOUNTS } from "@/lib/demo/demo-data";

export default function EmailProfilesPage() {
  const {
    fetchAccounts,
    isLoading,
    accounts,
    showModal,
    setShowModal,
    currentAccount,
    setEditingAccount,
  } = useEmailAccountStore();
  const { t } = useI18n();
  const [showProvders, setShowProviders] = useState(false);

  const { user } = useUser();
  const { isDemo, exitDemo, clearDemoPending } = useDemoMode();

  useEffect(() => {
    if (isDemo) return;
    fetchAccounts();
  }, [fetchAccounts, isDemo]);

  useEffect(() => {
    if (isDemo) return;

    const checkNewParam = () => {
      const params = new URLSearchParams(window.location.search);
      const isNew = params.get("new") === "true";

      if (isNew) {
        setEditingAccount(null);
        setShowProviders(true);
      }
    };
    checkNewParam();
  }, [setEditingAccount, setShowModal, isDemo]);

  const displayAccounts = isDemo ? DEMO_EMAIL_ACCOUNTS : accounts;

  return (
    <DashboardContainer>
      <DashboardHeader
        title="Email Accounts"
        description="Manage the email accounts used for outreach."
        actionLabel="Add Email Account"
        onAction={() => {
          if (isDemo) {
            exitDemo();
            setShowProviders(true);
            return;
          }
          setShowProviders(true);
        }}
        showAction={!showProvders}
      />

      {isLoading ? (
        <div className="flex items-center justify-center h-48 text-gray-400">
          {t("Loading...")}
        </div>
      ) : showProvders ? (
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <ProvidersOption
            setShowOtherProviderPopUp={() => {
              setEditingAccount(null);
              setShowModal(true);
            }}
            setSelectedProfileName={() => {}}
            selectedProfileName=""
          />
          <button
            onClick={() => setShowProviders(false)}
            className="inline-flex items-center gap-2 mt-4 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft size={15} />
            {t("Go Back")}
          </button>
        </div>
      ) : (
        <EmailAccountsTable
          accounts={displayAccounts}
          onCreateNew={() => {
            if (isDemo) {
              exitDemo();
              setShowProviders(true);
              return;
            }
            setShowProviders(true);
          }}
          readOnly={isDemo}
        />
      )}

      {/* Modal */}

      {showModal && (
        <OtherProviderPopUp
          onClose={(saved) => {
            setShowModal(false);
            setEditingAccount(null);
            if (saved) {
              fetchAccounts();
              clearDemoPending();
            }
          }}
          editProfile={currentAccount || undefined}
        />
      )}
    </DashboardContainer>
  );
}
