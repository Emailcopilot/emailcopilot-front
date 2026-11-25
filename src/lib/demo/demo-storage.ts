"use client";

import { useSyncExternalStore } from "react";

const KEY_PREFIX = "emailcopilot:demo-pending:";
const CHANGE_EVENT = "emailcopilot:demo-pending-change";

let currentUserId: string | null = null;
let runtimeDemoActive = false;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function storageKey() {
  return currentUserId ? `${KEY_PREFIX}${currentUserId}` : null;
}

function readDemoPending() {
  if (typeof window === "undefined") return false;
  const key = storageKey();
  if (!key) return false;
  try {
    return window.localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function subscribe(listener: () => void) {
  if (typeof window === "undefined") return () => {};

  const onStorage = (event: StorageEvent) => {
    if (!event.key || event.key.startsWith(KEY_PREFIX)) notify();
  };
  const onCustom = () => notify();

  listeners.add(listener);
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, onCustom);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, onCustom);
  };
}

export function setDemoUserId(userId: string | null) {
  if (currentUserId === userId) return;
  currentUserId = userId;
  notify();
}

export function setDemoPending(pending: boolean) {
  if (typeof window !== "undefined") {
    const key = storageKey();
    if (key) {
      try {
        if (pending) {
          window.localStorage.setItem(key, "1");
        } else {
          window.localStorage.removeItem(key);
        }
      } catch {
        // Storage can be unavailable in private or restricted contexts.
      }
    }
  }

  if (!pending) setDemoRuntimeActive(false);
  notify();
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }
}

export function clearDemoPending() {
  setDemoPending(false);
}

export function useDemoPending() {
  return useSyncExternalStore(subscribe, readDemoPending, () => false);
}

export function setDemoRuntimeActive(active: boolean) {
  runtimeDemoActive = active;
}

export function isDemoMutationBlocked() {
  return runtimeDemoActive;
}
