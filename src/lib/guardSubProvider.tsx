"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useBilling } from "@/lib/useBilling";
import { useI18n } from "@/lib/i18n";

// Billing and everything nested under it (e.g. the FAQ) must stay reachable
// without a subscription. Otherwise users with no plan cannot read how billing
// works or choose a plan.
const BILLING_EXEMPT = ["/dashboard/billing"];

function isBillingExempt(pathname: string) {
    return BILLING_EXEMPT.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`),
    );
}

function Shell({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen items-center justify-center">
            {children}
        </div>
    );
}

export default function GuardSubscriptionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const { t } = useI18n();
    const {
        loading,
        hasActivePlan,
        limits,
        limitsError,
        refetchLimits,
        subscriptionLoading,
        subscriptionFetching,
        subscriptionError,
        retrySubscription,
    } = useBilling();

    useEffect(() => {
        if (subscriptionLoading || subscriptionError || loading) return;
        if (isBillingExempt(pathname)) return;

        if (limits && !hasActivePlan) {
            router.replace("/dashboard/billing?required=plan");
        }
    }, [
        subscriptionLoading,
        subscriptionError,
        loading,
        hasActivePlan,
        limits,
        pathname,
        router,
    ]);

    // Keep billing (including its FAQ) mounted even if the API is unavailable.
    // Unmounting a failed query's consumer can trigger another fetch on remount.
    if (isBillingExempt(pathname)) return <>{children}</>;

    if (subscriptionError) {
        return (
            <div className="flex h-screen items-center justify-center p-6">
                <div role="alert" className="text-center">
                    <p className="text-sm text-gray-700">
                        {t("We couldn't check your subscription. Please try again.")}
                    </p>
                    <button
                        type="button"
                        onClick={() => void retrySubscription()}
                        disabled={subscriptionFetching}
                        className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white disabled:opacity-50"
                    >
                        {subscriptionFetching ? t("Retrying…") : t("Try again")}
                    </button>
                </div>
            </div>
        );
    }

    // Avoid flashing protected content while checking.
    if (subscriptionLoading || loading) {
        return (
            <Shell>
                <span className="text-muted-foreground text-sm">{t("Loading...")}</span>
            </Shell>
        );
    }

    // A failed limits request must not look like "no plan": retry instead of
    // redirecting, otherwise a network blip traps the user on billing.
    if (!limits && limitsError) {
        return (
            <Shell>
                <div className="max-w-sm text-center">
                    <p className="text-sm font-medium text-gray-900">
                        {t("Couldn't load your plan")}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {limitsError}
                    </p>
                    <button
                        type="button"
                        onClick={() => refetchLimits()}
                        className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                    >
                        {t("Try again")}
                    </button>
                </div>
            </Shell>
        );
    }

    if (!limits || !hasActivePlan) {
        // A redirect is in flight (or the limits query has not produced a
        // result yet); keep the shell up instead of flashing the dashboard.
        return (
            <Shell>
                <span className="text-muted-foreground text-sm">
                    {t("Loading...")}
                </span>
            </Shell>
        );
    }

    return <>{children}</>;
}
