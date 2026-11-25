import { formatDate } from "@/lib/helpers";
import TemplateActions from "./TemplateActions";
import type { Template } from "@/lib/types/templates";
import { useI18n } from "@/lib/i18n";

/** Plain-text preview of the (HTML) email body */
function bodyPreview(html?: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

interface TemplateRowProps {
  template: Template;
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  readOnly?: boolean;
}

// Reply tracking isn't implemented yet. Greyed out until it is; flip to true
// to show the real reply rate again (also in TemplateTable's header).
export const REPLY_RATE_LIVE = false;

/** Templates have no status of their own: show whether a copilot uses it. */
function UsageStatus({
  inUse,
  isSmall = false,
}: {
  inUse: boolean;
  isSmall?: boolean;
}) {
  const { t } = useI18n();
  return (
    <span
      className={`inline-flex w-fit shrink-0 items-center rounded-md font-medium whitespace-nowrap ${
        isSmall ? "text-[10px] px-2 py-1" : "text-[12px] px-3 py-2"
      }`}
      style={
        inUse
          ? { backgroundColor: "#E3FCEF", color: "#1D8A68" }
          : { backgroundColor: "#F1F5F9", color: "#64748B" }
      }
    >
      {inUse ? t("In use") : t("Not in use")}
    </span>
  );
}

export default function TemplateRow({
  template,
  onEdit,
  onDelete,
  onDuplicate,
  readOnly = false,
}: TemplateRowProps) {
  const { t, locale } = useI18n();
  const isUp = (template.trend ?? "up") === "up";
  const replyRate = template.replyRate ?? 0;
  const usedIn = template.usedIn ?? 0;
  // Every template is at least one email (one step); sequences come later.
  const steps = Math.max(
    1,
    Array.isArray(template.steps)
      ? template.steps.length
      : typeof template.steps === "number"
        ? template.steps
        : 0,
  );
  const lastUpdated = formatDate(
    template.updatedAt || template.createdAt || "",
    locale === "en" ? "en-US" : locale,
  );
  const body = bodyPreview(template.body);

  return (
    <>
      {/* Desktop Row */}
      <div
        className="hidden lg:grid items-center px-5 py-6 border-b border-[#E2E8F0] hover:bg-gray-50 transition-colors"
        style={{
          gridTemplateColumns: "1.5fr 2fr 0.5fr 1fr 1fr 0.8fr 0.7fr 0.5fr",
        }}
      >
        <span className="font-semibold truncate pr-4 text-sm text-[#0F172A]">
          {template.name}
        </span>

        <span
          className="truncate pr-4 text-sm text-[#59637C]"
          title={body || undefined}
        >
          {body || "—"}
        </span>

        <span className="text-sm text-[#0F172A]">{steps}</span>

        <span className="text-sm text-[#0F172A]">{lastUpdated}</span>

        <span className="text-sm text-[#0F172A]">
          {usedIn === 1
            ? t("1 copilot")
            : t("{count} copilots", { count: usedIn })}
        </span>

        {REPLY_RATE_LIVE ? (
          <span
            className="inline-flex items-center gap-1 text-sm"
            style={{
              color: replyRate === 0 ? "#59637C" : isUp ? "#1d8a68" : "#d9485f",
            }}
          >
            {replyRate}%
            {replyRate > 0 && (
              <span className="text-xs">{isUp ? "↑" : "↓"}</span>
            )}
          </span>
        ) : (
          <span
            className="text-xs text-gray-300"
            title={t("Reply rate isn't live yet")}
          >
            {t("Coming soon")}
          </span>
        )}

        <span>
          <UsageStatus inUse={usedIn > 0} />
        </span>

        <div className="flex items-center">
          {!readOnly && (
            <TemplateActions
              onEdit={onEdit}
              onDelete={onDelete}
              onDuplicate={onDuplicate}
            />
          )}
        </div>
      </div>

      {/* Mobile Row */}
      <div className="lg:hidden px-4 py-5 border-b border-[#E2E8F0] hover:bg-gray-50 transition-colors">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <span className="block font-semibold truncate text-sm text-[#0F172A] mb-1">
              {template.name}
            </span>
            <div className="flex items-center gap-3 text-xs text-[#59637C]">
              <span>
                {steps === 1
                  ? t("1 step")
                  : t("{count} steps", { count: steps })}
              </span>
              <span>{lastUpdated}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <UsageStatus inUse={usedIn > 0} isSmall />
            {!readOnly && (
              <TemplateActions
                onEdit={onEdit}
                onDelete={onDelete}
                onDuplicate={onDuplicate}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
