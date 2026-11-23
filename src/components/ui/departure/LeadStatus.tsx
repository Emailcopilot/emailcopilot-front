"use client";
type LeadStatusType = "new" | "sent" | "replied" | "failed" | "suppressed";

const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  new: { bg: "#F5F7FF", text: "#2563EB" },
  sent: { bg: "#E3FCEF", text: "#1D8A68" },
  failed: { bg: "#FFF6F7", text: "#D9485F" },
  suppressed: { bg: "#FFF4E9", text: "#E97A1C" },
};

const DEFAULT_STYLE = { bg: "#F1F5F9", text: "#64748B" };

function LeadStatus({
  status,
  isSmall,
}: {
  status: string | LeadStatusType;
  isSmall?: boolean;
}) {
  const style = STATUS_STYLES[status] ?? DEFAULT_STYLE;

  return (
    <div
      className={`inline-flex w-fit items-center justify-center rounded-md font-medium capitalize ${
        isSmall ? "px-2 py-1 text-[10px]" : "px-3 py-2 text-[12px]"
      }`}
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      <span className="line-clamp-1">{status || "Sent"}</span>
    </div>
  );
}

export default LeadStatus;
