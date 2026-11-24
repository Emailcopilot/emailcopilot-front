"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import type { Invoice } from "@/lib/useBilling";
import { formatBillingDate, formatInvoiceNumber } from "@/lib/helpers";
import NoData from "../overview/NoData";
import InvoiceStatus from "./InvoiceStatus";
import { useI18n } from "@/lib/i18n";

const PREVIEW_COUNT = 3;

interface InvoicesCardProps {
  invoices: Invoice[];
  /** `amountDue` from `useBilling()` — formats cents as EUR. */
  formatAmount: (cents: number) => string;
}

export default function InvoicesCard({
  invoices,
  formatAmount,
}: InvoicesCardProps) {
  const { t, locale } = useI18n();
  const dateLocale = locale === "en" ? "en-US" : locale;
  const [showAll, setShowAll] = useState(false);

  const visibleInvoices = showAll ? invoices : invoices.slice(0, PREVIEW_COUNT);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="text-lg font-bold text-gray-900">{t("Invoices")}</h2>
      <p className="mt-1 text-sm text-gray-500">
        {t("View and download your past invoices.")}
      </p>

      {invoices.length === 0 ? (
        <div className="mt-5">
          <NoData title={t("No invoices yet.")} />
        </div>
      ) : (
        <>
          {/* Phones: compact list instead of the wide table */}
          <div className="mt-5 sm:hidden divide-y divide-gray-100 border-y border-gray-100">
            {visibleInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between gap-3 py-3"
              >
                <div className="min-w-0">
                  <div className="truncate text-sm text-gray-900">
                    {formatInvoiceNumber(invoice)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatBillingDate(invoice.paidAt || invoice.createdAt, dateLocale)}
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-sm font-medium text-gray-900">
                    {formatAmount(invoice.amount)}
                  </span>
                  <InvoiceStatus status={invoice.status} />
                  {invoice.downloadUrl && (
                    <a
                      href={invoice.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("Download invoice")}
                      className="text-primary transition-colors hover:text-primary-hover"
                    >
                      <Download size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 hidden sm:block overflow-x-auto">
            <table className="w-full min-w-xl">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-3 text-sm font-bold text-gray-900">
                    {t("Invoice")}
                  </th>
                  <th className="pb-3 text-sm font-bold text-gray-900">{t("Date")}</th>
                  <th className="pb-3 text-sm font-bold text-gray-900">
                    {t("Amount")}
                  </th>
                  <th className="pb-3 text-sm font-bold text-gray-900">
                    {t("Status")}
                  </th>
                  <th className="pb-3 text-sm font-bold text-gray-900">
                    {t("Download")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleInvoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-100">
                    <td className="py-4 text-sm text-gray-900">
                      {formatInvoiceNumber(invoice)}
                    </td>
                    <td className="py-4 text-sm text-gray-500">
                      {formatBillingDate(invoice.paidAt || invoice.createdAt, dateLocale)}
                    </td>
                    <td className="py-4 text-sm font-medium text-gray-900">
                      {formatAmount(invoice.amount)}
                    </td>
                    <td className="py-4">
                      <InvoiceStatus status={invoice.status} />
                    </td>
                    <td className="py-4">
                      {invoice.downloadUrl ? (
                        <a
                          href={invoice.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                        >
                          <Download size={16} />
                          {t("Download")}
                        </a>
                      ) : (
                        <span className="text-sm text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {invoices.length > PREVIEW_COUNT && (
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-50"
              >
                {showAll ? t("Show less") : t("View all invoices")}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
