"use client";

import { useMemo, useState } from "react";
import { Mail, Search } from "lucide-react";
import { BILLING_FAQS, BILLING_SUPPORT_EMAIL } from "@/lib/billingFaq";
import NoData from "../overview/NoData";
import FaqAccordionItem from "./FaqAccordionItem";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";

/** Searchable FAQ accordion plus the "Still have questions?" footer. */
/** Back link + title of the FAQ page (the page itself is a server component). */
export function BillingFaqHeader() {
  const { t } = useI18n();
  return (
    <>
      <Link
        href="/dashboard/billing"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
      >
        <ChevronLeft size={16} />
        {t("Back to billing")}
      </Link>

      <div className="mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          {t("Billing FAQ")}
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          {t(
            "Everything you need to know about payments, subscriptions and invoices.",
          )}
        </p>
      </div>
    </>
  );
}

export default function BillingFaqList() {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    if (!term) return BILLING_FAQS;

    return BILLING_FAQS.filter(
      (faq) =>
        t(faq.question).toLocaleLowerCase().includes(term) ||
        t(faq.answer).toLocaleLowerCase().includes(term),
    );
  }, [query, t]);

  return (
    <>
      <div className="relative max-w-md">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("Search billing questions...")}
          aria-label={t("Search billing questions")}
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:outline-primary focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="mt-8 space-y-3">
        {results.length === 0 ? (
          <NoData title={t("No questions match your search.")} />
        ) : (
          results.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              faq={faq}
              index={faq.id}
              isOpen={openId === faq.id}
              onToggle={() =>
                setOpenId((current) => (current === faq.id ? null : faq.id))
              }
            />
          ))
        )}

        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5">
              <Mail size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-base font-bold text-gray-900">
                {t("Still have questions?")}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {t(
                  "We're here to help. Contact our team and we'll get back to you as soon as possible.",
                )}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-1">
            <a
              href={`mailto:${BILLING_SUPPORT_EMAIL}`}
              className="btn-cta rounded-lg border border-transparent px-5 py-2 text-sm font-semibold text-white"
            >
              {t("Email us")}
            </a>
            <span className="text-xs font-medium text-gray-900">
              {BILLING_SUPPORT_EMAIL}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
