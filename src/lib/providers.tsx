"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApiProvider } from "@/lib/ApiProvider";
import GuardSubscriptionProvider from "./guardSubProvider";
import { SetupFeedbackProvider } from "./SetupFeedbackProvider";
import { I18nProvider } from "./i18n";

const queryClient = new QueryClient();

export function DashboardProviders({ children }: { children: ReactNode }) {
    return (
        <I18nProvider>
        <SetupFeedbackProvider>
            <ApiProvider>
                <QueryClientProvider client={queryClient}>
                    <GuardSubscriptionProvider>
                        {children}
                    </GuardSubscriptionProvider>
                </QueryClientProvider>
            </ApiProvider>
        </SetupFeedbackProvider>
        </I18nProvider>
    );
}
