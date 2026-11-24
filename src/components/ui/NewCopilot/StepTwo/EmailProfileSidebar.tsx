"use client";

import React from "react";
import { ShieldCheck, Send, TrendingUp, Inbox } from "lucide-react";
import { useI18n } from "@/lib/i18n";

function EmailProfileSidebar() {
  const { t } = useI18n();
  return (
    <div className="w-full  ">
      <h3 className="font-bold text-sm text-gray-900 mb-4">
        {t("Why connect my email account?")}
      </h3>

      <div className="space-y-4">
        {/* Item 1 */}
        <div className="flex gap-3">
          <ShieldCheck size={24} className="text-primary/90 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              {t("1. Connect securely")}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {t(
                "Your account is securely connected via OAuth, so we never see or store your password.",
              )}
            </p>
          </div>
        </div>
        <hr className="border-gray-200" />
        {/* Item 2 */}
        <div className="flex gap-3">
          <Send size={24} className="text-primary/90 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              {t("2. Send from your own email address")}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {t("This helps recipients recognize and trust the sender.")}
            </p>
          </div>
        </div>
        <hr className="border-gray-200" />
        {/* Item 3 */}
        <div className="flex gap-3 ">
          <TrendingUp size={24} className="text-primary/90 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              {t("3. Built for deliverability")}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {t(
                "Gradual warmup and daily limits to protect your sender reputation.",
              )}
            </p>
          </div>
        </div>
        <hr className="border-gray-200" />
        {/* Item 4 */}
        <div className="flex gap-3">
          <Inbox size={24} className="text-primary/90 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              {t("4. Replies stay in your inbox")}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {t(
                "Replies go straight to your own inbox, so you can continue the conversation as usual.",
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailProfileSidebar;
