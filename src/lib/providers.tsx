"use client";

import { ReactNode, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApiProvider } from "@/lib/ApiProvider";
import GuardSubscriptionProvider from "./guardSubProvider";
import { DemoModeProvider } from "@/lib/demo/demo-mode";

const queryClient = new QueryClient();

export function DashboardProviders({ children }: { children: ReactNode }) {
    return (
        <ApiProvider>
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={null}>
                    <DemoModeProvider>
                        <GuardSubscriptionProvider>
                            {children}
                        </GuardSubscriptionProvider>
                    </DemoModeProvider>
                </Suspense>
            </QueryClientProvider>
        </ApiProvider>
    );
}
