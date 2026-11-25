"use client";

import { RedirectToSignIn, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import api from "./api";
import { isDemoMutationBlocked } from "./demo/demo-storage";
import { translate, useI18n } from "./i18n";

export function ApiProvider({ children }: { children: React.ReactNode }) {
    const { t } = useI18n();
    const { getToken, isLoaded, isSignedIn, sessionId } = useAuth();
    const [authentication, setAuthentication] = useState<{
        getToken: typeof getToken;
        sessionId: string;
    } | null>(null);

    useEffect(() => {
        if (!isLoaded || !isSignedIn) return;

        const id = api.interceptors.request.use(
            async (config) => {
                const method = (config.method ?? "get").toLowerCase();
                if (
                    isDemoMutationBlocked() &&
                    !["get", "head", "options"].includes(method)
                ) {
                    return Promise.reject(
                        new Error(
                            translate(
                                "Demo mode is read only. Create your own item to start.",
                            ),
                        ),
                    );
                }

                const token = await getToken();
                if (!token) {
                    throw new Error("Your session has expired. Please sign in again.");
                }
                config.headers.Authorization = `Bearer ${token}`;
                return config;
            },
        );
        setAuthentication({ getToken, sessionId });

        return () => {
            api.interceptors.request.eject(id);
        };
    }, [getToken, isLoaded, isSignedIn, sessionId]);

    if (isLoaded && !isSignedIn) return <RedirectToSignIn />;

    // Descendants can fetch on mount, so install authentication first.
    if (!isLoaded || authentication?.getToken !== getToken || authentication?.sessionId !== sessionId) {
        return (
            <div className="flex h-screen items-center justify-center">
                <span className="text-sm text-gray-500">{t("Loading...")}</span>
            </div>
        );
    }

    return <>{children}</>;
}
