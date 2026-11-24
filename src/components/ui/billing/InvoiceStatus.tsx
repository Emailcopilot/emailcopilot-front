"use client";

import type { Invoice } from "@/lib/useBilling";
import { useI18n } from "@/lib/i18n";

interface InvoiceStatusProps {
  status: Invoice["status"];
}

function statusProps(status: Invoice["status"]): {
  label: string;
  className: string;
} {
  switch (status) {
    case "paid":
      return { label: "Paid", className: "bg-success/10 text-success" };
    case "pending":
      return { label: "Pending", className: "bg-warning/10 text-warning" };
    case "failed":
      return { label: "Failed", className: "bg-error/10 text-error" };
    default:
      return { label: status, className: "bg-gray-100 text-gray-500" };
  }
}

export default function InvoiceStatus({ status }: InvoiceStatusProps) {
  const { t } = useI18n();
  const { label, className } = statusProps(status);

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {t(label)}
    </span>
  );
}
